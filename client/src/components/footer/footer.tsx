import { FC } from "react";
import { ExtraContactsList } from "../extraContacts/extraContactsList";
import { EXTRA_CONTACTS } from "../contactsSection/extraContacts";
import { PhoneList } from "../phonesList/phoneList";
import { PHONES } from "../contactsSection/phones";
import { SocietyList } from "../societyList/societyList";
import { FeedBackForm } from "../feedBackForm/feedBackForm";

export const Footer: FC = () => {
  return (
    <footer className="flex w-full flex-row justify-between bg-[#6FD0D2] px-[40px] py-[100px]">
      <div className="text-white">
        <ExtraContactsList
          extraContacts={EXTRA_CONTACTS}
          linkClassName="text-[36px] text-white"
        />
        <div className="mt-[93px]">
          <PhoneList phones={PHONES} linkClassName="text-[36px] text-white" />
        </div>
        <div className="mt-[30px]">
          <SocietyList />
        </div>
      </div>
      <div className="w-[500px]">
        <FeedBackForm />
      </div>
    </footer>
  );
};
