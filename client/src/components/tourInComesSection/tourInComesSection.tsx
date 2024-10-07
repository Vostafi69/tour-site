import { FC } from "react";
import { Title } from "../title/title";
import { Button } from "../ui/button";

export const TourInComesSection: FC = () => {
  return (
    <section className="px-[40px] w-full flex items-center gap-[35px] flex-col py-[50px]">
      <div className="flex flex-row gap-[92px]">
        <div className="max-w-[800px] w-full space-y-[32px]">
          <Title className="!text-[#2D7759] text-center sm:text-[48px] text-base">
            Что входит в тур
          </Title>
          <ul className="list-disc text-[32px] list-inside text-left">
            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
          </ul>
        </div>
        <div className="max-w-[800px] w-full space-y-[32px]">
          <Title className="!text-[#851120] text-center">
            Что не входит в тур
          </Title>
          <ul className="list-disc text-[32px] list-inside text-left">
            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
          </ul>
        </div>
      </div>
      <Button className="w-fit">Загрузить страницу в PDF</Button>
    </section>
  );
};
