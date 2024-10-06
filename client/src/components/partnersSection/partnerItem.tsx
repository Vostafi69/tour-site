import Image, { ImageProps } from "next/image";
import { FC } from "react";

interface PartnerItemProps extends ImageProps {}

export const PartnerItem: FC<PartnerItemProps> = ({ ...props }) => {
  return <Image {...props} />;
};
