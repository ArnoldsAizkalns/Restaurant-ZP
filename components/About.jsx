import React from "react";
import Image from "next/image";
import Link from "next/link";
import AboutImg from "../public/assets/Cūkgaļas ribiņas.jpg";

const About = () => {
  return (
    <div id="about" className="w-full md:h-screen p-2 flex items-center py-16">
      <div className="max-w-[1240px] h-auto m-auto md:grid grid-cols-3 gap-8">
        <div className="col-span-2">
          <p className="uppercase text-xl tracking-widest text-[#6a4e26]">
            Par mums
          </p>
          <h2 className="py-4">Kas mēs esam</h2>
          <p className="py-2 text-gray-600">
            Restorāns Zelta Pakavs nav tikai vienkāršs restorāns - tas ir stāsts
            un ģimene. 1999. gadā viss sākās ar mazu kafejnīcu bijušā fermas
            teritorijā. Mēs attīstījāmies un paplašinājāmies kā atsevišķa
            mazpilsēta ar savām likumībām un kārtību, mūsu galvenās noteikumu ir
            būt vienai lielai ģimenei ar mūsu viesiem un darbiniekiem. Lai kāds
            arī teiktu, ka tas nav pareizi, bet tas ir mūsu ceļš! Mēs vienmēr
            esam gatavi noklausīties, pabarot un izdzert ikvienu klīdušo viesi,
            kas atnāk pie mums. Laiks rit, un mēs neuztraucamies uz vietas,
            katru gadu sekojam līdzi gastronomijas tendencēm un atjaunojam mūsu
            ēdienkarti atbilstoši sabiedrības vajadzībām un trendiem.
          </p>
          <p> Pievienojies mūsu ģimenei, Zelta Pakavs!</p>
        </div>
        <div className="w-full xl:min-w-[50vh] h-auto m-auto shadow-lg shadow-gray-400 rounded-xl flex items-center justify-center p-2 hover:scale-105 ease-in duration-300">
          <Image src={AboutImg} className="rounded-xl" alt="/" />
        </div>
      </div>
    </div>
  );
};

export default About;
