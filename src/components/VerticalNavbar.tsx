import React from "react";
import Image from 'next/image';
import Logo from '@/icons/Group 2.png';
import AccessIcon from "@/icons/access.png"
import AuthorizedIcon from "@/icons/authorized.png"
import SealIcons from "@/icons/SealQuestion.png"
import ElementIcon from "@/icons/elements.png" 

interface VerticalNavbarProps {
  // Add any props if needed
}

const VerticalNavbar: React.FC<VerticalNavbarProps> = () => {
  return (
    <div
      id="verticalNavbar"
      className="bg-[#F9FBFC] md:flex md:flex-col lg:flex lg:flex-col w-[20%] md:visible lg:visible hidden    min-h-screen flex-shrink-0"
    >
      <aside className="flex-grow   pt-3 pl-10 mt-6 ml-5">
        <span>
          <Image src={Logo} alt="logo" className="w-36  pt-5 text-white" />
        </span>


        <nav className="w-full mt-10  ">
          <ul className=" w-full text-white list-none gap-6  mt-16  flex flex-col justify-center  ">
          <li className="">
      <span className="text-black no-underline font-leagueGothic  text-xl nav-item">
        <Image
          src={AccessIcon}
          alt="Home Icon"
          className="w-6 h-6 inline-block mr-2" // Adjust the size and margin as needed
        />
        Activations
      </span>
    </li>
    <li className="">
      <span className="text-black no-underline font-leagueGothic  text-xl nav-item">
        <Image
          src={AuthorizedIcon}
          alt="Home Icon"
          className="w-6 h-6 inline-block mr-2" // Adjust the size and margin as needed
        />
        NRF Keys
      </span>
    </li>
    <li className="">
      <span className="text-black no-underline font-leagueGothic  text-xl nav-item">
        <Image
          src={ElementIcon}
          alt="Home Icon"
          className="w-6 h-6 inline-block mr-2" // Adjust the size and margin as needed
        />
        Expire
      </span>
    </li>
    <li className="">
      <span className="text-black no-underline font-leagueGothic  text-xl nav-item">
        <Image
          src={SealIcons}
          alt="Home Icon"
          className="w-6 h-6 inline-block mr-2" // Adjust the size and margin as needed
        />
        Help and Support
      </span>
    </li>
           
          </ul>
        </nav>
      </aside>
    </div>
  );
}

export default VerticalNavbar;
