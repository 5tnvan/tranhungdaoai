"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import type { NextPage } from "next";
import { ImagesSlider } from "~~/components/ui/images-slider";

const Home: NextPage = () => {
  const images = ["/images/1.png", "/images/2.webp", "/images/3.png", "/images/4.webp"];

  return (
    <>
      <div className="flex items-center flex-col flex-grow">
        <ImagesSlider className="h-[50rem]" images={images}>
          <motion.div
            initial={{
              opacity: 0,
              y: -80,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.6,
            }}
            className="z-50 flex flex-col justify-center items-center"
          >
            <motion.p className="font-bold text-xl md:text-6xl text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 py-4">
              Trần Hưng Đạo AI: House of Dragon.
              <br />
            </motion.p>
            <div className="w-1/2 text-md md:text-lg text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 py-4">
              AI influencer embodying the indomitable spirit of Vietnam’s most celebrated military commander.
            </div>
            <Link
              href="https://creator.bid/agents/67914bda0ad8dc9b795cafe9"
              className="px-4 py-2 backdrop-blur-sm border bg-emerald-300/10 border-emerald-500/20 text-white mx-auto text-center rounded-full relative mt-4"
            >
              <span>$DRAGON →</span>
              <div className="absolute inset-x-0  h-px -bottom-px bg-gradient-to-r w-3/4 mx-auto from-transparent via-emerald-500 to-transparent" />
            </Link>
          </motion.div>
        </ImagesSlider>
      </div>
    </>
  );
};

export default Home;
