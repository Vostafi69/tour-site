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
    <li className="rounded-full p-2 transition hover:scale-125 hover:bg-[#EDF7F8]">
      <Link
        href={href}
        target="_blank"
        className="relative block h-[60px] w-[60px]"
      >
        <Image src={img} alt={alt} fill />
      </Link>
    </li>
  );
};
