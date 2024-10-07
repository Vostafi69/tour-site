import { AnchorHTMLAttributes, FC } from "react";
import { Link } from "../link/link";
import { cn } from "@/lib/utils";

interface PhoneItemProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  phone: string;
  linkClassName?: string;
}

export const PhoneItem: FC<PhoneItemProps> = ({
  phone,
  className,
  linkClassName,
  href,
  ...props
}) => {
  return (
    <li className={className}>
      <Link
        href={`tel:${href}`}
        className={cn("text-xs sm:text-base", linkClassName)}
        {...props}
      >
        {phone}
      </Link>
    </li>
  );
};
