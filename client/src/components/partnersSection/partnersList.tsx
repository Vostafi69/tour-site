import { FC } from "react";
import { PartnerItem } from "./partnerItem";
import { PartnersType } from "./partners";

interface PartnersListProps {
  partners: PartnersType[];
}

export const PartnersList: FC<PartnersListProps> = ({ partners }) => {
  return (
    <div className="flex flex-row gap-[100px] w-full">
      {partners.map((partner, index) => (
        <PartnerItem
          className="shrink-0 grow-0 object-scale-down transition-transform hover:-translate-y-2 hover:scale-125"
          src={partner.path}
          alt={partner.alt}
          width={partner.width}
          height={partner.height}
          key={index}
        />
      ))}
    </div>
  );
};
