import Image from "next/image";
import { FC } from "react";
import { Link } from "../link/link";

interface SocietyItemProps {
  href: string;
  img: string;
  alt: string;
}

export const SocietyItem: FC<SocietyItemProps> = ({ alt, href, img }) => {
  return (
    <li className="transition hover:scale-125 rounded-full hover:bg-[#EDF7F8] p-2">
      <Link
        href={href}
        target="_blank"
        className="w-[60px] h-[60px] relative block"
      >
        <Image src={img} alt={alt} fill />
      </Link>
    </li>
  );
};
