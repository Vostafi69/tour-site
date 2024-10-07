import { FC } from "react";
import { Title } from "../title/title";

export const GallerySection: FC = () => {
  return (
    <section className="m-[70px] flex w-full flex-col px-[40px]">
      <Title className="text-base sm:text-[48px]" headingType="h2">
        Галерея
      </Title>
      <div className="mt-[66px] grid grid-cols-[442px_297px_485px_475px_] grid-rows-[349px_378px] gap-[48px]">
        <div className="col-span-2 rounded-[50px] bg-gray-200"></div>
        <div className="row-span-2 rounded-[50px] bg-gray-200"></div>
        <div className="rounded-[50px] bg-gray-200"></div>
        <div className="rounded-[50px] bg-gray-200"></div>
        <div className="rounded-[50px] bg-gray-200"></div>
        <div className="rounded-[50px] bg-gray-200"></div>
      </div>
    </section>
  );
};
