import { FC, PropsWithChildren } from "react";

export const NavItem: FC<PropsWithChildren> = ({ children }) => {
  return (
    <li className="font-medium text-white text-xs sm:text-base">{children}</li>
  );
};
