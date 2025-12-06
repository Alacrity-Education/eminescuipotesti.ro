import React from "react";

import type { ArchiveBlock as ArchiveBlockProps } from "@/payload-types";

import { LongArchiveBlock } from "./Long";

const variants = {
  long: LongArchiveBlock,
};

export const ArchiveBlock: React.FC<
  ArchiveBlockProps & {
    id?: string;
  }
> = (props) => {
  const { style, title } = props || {};
  console.log("ArchiveBlock props:", style);

  if (!style) return null;

  const ArchiveBlockToRender = variants[style];

  if (!ArchiveBlockToRender) return null;

  return (
    <div className="w-full">
      {title && (
        <h2 className="text-primary text-center text-xl font-semibold md:text-3xl">
          {title}
        </h2>
      )}
      <ArchiveBlockToRender {...props} />
    </div>
  );
};
