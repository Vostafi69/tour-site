import { FC } from "react";
import { PhoneItem } from "./phoneItem";

interface PhoneListProps {
  phones: string[];
  linkClassName?: string;
}

export const PhoneList: FC<PhoneListProps> = ({ phones, linkClassName }) => {
  return (
    <ul className="flex flex-col space-y-2">
      {phones.map((phone, index) => (
        <PhoneItem phone={phone} linkClassName={linkClassName} key={index}>
          {phone}
        </PhoneItem>
      ))}
    </ul>
  );
};
