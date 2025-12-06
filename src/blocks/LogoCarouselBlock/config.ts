import type { Block } from "payload";

export const LogoCarouselBlock: Block = {
  slug: "logoCarousel",
  interfaceName: "LogoCarouselBlock",
  labels: {
    singular: "Logo Carousel",
    plural: "Logo Carousels",
  },
  fields: [
    {
      name: "title",
      type: "text",
      label: "Block Title",
    },
    {
      name: "logos",
      type: "array",
      labels: {
        singular: "Logo",
        plural: "Logos",
      },
      required: true,
      fields: [
        {
          name: "image",
          type: "upload",
          relationTo: "media",
          required: true,
        },
        {
          name: "alt",
          type: "text",
          label: "Alt text",
        },
      ],
    },
    {
      name: "speed",
      type: "number",
      label: "Scroll speed (seconds per loop)",
      defaultValue: 30,
      min: 5,
      max: 120,
    },
    {
      name: "gap",
      type: "number",
      label: "Gap between logos (px)",
      defaultValue: 24,
      min: 0,
      max: 200,
    },
  ],
};
