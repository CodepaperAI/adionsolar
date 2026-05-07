import { defineField, defineType } from "sanity";

export const leadSubmission = defineType({
  name: "leadSubmission",
  title: "Lead Submission",
  type: "document",
  readOnly: true,
  fields: [
    defineField({ name: "requestType", type: "string" }),
    defineField({ name: "name", type: "string" }),
    defineField({ name: "email", type: "string" }),
    defineField({ name: "phone", type: "string" }),
    defineField({ name: "message", type: "text" }),
    defineField({ name: "payload", type: "object", fields: [{ name: "raw", type: "text" }] }),
    defineField({ name: "submittedAt", type: "datetime" }),
  ],
});
