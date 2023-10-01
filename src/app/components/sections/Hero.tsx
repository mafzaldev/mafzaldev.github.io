"use client";

import { motion } from "framer-motion";

import Image from "next/image";

const Hero = () => {
  return (
    <section className="mt-10 flex w-full cursor-default flex-col items-center gap-3 md:flex-row">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3, delay: 0.05 }}
        className="flex h-96 w-full flex-col justify-center rounded-lg bg-glass p-10 md:w-1/2 lg:w-2/3"
      >
        <motion.span
          initial={{ opacity: 0, translateY: 50 }}
          animate={{ opacity: 1, translateY: 0 }}
          transition={{ duration: 0.2, delay: 0.02 }}
          className="text-lg"
        >
          Hi, I am
        </motion.span>
        <h1 className="mb-2 text-2xl font-bold md:text-3xl lg:text-4xl">
          <motion.span
            initial={{ opacity: 0, translateY: 50 }}
            animate={{ opacity: 1, translateY: 0 }}
            transition={{ duration: 0.2, delay: 0.05 }}
            className="underline-animation hover:no-underline"
          >
            Muhammad Afzal
          </motion.span>
        </h1>
        <motion.p
          initial={{ opacity: 0, translateY: 50 }}
          animate={{ opacity: 1, translateY: 0 }}
          transition={{ duration: 0.2, delay: 0.1 }}
          className="md:text-md text-justify text-sm tracking-tight lg:text-lg"
        >
          A Techy with a keen interest in Full Stack Development and a final
          year student at UET Lahore, I&apos;m fascinated by elegant UI designs.
          Skilled in ReactJS and Flutter, I enjoy crafting digital experiences
          and usually contribute to open source projects in web development.
          Enthusiastic about adopting new tech for innovative solutions. My
          hobbies include playing video games, designing motion graphics and
          watching movies.
        </motion.p>
        <a
          href={"https://www.linkedin.com/in/mafzaldev/"}
          target="_blank"
          rel="noreferrer noopener"
          className="border-1 mt-5 inline-block w-fit rounded-lg border border-glass-light px-3 py-2 text-center transition-all duration-200 ease-in-out hover:bg-glass-dark hover:shadow-lg "
        >
          Contact Me
        </a>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, translateX: 50 }}
        animate={{ opacity: 0.8, translateX: 0 }}
        transition={{ duration: 0.2, delay: 0.05 }}
        className="pointer-events-none relative hidden h-96 overflow-hidden rounded-lg md:block md:w-1/2 lg:w-1/3"
      >
        <Image
          src={"https://avatars.githubusercontent.com/u/78255759?v=4"}
          alt="Hero Image"
          priority
          width={300}
          height={300}
          className="h-full w-full object-cover object-center"
        />
        <div className="absolute bottom-0 left-0 z-10 w-full animate-kitty-run">
          <Image
            src={"/lightbrown_kitty_run.gif"}
            alt="Running kitty"
            width={135}
            height={95}
            className="w-14"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
