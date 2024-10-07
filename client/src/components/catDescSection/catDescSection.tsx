import Image from "next/image";
import { FC } from "react";

export const CatDescSection: FC = () => {
  return (
    <section className="flex w-full flex-row justify-between gap-[50px] px-[40px]">
      <div className="relative flex-1 overflow-hidden rounded-[50px]">
        <Image
          src={"/catimg.png"}
          alt="Картинка"
          fill
          className="object-cover"
        />
      </div>
      <div className="max-w-[721px] flex-1 rounded-[40px] bg-[#EDF7F8] p-8 text-[32px] text-[#5C5757]">
        Vivamus molestie quam tristique mi malesuada elementum. Duis ac lacus
        fermentum, semper lectus quis, mattis lectus. Phasellus eu est quis
        augue commodo vestibulum et id tellus. Duis tempus hendrerit nulla vel
        efficitur. Nulla euismod placerat diam, in aliquam arcu aliquet at.
        Pellentesque ac consectetur lacus. Mauris sagittis justo quis orci
        consequat aliquam. Aenean rutrum id dolor quis semper. Fusce ac cursus
        leo, eget scelerisque sapien. Cras viverra turpis erat, ut tincidunt
        arcu viverra quis. In sit amet lectus luctus leo porttitor lobortis non
        eget lorem. Ut in tortor id urna mollis consectetur sed a elit.
      </div>
    </section>
  );
};
