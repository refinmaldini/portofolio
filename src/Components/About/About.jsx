import React from "react";
import AboutImg from "../../assets/7358653-removebg-preview.png";
const About = () => {
  return (
    <div
      id="About"
      className="text-white md:flex overflow-hidden items-center md:flex-wrap md:justify-center bg-black shadow-xl mx-0 md:mx-20 bg-opacity-30 rounded-lg p-12"
    >
      <div>
        <h2 className="flex justify-center text-2xl md:text-4xl font-bold">
          About
        </h2>
        <div className="md:flex flex-wrap flex-col md:flex-row items-center">
          <img className="md:h-80" src={AboutImg} alt="About img" />

          <ul>
            <div className="flex gap-3 py-4">
              <span className="w-[600px]">
                <p className="text-xl md:text-md leading-tight">
                  Teknik Informatika, Universitas Komputer Indonesia memiliki
                  pengalaman magang selama 1 bulan sebagai Front End Web di
                  Diskominfo Bandung. Terlatih menggunakan PHP dan SQL Database.
                  Memiliki pengetahuan menggunakan React js, dan Node js. Dapat
                  bekerjasama dalam tim dan memiliki kemampuan komunikasi yang
                  baik.
                </p>
              </span>
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
