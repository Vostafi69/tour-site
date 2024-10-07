import { FC } from "react";
import { Button } from "../ui/button";
import { Tag } from "../tag/tag";
import { Title } from "../title/title";
import { TourModel } from "@/models/tourModel";

interface TourCardProps {
  tour: TourModel;
}

export const TourCard: FC<TourCardProps> = ({ tour }) => {
  return (
    <article className="flex max-w-[1289px] flex-col gap-[7px] rounded-[30px] bg-[#EDF7F8] p-[5px] text-[12px] font-normal text-[#5C5757] sm:p-[40px] sm:text-2xl">
      <div className="flex flex-row gap-[38px]">
        <div className="relative h-[300px] w-[350px] shrink-0 overflow-hidden bg-gray-300"></div>
        <div className="flex flex-col gap-4">
          <div className="flex flex-row items-center justify-between">
            <Title className="text-sm sm:text-[48px]" headingType="h3">
              Название тура
            </Title>
            <Button variant={"outline"} size={"sm"}>
              Категория
            </Button>
          </div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sodales
            pharetra facilisis. Suspendisse consectetur molestie libero, vel
            feugiat mauris efficitur sed. Aenean sed libero lectus. Sed mauris
            nulla, egestas ac placerat sit amet, maximus ut libero. Nam sem
            enim, pulvinar molestie quam quis, rutrum gravida ante. Donec ac
            ante sodales, sodales ante at, auctor felis. Nullam cursus ultricies
            lectus, eget pharetra ipsum efficitur tincidunt. Praesent vitae leo
            tortor. Suspendisse egestas euismod suscipit.
          </p>
        </div>
      </div>
      <div className="flex flex-row justify-between">
        <div className="flex flex-row items-center gap-[40px]">
          <Tag content="#Тэг" />
          <Tag content="#Тэг" />
        </div>
        <div className="flex flex-row items-center gap-[75px]">
          <Button>Подробнее</Button>
          <Button variant={"link"} size={"sm"} className="p-0 text-[24px]">
            250 000
          </Button>
        </div>
      </div>
    </article>
  );
};
