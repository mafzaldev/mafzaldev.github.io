"use client";

import content from "@/lib/content.json";
import Image from "next/image";

import { fadeInAnimtionVariants } from "@/lib/utils";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <motion.section
      variants={fadeInAnimtionVariants}
      initial="initial"
      whileInView="animate"
      viewport={{
        once: true,
      }}
      className="mt-16 w-full"
    >
      <div className="flex items-center justify-center gap-5">
        {content.socials.map((social: any, index: number) => (
          <a
            href={social.external}
            key={index}
            target="_blank"
            rel="noreferrer"
            className="transition-transform duration-300 ease-in-out hover:-translate-y-1"
          >
            <Image
              src={social.icon}
              width={32}
              height={32}
              alt={social.title}
            />
          </a>
        ))}
      </div>
      <p className="text-md mt-5 px-5 text-center">
        All rights reserved. &copy; 2023{" "}
        <span className="underline underline-offset-4">Muhammad Afzal</span>
      </p>
    </motion.section>
  );
};

export default Footer;
