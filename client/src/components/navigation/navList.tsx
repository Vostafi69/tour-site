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
    <ul className="flex h-full w-full flex-wrap items-center justify-center gap-[6px] lg:justify-between">
      {__MOCK_MENU__.map((navItemContent, index) => (
        <NavItem key={index}>{navItemContent}</NavItem>
      ))}
    </ul>
  );
};
