import React from "react";

import type { CallToActionBlock as CTABlockProps } from "@/payload-types";

import RichText from "@/components/RichText";
import { CMSLink } from "@/components/Link";

export const StarryCTA: React.FC<CTABlockProps> = ({ links, richText }) => {
  return (
    <div className={"container mx-auto max-w-2xl lg:max-w-4xl"}>
    <div className="relative h-max min-h-64 rounded-xl shadow-2xl sm:min-h-64">
      <StarryBackground />
      <div className="relative z-50 flex h-max min-h-64 w-full flex-col rounded p-8 sm:min-h-64">
        <div className="max-w-3xl">
          {richText && (
            <RichText
              className="mb-0 text-start text-white!"
              data={richText}
              enableGutter={false}
              color="white"
            />
          )}
        </div>
        <div className="grow"></div>
        <div className="max-w flex flex-row gap-8">
          {(links || []).map(({ link }, i) => {
            return <CMSLink key={i} size="lg" {...link} />;
          })}
        </div>
      </div>
    </div>
    </div>
  );
};

const Stars = ({ className }: { className?: string }) => {
  return (
    <svg
      // Set 100% width and height for responsiveness, while preserving the original viewBox ratio
      className={`h-full w-full ${className}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      // Added a key for stability, though not strictly required here
      key="starry-svg-background"
    >
      {/* Use g filter */}
      <g filter="url(#filter0_n_92_1326)">
        {/* This rect defines the bounds for the stars (SourceGraphic for clipping).
          The black fill is no longer included in the final merge step of the filter.
        */}
        <rect width="100%" height="100%" rx="10" fill="black" />
      </g>

      {/* Define the filter for the star effect */}
      <defs>
        <filter
          id="filter0_n_92_1326"
          x="0"
          y="0"
          width="100%"
          height="100%"
          filterUnits="userSpaceOnUse"
          // --- Converted to camelCase ---
          colorInterpolationFilters="sRGB"
        >
          {/* Converted to camelCase */}
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          {/* Converted to camelCase */}
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.40000000298023224 0.30000000298023224"
            stitchTiles="stitch"
            numOctaves="3"
            result="noise"
            seed="9963"
          />
          {/* Converted to camelCase */}
          <feColorMatrix
            in="noise"
            type="luminanceToAlpha"
            result="alphaNoise"
          />
          {/* Converted to camelCase */}
          <feComponentTransfer in="alphaNoise" result="coloredNoise1">
            <feFuncA
              type="discrete"
              tableValues="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 1 1 1 1 1 1 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 "
            />
          </feComponentTransfer>
          <feComposite
            operator="in"
            in2="shape"
            in="coloredNoise1"
            result="noise1Clipped"
          />
          {/* Converted to camelCase */}
          <feFlood floodColor="rgba(255, 255, 255, 0.8)" result="color1Flood" />
          <feComposite
            operator="in"
            in2="noise1Clipped"
            in="color1Flood"
            result="color1"
          />
          <feMerge result="effect1_noise_92_1326">
            {/* Removed <feMergeNode in="shape" /> to make the black background transparent */}
            <feMergeNode in="color1" />
          </feMerge>
        </filter>
      </defs>
    </svg>
  );
};

const BlobBig = ({ className = "" }) => (
  <svg fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <path
      d="M54.4483 44.1112L211.687 10.7204V0.669922C244.761 10.4756 312.57 35.9639 319.221 59.471C327.534 88.8549 328.806 131.595 211.687 161.318C94.5679 191.04 120.728 163.636 34.0435 116.235C-35.3043 78.3149 18.7517 52.3524 54.4483 44.1112Z"
      fill="currentColor"
    />
    <path
      d="M54.4483 44.1112L211.687 10.7204V0.669922C244.761 10.4756 312.57 35.9639 319.221 59.471C327.534 88.8549 328.806 131.595 211.687 161.318C94.5679 191.04 120.728 163.636 34.0435 116.235C-35.3043 78.3149 18.7517 52.3524 54.4483 44.1112Z"
      stroke="currentColor"
    />
  </svg>
);

/**
 * BlobLong: Component for the long, horizontal blob shape.
 * The fill is set to 'currentColor' to be easily customized via Tailwind's fill classes.
 */
const BlobLong = ({ className = "" }) => (
  <svg fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <path
      d="M69.1733 11.511L263.145 62.3096L264.158 59.1571C303.261 75.1208 382.89 109.54 388.581 119.505C395.695 131.961 392.928 145.863 247.96 109.548C102.991 73.2319 137.466 74.8303 37.1662 26.183C-43.0734 -12.7348 25.0711 0.185894 69.1733 11.511Z"
      fill="currentColor"
    />
  </svg>
);

/**
 * BlobSmall: Component for the smallest blob shape.
 * The fill is set to 'currentColor' to be easily customized via Tailwind's fill classes.
 */
const BlobSmall = ({ className = "" }) => (
  <svg fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <path
      d="M20.6076 17.3263L80.6708 4.00858V0C93.3045 3.91095 119.207 14.0768 121.747 23.4525C124.923 35.1721 125.409 52.2188 80.6708 64.0733C35.9328 75.9279 45.9257 64.9981 12.8132 46.0926C-13.6768 30.9682 6.97194 20.6132 20.6076 17.3263Z"
      fill="currentColor"
    />
  </svg>
);

const StarryBackground = () => {
  return (
    <div className="absolute top-0 left-0 z-10 h-full w-full overflow-clip rounded-xl select-none">
      <BlobBig className="absolute -top-10 -left-30 z-20 h-20 w-20 text-yellow-300 opacity-50 blur-2xl md:h-40 md:w-40" />
      <BlobLong className="absolute -bottom-10 left-20 z-20 h-48 w-md text-yellow-300 blur-2xl sm:right-20" />
      <BlobSmall className="absolute right-0 bottom-40 z-20 h-20 w-20 text-yellow-300 blur-2xl sm:bottom-0 sm:h-36 sm:w-36" />
      <BlobSmall className="absolute top-0 left-1/2 z-20 h-10 w-10 text-yellow-300 blur-2xl md:h-36 md:w-36" />
      <Stars className="absolute z-10 h-full w-full opacity-80" />

      <div className="via-primary absolute inset-0 z-0 h-full w-full bg-linear-to-l from-black from-[-10%] to-black to-110% brightness-75"></div>
    </div>
  );
};
