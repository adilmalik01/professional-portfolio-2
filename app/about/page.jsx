"use client";

import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaNodeJs,
  FaFigma,
  FaPython,
  FaSass,
} from "react-icons/fa";
import { SiTailwindcss, SiNextdotjs, SiDjango, SiPhp, SiReactrouter, SiMui, SiShadcnui, SiTypescript, SiMongodb, SiExpress, SiMysql, SiFirebase, SiRedux, SiJira, SiPython, SiVsco, SiGit, SiGithub, SiVisualstudio } from "react-icons/si";
import { motion } from "framer-motion";

// components
import { ScrollArea } from "@/components/ui/scroll-area";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const about = {
  title: "About me",
  description:
    "As a creative problem solver, I excel at turning ideas into efficient software solutions. I am responsible for building and maintaining websites and web applications.",
  info: [
    {
      fieldName: "Name",
      fieldValue: "Adil Malik",
    },
    {
      fieldName: "Experience",
      fieldValue: "1 Year",
    },
    {
      fieldName: "Phone",
      fieldValue: "+92 3001355235",
    },

    {
      fieldName: "Email",
      fieldValue: "malikadil5679@gmail.com",
    },
    {
      fieldName: "Nationality",
      fieldValue: "Pakistan",
    },
    {
      fieldName: "Languages",
      fieldValue: "English, Urdu",
    },
  ],
};

const skills = {
  title: "My skills",
  description:
    "Adept in the React Ecosystem, I enjoy working with modern tools to create fast, responsive, and visually engaging web experiences.",
  skillList: [
    {
      icon: <FaHtml5 />,
      name: "html 5",
    },
    {
      icon: <FaCss3 />,
      name: "css 3",
    },
    {
      icon: <FaSass />,
      name: "css 3",
    },
    {
      icon: <FaJs />,
      name: "javascript",
    },
    {
      icon: <FaReact />,
      name: "react.js",
    },
    {
      icon: <SiNextdotjs />,
      name: "next.js",
    },
    {
      icon: <SiTypescript />,
      name: "typescript",
    },
    {
      icon: <SiTailwindcss />,
      name: "tailwind.css",
    },
    {
      icon: <FaNodeJs />,
      name: "node.js",
    },
    {
      icon: <FaFigma />,
      name: "figma",
    },
    {
      icon: <FaPython />,
      name: "python",
    },
    {
      icon: <SiPhp />,
      name: "PHP",
    },
    {
      icon: <SiPython />,
      name: "Python",
    },
    {
      icon: <SiReactrouter />,
      name: "React Router Dom",
    },
    {
      icon: <SiMui />,
      name: "MUI",
    },
    {
      icon: <SiShadcnui />,
      name: "Shadcn UI",
    },
    {
      icon: <SiMongodb />,
      name: "Mongodb",
    },
    {
      icon: <SiExpress />,
      name: "express.js",
    },
    {
      icon: <SiMysql />,
      name: "Mysql",
    },
    {
      icon: <SiFirebase />,
      name: "Firebase",
    },
    {
      icon: < SiRedux />,
      name: "Redux",
    },
    {
      icon: <SiMongodb />,
      name: "Mongodb",
    },
    {
      icon: <SiJira />,
      name: "Jira",
    },
    {
      icon: <SiVisualstudio />,
      name: "Vs Code",
    },
    {
      icon: <SiGit />,
      name: "Git",
    },
    {
      icon: <SiGithub />,
      name: "Github",
    },
  ],
};

// experience data
const experience = {
  icon: "/assets/about/badge.svg",
  title: "My experience",
  description:
    "Proficient in frontend and backend technologies, collaborating with teams through effective communication and shared expertise.",
  items: [
    {
      position: "Frontend Develpor",
      duration: "2023",
      description: "CodAlpha",
    },
    {
      position: "Mern Stack Develpor",
      duration: "2024",
      description: "Open Voice Hub",
    },
    {
      position: "Full Stack Develpor",
      duration: "2024",
      description: "Techglance",
    },
    {
      position: "Full Stack Teaching",
      duration: "2024",
      description: "Aptech",
    },
  ],
};

// education data
const education = {
  icon: "/assets/about/cap.svg",
  title: "My education",
  description:
    "Solid academic foundation in computer science, enhanced by specialized certifications.",
  items: [
    {
      institution: "KHRES",
      degree: "Web Development Certificate",
      duration: "2024",
    },
    {
      institution: "Jammia Millia Pilot School",
      degree: "Computer Science",
      duration: "2022",
    },

  ],
};

const About = () => {
  return (
    <motion.div
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
      className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto xl:h-[564px]">
        <Tabs
          defaultValue="about"
          className="flex flex-col xl:flex-row gap-[60px]"
        >
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="about">About</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
          </TabsList>

          {/* content */}
          <div className="w-full min-h-[25vh]">
            {/* about */}
            <TabsContent value="about" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <div className="flex flex-col gap-4">
                  <h2 className="h2">{about.title}</h2>
                  <p className="p max-w-[600px] mx-auto xl:mx-0">
                    {about.description}
                  </p>
                </div>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-[30px]">
                    {about.info.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-secondary h-[100px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start"
                        >
                          <span className="text-accent uppercase">
                            {item.fieldName}
                          </span>
                          <h3 className="text-xl text-center lg:text-left">
                            {item.fieldValue}
                          </h3>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/* skills */}
            <TabsContent value="skills" className="w-full h-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <div className="flex flex-col gap-4">
                  <h2 className="h2">{skills.title}</h2>
                  <p className="p max-w-[600px] mx-auto xl:mx-0">
                    {skills.description}
                  </p>
                </div>
                <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]">
                  {skills.skillList.map((skill, index) => {
                    return (
                      <li key={index}>
                        <TooltipProvider delayDuration={100}>
                          <Tooltip>
                            <TooltipTrigger className="w-full h-[150px] bg-secondary rounded-xl flex justify-center items-center group">
                              <div className="text-6xl group-hover:text-accent transition-all duration-300">
                                {skill.icon}
                              </div>
                            </TooltipTrigger>
                            <TooltipContent>
                              <p className="capitalize">{skill.name}</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>

            {/* experience */}
            <TabsContent value="experience" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <div className="flex flex-col gap-4">
                  <h2 className="h2">{experience.title}</h2>
                  <p className="p max-w-[600px] mx-auto xl:mx-0">
                    {experience.description}
                  </p>
                </div>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {experience.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-secondary h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start"
                        >
                          <span className="text-accent">{item.duration}</span>
                          <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                            {item.position}
                          </h3>
                          <div className="flex items-center gap-3">
                            {/* dot */}
                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                            <p className="text-white/60">{item.description}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/* education */}
            <TabsContent value="education" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <div className="flex flex-col gap-4">
                  <h2 className="h2">{education.title}</h2>
                  <p className="p max-w-[600px] mx-auto xl:mx-0">
                    {education.description}
                  </p>
                </div>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {education.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-secondary h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start"
                        >
                          <span className="text-accent">{item.duration}</span>
                          <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                            {item.degree}
                          </h3>
                          <div className="flex items-center gap-3">
                            {/* dot */}
                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                            <p className="text-white/60">{item.institution}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default About;
