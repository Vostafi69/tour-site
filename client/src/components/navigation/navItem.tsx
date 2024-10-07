import { FC, PropsWithChildren } from "react";

export const NavItem: FC<PropsWithChildren> = ({ children }) => {
  return (
    <li className="text-xs font-medium text-white sm:text-base">{children}</li>
  );
};
