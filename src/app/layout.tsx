import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import Head from "next/head";
import Noise from "./components/Noise";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Muhammad Afzal",
  description: "A Tech Enthusiast, with a passion for learning new things.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <html
        lang="en"
        className="scroll-smooth [-ms-overflow-style:'none'] [scrollbar-width:'none'] [&::-webkit-scrollbar]:hidden"
      >
        <Head>
          <link
            rel="preload"
            as="image"
            href="https://res.cloudinary.com/duidlslzh/image/upload/v1692979185/Personal/bg_img.jpg"
          />
        </Head>
        <body
          className={`bg-background bg-[url('https://res.cloudinary.com/duidlslzh/image/upload/v1692979185/Personal/bg_img.jpg')] bg-top bg-no-repeat text-white antialiased ${spaceGrotesk.className}`}
        >
          <Noise />
          {children}
        </body>
      </html>
    </>
  );
}
