import React from "react";
import { Card } from "./Elements/Card";

export const Projects = () => {


  return (
    <section className="my-20">
      <h3>PROJECTS</h3>

      {/* <div className="flex gap-4 justify-center flex-wrap mt-20 relative bg-red-500 w-screen"> */}
      <div className=" relative flex flex-wrap gap-10 justify-center mt-20">

        <Card img={'./imgs/tasks.png'} title={'React Expenses'} url={'https://react-expenses-steel.vercel.app/'} info={''}>{<>
        <img src="./svg/react.svg" alt="" id="svg-card"/>
        <img src="./svg/tailwind.svg" alt="" id="svg-card"/>
        </>}</Card>

        <Card img={'./imgs/lugares.png'} title={'Registro de Lugares'} url={'https://registerplaces.onrender.com/'} info={'  '}>{<>
        <img src="./svg/react.svg" alt="" id="svg-card"/>
        <img src="./svg/mui.svg" alt="" id="svg-card"/>
        </>}</Card>
        <Card img={'./imgs/bodyshop.png'} title={'Clone Bodyshop App'} url={'https://the-body-shop.vercel.app/'} info={'  '}>{<>
        <img src="./svg/html.svg" alt="" id="svg-card"/>
        <img src="./svg/css.svg" alt="" id="svg-card"/>
        <img src="./svg/js.svg" alt="" id="svg-card"/>
        </>}</Card>
        <Card img={'./imgs/50days.png'} title={'Chanllenge 50 days HTML, CSS & JS'} url={'https://50projectsin50days.vercel.app/'} info={'  '}>{<>
        <img src="./svg/html.svg" alt="" id="svg-card"/>
        <img src="./svg/css.svg" alt="" id="svg-card"/>
        <img src="./svg/js.svg" alt="" id="svg-card"/>
        </>}</Card> 
      </div>
    </section>
  );
};
