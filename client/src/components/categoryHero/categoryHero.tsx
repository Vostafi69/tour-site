import { FC } from "react";
import Image from "next/image";
import { Button } from "../ui/button";

export const CategoryHero: FC = () => {
  return (
    <section className="h-[656px] w-full overflow-hidden relative">
      <div className="absolute z-50 inset-0 flex flex-col justify-end px-[40px] pb-[38px]">
        <h1 className="text-white text-[96px] font-bold text-left -mt-44">
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
