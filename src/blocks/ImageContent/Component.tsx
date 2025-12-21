import React from "react";
import { Media } from "@/components/Media";
import RichText from "@/components/RichText";
import { cn } from "@/utilities/ui";
type Cell = {
  type: 'text' | 'media';
  spanRows?: boolean;
  richText?: unknown;
  media?: unknown;
};

type Props = {
  title?: string;
  cells?: Cell[];
  disableInnerContainer?: boolean;
};

export const ImageContentBlock: React.FC<Props> = (props) => {
  const { title, cells } = props || {};

  if (!cells || !Array.isArray(cells) || cells.length === 0) return null;

  return (
    <div className="w-full">
      {title && (
        <h2 className="text-primary py-10 text-center text-base font-semibold md:text-3xl">{title}</h2>
      )}
      <div className={cn("container mx-auto")}>
        <div className={cn(
          "grid grid-flow-row lg:h-full auto-cols-fr grid-cols-1 gap-4 lg:gap-12",
          // lg+: 2 columns x 2 rows grid
          cells.length >2?
          "lg:grid-flow-row  lg:grid-cols-2 lg:grid-rows-2":
            "lg:grid-flow-row  lg:grid-cols-2 lg:grid-rows-1"
        )}>
          {cells.map((cell, i) => {
            const common = cn("rounded-lg ", cell.spanRows ? "md:row-span-2" : undefined);

            if (cell.type === "media" && cell.media) {
              return (
                <div key={i} className={common}>
                  <Media resource={cell.media as any} imgClassName="rounded-lg object-cover min-h-[40vh] h-full w-full" pictureClassName={"w-full min-h-[40vh] h-full"} />
                </div>
              );
            }

            if (cell.type === "text" && cell.richText) {
              return (
                <div key={i} className={cn(common, "p-4 border border-border rounded-lg ")}>
                  <RichText data={cell.richText as any} enableGutter={false} />
                </div>
              );
            }

            return null;
          })}
        </div>
      </div>
    </div>
  );
};
