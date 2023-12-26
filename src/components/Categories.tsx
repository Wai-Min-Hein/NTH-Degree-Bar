
import { getCategories } from "@/data/data";
import Image from "next/image";
import React, { useEffect } from "react";
import CategorySwiper from "./CategorySwiper";


const Categories = async () => {
  const categories = await getCategories();


  interface categoryInterface {
    id: number;
    name: string;
    image: string;
  }
  return (
    <div className="container mx-auto mt-8 ">
      <h1>Categories</h1>
        <CategorySwiper  categories ={categories } />


    





    </div>
  );
};

export default Categories;
