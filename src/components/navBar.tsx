import Image from "next/image";
import React from "react";
import logoWhite from "../../public/image/logoWhite.png";
import Link from "next/link";

const NavBar = () => {
  return (
    <nav className="flex items-center justify-between py-4 container mx-auto relative z-50">
      <Link href={'/'}>
      
      <div className=" w-16 h-12 relative">
        <Image
          src={logoWhite}
          alt="NTH Logo"
          width={64}
          height={20}
          className="cursor-pointer relative max-w-16"
        />
      </div>

      </Link>


      <ul className="flex items-center flex-1 justify-end gap-6">
        <Link href={"/"}>
          <li className="font-header text-lg font-normal">Home</li>
        </Link>

        <Link href={"/news"}>
          <li className="font-header text-lg font-normal">Events</li>
        </Link>

        <Link href={"/contact"}>
          <li className="font-header text-lg font-normal">Contact</li>
        </Link>
      </ul>
    </nav>
  );
};

export default NavBar;
