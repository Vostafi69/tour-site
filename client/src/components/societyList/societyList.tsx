import { FC } from "react";
import { SocietyItem } from "./societyItem";

const SOCIETY_LIST = [
  {
    img: "/ws.png",
    alt: "WhatsApp",
    link: "#",
  },
  {
    img: "/tg.png",
    alt: "Telegram",
    link: "#",
  },
  {
    img: "/wk.png",
    alt: "Wk",
    link: "#",
  },
];

export const SocietyList: FC = () => {
  return (
    <ul className="flex flex-row gap-[70px]">
      {SOCIETY_LIST.map((society, index) => (
        <SocietyItem
          alt={society.alt}
          href={society.link}
          img={society.img}
          key={index}
        ></SocietyItem>
      ))}
    </ul>
  );
};
