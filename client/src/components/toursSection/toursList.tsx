import { FC } from "react";
import { TourCard } from "../tourCard/tourCard";
import { TourModel } from "@/models/tourModel";

interface ToursListProps {
  tours: TourModel[];
}

export const ToursList: FC<ToursListProps> = ({ tours }) => {
  if (!tours) {
    return (
      <div className="flex grow items-center justify-center text-[24px]">
        Похоже, что туров нет
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-[40px]">
      {tours.map((tour, index) => (
        <TourCard tour={tour} key={index} />
      ))}
    </div>
  );
};
