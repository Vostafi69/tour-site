import { cn } from "@/lib/utils";
import { FC, HTMLAttributes } from "react";

interface TitleProps extends HTMLAttributes<HTMLHeadingElement> {
  headingType?: "h1" | "h2" | "h3";
}

export const Title: FC<TitleProps> = ({
  children,
  headingType,
  className,
  ...props
}) => {
  const Slot = headingType || "h1";

  return (
    <Slot className={cn(className, "text-[16px] text-black")} {...props}>
      {children}
    </Slot>
  );
};
