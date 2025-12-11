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
      <div className={cn("container mx-auto md:max-h-[80vh]")}>
        <div className={cn(
          // Small screens: single row, horizontal scroll
          "grid grid-flow-col h-full auto-cols-fr grid-rows-1 gap-4 overflow-x-auto",
          // md+: 2 columns x 2 rows grid
          "md:grid-flow-row md:overflow-x-visible md:grid-cols-2 md:grid-rows-2"
        )}>
          {cells.map((cell, i) => {
            const common = cn("rounded-lg overflow-hidden", cell.spanRows ? "md:row-span-2" : undefined);

            if (cell.type === "media" && cell.media) {
              return (
                <div key={i} className={common}>
                  <Media resource={cell.media as any} imgClassName="rounded-lg" />
                </div>
              );
            }

            if (cell.type === "text" && cell.richText) {
              return (
                <div key={i} className={cn(common, "p-4 border border-border rounded-lg bg-card")}>
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
