"use client";
import { useHeaderTheme } from "@/providers/HeaderTheme";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";

import type { Header } from "@/payload-types";

import { Logo } from "@/components/Logo/Logo";
import { HeaderNav } from "./Nav";

interface HeaderClientProps {
  data: Header;
}

export const HeaderClient: React.FC<HeaderClientProps> = ({ data }) => {
  return (
    <header className="font-base to-neutral/30 relative z-50 w-screen bg-linear-to-r from-[#0D1B46] via-[#2143AC] via-40% backdrop-blur-md sm:via-20% md:to-50%">
      <div className="container mx-auto flex w-full justify-between py-2">
        <Link href="/">
          <Logo loading="eager" priority="high" className="invert" />
        </Link>
        <HeaderNav data={data} />
      </div>
    </header>
  );
};
