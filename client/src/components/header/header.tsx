import { FC } from "react";
import { Nav } from "../navigation/nav";
import { PhoneList } from "../phonesList/phoneList";
import { PHONES } from "../contactsSection/phones";
import Image from "next/image";
import { ExtraContactsList } from "../extraContacts/extraContactsList";
import { EXTRA_CONTACTS } from "../contactsSection/extraContacts";

export const Header: FC = () => {
  return (
    <header className="absolute left-0 right-0 top-0 z-[56]">
      <div className="flex h-[52px] flex-row items-center justify-between bg-white px-4 sm:h-[120px] sm:px-[40px]">
        <div className="flex-1">
          <ExtraContactsList extraContacts={EXTRA_CONTACTS} />
        </div>
        <div className="relative flex h-full w-[297px] flex-1 justify-center">
          <Image
            className="w-full object-contain py-2"
            src={"/logo.png"}
            fill
            alt="ДВ Каникулы"
          />
        </div>
        <div className="flex flex-1 items-center justify-end">
          <PhoneList phones={PHONES} />
        </div>
      </div>
      <Nav />
    </header>
  );
};
