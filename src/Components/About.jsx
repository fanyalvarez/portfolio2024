import React, { useEffect, useRef } from "react";
import VanillaTilt from "vanilla-tilt";

function Tilt(props) {
  const { options, ...rest } = props;
  const tilt = useRef(null);

  useEffect(() => {
    VanillaTilt.init(tilt.current, options);
  }, [options]);

  return <div ref={tilt} {...rest} />;
}

export const About = () => {
  const options = {
    speed: 1000,
    max: 30,
    glare: true,
    "max-glare": 0.6,
  };

  return (
    <section className="mt-20 h-auto">
      <h3>ABOUT</h3>

      <div className="flex flex-wrap justify-evenly">
        <div className=" w-[25rem] my-10 p-4 about-img">
          <Tilt className="box" options={options} />
        </div>
        <div className="w-[46rem] my-10 mx-10">
          <p className="leading-relaxed text-[1.5em] mb-20">
            Hola soy Fany, una apasionada desarrolladora web Frontend. Hace un
            tiempo, descubrí que el mundo del desarrollo es mi verdadera
            vocación, lo que me llevo a tomar la decisión de ingresar a un
            bootcamp con el objetivo de adquirir mas conocimiento del área.
            Desde entonces he estado involucrada en varios proyectos de
            maquetación, aplicando los conocimientos y habilidades que aprendi
            durante el programa teniendo un enfoque que se centra en crear
            paginas web intuitivas, visualmente atractivas, con la atención al
            detalle y estética.
          </p>
          <button className="bg-gradient-to-r from-[#a8abfa]  to-[#a8d2fa] w-36 py-3 rounded-lg">
            CV
          </button>
        </div>
      </div>
    </section>
  );
};
