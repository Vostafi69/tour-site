import { FC, ReactNode } from "react";
import { ExtraContactsItem } from "./extraContactsItem";

export type ExtraContactsType = {
  href: string;
  content: ReactNode | string;
  type: "email" | "adres";
};

interface ExtraContactsListProps {
  extraContacts: ExtraContactsType[];
  linkClassName?: string;
}

export const ExtraContactsList: FC<ExtraContactsListProps> = ({
  extraContacts,
  linkClassName,
}) => {
  return (
    <ul className="flex flex-col space-y-[2px] sm:space-y-1">
      {extraContacts.map((extraContact, index) => (
        <ExtraContactsItem
          className="leading-3 sm:leading-none"
          key={index}
          href={extraContact.href}
          type={extraContact.type}
          linkClassName={linkClassName}
        >
          {extraContact.content}
        </ExtraContactsItem>
      ))}
    </ul>
  );
};
