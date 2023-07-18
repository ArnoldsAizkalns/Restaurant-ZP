import Image from "next/image";
import React from "react";
import pirts from "../public/assets/pirts.jpg";
import { RiRadioButtonFill } from "react-icons/ri";
import Link from "next/link";

const crypto = () => {
  return (
    <div className="w-full">
      <div className="w-screen h-[60vh] relative">
        <div className="absolute top-0 left-0 w-full h-[60vh] bg-black/40 z-10" />
        <Image
          className="absolute z-1"
          layout="fill"
          objectFit="cover"
          src={pirts}
          alt="/"
        />
        <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
          <h2 className="py-2">Krievu Pirts</h2>
          <h3>Baseins/Guļamīstabas/Terase</h3>
        </div>
      </div>

      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8">
        <div className="col-span-4">
          <h2>Apraksts</h2>
          <p className="pt-4">
            Mūsu mājīgais pirtskurorts ir piemērots visiem viesiem, kuri novērtē
            un mīl īsto krievu pirti. Mums ir plaša pirtiņa ar speciālu galdu
            pirtssesijām, temperatūru pirtī un baseinā var pasūtīt pēc jūsu
            priekšlikumiem. Mums ir banketu zāle ar 20 vietām, ērtu dīvānu un
            televizoru, liela terase un grils jūsu bbq pasākumiem. Turklāt ir
            iespēja pasūtīt ēdienu tieši no restorāna.
          </p>
          <p className="pt-4 font-semibold">Tālrunis rezervācijai:</p>
          <a href="tel: +37125997750">
            <p className="text-lg font-sans hover:text-gray-500">
              +371 25997750 - Sergejs
            </p>
          </a>
        </div>
        <div className="col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl py-4">
          <div className="p-2">
            <p className="text-center font-bold pb-2">Pakalpojumi</p>
            <div className="grid grid-cols-3 md:grid-cols-1 ">
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Krievu Pirts
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Baseins
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Banketu Zale
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Guļamīstabas
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Terase
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Autostavvieta
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

export default crypto;
