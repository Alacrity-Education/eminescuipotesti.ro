import React from "react";

import type { CallToActionBlock as CTABlockProps } from "@/payload-types";

import RichText from "@/components/RichText";
import { CMSLink } from "@/components/Link";

export const PrimaryCTA: React.FC<CTABlockProps> = ({ links, richText }) => {
  return (
    <div className={"container mx-auto  max-w-2xl lg:max-w-4xl"}>
    <div className={"w-full "}>
    <div className="bg-primary max-w-screen w-full text-secondary relative  h-max min-h-64 rounded-xl  shadow-2xl  sm:min-h-64">
      <div className="relative z-20 flex h-max min-h-64 w-full flex-col rounded p-8 sm:min-h-64">
        <div className="max-w-3xl">
          {richText && (
            <RichText
              className="mb-0 text-start text-primary-content"
              data={richText}
              enableGutter={false}
            />
          )}
        </div>
        <div className="grow"></div>
        <div className="max-w flex flex-row gap-8">
          {(links || []).map(({ link }, i) => {
            return <CMSLink className="" key={i} size="lg" {...link} />;
          })}
        </div>
      </div>
    </div>
    </div>
    </div>
  );
};
