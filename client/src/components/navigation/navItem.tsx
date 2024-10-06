import { FC, PropsWithChildren } from "react";

export const NavItem: FC<PropsWithChildren> = ({ children }) => {
  return <li className="font-medium text-base text-white">{children}</li>;
};
