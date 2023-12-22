import React from "react";
import Image from "next/image";
import './home.css'

const Home = () => {
  return (
    <div
    className={` bg-home1 bg-cover bg-center bg-no-repeat h-[95vh] w-screen absolute top-0 left-0 z-[-1]`}>
      <div className=" h-[95vh] w-screen absolute top-0 left-0 z-[-1]  bg-black opacity-40"></div>
    </div>
  );
};

export default Home;
