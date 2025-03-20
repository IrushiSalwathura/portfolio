"use client";
import React, { useState, useTransition } from "react";
import TabButton from "./TabButton";
import Image from "next/image";

const TAB_DATA = [
  {
    title: "Experience",
    id: "experience",
    content: (
      <ul className="text-sm md:text-base xl:text-lg">
        <li>3.5+ years as a Software Engineer at Terias Consulting Pvt Ltd</li>
      </ul>
    ),
  },
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="text-sm md:text-base xl:text-lg">
        <li>HTML, CSS, JavaScript, React, NextJS</li>
        <li>Java, NestJS, MongoDB, SQL</li>
        <li>NodeJs</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="text-sm md:text-base xl:text-lg">
        <li>Curtin University(SLIIT)</li>
        <li>Primary & Secondary Education - Southlands College Galle</li>
      </ul>
    ),
  },
];

const About = () => {
  const [tab, setTab] = useState("experience");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id: string) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="h-full text-black" id="about">
      <div className="px-4 py-8 gap-8 items-center sm:py-16 flex flex-col sm:flex-row xl:px-16 xl:gap-16">
        <div className="mt-4 md:mt-0 text-left h-full flex-1 sm:order-2">
          <h2 className="text-4xl font-bold mb-4">About Me</h2>
          <p className="text-sm md:text-base xl:text-lg">
            I am a full stack web developer with a passion for creating
            interactive and responsive web applications. I have experience
            working with JavaScript, React, Node. js, HTML, CSS, and Git. I am a
            quick learner and I am always looking to expand my knowledge and
            skill set. I am a team player and I am excited to work with others
            to create amazing applications.
          </p>
          {isPending && <p>Loading...</p>}
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("experience")}
              active={tab === "experience"}
            >
              {" "}
              Experience{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              Skills{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Education{" "}
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab)?.content}
          </div>
        </div>
        <div className="flex-1 sm:order-1">
          <Image
            src="/irushi-SE-1.png"
            alt={"About section image"}
            width={900}
            height={900}
            className="w-[500px] sm:w-[500px] md:w-[600px] lg:w-[700px]"
          />
        </div>
      </div>
    </section>
  );
};

export default About;
