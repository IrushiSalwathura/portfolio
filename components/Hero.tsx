"use client";
import Image from "next/image";
import React from "react";
import { TypeAnimation } from "react-type-animation";

const Hero = () => {
  return (
    <>
      {/* <BackgroundGradientAnimation className='relative top-10 w-64 h-64'/> */}
      <div className="h-screen w-screen relative overflow-hidden flex flex-col md:flex-row items-center justify-center min-h-screen p-10">
        <div className="text-center md:w-1/2 md:text-left md:mb-0 mb-10">
          <h1 className="mb-4 text-4xl sm:text-5xl md:text-5xl lg:text-6xl font-extrabold">
            {/* <span className='text-transparent bg-clip-text bg-gradient-to-tr from-pink-300 to-rose-950'>Hello I'm{" "}</span> */}
            <span>Hello I&aposm </span>
            <br></br>
            <TypeAnimation
              sequence={[
                "Irushi",
                1000, // wait 1s before replacing the next
                "a Software Engineer",
                1000,
                "an Artist",
                1000,
              ]}
              wrapper="span"
              speed={50}
              style={{ color: "text-blue-500" }}
              repeat={Infinity}
            />
          </h1>
          <p className="text-black-200 text-sm md:text-base xl:text-lg">
            Detail-oriented professional with nearly 4 years of experience
            working as a Software Engineer. Eager to leverage technical
            expertise, hands-on experience and contribute to innovative
            projects.
          </p>
        </div>

        <div className="md:w-1/2 flex justify-center">
          <Image
            src="/irushi-1.png"
            alt={"A digital art of a personal photo"}
            width={800}
            height={800}
            className="w-[800px] sm:w-[500px] md:w-[600px] lg:w-[700px]"
          />
        </div>
      </div>
    </>
  );
};

export default Hero;
