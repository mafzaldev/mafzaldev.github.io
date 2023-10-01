"use client";

import { fadeInAnimtionVariants } from "@/lib/utils";
import { motion } from "framer-motion";
import { useState } from "react";

import content from "@/lib/content.json";
import Heading from "../Heading";
import ProjectCard from "../ProjectCard";

const Projects = () => {
  const [showMore, setShowMore] = useState<boolean>(false);

  const toggleShowMore = () => {
    setShowMore(!showMore);
  };

  const displayedItems = showMore
    ? content.projects
    : content.projects.slice(0, 6);

  return (
    <section className="mt-16 w-full" id="projects">
      <Heading title="Projects" />
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-3 lg:grid-cols-3">
        {displayedItems.map((project: any, index: number) => (
          <ProjectCard
            key={index}
            index={index}
            title={project.title}
            description={project.description}
            image={project.image}
            external={project.external ?? ""}
            github={project.github ?? ""}
            tags={project.tags}
          />
        ))}
      </div>
      <motion.button
        variants={fadeInAnimtionVariants}
        initial="initial"
        whileInView="animate"
        viewport={{
          once: true,
        }}
        onClick={toggleShowMore}
        className="border-1 mx-auto mt-4 block w-fit rounded-lg border border-glass-light px-3 py-2 text-center transition-all duration-200 ease-in-out hover:bg-glass-dark hover:shadow-lg md:mt-8"
      >
        {showMore ? "Show Less" : "Show More"}
      </motion.button>
    </section>
  );
};

export default Projects;
