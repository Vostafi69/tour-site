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
      className="h-[1080px] w-full overflow-hidden relative"
    >
      <div className="absolute inset-0 flex items-center justify-center pt-[80px]">
        <motion.h1
          style={{ y: md }}
          className="text-white z-50 xl:text-9xl lg:text-7xl md:text-5xl text-4xl font-bold text-left -mt-[171px] "
        >
          Дальневосточные
          <br />
          каникулы
        </motion.h1>
      </div>
      <motion.div style={{ y: sm }} className="w-full h-full absolute z-[55]">
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
