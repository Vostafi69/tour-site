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
    <article className="bg-[#EDF7F8] rounded-[30px] text-[#5C5757] sm:text-2xl font-normal sm:p-[40px] flex flex-col gap-[7px] max-w-[1289px] p-[5px] text-[12px]">
      <div className="flex flex-row gap-[38px]">
        <div className="w-[350px] h-[300px] shrink-0 bg-gray-300 overflow-hidden relative"></div>
        <div className="flex flex-col gap-4">
          <div className="flex flex-row justify-between items-center">
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
        <div className="flex flex-row gap-[40px] items-center">
          <Tag content="#Тэг" />
          <Tag content="#Тэг" />
        </div>
        <div className="flex flex-row gap-[75px] items-center">
          <Button>Подробнее</Button>
          <Button variant={"link"} size={"sm"} className="text-[24px] p-0">
            250 000
          </Button>
        </div>
      </div>
    </article>
  );
};
