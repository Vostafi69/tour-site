import { FC } from "react";
import Image from "next/image";
import { Button } from "../ui/button";

export const CategoryHero: FC = () => {
  return (
    <section className="relative h-[656px] w-full overflow-hidden">
      <div className="absolute inset-0 z-50 flex flex-col justify-end px-[40px] pb-[38px]">
        <h1 className="-mt-44 text-left text-[96px] font-bold text-white">
          Название
          <br />
          категории
        </h1>
        <Button className="w-fit">{"Ко всем категориям >"}</Button>
      </div>
      <Image src={"/catimg.png"} alt="Река" fill className="object-cover" />
    </section>
  );
};
