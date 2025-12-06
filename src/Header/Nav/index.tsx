"use client";

import React from "react";

import type { Header as HeaderType } from "@/payload-types";

import { CMSLink } from "@/components/Link";
import Link from "next/link";
import { HamIcon, MenuIcon, SearchIcon } from "lucide-react";
import { Hamburger } from "@payloadcms/ui";

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
      <details className="dropdown dropdown-end sm:hidden">
        <summary className="btn btn-ghost btn-xs m-1">
          <MenuIcon className="h-full" />
        </summary>
        <ul className="menu dropdown-content rounded-box bg-neutral/20 z-1 mt-3 w-52 p-2 shadow-sm backdrop-blur-md">
          {navItems.map(({ link }, i) => {
            return (
              <li>
                <CMSLink
                  key={i}
                  {...link}
                  appearance="link"
                  className="bg-neutral/50 text-neutral-content border-neutral/20 hover:bg-neutral/70 border shadow-none transition hover:shadow-md"
                />
              </li>
            );
          })}
        </ul>
      </details>
    </nav>
  );
};
