import React from "react";
import hero from "../public/assets/hero.jpg";
import Image from "next/image";

const strokeStyle = {
  TextStroke: "2px white",
  TextFillColor: "transparent",
};

function Hero() {
  return (
    <div className="w-full h-screen">
      <div
        style={{
          backgroundImage:
            'url("https://images.pexels.com/photos/3349638/pexels-photo-3349638.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2")',
          backgroundSize: "cover",
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          zIndex: -1,
          filter: "blur(10px)",
          filter: "blur(10px)",
          margin: 0,
          padding: 0,
          opacity: 0.8,
        }}
      ></div>
      <div
        style={{
          backgroundColor: "black",
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          zIndex: -1,
          margin: 0,
          padding: 0,
          opacity: 0.8,
        }}
      ></div>
      <div className="flex flex-col sm:flex-row w-full p-4 mt-16 gap-4 justify-center items-center">
        <div className="flex relative flex-row items-end justify-end gap-0 mr-8">
          <p
            className="hidden absolute top-0 left-0 md:flex h-full rotate-90 origin-[0_0] ml-auto mb-8 mr-0 text-white"
            style={strokeStyle}
          >
            Bibek Regmi
          </p>
          <Image
            className="object-cover"
            alt="cover"
            src={hero}
            width={400}
            height={400}
          />
        </div>

        <div className="flex flex-col">
          <h1 className="uppercase text-5xl tracking-widest text-white stroke-white stroke-2 fill-transparent">
            Bibek
          </h1>
          <h2 className="mb-8 uppercase tracking-wider text-white">Regmi</h2>
          <div className="flex flex-row w-full">
            <h3 className="bg-black text-white px-8 py-4">Frontend </h3>
            <h3 className="px-8 py-4 border-black border-2 ml-4 text-white">
              React{" "}
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
