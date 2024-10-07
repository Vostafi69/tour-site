import { FC } from "react";
import { NavList } from "./navList";

export const Nav: FC = () => {
  return (
    <nav className="w-full sm:h-[80px] px-4 sm:px-[40px] mt-[6px] sm:mt-0">
      <NavList />
    </nav>
  );
};
