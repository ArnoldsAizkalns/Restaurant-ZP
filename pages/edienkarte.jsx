import Image from "next/image";
import React from "react";
import kombo from "../public/assets/projects/kombo.jpg";
import { RiRadioButtonFill } from "react-icons/ri";
import Link from "next/link";

const property = () => {
  return (
    <div className="w-full">
      <div className="w-screen h-[50vh] relative">
        <div className="absolute top-0 left-0 w-full h-[50vh] bg-black/50 z-10" />
        <Image
          className="absolute z-1"
          layout="fill"
          objectFit="cover"
          src={kombo}
          alt="/"
        />
        <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
          <h2 className="py-2">Ēdienkarte</h2>
          <h3>Mēs spēsim tevi pārsteigt</h3>
        </div>
      </div>

      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8">
        <div className="col-span-4">
          <h2>Izbaudi!</h2>
          <p className="pt-4">
            Mūsu ēdienkarte ir veidota, ņemot vērā tūkstošiem viesu vēlmes un
            jaunākās tendences. Mēs cenšamies apvienot klasisko slāvu virtuvi ar
            Austrumu un Eiropas virtuvi. Mūsu viesi bieži pārsteidzas, kā mums
            izdodas tik veiksmīgi apvienot tik dažādas kultūras virtuves, tas ir
            panākts ikdienas darbā un pastāvīgās kvalitātes kontroles rezultātā.
          </p>
          <a href="/Menu.pdf" target="_blank" rel="noreferrer">
            <button className="px-8 text-black normal-case py-2 mt-6 mr-8">
              Ēdienkarte
            </button>
          </a>
        </div>
        <div className="col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl py-4">
          <div className="p-2">
            <p className="text-center font-bold pb-2">Virtuves</p>
            <div className="grid grid-cols-3 md:grid-cols-1">
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Ukraiņu
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Itaļu
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Krievu
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Franču
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Austrumu
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Japaņu
              </p>
            </div>
          </div>
        </div>
        <Link href="/#projects">
          <p className="underline cursor-pointer">Back</p>
        </Link>
      </div>
    </div>
  );
};

export default property;
