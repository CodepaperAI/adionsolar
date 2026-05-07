import { defineField, defineType } from "sanity";

export const serviceArea = defineType({
  name: "serviceArea",
  title: "Service Area",
  type: "document",
  fields: [
    defineField({ name: "name", type: "string", validation: (rule) => rule.required() }),
    defineField({ name: "slug", type: "slug", options: { source: "name" } }),
    defineField({ name: "intro", type: "text" }),
    defineField({ name: "proof", type: "text" }),
    defineField({ name: "image", type: "image", options: { hotspot: true } }),
    defineField({ name: "seoDescription", type: "text" }),
  ],
});
