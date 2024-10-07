import { FC } from "react";
import { Title } from "../title/title";

export const GallerySection: FC = () => {
  return (
    <section className="px-[40px] w-full m-[70px] flex flex-col">
      <Title className="sm:text-[48px] text-base" headingType="h2">
        Галерея
      </Title>
      <div className="grid grid-cols-[442px_297px_485px_475px_] grid-rows-[349px_378px] gap-[48px] mt-[66px]">
        <div className="bg-gray-200 rounded-[50px] col-span-2"></div>
        <div className="bg-gray-200 rounded-[50px]  row-span-2"></div>
        <div className="bg-gray-200 rounded-[50px] "></div>
        <div className="bg-gray-200 rounded-[50px] "></div>
        <div className="bg-gray-200 rounded-[50px] "></div>
        <div className="bg-gray-200 rounded-[50px] "></div>
      </div>
    </section>
  );
};
