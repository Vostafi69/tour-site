import { FC } from "react";
import { ToursForm } from "../toursForm/toursForm";

export const ToursFilter: FC = () => {
  return (
    <div className="bg-white shadow-lg rounded-[50px] w-[400px] p-[25px]">
      <ToursForm />
    </div>
  );
};
