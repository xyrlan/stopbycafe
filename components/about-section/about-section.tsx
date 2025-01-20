import React from "react";
import Image from "next/image";

import AboutText from "./about-text";
import AboutTitle from "./about-title";

const AboutSection = () => {
  const aboutPics = [
    {
      alt: "Stop by cafe",
      src: "/about/1.jpg",
    },
    {
      alt: "Stop by cafe",
      src: "/about/2.jpg",
    },
    {
      alt: "Stop by cafe",
      src: "/about/3.jpg",
    },
    {
      alt: "Stop by cafe",
      src: "/about/4.jpg",
    },
  ];

  return (
    <section
      className="overflow-hidden py-12 md:py-24 px-6 bg-secondary-50"
      id="about"
    >
      <div className="sm:max-w-7xl mx-auto">
        <div className="flex flex-row max-md:flex-col md:gap-4 md:items-center">
          <AboutTitle />
          <div className="px-4 max-w-md text-primary">
            <p className="tracking-wider">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quo sed
              nam quos ducimus. Maxime dignissimos adipisci nulla voluptatum.
            </p>
          </div>
        </div>

        <div className={"my-10"}>
          <h2 className={"text-6xl font-extrabold text-primary"}>
            Good things come to those
            <br />
            <span className="text-default"> who bake </span> for others.
          </h2>
        </div>

        <div className="flex md:flex-row flex-col justify-beetween gap-10 md:gap-20">
          <div className="grid grid-cols-2 gap-2  overflow-hidden">
            {aboutPics.map((pic, index) => (
              <div
                key={index}
                className="flex flex-col justify-center items-center overflow-hidden border-8 border-background border-opacity-40"
              >
                <Image
                  alt={pic.alt}
                  className="hover:scale-110 transition-all duration-[4000ms] "
                  height={300}
                  src={pic.src}
                  width={400}
                />
              </div>
            ))}
          </div>
          <AboutText />
        </div>
        {/* <div className='grid grid-flow-col gap-4 '>
          {aboutPics.map((pic, index) => (
            <div key={index} className='flex flex-col justify-center items-center'>
              <Image src={pic.src} alt={pic.alt} width={300} height={400} className='hover:translate-x-0.5 hover:-translate-y-0.5 transition-transform duration-300 ease-in-out' />
            </div>
          ))}
        </div> */}
      </div>
    </section>
  );
};

export default AboutSection;
