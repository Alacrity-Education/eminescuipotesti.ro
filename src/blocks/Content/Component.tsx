import { cn } from "@/utilities/ui";
import React from "react";
import RichText from "@/components/RichText";
import type { ContentBlock as ContentBlockProps } from "@/payload-types";
import { CMSLink } from "../../components/Link";

export const ContentBlock: React.FC<ContentBlockProps> = (props) => {
  const { columns, title } = props;

  // 1. Map the FULL class strings so Tailwind detects them correctly
  const colsSpanClasses = {
    full: "md:col-span-12",
    half: "md:col-span-6",
    oneThird: "md:col-span-4",
    twoThirds: "md:col-span-8",
  };

  return (
    <div className="container mx-auto my-4 w-full sm:my-40">
      {title && (
        <h2 className="text-primary py-10 text-center text-xl font-semibold md:text-3xl">
          {title}
        </h2>
      )}
      {/* 2. Ensure parent is grid-cols-12 at md breakpoint */}
      <div className="grid grid-cols-4 gap-x-16 gap-y-8 md:grid-cols-12">
        {columns &&
          columns.length > 0 &&
          columns.map((col, index) => {
            const { enableLink, link, richText, size } = col;

            return (
              <div
                className={cn(
                  "col-span-4", // Default to full width on mobile
                  colsSpanClasses[size!], // Apply the mapped class for desktop
                )}
                key={index}
              >
                {richText && <RichText data={richText} enableGutter={false} />}
                {enableLink && <CMSLink {...link} />}
              </div>
            );
          })}
      </div>
    </div>
  );
};
