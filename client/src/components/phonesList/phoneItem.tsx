import { AnchorHTMLAttributes, FC } from "react";
import { Link } from "../link/link";

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
      <Link href={`tel:${href}`} className={linkClassName} {...props}>
        {phone}
      </Link>
    </li>
  );
};
