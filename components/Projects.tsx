//import { projects } from '@/app/data'
import React from "react";
import { HoverEffect } from "./ui/card-hover-effect";

const projects = [
  {
    title: "LKM Coaching",
    description: "A  static website for the client, LKM confidence coaching.",
    link: "https://lkmcoaching.com",
  },
  {
    title: "Request Management API",
    description:
      "An API backend using NestJS and the DB connectivity is done via MongoDB. \n Created endpoints for request creation, retrieval, status updates, and deletion.",
    link: "https://github.com/IrushiSalwathura/special-requests-management-api",
  },
  {
    title: "Request Management UI",
    description:
      "The frontend is designed using NextJS. \n The interfaces include two separate dashboards for Admins and users, Request creation form and request details page.",
    link: "https://github.com/IrushiSalwathura/special-requests-management-ui",
  },
  {
    title: "Art Cart",
    description:
      "A personal art portfolio designed for artbyirushi. This is an eCommerce site developed using React and React Context API.",
    link: "https://github.com/IrushiSalwathura/artbyirushi-cart",
  },
];

const Projects = () => {
  return (
    <div
      className="text-black items-center px-8 py-8 sm:py-16 xl:px-16 w-screen mx-auto relative z-10"
      id="projects"
    >
      <h2 className="text-center text-4xl font-bold">Recent Projects</h2>
      <HoverEffect items={projects} />
    </div>
  );
};

export default Projects;
