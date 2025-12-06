import clsx from 'clsx'
import React from 'react'
import RichText from '@/components/RichText'

import type { Post, RelatedPostsBlock as RelatedPostsProps } from '@/payload-types'

import { Card } from '../../components/Card'
import { DefaultTypedEditorState } from '@payloadcms/richtext-lexical'

export const RelatedPostsBlock: React.FC<RelatedPostsProps> = (props) => {
  const { title, className, docs, introContent } = props || {}

  return (
    <div className="w-full">
      {title && (
        <h2 className="text-primary py-10 text-center text-base font-semibold md:text-3xl">
          {title}
        </h2>
      )}
      <div className={clsx('lg:container', className)}>
        {introContent && <RichText data={introContent} enableGutter={false} />}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 items-stretch">
          {docs?.map((doc, index) => {
            if (typeof doc === 'string') return null

            return <Card key={index} doc={doc} relationTo="posts" showCategories />
          })}
        </div>
      </div>
    </div>
  )
}
