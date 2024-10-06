import { cn } from "@/lib/utils";
import { AnchorHTMLAttributes, FC } from "react";

interface LinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {}

export const Link: FC<LinkProps> = ({
  className,
  href,
  children,
  ...props
}) => {
  return (
    <a
      className={cn(
        "text-black text-base font-thin hover:underline",
        className
      )}
      href={href}
      {...props}
    >
      {children}
    </a>
  );
};
