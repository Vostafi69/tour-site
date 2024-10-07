import { FC } from "react";
import { Nav } from "../navigation/nav";
import { PhoneList } from "../phonesList/phoneList";
import { PHONES } from "../contactsSection/phones";
import Image from "next/image";
import { ExtraContactsList } from "../extraContacts/extraContactsList";
import { EXTRA_CONTACTS } from "../contactsSection/extraContacts";

export const Header: FC = () => {
  return (
    <header className="absolute top-0 left-0 right-0 z-[56]">
      <div className="h-[52px] sm:h-[120px] bg-white flex flex-row justify-between items-center px-4 sm:px-[40px]">
        <div className="flex-1">
          <ExtraContactsList extraContacts={EXTRA_CONTACTS} />
        </div>
        <div className="flex-1 flex justify-center relative w-[297px] h-full">
          <Image
            className="w-full object-contain py-2"
            src={"/logo.png"}
            fill
            alt="ДВ Каникулы"
          />
        </div>
        <div className="flex-1 flex justify-end items-center">
          <PhoneList phones={PHONES} />
        </div>
      </div>
      <Nav />
    </header>
  );
};
