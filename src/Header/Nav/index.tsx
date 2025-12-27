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
            className="btn btn-sm btn-ghost bg-base-100/20 text-white hidden md:inline-flex "
          />
        );
      })}
      <details className="dropdown dropdown-end md:hidden">
        <summary className="btn btn-ghost btn-xs m-1">
          <MenuIcon className="h-full" />
        </summary>
        <ul className="menu dropdown-content rounded-box bg-base-100/80 z-1 mt-3 w-52 p-1 shadow-sm backdrop-blur-xl">
          {navItems.map(({ link }, i) => {
            return (
              <li key={i}>
                <CMSLink

                  {...link}
                  appearance="link"
                  className="btn btn-xs   btn-neutral text-white "
                />
              </li>
            );
          })}
        </ul>
      </details>
    </nav>
  );
};
