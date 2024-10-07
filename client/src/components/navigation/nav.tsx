import { FC } from "react";
import { NavList } from "./navList";

export const Nav: FC = () => {
  return (
    <nav className="mt-[6px] w-full px-4 sm:mt-0 sm:h-[80px] sm:px-[40px]">
      <NavList />
    </nav>
  );
};
