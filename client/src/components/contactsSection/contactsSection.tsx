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
    <section className="m-[70px] flex w-full flex-col px-[40px]">
      <Title className="text-base sm:text-[48px]" headingType="h2">
        Контакты
      </Title>
      <div className="mt-[70px] flex w-full flex-row justify-between gap-[132px]">
        <div className="flex shrink-0 flex-col">
          <div className="mt-[66px] space-y-[82px]">
            <PhoneList
              linkClassName="!text-[36px] !leading-snug"
              phones={PHONES}
            />
            <ExtraContactsList
              linkClassName="!text-[36px] !leading-snug"
              extraContacts={EXTRA_CONTACTS}
            />
          </div>
        </div>
        <div className="w-full overflow-hidden rounded-[50px] shadow-lg">
          <Map />
        </div>
      </div>
      <div className="mt-[70px] flex w-full justify-center">
        <SocietyList />
      </div>
    </section>
  );
};
