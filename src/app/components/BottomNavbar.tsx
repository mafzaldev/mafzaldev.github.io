"use client";

import {
  ChatBubbleBottomCenterTextIcon,
  HomeIcon,
  PuzzlePieceIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";

import { useState } from "react";

const BottomNavbar = () => {
  const [activeNavItem, setActiveNavItem] = useState("#");

  return (
    <nav className="backdrop-blur-15 bg-blur-15 fixed bottom-6 left-1/2 z-20 flex w-max -translate-x-1/2 transform gap-2 rounded-full bg-glass-light p-2">
      <Link
        href="#"
        onClick={() => setActiveNavItem("#")}
        className={`${
          activeNavItem === "#" ? "rounded-full bg-glass-dark " : ""
        } p-2`}
      >
        <HomeIcon className="h-6 w-6 text-white" />
      </Link>
      <Link
        href="#projects"
        onClick={() => setActiveNavItem("#projects")}
        className={`${
          activeNavItem === "#projects" ? "rounded-full bg-glass-dark " : ""
        } p-2`}
      >
        <PuzzlePieceIcon className="h-6 w-6 text-white" />
      </Link>
      <Link
        href="#contact"
        onClick={() => setActiveNavItem("#contact")}
        className={`${
          activeNavItem === "#contact" ? "rounded-full bg-glass-dark " : ""
        } p-2`}
      >
        <ChatBubbleBottomCenterTextIcon className="h-6 w-6 text-white" />
      </Link>
    </nav>
  );
};

export default BottomNavbar;
