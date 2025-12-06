import type { GlobalConfig } from 'payload'

import { link } from '@/fields/link'
import { revalidateFooter } from './hooks/revalidateFooter'

export const Footer: GlobalConfig = {
  slug: 'footer',
  access: {
    read: () => true,
  },
  fields: [
    // Brand (logo only; text will be part of the asset)
    {
      name: 'brand',
      type: 'group',
      fields: [
        { name: 'logo', type: 'upload', relationTo: 'media' },
      ],
    },
    // Sections (editable columns)
    {
      name: 'sections',
      type: 'array',
      labels: { singular: 'Section', plural: 'Sections' },
      maxRows: 6,
      fields: [
        { name: 'title', type: 'text', required: true },
        {
          name: 'links',
          type: 'array',
          maxRows: 12,
          fields: [
            link({ appearances: false }),
          ],
        },
        { name: 'colStartLg', type: 'number', min: 1, max: 4 },
      ],
      admin: { initCollapsed: true },
    },
    // Bottom credit text
    {
      name: 'credit',
      type: 'text',
      defaultValue: 'Dezvoltat de Alacrity Education',
    },
  ],
  hooks: {
    afterChange: [revalidateFooter],
  },
}
