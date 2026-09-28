"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useSearchParams } from "next/navigation";
import { Suspense, useMemo, useState } from "react";
import { trackEvent } from "@/lib/analytics";
import type { RequestType } from "@/lib/types";

const requestOptions: { value: RequestType; label: string; helper: string }[] = [
  { value: "home", label: "Home estimate", helper: "Address, bill range, roof fit, battery interest." },
  { value: "business", label: "Business solar", helper: "Company, property, utility data, timeline." },
  { value: "product", label: "Product guidance", helper: "Panel, inverter, battery, quantity, compatibility." },
  { value: "po", label: "Submit PO", helper: "Purchase-order support and bulk coordination." },
  { value: "support", label: "Product support", helper: "Model, serial, issue, and best contact path." },
  { value: "general", label: "General question", helper: "Anything else Adion should route." },
];

function ContactRouterFormInner() {
  const searchParams = useSearchParams();
  const reduceMotion = useReducedMotion();
  const initialType = (searchParams.get("type") as RequestType | null) || "home";
  const initialProduct = searchParams.get("product") || "";
  const [requestType, setRequestType] = useState<RequestType>(
    requestOptions.some((option) => option.value === initialType) ? initialType : "home",
  );
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  const activeOption = useMemo(
    () => requestOptions.find((option) => option.value === requestType) || requestOptions[0],
    [requestType],
  );

  async function submit(formData: FormData) {
    setStatus("loading");
    setMessage("");
    trackEvent("lead_form_submit_attempt", { request_type: requestType });

    const response = await fetch("/api/contact", {
      method: "POST",
      body: JSON.stringify(Object.fromEntries(formData.entries())),
      headers: { "Content-Type": "application/json" },
    });

    if (!response.ok) {
      setStatus("error");
      setMessage("Please check the required fields and try again.");
      return;
    }

    const result = (await response.json()) as { ok?: boolean; preview?: boolean };
    setStatus("success");
    setMessage(
      result.preview
        ? "Request captured for preview. Production delivery will be connected before launch."
        : "Request received. Adion will review it and follow up with the right next step.",
    );
    trackEvent("lead_form_submit_success", { request_type: requestType });
  }

  return (
    <form action={submit} className="rounded-[2rem] bg-[#482366]/8 p-2 ring-1 ring-[#482366]/8">
      <div className="rounded-[1.55rem] bg-[#fffdf8] p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.9)] md:p-8">
        <input type="hidden" name="requestType" value={requestType} />
        <input type="text" name="company_website" className="hidden" tabIndex={-1} autoComplete="off" />
        <div>
          <p className="text-[0.68rem] font-black uppercase tracking-[0.24em] text-[#f78c2d]">
            What do you need help with?
          </p>
          <div className="mt-5 grid gap-3 md:grid-cols-2">
            {requestOptions.map((option) => (
              <motion.button
                key={option.value}
                type="button"
                whileTap={reduceMotion ? undefined : { scale: 0.98 }}
                onClick={() => {
                  setRequestType(option.value);
                  trackEvent("lead_request_type_select", { request_type: option.value });
                }}
                className={`rounded-[1.25rem] p-4 text-left transition-all duration-700 bezier-smooth ${
                  requestType === option.value
                    ? "bg-[#482366] text-white"
                    : "bg-[#482366]/7 text-[#241034] hover:bg-[#482366]/12"
                }`}
              >
                <span className="block font-semibold">{option.label}</span>
                <span className={`mt-1 block text-sm ${requestType === option.value ? "text-white/62" : "text-[#665a69]"}`}>
                  {option.helper}
                </span>
              </motion.button>
            ))}
          </div>
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-3">
          <Field label="Name" name="name" required />
          <Field label="Email" name="email" type="email" required />
          <Field label="Phone" name="phone" required />
        </div>

        <div className="mt-4 grid gap-4 md:grid-cols-2">
          {requestType === "home" && (
            <>
              <Field label="Property address or ZIP" name="property" />
              <Field label="Monthly bill range" name="billRange" />
              <Field label="Battery interest" name="batteryInterest" />
              <Field label="Timeline" name="timeline" />
            </>
          )}
          {requestType === "business" && (
            <>
              <Field label="Company" name="company" />
              <Field label="Property type" name="propertyType" />
              <Field label="Monthly utility range" name="billRange" />
              <Field label="Timeline" name="timeline" />
            </>
          )}
          {requestType === "product" && (
            <>
              <Field label="Product" name="product" defaultValue={initialProduct} />
              <Field label="Quantity" name="quantity" />
              <Field label="Company" name="company" />
              <Field label="Need datasheet or compatibility help?" name="productNeed" />
            </>
          )}
          {requestType === "po" && (
            <>
              <Field label="Company" name="company" />
              <Field label="Products and quantities" name="products" />
              <Field label="PO timeline" name="timeline" />
              <Field label="Preferred response method" name="responseMethod" />
            </>
          )}
          {requestType === "support" && (
            <>
              <Field label="Product model" name="model" />
              <Field label="Serial number" name="serial" />
              <Field label="Issue type" name="issueType" />
              <Field label="Best time to reach you" name="timeline" />
            </>
          )}
          {requestType === "general" && (
            <>
              <Field label="Topic" name="topic" />
              <Field label="Preferred response method" name="responseMethod" />
            </>
          )}
        </div>

        <label className="mt-4 grid gap-2">
          <span className="text-sm font-bold text-[#482366]">Message</span>
          <textarea
            name="message"
            rows={5}
            className="resize-y rounded-[1.1rem] bg-[#482366]/7 px-4 py-3 text-base text-[#241034] outline-none ring-1 ring-transparent transition focus:ring-[#f78c2d]"
            placeholder={`Tell Adion about your ${activeOption.label.toLowerCase()} request.`}
          />
        </label>

        <div className="mt-6 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <p className="text-sm leading-6 text-[#665a69]">
            Adion reviews your request and follows up with the right next step.
          </p>
          <button
            type="submit"
            disabled={status === "loading"}
            className="group inline-flex items-center justify-center gap-3 rounded-full bg-[#f78c2d] px-6 py-4 text-sm font-black uppercase tracking-[0.16em] text-[#241034] transition-all duration-700 bezier-smooth hover:-translate-y-1 disabled:cursor-not-allowed disabled:opacity-60"
          >
            {status === "loading" && (
              <span className="form-loading-dot size-3 rounded-full bg-[#241034]" />
            )}
            {status === "loading" ? "Sending" : "Send Request"}
          </button>
        </div>
        <AnimatePresence>
          {message && (
            <motion.p
              className={`mt-4 rounded-[1rem] px-4 py-3 text-sm ${
                status === "error" ? "bg-red-50 text-red-800" : "bg-[#482366]/8 text-[#482366]"
              }`}
              initial={reduceMotion ? false : { opacity: 0, y: 10 }}
              animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
              exit={reduceMotion ? undefined : { opacity: 0, y: -6 }}
              transition={{ duration: 0.28, ease: [0.32, 0.72, 0, 1] }}
            >
              {message}
            </motion.p>
          )}
        </AnimatePresence>
      </div>
    </form>
  );
}

function Field({
  label,
  name,
  type = "text",
  required = false,
  defaultValue = "",
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  defaultValue?: string;
}) {
  return (
    <label className="grid gap-2">
      <span className="text-sm font-bold text-[#482366]">{label}</span>
      <input
        name={name}
        type={type}
        required={required}
        defaultValue={defaultValue}
        className="min-h-12 rounded-[1.1rem] bg-[#482366]/7 px-4 py-3 text-base text-[#241034] outline-none ring-1 ring-transparent transition focus:ring-[#f78c2d]"
      />
    </label>
  );
}

export function ContactRouterForm() {
  return (
    <Suspense fallback={<div className="rounded-[2rem] bg-[#482366]/8 p-8">Loading request form...</div>}>
      <ContactRouterFormInner />
    </Suspense>
  );
}
