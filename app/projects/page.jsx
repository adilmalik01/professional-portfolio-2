"use client";

import React, { useState } from "react";
import { BsArrowUpRight, BsGithub } from "react-icons/bs";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import WorkSliderBtns from "@/components/WorkSliderBtns";

const projects = [
  {
    num: "01",
    category: "Fullstack",
    title: "Focus",
    description: "A productivity-boosting web app with sleek design and real-time features.",
    stack: [
      { name: "ReactJS" },
      { name: "Context API" },
      { name: "Tailwind" },
      { name: "ExpressJS" },
      { name: "NodeJs" },
      { name: "Socket.io" },
      { name: "MongoDB" }
    ],
    image: "/assets/projects/e-commerce.png",
    live: "https://e-commerce-web-app-delta.vercel.app/",
    github: "https://github.com/adilmalik01/E-commerce-Frontend",
  },
  {
    num: "02",
    category: "Frontend",
    title: "FakeStore",
    description: "An eCommerce app with product listings, cart, and checkout built using Next.js and TypeScript.",
    stack: [
      { name: "Next.js" },
      { name: "TypeScript" },
      { name: "shadcn/ui" },
      { name: "Context API" }
    ],
    image: "/assets/projects/fake-store.png",
    live: "https://fake-store-dynamic-routing-pmm1usc36-malik4.vercel.app/",
    github: "https://github.com/adilmalik01/fake-store-dynamicRouting",
  },
  {
    num: "03",
    category: "Frontend",
    title: "The Vehicle VIN",
    description: "A VIN lookup tool with Next.js, providing car details with a responsive design.",
    stack: [
      { name: "Next.js" },
      { name: "TypeScript" },
      { name: "shadcn/ui" }
    ],
    image: "/assets/projects/vin.png",
    live: "https://the-vehicle-vin.vercel.app/",
    github: "https://github.com/adilmalik01/the-vehicle-vin",
  },
  {
    num: "04",
    category: "Frontend",
    title: "Resume Builder",
    description: "A responsive app for building professional resumes using HTML, CSS, and TypeScript.",
    stack: [
      { name: "HTML" },
      { name: "CSS" },
      { name: "TypeScript" }
    ],
    image: "/assets/projects/resume.png",
    live: "https://resume-builder-malik4.vercel.app/",
    github: "https://github.com/adilmalik01/Resume-Builder",
  },
  {
    num: "05",
    category: "Fullstack",
    title: "Django Blogging Website",
    description: "A blogging platform with CRUD functionality and image uploads, built using Django.",
    stack: [
      { name: "Django" },
      { name: "SQLite" }
    ],
    image: "/assets/projects/django.png",
    live: "https://github.com/adilmalik01/django-firstApp",
    github: "https://github.com/adilmalik01/django-firstApp",
  },
  {
    num: "06",
    category: "Frontend",
    title: "REJOICE",
    description: "A responsive website with smooth animations powered by GSAP, built with HTML, CSS, and JavaScript.",
    stack: [
      { name: "HTML" },
      { name: "CSS" },
      { name: "JavaScript" },
      { name: "GSAP" }
    ],
    image: "/assets/projects/rejouice.png",
    live: "https://adilmalik01.github.io/REJOICE-WEBSITE/",
    github: "https://github.com/adilmalik01/REJOICE-WEBSITE",
  },
  {
    num: "07",
    category: "Frontend",
    title: "Adii Notes",
    description: "A note-taking app with CRUD and search functionality, built with HTML, CSS, JavaScript, and Bootstrap.",
    stack: [
      { name: "HTML" },
      { name: "CSS" },
      { name: "JavaScript" },
      { name: "Bootstrap" }
    ],
    image: "/assets/projects/adii-notes.png",
    live: "https://adilmalik01.github.io/Adii-Notes/",
    github: "https://github.com/adilmalik01/Adii-Notes",
  }
];


const Projects = () => {
  const [project, setProject] = useState(projects[0]);

  const handleSlideChange = (swiper) => {
    // get current slide index
    const currentIndex = swiper.activeIndex;
    // update project state based on current slide index
    setProject(projects[currentIndex]);
  };

  return (
    <motion.div
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
      className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0 xl:items-start"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row items-center xl:items-start justify-between xl:p-20 gap-[60px]">
          {/* text */}
          <div className="w-full max-w-[536px] xl:w-[400px] flex flex-col xl:justify-between order-2 xl:order-none">
            <div className="flex flex-col gap-[30px]">
              {/* outline num */}
              <div className="text-8xl leading-none font-extrabold text-transparent text-outline">
                {project.num}
              </div>
              <div className="flex flex-col gap-4">
                <h3 className="h3">{project.category} project</h3>
                <p className="p text-xl">{project.description}</p>
                <ul className="flex gap-2  flex-wrap">
                  {project.stack.map((item, index) => {
                    return (
                      <li
                        key={index}
                        className="text-sm xl:text-lg text-accent"
                      >
                        {item.name}
                        {index !== project.stack.length - 1 && ","}
                      </li>
                    );
                  })}
                </ul>
              </div>

              <div className="border border-white/20"></div>
              <div className="flex items-center gap-4">
                <Link
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsArrowUpRight className="text-white text-3xl group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Live project</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
                <Link
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsGithub className="text-white text-3xl group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Github repository</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
              </div>
            </div>
          </div>
          <div className="w-full max-w-[536px]">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              className="xl:h-[402px]"
              onSlideChange={handleSlideChange}
            >
              {projects.map((project, index) => {
                return (
                  <SwiperSlide key={index} className="w-full">
                    <div className="h-[302px] relative group flex justify-center items-center bg-pink-50/20">
                      <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10"></div>
                      <div className="relative w-full h-full">
                        <Image
                          src={project.image}
                          alt={project.title}
                          fill
                          sizes=""
                          className="object-cover"
                        />
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
              <WorkSliderBtns
                containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none"
                btnStyles="bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all"
              />
            </Swiper>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Projects;
