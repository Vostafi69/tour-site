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
        "text-base font-thin text-black hover:underline",
        className,
      )}
      href={href}
      {...props}
    >
      {children}
    </a>
  );
};
