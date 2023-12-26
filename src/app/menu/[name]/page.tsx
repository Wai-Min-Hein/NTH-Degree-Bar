"use client";
import React from "react";
import { useParams } from "next/navigation";
import { getMenu } from "@/data/data";
import MenuItem from "@/components/MenuItem";
import NavBar from "@/components/navBar";
import Footer from "@/components/footer";

const menuName =  () => {
  const params = useParams<{ name: string }>();

  const routeName = params?.name;


  return (
    <div className="">
      <NavBar/>
      <MenuItem routeName={routeName}/>
    </div>
  );
};

export default menuName;
