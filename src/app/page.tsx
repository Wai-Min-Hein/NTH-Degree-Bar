import React from "react";
import "./home.css";
import NavBar from "@/components/navBar";
import Categories from "@/components/Categories";
import CategorySwiper from "@/components/CategorySwiper";

const Home = async () => {
  return (
    <div className="">
      <div
        className={` bg-home1 bg-cover bg-center bg-no-repeat h-[95vh] relative home `}
      >
        <NavBar />
        <div className=" h-full w-full absolute top-0 left-0  z-10 bg-black opacity-70"></div>
        <div className="relative z-50 container mx-auto flex items-start justify-center flex-col mt-[20vh]">
          <h1 className="font-header text-3xl font-normal">
            Welcome to NTH Degree Bar
          </h1>
          <p className="w-2/5 font-para text-md tracking-normal leading-5 mt-2">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Obcaecati
            accusantium repudiandae vel odit.
          </p>
        </div>
      </div>
      

      <Categories/>
    </div>
  );
};

export default Home;
