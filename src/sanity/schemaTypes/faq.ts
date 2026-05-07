import { defineField, defineType } from "sanity";

export const faq = defineType({
  name: "faq",
  title: "FAQ",
  type: "document",
  fields: [
    defineField({ name: "question", type: "string", validation: (rule) => rule.required() }),
    defineField({ name: "answer", type: "text", validation: (rule) => rule.required() }),
    defineField({
      name: "audience",
      type: "string",
      options: {
        list: ["home", "business", "product", "po", "support", "general"],
      },
    }),
  ],
});
