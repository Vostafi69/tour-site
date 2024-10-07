import { FC } from "react";
import { NavItem } from "./navItem";

const __MOCK_MENU__ = [
  "Экскурсии сборные",
  "Экскурсии сборные",
  "Экскурсии сборные",
  "Экскурсии сборные",
  "Экскурсии сборные",
];

export const NavList: FC = () => {
  return (
    <ul className="flex justify-center w-full h-full items-center flex-wrap lg:justify-between space-x-3">
      {__MOCK_MENU__.map((navItemContent, index) => (
        <NavItem key={index}>{navItemContent}</NavItem>
      ))}
    </ul>
  );
};
