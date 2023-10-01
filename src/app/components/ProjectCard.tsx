"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const fadeInAnimtionVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: index * 0.05,
    },
  }),
};

interface ProjectCardProps {
  title: string;
  index: number;
  description: string;
  image: string;
  external: string;
  github: string;
  tags: string[];
}

const ProjectCard = ({
  title,
  index,
  description,
  image,
  external,
  github,
  tags,
}: ProjectCardProps) => {
  return (
    <motion.div
      variants={fadeInAnimtionVariants}
      initial="initial"
      whileInView="animate"
      custom={index}
      viewport={{
        once: true,
      }}
      className="relative flex flex-col rounded-lg bg-glass p-3"
    >
      <div className="group overflow-hidden">
        <Image
          src={image}
          alt={title}
          width={547}
          height={254}
          className="rounded-lg transition-transform duration-500 group-hover:scale-110"
        />
      </div>
      <div className="mt-2">
        {external && (
          <a
            href={external}
            target="_blank"
            rel="noreferrer"
            className="mr-1 cursor-pointer rounded-md bg-glass-dark p-1 text-sm hover:underline"
          >
            Live Demo
          </a>
        )}
        {github && (
          <a
            href={github}
            target="_blank"
            rel="noreferrer"
            className="cursor-pointer rounded-md bg-glass-dark p-1 text-sm hover:underline"
          >
            GitHub
          </a>
        )}
      </div>
      <h3 className="mb-1 mt-2 text-xl font-bold">{title}</h3>
      <p className="text-md mb-1 cursor-default">{description}</p>
      <div className="mt-auto w-full cursor-default">
        {tags.map((tag: String, index: number) => (
          <span
            key={index}
            className="m-[2px] inline-block rounded-lg bg-glass-light-dark p-1 text-xs"
          >
            {tag}
          </span>
        ))}
      </div>
    </motion.div>
  );
};

export default ProjectCard;
