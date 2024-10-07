import { FC } from "react";
import { Title } from "../title/title";
import { PhoneList } from "../phonesList/phoneList";
import { PHONES } from "./phones";
import { ExtraContactsList } from "../extraContacts/extraContactsList";
import { EXTRA_CONTACTS } from "./extraContacts";
import { Map } from "../map/map";
import { SocietyList } from "../societyList/societyList";

export const ContactsSection: FC = () => {
  return (
    <section className="px-[40px] w-full m-[70px] flex flex-col">
      <Title className="sm:text-[48px] text-base" headingType="h2">
        Контакты
      </Title>
      <div className="flex flex-row justify-between w-full gap-[132px] mt-[70px]">
        <div className="flex flex-col shrink-0">
          <div className="mt-[66px] space-y-[82px]">
            <PhoneList linkClassName="text-[36px]" phones={PHONES} />
            <ExtraContactsList
              linkClassName="text-[36px]"
              extraContacts={EXTRA_CONTACTS}
            />
          </div>
        </div>
        <div className="w-full overflow-hidden rounded-[50px] shadow-lg">
          <Map />
        </div>
      </div>
      <div className="w-full flex justify-center mt-[70px]">
        <SocietyList />
      </div>
    </section>
  );
};
