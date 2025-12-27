import React from "react";

import type { CallToActionBlock as CTABlockProps } from "@/payload-types";

import { CTAPrimitive } from "../Primitive";

export const SecondaryCTA: React.FC<CTABlockProps> = (props) => {
  return (
    <CTAPrimitive {...props} bgToken="secondary" textToken="secondary" buttonToken="secondary" />
  );
};
