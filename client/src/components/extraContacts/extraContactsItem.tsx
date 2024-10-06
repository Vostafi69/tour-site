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
        className={cn(type === "email" ? "text-[#6FD0D2]" : "", linkClassName)}
        href={href}
        {...props}
      >
        {children}
      </Link>
    </li>
  );
};
