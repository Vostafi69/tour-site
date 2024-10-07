import { FC } from "react";
import { Title } from "../title/title";
import { PartnersList } from "./partnersList";
import { PARTNERS } from "./partners";

export const PartnersSection: FC = () => {
  return (
    <section className="w-full px-[40px] flex flex-col items-center mt-[70px]">
      <Title className="sm:text-[48px] text-base" headingType="h2">
        Наши партнеры
      </Title>
      <div className="mt-[70px]">
        <PartnersList partners={PARTNERS} />
      </div>
    </section>
  );
};
