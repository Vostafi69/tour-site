import { AnchorHTMLAttributes, FC } from "react";
import { Link } from "../link/link";
import { cn } from "@/lib/utils";

interface ExtraContactsItemProps
  extends AnchorHTMLAttributes<HTMLAnchorElement> {
  type: "email" | "adres";
  linkClassName?: string;
}

export const ExtraContactsItem: FC<ExtraContactsItemProps> = ({
  className,
  href,
  children,
  type,
  linkClassName,
  ...props
}) => {
  return (
    <li className={className}>
      <Link
        className={cn(
          type === "email" ? "hidden text-[#6FD0D2] sm:block" : "",
          "text-[10px] sm:text-base",
          linkClassName,
        )}
        href={href}
        {...props}
      >
        {children}
      </Link>
    </li>
  );
};
