import type { Block } from "payload";
import {
  FixedToolbarFeature,
  HeadingFeature,
  InlineToolbarFeature,
  lexicalEditor,
} from "@payloadcms/richtext-lexical";

export const ImageContentBlock: Block = {
  slug: "imageContent",
  interfaceName: "ImageContentBlock",
  labels: {
    plural: "Image Content Blocks",
    singular: "Image Content Block",
  },
  fields: [
    {
      name: "title",
      type: "text",
      label: "Block Title",
    },
    {
      name: "cells",
      type: "array",
      label: "Cells",
      minRows: 1,
      maxRows: 4,
      labels: {
        plural: "Cells",
        singular: "Cell",
      },
      fields: [
        {
          name: "type",
          type: "select",
          label: "Cell Type",
          defaultValue: "text",
          options: [
            { label: "Text", value: "text" },
            { label: "Media", value: "media" },
          ],
          required: true,
        },
        {
          name: "spanRows",
          type: "checkbox",
          label: "Span two rows (md+)",
        },
        {
          name: "richText",
          type: "richText",
          label: "Text",
          admin: {
            condition: (data, siblingData) => siblingData?.type === "text",
          },
          editor: lexicalEditor({
            features: ({ rootFeatures }) => {
              return [
                ...rootFeatures,
                HeadingFeature({ enabledHeadingSizes: ["h2", "h3", "h4"] }),
                FixedToolbarFeature(),
                InlineToolbarFeature(),
              ];
            },
          }),
        },
        {
          name: "media",
          type: "upload",
          relationTo: "media",
          label: "Media",
          admin: {
            condition: (data, siblingData) => siblingData?.type === "media",
          },
        },
      ],
    },
  ],
};

