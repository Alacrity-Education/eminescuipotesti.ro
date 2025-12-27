import React from "react";

import type { CallToActionBlock as CTABlockProps } from "@/payload-types";

import { CTAPrimitive } from "../Primitive";

export const BackgroundCTA: React.FC<CTABlockProps> = (props) => {
  return (
    <CTAPrimitive
      {...props}
      bgToken="primary"
      textToken="primary"
      buttonToken="primary"
      useMediaBackground
    />
  );
};
