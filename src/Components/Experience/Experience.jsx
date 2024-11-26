import React from "react";
import { FaCss3, FaFigma, FaHtml5, FaJs, FaReact } from "react-icons/fa";
import { SiRedis } from "react-icons/si";
import { SiMysql } from "react-icons/si";
import { SiTailwindcss } from "react-icons/si";
import telkom from "../../assets/pngegg.png";
import diskom from "../../assets/DISKOMINFO-1-1024x335.png";
const Experience = () => {
  return (
    <div id="Experience" className="p-10 md:p-24">
      <h1 className="text-2xl md:text-4xl text-white font-bold">Experience</h1>
      <div className="flex flex-wrap items-center justify-around">
        <div className="flex flex-wrap md:w-2/5 gap-8 md:p-12 py-10">
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <FaHtml5 color="#E34F26" size={50} />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <FaCss3 color="#1572B6" size={50} />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <FaReact color="#61DAFB" size={50} />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <FaJs color="#F7DF1E" size={50} />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <FaFigma color="#F24E1E" size={50} />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <SiMysql color="#00758F" size={50} />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <SiRedis color="#FF4438" size={50} />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <SiTailwindcss color="#61DAFB" size={50} />
          </span>
        </div>
        <div>
          <div className="flex gap-10 bg-slate-950 bg-opacity-45 mt-4 rounded-lg p-4 items-center">
            <img className="h-10 w-11 bg-white" src={telkom} alt="" />
            <span className="text-white">
              <h2 className="leading-tight">Staff IT, Telkom Indonesia</h2>
              <p className="text-sm leading-tight font-thin">
                Jan 2018 - Mar 2018
              </p>
              <ul className="text-sm p-2">
                <li>
                  - Melakukan instalasi operation sistem pada laptop atau
                  komputer
                </li>
                <li>- Menyambungkan koneksi WIFI</li>
                <li>- Backup data </li>
                <li>- Menyambungkan printer</li>
              </ul>
            </span>
          </div>
          <div className="flex gap-10 bg-slate-950 bg-opacity-45 mt-4 rounded-lg  p-4 items-center">
            <img className="h-10 w-11 bg-white" src={diskom} alt="" />
            <span className="text-white">
              <h2 className="leading-tight">
                Front End Web, Diskominfo Bandung
              </h2>
              <p className="text-sm leading-tight font-thin">
                Okt 2022 - Nov 2022
              </p>
              <ul className="text-sm p-2">
                <li>
                  - Mengembangkan dan mendesain Ul untuk situs web publik
                  terbaru Diskominfo Jawa Barat
                </li>
                <li>
                  - Merancang formulir pengajuan atau tahapan pelanggan yang
                  berbeda yang memangkas waktu pemrosesan
                </li>
              </ul>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
