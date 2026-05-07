import { defineField, defineType } from "sanity";

export const product = defineType({
  name: "product",
  title: "Product",
  type: "document",
  fields: [
    defineField({ name: "name", type: "string", validation: (rule) => rule.required() }),
    defineField({ name: "category", type: "string" }),
    defineField({ name: "priceLabel", type: "string", description: "Use Request Pricing when final price is not confirmed." }),
    defineField({ name: "description", type: "text" }),
    defineField({ name: "specs", type: "array", of: [{ type: "string" }] }),
    defineField({ name: "warranty", type: "string" }),
    defineField({ name: "image", type: "image", options: { hotspot: true } }),
    defineField({ name: "shopHref", type: "url" }),
    defineField({ name: "datasheet", type: "file" }),
  ],
});
