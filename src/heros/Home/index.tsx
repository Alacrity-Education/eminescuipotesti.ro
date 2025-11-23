"use client";
import { useHeaderTheme } from "@/providers/HeaderTheme";
import React, { useEffect } from "react";

import type { Page } from "@/payload-types";
import { Media } from "@/components/Media";

export const HomeHero: React.FC<Page["hero"]> = ({
  media,
  title,
  subtitle,
}) => {
  const { setHeaderTheme } = useHeaderTheme();

  useEffect(() => {
    setHeaderTheme("dark");
  });

  return (
    <div
      className="relative -mt-[10.4rem] flex h-screen items-center justify-center overflow-hidden text-white"
      data-theme="dark"
    >
      <div className="font-base relative z-20 container mb-8 flex h-full items-end justify-start">
        <div className="pb-4 md:text-start">
          {title && (
            <h1 className="mb-6 max-w-full text-5xl font-semibold sm:max-w-2/3 md:max-w-lg md:text-7xl xl:text-8xl">
              {title}
            </h1>
          )}
          {subtitle && (
            <p className="mb-6 max-w-full text-2xl text-balance sm:max-w-lg md:text-4xl xl:max-w-2xl xl:text-5xl">
              {subtitle}
            </p>
          )}
        </div>
      </div>

      <div className="absolute inset-0 z-0 select-none">
        {/* Dark Overlay */}
        {/* Changed to absolute inset-0 to ensure it actually covers the image */}
        <div className="absolute inset-0 z-10 bg-linear-to-t from-black via-transparent via-70% to-transparent opacity-70"></div>

        {/* Media Component */}
        {media && typeof media === "object" && (
          <Media
            fill
            priority
            resource={media}
            pictureClassName="absolute h-screen w-[160vh] left-1/2 -ml-[80vh] sm:h-full sm:w-full sm:left-0 sm:ml-0"
            imgClassName="object-cover z-0 animate-ken-burns sm:animate-none"
          />
        )}
      </div>
    </div>
  );
};
