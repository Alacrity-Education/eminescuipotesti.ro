import React from "react";

import type { CallToActionBlock as CTABlockProps } from "@/payload-types";

import RichText from "@/components/RichText";
import { CMSLink } from "@/components/Link";
import { Media } from "@/components/Media";

export const BackgroundCTA: React.FC<CTABlockProps> = ({
  links,
  richText,
  media,
}) => {
  return (
    <div className={"container mx-auto "}>
    <div className="text-primary-content relative max-w-screen w-full h-max min-h-64 overflow-clip rounded-xl shadow-2xl  sm:min-h-64">
      {media && typeof media === "object" && (
        <Media
          fill
          priority
          resource={media}
          pictureClassName="absolute h-full w-full top-0 left-0 rounded-xl brightness-75 bg-primary"
          imgClassName="object-cover z-0  "
        />
      )}
      <div className="absolute top-0 left-0 z-0 h-full w-full bg-linear-to-r from-black to-transparent opacity-40 backdrop-blur-xs"></div>
      <div className="relative z-20 flex h-max min-h-64 w-full flex-col rounded p-8 sm:min-h-64">
        <div className="max-w-3xl">
          {richText && (
            <RichText
              className="mb-0 text-start invert"
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
  );
};
