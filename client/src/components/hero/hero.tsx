"use client";

import Image from "next/image";
import { FC, useRef } from "react";

import { motion, useScroll, useTransform } from "framer-motion";

export const Hero: FC = () => {
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["0px", "end start"],
  });

  const sm = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const md = useTransform(scrollYProgress, [0, 1], [0, -150]);

  return (
    <section
      ref={container}
      className="relative h-[282px] w-full overflow-hidden sm:h-[682px] md:h-[1080px]"
    >
      <div className="absolute inset-0 flex items-center justify-center pt-[80px]">
        <motion.h1
          style={{ y: md }}
          className="z-50 -mt-[71px] text-left text-4xl font-bold text-white sm:-mt-[171px] md:text-5xl lg:text-7xl xl:text-9xl"
        >
          Дальневосточные
          <br />
          каникулы
        </motion.h1>
      </div>
      <motion.div style={{ y: sm }} className="absolute z-[55] h-full w-full">
        <Image
          className="h-full object-cover"
          src={"/front.png"}
          alt="Река"
          fill
        />
      </motion.div>
      <Image
        className="h-full object-cover"
        src={"/fon.png"}
        alt="Природа"
        fill
      />
    </section>
  );
};
