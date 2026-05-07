import { defineField, defineType } from "sanity";

export const caseStudy = defineType({
  name: "caseStudy",
  title: "Case Study",
  type: "document",
  fields: [
    defineField({ name: "title", type: "string", validation: (rule) => rule.required() }),
    defineField({ name: "slug", type: "slug", options: { source: "title" } }),
    defineField({ name: "location", type: "string" }),
    defineField({ name: "type", type: "string" }),
    defineField({ name: "summary", type: "text" }),
    defineField({ name: "image", type: "image", options: { hotspot: true } }),
    defineField({
      name: "stats",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            { name: "value", type: "string" },
            { name: "label", type: "string" },
          ],
        },
      ],
    }),
    defineField({ name: "body", type: "array", of: [{ type: "block" }] }),
  ],
});
