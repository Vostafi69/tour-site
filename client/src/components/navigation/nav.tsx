import { FC } from "react";
import { NavList } from "./navList";

export const Nav: FC = () => {
  return (
    <nav className="w-full h-[80px] px-4 sm:px-[40px]">
      <NavList />
    </nav>
  );
};
