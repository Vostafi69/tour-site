import { FC } from "react";
import { Title } from "../title/title";
import { Button } from "../ui/button";

export const TourInComesSection: FC = () => {
  return (
    <section className="flex w-full flex-col items-center gap-[35px] px-[40px] py-[50px]">
      <div className="flex flex-row gap-[92px]">
        <div className="w-full max-w-[800px] space-y-[32px]">
          <Title className="text-center text-base !text-[#2D7759] sm:text-[48px]">
            Что входит в тур
          </Title>
          <ul className="list-inside list-disc text-left text-[32px]">
            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
          </ul>
        </div>
        <div className="w-full max-w-[800px] space-y-[32px]">
          <Title className="text-center !text-[#851120]">
            Что не входит в тур
          </Title>
          <ul className="list-inside list-disc text-left text-[32px]">
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
