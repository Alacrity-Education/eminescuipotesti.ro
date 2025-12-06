import type { Block } from "payload";

export const CardBlock: Block = {
  slug: "cardBlock",
  interfaceName: "CardBlock",
  labels: {
    singular: "Card Block",
    plural: "Card Blocks",
  },
  fields: [
    {
      name: "title",
      type: "text",
      label: "Block Title",
    },
    {
      name: "cards",
      type: "array",
      label: "Cards",
      maxRows: 6, // support up to 3 cols x 2 rows on lg
      fields: [
        {
          name: "title",
          type: "text",
          required: true,
        },
        {
          name: "description",
          type: "textarea",
        },
        {
          name: "variant",
          type: "select",
          required: true,
          defaultValue: "primary",
          options: [
            { label: "Primary", value: "primary" },
            { label: "Secondary", value: "secondary" },
            { label: "Starry", value: "starry" },
          ],
        },
        // colSpan disabled per requirements
        // {
        //   name: "colSpan",
        //   type: "number",
        //   label: "Column Span (md+)",
        //   defaultValue: 1,
        //   admin: { step: 1, description: "1 or 2 columns (on md and larger)" },
        //   min: 1,
        //   max: 2,
        // },
        {
          name: "rowSpan",
          type: "number",
          label: "Row Span (lg)",
          defaultValue: 1,
          admin: { step: 1, description: "1 or 2 rows (on lg screens)" },
          min: 1,
          max: 2,
        },
      ],
    },
  ],
};
