'use client'
import { useHeaderTheme } from '@/providers/HeaderTheme'
import React, { useEffect } from 'react'

import type { Page } from '@/payload-types'

import { CMSLink } from '@/components/Link'
import { Media } from '@/components/Media'
import RichText from '@/components/RichText'

export const HighImpactHero: React.FC<Page['hero']> = ({ links, media, richText }) => {
  const { setHeaderTheme } = useHeaderTheme()

  useEffect(() => {
    setHeaderTheme('dark')
  })

  return (
    <div
      className="relative -mt-28 flex h-screen items-center justify-center overflow-hidden text-white sm:-mt-40"
      data-theme="dark"
    >
      {/* Foreground content */}
      <div className="font-base relative z-20 container h-screen w-screen mb-8 flex items-center justify-center">
        <div className="pb-4 md:text-start  max-w-146">
          {richText && <RichText className="mb-6 invert font-bold" data={richText} enableGutter={false} />}

          {Array.isArray(links) && links.length > 0 && (
            <ul className="flex flex-wrap gap-4">
              {links.map(({ link }, i) => {
                return (
                  <li key={i}>
                    <CMSLink {...link} />
                  </li>
                )
              })}
            </ul>
          )}
        </div>
      </div>
      <div className="absolute inset-0 z-0 select-none ">
        {/* Dark Overlay */}
        <div className="absolute inset-0 z-10 bg-linear-to-t from-black via-transparent via-90% to-transparent opacity-90" />

        {/* Media Component */}
        {media && typeof media === 'object' && (
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
  )
}
