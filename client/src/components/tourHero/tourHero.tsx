import { FC } from "react";
import { Button } from "../ui/button";
import Image from "next/image";

export const TourHero: FC = () => {
  return (
    <section className="relative h-[1080px] w-full overflow-hidden">
      <div className="absolute inset-0 top-[120px] z-50 flex flex-col justify-center px-[40px]">
        <Button className="w-fit text-white hover:bg-white" variant={"outline"}>
          Категория
        </Button>
        <h1 className="mt-[13px] text-left text-[96px] font-bold text-white">
          Название
          <br />
          тура полное
        </h1>
        <Button className="mt-[51px] w-fit">{"К другим экскурсиям >"}</Button>
      </div>
      <Image src={"/bear.png"} alt="Река" fill className="object-cover" />
    </section>
  );
};
