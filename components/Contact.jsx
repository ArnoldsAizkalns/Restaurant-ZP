import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { AiOutlineMail } from "react-icons/ai";
import { BsFillPersonLinesFill } from "react-icons/bs";
import {
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaLinkedinIn,
  FaSearchLocation,
} from "react-icons/fa";
import { HiOutlineChevronDoubleUp } from "react-icons/hi";
import ContactImg from "../public/assets/contact.jpg";

const Contact = () => {
  return (
    <div id="contact" className="w-full lg:h-screen">
      <div className="max-w-[1240px] m-auto px-2 py-16 w-full ">
        <p className="text-xl tracking-widest uppercase text-[#6a4e26]">
          Kontakts
        </p>
        <h2 className="py-4">Ka mūs atrast</h2>
        <div className="grid lg:grid-cols-5 gap-8">
          {/* left */}
          <div className="col-span-3 lg:col-span-2  w-full h-full shadow-lg shadow-gray-400 rounded-xl p-4">
            <div className="lg:p-4 h-full ">
              <div>
                <Image
                  className="rounded-xl hover:scale-105 ease-in duration-300"
                  src={ContactImg}
                  alt="/"
                />
              </div>
              <div>
                <h2 className="py-2">Administrators</h2>
                <p>12:00-21:00</p>
                <p>Jūrmalas gatve 80, Rīga</p>
                <div className="w-28">
                  <a href="tel:+37167403313">
                    <h3 className="w-36 font-sans hover:scale-105 duration-200">
                      +371 67403313
                    </h3>
                  </a>
                </div>
              </div>
              <div>
                <p className="uppercase pt-8">Sazinies ar mums</p>
                <div className="flex items-center justify-between py-4">
                  <a
                    href="https://www.instagram.com/zeltapakavs/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <div className="rounded-full shadow-lg shadow-gray-400 p-5 cursor-pointer hover:scale-110 ease-in duration-300">
                      <FaInstagram className="text-xl" />
                    </div>
                  </a>
                  <a
                    href="https://www.facebook.com/restorans.zeltapakavs"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <div className="rounded-full shadow-lg shadow-gray-400 p-5 cursor-pointer hover:scale-110 ease-in duration-300">
                      <FaFacebook className="text-xl" />
                    </div>
                  </a>

                  <Link href="https://www.google.com/search?q=zelta+pakavs&sxsrf=AB5stBidGmxDIp26rPWpTHQOig6b4nCzIA%3A1689666495182&ei=v0O2ZIHXCtiSxc8Pt9yt8Ag&oq=z&gs_lp=Egxnd3Mtd2l6LXNlcnAiAXoqAggAMgcQIxiKBRgnMgcQIxiKBRgnMgcQIxiKBRgnMhEQLhiDARivARjHARixAxiABDIREC4YgAQYsQMYgwEYxwEY0QMyCxAAGIAEGLEDGIMBMgsQABiABBixAxiDATILEAAYgAQYsQMYgwEyCxAAGIAEGLEDGIMBMgsQABiABBixAxiDAUj-BFAAWABwAHgBkAEAmAE9oAE9qgEBMbgBAcgBAPgBAeIDBBgAIEGIBgE&sclient=gws-wiz-serp">
                    <a>
                      <div className="rounded-full shadow-lg shadow-gray-400 p-5 cursor-pointer hover:scale-110 ease-in duration-300">
                        <FaSearchLocation className="text-xl" />
                      </div>
                    </a>
                  </Link>
                </div>
                <div className="pt-2 md:pt-6">
                  <p className="font-semibold">SIA "Zp Plus"</p> Reg. numurs:
                  40203214219 <br /> Pvn. numurs: LV40203214219 <br /> Adrese:
                  Jūrmalas gatve 80A, <br /> Rīga, LV-1029
                </div>
              </div>
            </div>
          </div>

          {/* right */}
          <div className="col-span-3 w-full h-auto shadow-lg shadow-gray-400 rounded-xl lg:p-4">
            <div className="p-4">
              <form
                action="https://getform.io/f/08ebcd37-f5b5-45be-8c13-714f011ce060"
                method="POST"
                encType="multipart/form-data"
              >
                <div className="grid md:grid-cols-2 gap-4 w-full py-2">
                  <div className="flex flex-col">
                    <label className="uppercase text-sm py-2">Name</label>
                    <input
                      className="border-2 bg-[#f8f1e7] rounded-lg p-3 flex border-gray-800"
                      type="text"
                      name="name"
                    />
                  </div>
                  <div className="flex flex-col">
                    <label className="uppercase text-sm py-2">
                      Phone Number
                    </label>
                    <input
                      className="border-2 bg-[#f8f1e7] rounded-lg p-3 flex border-gray-800"
                      type="text"
                      name="phone"
                    />
                  </div>
                </div>
                <div className="flex flex-col py-2">
                  <label className="uppercase text-sm py-2">Email</label>
                  <input
                    className="border-2 bg-[#f8f1e7] rounded-lg p-3 flex border-gray-800"
                    type="email"
                    name="email"
                  />
                </div>
                <div className="flex flex-col py-2">
                  <label className="uppercase text-sm py-2">Subject</label>
                  <input
                    className="border-2 bg-[#f8f1e7] rounded-lg p-3 flex border-gray-800"
                    type="text"
                    name="subject"
                  />
                </div>
                <div className="flex flex-col py-2">
                  <label className="uppercase text-sm py-2">Message</label>
                  <textarea
                    className="border-2 bg-[#f8f1e7] rounded-lg p-3 border-gray-800"
                    rows="10"
                    name="message"
                  ></textarea>
                </div>
                <button className="w-full p-4 mt-4">Send Message</button>
              </form>
            </div>
          </div>
        </div>
        <div className="flex justify-center py-12">
          <Link href="/">
            <a>
              <div className="rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-110 ease-in duration-300">
                <HiOutlineChevronDoubleUp
                  className="text-[#6a4e26]"
                  size={30}
                />
              </div>
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Contact;
