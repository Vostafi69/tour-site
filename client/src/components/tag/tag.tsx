import { FC } from "react";

interface TagProps {
  content: string;
}

export const Tag: FC<TagProps> = ({ content }) => {
  return (
    <div className="flex h-[40px] cursor-pointer items-center justify-center rounded-[20px] bg-[#2D7759] px-[52px] py-[5px] text-2xl text-white transition-colors hover:bg-[#2D7759]/90">
      {content}
    </div>
  );
};
