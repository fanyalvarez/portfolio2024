import React from "react";
import { StackLeft } from "./Elements/StackLeft";
import { StackRight } from "./Elements/StackRight";

export const Experience = () => {
  return (
    <section className="bg-[rgb(240,249,255)] object-cover h-auto relative  pb-32">
      <h3>EXPERIENCE</h3>
      <div className="grid grid-cols-1 lg:grid-cols-2">
        <div className="text-center font-bold">
          <p className="sticky top-36 mt-10 text-7xl text-[#2a1d3f] drop-shadow">
           Un resumen de la experiencia que tengo hasta este momento.
          </p>
        </div>
        <div className="">
          <div className="bg-[url('/spiral1.avif')] bg-no-repeat bg-center py-28">
            <StackLeft title={'Counter Analyst '} description={"Fui analista de contabilidad  durante 7 annos en al cual realizaba contailidad en general ademas de los reportes mesuales, asi como los impuestos."} year={"2015-2022"}></StackLeft>
            <StackRight title={'Kodemia'} description={"Bootcamp fullstack, como proyecto final se presento una app de consultoria, con React, MUI, MongoDB, envebida Google meet y desplegado con AWS y Vercel."}  year={"2021-2022"}></StackRight>
            <StackLeft title={'Hackademy'} description={"Bootcamp Especializado en Frontend web con ReactJS en el cual lleve acabo un projecto de Registro de lugares con React, MUI y json-server simulando la base de datos."}  year={"2023-2024"}></StackLeft>
            <StackRight title={'Mentora (Padawan Master)'} description={"Soy mentora de JS y frontend con ReactJS ayudando a nuevos alumnos de Hackademy asi como dando sesiones de introducción a JS hasta asesorías."}  year={"2024-actual"}></StackRight>
            <StackLeft title={'Freelance'} description={"En este tiempo estoy trabajando como freenlace en algunos projectos con React, tanto modificaciones o mejoras en el proyecto o  nuevas implementaciones."}  year={"2023-actual"}></StackLeft>
          </div>
        </div>
      </div>
      {/* </div> */}
    </section>
  );
};

{
  /* <div>
<li> linea del tiempo</li>
<li>2021-2022 kodemia</li>
<li> 2022-2023 frelance</li>
<li> 2023 hackademy - espacializacion frontend</li>
<li> actual freelance - mentora en hackademy</li>
</div> */
}
