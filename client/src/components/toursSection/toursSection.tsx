"use client";

import { FC } from "react";
import { ToursList } from "./toursList";
import { ToursFilter } from "../toursFilter/toursFilter";
import { Title } from "../title/title";
import { Loader } from "../loader/loader";
import { useFetchTours } from "@/api/tourApi";

export const ToursSection: FC = () => {
  const { data, isError, isFetching, isSuccess } = useFetchTours();

  return (
    <section className="px-[40px] flex flex-row justify-between w-full">
      <div className="flex flex-col gap-[2px]">
        <Title className="sm:text-[48px] text-base" headingType="h2">
          Программы туров
        </Title>
        <ToursFilter />
      </div>
      {isError && (
        <div className="flex items-center justify-center grow text-[24px]">
          Ошибка. Не удалось загрузить туры
        </div>
      )}
      {isFetching && (
        <div className="flex items-center justify-center grow">
          <Loader />
        </div>
      )}
      {isSuccess && <ToursList tours={data.results} />}
    </section>
  );
};
