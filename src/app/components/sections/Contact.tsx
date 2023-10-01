"use client";

import { fadeInAnimtionVariants } from "@/lib/utils";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <motion.section
      id="contact"
      key={6}
      variants={fadeInAnimtionVariants}
      initial="initial"
      whileInView="animate"
      viewport={{
        once: true,
      }}
      className="mt-10 w-full"
    >
      <div className="rounded-lg bg-glass p-10">
        <h2 className="mb-6 text-center text-3xl font-bold">
          <span className="underline-animation group-hover:no-underline">
            Get in Touch
          </span>
        </h2>
        <p className="md:text-md text-center text-sm md:px-16 lg:text-lg xl:px-28">
          I&apos;m actively seeking chances to gain more experience. Feel free
          to send me a message anytime. Whether you have a question, want to
          learn more about me, or just want to say hello, I&apos;ll do my best
          to respond!
        </p>
        <a
          href={"https://www.linkedin.com/in/mafzaldev/"}
          target="_blank"
          rel="noreferrer noopener"
          className="border-1 mx-auto mt-4 block w-fit rounded-lg border border-glass-light px-3 py-2 text-center transition-all duration-200 ease-in-out hover:bg-glass-dark hover:shadow-lg md:mt-8"
        >
          Say Hello
        </a>
      </div>
    </motion.section>
  );
};

export default Contact;
