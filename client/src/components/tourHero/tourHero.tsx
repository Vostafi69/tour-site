import { FC } from "react";
import { Button } from "../ui/button";
import Image from "next/image";

export const TourHero: FC = () => {
  return (
    <section className="h-[1080px] w-full overflow-hidden relative">
      <div className="absolute z-50 inset-0 top-[120px] flex flex-col justify-center px-[40px]">
        <Button className="w-fit text-white hover:bg-white" variant={"outline"}>
          Категория
        </Button>
        <h1 className="text-white text-[96px] font-bold text-left mt-[13px]">
          Название
          <br />
          тура полное
        </h1>
        <Button className="w-fit mt-[51px]">{"К другим экскурсиям >"}</Button>
      </div>
      <Image src={"/bear.png"} alt="Река" fill className="object-cover" />
    </section>
  );
};
