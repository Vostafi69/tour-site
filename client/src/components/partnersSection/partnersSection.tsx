import { FC } from "react";
import { Title } from "../title/title";
import { PartnersList } from "./partnersList";
import { PARTNERS } from "./partners";

export const PartnersSection: FC = () => {
  return (
    <section className="mt-[70px] flex w-full flex-col items-center px-[40px]">
      <Title className="text-base sm:text-[48px]" headingType="h2">
        Наши партнеры
      </Title>
      <div className="mt-[70px]">
        <PartnersList partners={PARTNERS} />
      </div>
    </section>
  );
};
