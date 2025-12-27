import React from "react";

import type { ArchiveBlock as ArchiveBlockProps } from "@/payload-types";

import { LongArchiveBlock } from "./Long";
import { CardsArchiveBlock } from "./Cards";
import { ListArchiveBlock } from "./List";

const variants = {
  long: LongArchiveBlock,
  cards: CardsArchiveBlock,
  list: ListArchiveBlock,
};

export const ArchiveBlock: React.FC<
  ArchiveBlockProps & {
    id?: string;
  }
> = (props) => {
  const { style, title } = props || {};

  if (!style) return null;

  const ArchiveBlockToRender = variants[style as keyof typeof variants];

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
