"use client";
import { motion } from "framer-motion";

const Heading = ({ title }: { title: string }) => {
  return (
    <motion.h2
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.2, delay: 0.1 }}
      className="mb-6 cursor-default text-center text-3xl font-bold"
    >
      <span className="underline-animation group-hover:no-underline">
        {title}
      </span>
    </motion.h2>
  );
};

export default Heading;
