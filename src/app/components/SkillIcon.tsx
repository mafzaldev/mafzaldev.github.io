"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const WHITE_SVGS = ["Next.js", "Express"];
interface SkillIconProps {
  index: any;
  title: string;
  href: string;
  width: number;
  height: number;
}

const SkillIcon = ({ index, title, href, width, height }: SkillIconProps) => {
  return (
    <motion.div
      key={index}
      initial={{ opacity: 0, translateX: -100 }}
      animate={{ opacity: 1, translateX: 0 }}
      whileHover={{
        translateY: -5,
        scale: 1.05,
        transition: { duration: 0.1 },
      }}
      transition={{ duration: 0.2, delay: index * 0.05 }}
      className="flex h-[60px] w-[60px] cursor-pointer items-center justify-center rounded-lg bg-glass"
    >
      <Image
        src={href}
        alt={title}
        style={{
          filter: WHITE_SVGS.includes(title) ? "invert(100%)" : "",
        }}
        width={width}
        height={height}
      />
    </motion.div>
  );
};

export default SkillIcon;
