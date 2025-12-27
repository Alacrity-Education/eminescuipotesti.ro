import React from "react";

import type { CallToActionBlock as CTABlockProps } from "@/payload-types";

import { CTAPrimitive } from "../Primitive";

export const PrimaryCTA: React.FC<CTABlockProps> = (props) => {
  return (
    <div className={"container mx-auto  max-w-2xl lg:max-w-4xl"}>
    <div className={"w-full "}>
    <CTAPrimitive {...props} bgToken="primary" textToken="primary" buttonToken="primary" />
    </div>
    </div>
  );
};
