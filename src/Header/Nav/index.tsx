"use client";

import React from "react";

import type { Header as HeaderType } from "@/payload-types";

import { CMSLink } from "@/components/Link";
import Link from "next/link";
import { SearchIcon } from "lucide-react";

export const HeaderNav: React.FC<{ data: HeaderType }> = ({ data }) => {
  const navItems = data?.navItems || [];

  return (
    <nav className="flex items-center gap-3">
      {navItems.map(({ link }, i) => {
        return (
          <CMSLink
            key={i}
            {...link}
            appearance="link"
            className="bg-neutral/50 text-neutral-content border-neutral/20 hover:bg-neutral/70 border shadow-none transition hover:shadow-md"
          />
        );
      })}
      {/* <Link href="/search">
        <span className="sr-only">Search</span>
        <SearchIcon className="text-neutral-content w-5 font-semibold" />
      </Link> */}
    </nav>
  );
};
