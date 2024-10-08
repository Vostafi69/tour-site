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
    <section className="flex w-full flex-row justify-between gap-4 px-[40px]">
      <div className="hidden flex-col gap-[2px] xl:flex">
        <Title className="text-base sm:text-[48px]" headingType="h2">
          Программы туров
        </Title>
        <ToursFilter />
      </div>
      {isError && (
        <div className="flex grow items-center justify-center text-[24px]">
          Ошибка. Не удалось загрузить туры
        </div>
      )}
      {isFetching && (
        <div className="flex grow items-center justify-center">
          <Loader />
        </div>
      )}
      {isSuccess && <ToursList tours={data.results} />}
    </section>
  );
};
