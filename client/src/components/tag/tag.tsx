import { FC } from "react";

interface TagProps {
  content: string;
}

export const Tag: FC<TagProps> = ({ content }) => {
  return (
    <div className="bg-[#2D7759] text-white cursor-pointer transition-colors rounded-[20px] text-2xl flex justify-center items-center h-[40px] px-[52px] py-[5px] hover:bg-[#2D7759]/90">
      {content}
    </div>
  );
};
