"use client";
import { motion } from "framer-motion";

const fadeInAnimtionVariants = {
  initial: {
    opacity: 0,
  },
  animate: (index: number) => ({
    opacity: 1,
    transition: {
      delay: index * 0.05,
    },
  }),
};

const TimelineItem = () => {
  return (
    <motion.li
      variants={fadeInAnimtionVariants}
      initial="initial"
      whileInView="animate"
      custom={1}
      viewport={{
        once: true,
      }}
      className="mb-10 ml-4"
    >
      <div className="absolute -left-[9px] h-4 w-4 rounded-full bg-white"></div>
      <div className="rounded-lg bg-glass p-3">
        <span className="mb-1 text-sm font-normal leading-none">
          February 2022
        </span>
        <h3 className="text-lg font-semibold text-white">
          Application UI code in Tailwind CSS
        </h3>
        <p className="mb-4 text-base font-normal">
          Get access to over 20+ pages including a dashboard layout, charts,
          kanban board, calendar, and pre-order E-commerce & Marketing pages.
        </p>
      </div>
    </motion.li>
  );
};

export default TimelineItem;
