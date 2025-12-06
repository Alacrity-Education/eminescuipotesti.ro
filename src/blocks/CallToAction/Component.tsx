import React from "react";

import type { CallToActionBlock as CTABlockProps } from "@/payload-types";

import { StarryCTA } from "./Starry";
import { PrimaryCTA } from "./Primary";
import { BackgroundCTA } from "./Background";
import { SecondaryCTA } from "./Secondary";

const variants = {
  starry: StarryCTA,
  primary: PrimaryCTA,
  background: BackgroundCTA,
  secondary: SecondaryCTA,
};

export const CallToActionBlock: React.FC<CTABlockProps> = (props) => {
  const { variant, title } = props || {};

  if (!variant) return null;

  const CTAToRender = variants[variant];

  if (!CTAToRender) return null;

  return (
    <div className="w-full">
      {title && (
        <h2 className="text-primary py-10 text-center text-base font-semibold md:text-3xl">
          {title}
        </h2>
      )}
      <CTAToRender {...props} />
    </div>
  );
};
