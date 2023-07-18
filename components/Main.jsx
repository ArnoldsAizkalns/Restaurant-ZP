import Link from "next/link";
import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import { BsFillPersonLinesFill } from "react-icons/bs";
import {
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

const Main = () => {
  return (
    <div id="home" className="w-full h-screen text-center bg-main">
      <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center">
        <div>
          <p className="uppercase text-sm tracking-widest text-white">
            Ģimenes restorāns
          </p>
          <h1 className="py-4 text-white font-semibold">Zelta Pakavs</h1>

          <p className="py-4 text-white sm:max-w-[70%] m-auto">
            Laipni lūgti garšas pasaulē! Izbaudiet: plašu izvēli ar dažādu
            kultūru ēdieniem, gastronomijas garšu dažādību un restorāna
            atmosfēru
          </p>
          <div className="flex mt-10 items-center justify-between max-w-[330px] m-auto py-4">
            <a
              href="https://www.instagram.com/zeltapakavs/"
              target="_blank"
              rel="noreferrer"
            >
              <div className="rounded-full  shadow-md hover:shadow-lg shadow-white hover:shadow-white p-3 xl:p-5 cursor-pointer hover:scale-110 ease-in duration-300">
                <FaInstagram className="text-white xl:text-2xl text-lg" />
              </div>
            </a>
            <a
              href="https://www.facebook.com/restorans.zeltapakavs"
              target="_blank"
              rel="noreferrer"
            >
              <div className="rounded-full  shadow-md hover:shadow-lg shadow-white hover:shadow-white p-3 xl:p-5 cursor-pointer hover:scale-110 ease-in duration-300">
                <FaFacebook className="text-white xl:text-2xl text-lg" />
              </div>
            </a>
            <Link href="mailto:zeltapakavs@gmail.com">
              <div className="box rounded-full shadow-md hover:shadow-lg shadow-white hover:shadow-white p-3 xl:p-5 cursor-pointer hover:scale-110 ease-in duration-300">
                <AiOutlineMail className="text-white xl:text-2xl text-lg" />
              </div>
            </Link>
          </div>
          <div className="w-48 flex-co mx-auto pt-4">
            <p className="text-white">Jūrmalas gatve 80, Rīga</p>
            <a href="tel:+37167403313">
              <h3 className="w-48 hover:scale-105 text-white font-sans duration-200">
                +371 67403313
              </h3>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
