import { FC } from "react";
import { ToursForm } from "../toursForm/toursForm";

export const ToursFilter: FC = () => {
  return (
    <div className="w-[400px] rounded-[50px] bg-white p-[25px] shadow-lg">
      <ToursForm />
    </div>
  );
};
