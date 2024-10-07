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
      <div className="h-[120px] bg-white flex flex-row justify-between items-center px-4 sm:px-[40px]">
        <div className="flex-1">
          <ExtraContactsList extraContacts={EXTRA_CONTACTS} />
        </div>
        <div className="flex-1 flex justify-center">
          <Image src={"/logo.png"} width={297} height={111} alt="ДВ Каникулы" />
        </div>
        <div className="flex-1 flex justify-end">
          <PhoneList phones={PHONES} />
        </div>
      </div>
      <Nav />
    </header>
  );
};
