import { FC, ReactNode } from "react";

interface MainLayoutProps {
  children: ReactNode | undefined;
  footerSlot?: ReactNode | undefined;
  headerSlot?: ReactNode | undefined;
}

export const MainLayout: FC<MainLayoutProps> = ({
  children,
  headerSlot,
  footerSlot,
}) => {
  return (
    <div className="relative">
      {headerSlot}
      {children}
      {footerSlot}
    </div>
  );
};
