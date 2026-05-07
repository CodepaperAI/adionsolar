import type { CaseStudy, FAQ, NavItem, Product, ServiceArea, Stat } from "@/lib/types";

export const site = {
  name: "Adion Solar",
  tagline: "A B.I. Company",
  url: "https://adionsolar.com",
  phone: "(706) 407-4400",
  phoneHref: "tel:+17064074400",
  email: "gogreen@adionsolar.com",
  address: "1331 Lions Club Road, Madison, GA 30650",
  shopUrl: "https://shop.adionsolar.com",
};

export const navItems: NavItem[] = [
  { label: "Home Solar", href: "/home-solar" },
  { label: "Commercial", href: "/commercial-solar" },
  { label: "Products", href: "/products" },
  { label: "Case Studies", href: "/case-studies" },
  { label: "Resources", href: "/resources" },
  { label: "Contact", href: "/contact" },
];

export const heroImages = {
  home: {
    src: "https://images.pexels.com/photos/9875441/pexels-photo-9875441.jpeg?auto=compress&cs=tinysrgb&w=1800",
    alt: "Solar panels installed across a sunlit residential roof",
    label: "Georgia roofline",
  },
  residential: {
    src: "https://images.pexels.com/photos/9875416/pexels-photo-9875416.jpeg?auto=compress&cs=tinysrgb&w=1800",
    alt: "Close view of residential solar panels on a clean roof plane",
    label: "Home installation",
  },
  commercial: {
    src: "https://images.pexels.com/photos/159397/solar-panel-array-power-sun-electricity-159397.jpeg?auto=compress&cs=tinysrgb&w=1800",
    alt: "Large commercial solar panel array under direct sun",
    label: "Commercial array",
  },
  products: {
    src: "https://images.pexels.com/photos/9893729/pexels-photo-9893729.jpeg?auto=compress&cs=tinysrgb&w=1800",
    alt: "Solar technician inspecting equipment and panel hardware",
    label: "Equipment guidance",
  },
  caseStudies: {
    src: "https://images.pexels.com/photos/159397/solar-panel-array-power-sun-electricity-159397.jpeg?auto=compress&cs=tinysrgb&w=1800",
    alt: "Large solar panel installation stretching into sunlight",
    label: "Measured results",
  },
  about: {
    src: "https://images.pexels.com/photos/9875430/pexels-photo-9875430.jpeg?auto=compress&cs=tinysrgb&w=1800",
    alt: "Solar team working near rooftop panels",
    label: "Madison, Georgia",
  },
  contact: {
    src: "https://images.pexels.com/photos/9875409/pexels-photo-9875409.jpeg?auto=compress&cs=tinysrgb&w=1800",
    alt: "Solar panels and inverter equipment in warm sunlight",
    label: "Request routing",
  },
};

export const credibilityStats: Stat[] = [
  { value: "30 yr", label: "Panel warranty", detail: "ADiON PV warranty term" },
  { value: "12 yr", label: "Inverter warranty", detail: "Sol-Ark published warranty" },
  { value: "84.2 kW", label: "Verified project", detail: "B.I. Production Works system" },
  { value: "73.4%", label: "Solar offset", detail: "Verified project metric" },
];

export const audiencePaths = [
  {
    title: "Home solar",
    href: "/home-solar",
    eyebrow: "Residential",
    copy: "Clear estimates for Georgia homes, roof fit, batteries, aesthetics, and practical next steps.",
    image: heroImages.residential,
  },
  {
    title: "Commercial solar",
    href: "/commercial-solar",
    eyebrow: "Business",
    copy: "Utility analysis, incentive guidance, and operational planning for business properties.",
    image: heroImages.commercial,
  },
  {
    title: "Products & PO",
    href: "/products",
    eyebrow: "Equipment",
    copy: "Panels, Sol-Ark inverters, batteries, datasheets, bulk support, and purchase-order routing.",
    image: heroImages.products,
  },
];

export const products: Product[] = [
  {
    name: "ADiON PV540 G1",
    category: "Solar panel",
    price: "$300",
    description: "High-output solar module for residential, commercial, and project buyers.",
    specs: ["540 W module", "Mono PERC half-cut", "Project-ready pallet support"],
    warranty: "30-year warranty",
    image: {
      src: "https://images.pexels.com/photos/9875441/pexels-photo-9875441.jpeg?auto=compress&cs=tinysrgb&w=1200",
      alt: "Solar panel modules on a residential roof",
      label: "Panel",
    },
    shopHref: "https://shop.adionsolar.com",
  },
  {
    name: "Sol-Ark 12K",
    category: "Hybrid inverter",
    price: "$4,950",
    description: "Battery-ready inverter for homes and small commercial energy systems.",
    specs: ["Hybrid inverter", "Battery-ready", "Generator-compatible"],
    warranty: "12-year warranty",
    image: {
      src: "https://images.pexels.com/photos/9893729/pexels-photo-9893729.jpeg?auto=compress&cs=tinysrgb&w=1200",
      alt: "Technician inspecting solar equipment and hardware",
      label: "Inverter",
    },
    shopHref: "https://shop.adionsolar.com",
  },
  {
    name: "Sol-Ark 15K",
    category: "Hybrid inverter",
    price: "$6,530",
    description: "Higher-capacity inverter for larger home and commercial projects.",
    specs: ["15K class", "Whole-property ready", "Monitoring capable"],
    warranty: "12-year warranty",
    image: {
      src: "https://images.pexels.com/photos/8853502/pexels-photo-8853502.jpeg?auto=compress&cs=tinysrgb&w=1200",
      alt: "Technician checking solar control hardware",
      label: "Power control",
    },
    shopHref: "https://shop.adionsolar.com",
  },
  {
    name: "ADiON LiFePO4",
    category: "Battery",
    price: "$2,500",
    description: "Battery storage option for backup power and solar self-consumption.",
    specs: ["LiFePO4 chemistry", "Backup ready", "Pairs with hybrid inverters"],
    warranty: "Confirm final terms",
    image: {
      src: "https://images.pexels.com/photos/9800029/pexels-photo-9800029.jpeg?auto=compress&cs=tinysrgb&w=1200",
      alt: "Battery and energy storage equipment in a clean utility room",
      label: "Battery",
    },
    shopHref: "https://shop.adionsolar.com",
  },
];

export const caseStudies: CaseStudy[] = [
  {
    slug: "bi-production-works",
    title: "B.I. Production Works",
    location: "Madison, Georgia",
    type: "Commercial",
    summary:
      "A verified commercial system proving how Adion's B.I. heritage translates into measurable solar performance.",
    image: heroImages.caseStudies,
    stats: [
      { value: "84.2 kW", label: "System size" },
      { value: "73.4%", label: "Solar offset" },
      { value: "$413,945", label: "Projected 25-year savings" },
    ],
    sections: [
      {
        heading: "Situation",
        body: "B.I. Production Works needed a practical system that could offset a meaningful share of facility energy usage without distracting from day-to-day operations.",
      },
      {
        heading: "Solution",
        body: "Adion designed a commercial solar installation around the property load profile and available roof area, keeping project proof tied to verified numbers.",
      },
      {
        heading: "Result",
        body: "The project anchors Adion's proof story: 84.2 kW of system capacity, 73.4% solar offset, and $413,945 in projected 25-year savings.",
      },
    ],
  },
  {
    slug: "relax-inn",
    title: "Relax Inn",
    location: "Georgia",
    type: "Hospitality",
    summary:
      "A hospitality property example for business owners evaluating predictable energy costs.",
    image: {
      src: "https://images.pexels.com/photos/433308/pexels-photo-433308.jpeg?auto=compress&cs=tinysrgb&w=1600",
      alt: "Hotel building with warm exterior light",
      label: "Hospitality",
    },
    stats: [
      { value: "Hotel", label: "Application" },
      { value: "B2B", label: "Buyer path" },
      { value: "Verified", label: "Project proof" },
    ],
    sections: [
      {
        heading: "Situation",
        body: "Hospitality operators need energy improvements that do not interrupt guest experience or maintenance schedules.",
      },
      {
        heading: "Solution",
        body: "A commercial solar plan should make utility-cost context, installation planning, and operational fit easy to review.",
      },
      {
        heading: "Result",
        body: "The case focuses on the project type, property context, and next estimate step until approved production and savings metrics are available.",
      },
    ],
  },
  {
    slug: "lake-oconee-residence",
    title: "Lake Oconee Residence",
    location: "Lake Oconee, Georgia",
    type: "Residential",
    summary:
      "A premium homeowner path focused on roof fit, appearance, battery interest, and local follow-through.",
    image: {
      src: "https://images.pexels.com/photos/9875416/pexels-photo-9875416.jpeg?auto=compress&cs=tinysrgb&w=1600",
      alt: "Clean solar panels across a residential roof",
      label: "Residential",
    },
    stats: [
      { value: "Home", label: "Application" },
      { value: "Local", label: "Buyer path" },
      { value: "Roof fit", label: "Primary question" },
    ],
    sections: [
      {
        heading: "Situation",
        body: "Premium homes around Lake Oconee need solar guidance that respects curb appeal, roofline, HOA concerns, and long-term ownership plans.",
      },
      {
        heading: "Solution",
        body: "The residential path leads with fit, aesthetics, batteries, warranty, and a simple estimate request before deeper technical detail.",
      },
      {
        heading: "Result",
        body: "Future residential proof can publish project photos and metrics once they are approved by the homeowner.",
      },
    ],
  },
];

export const homeFaqs: FAQ[] = [
  {
    question: "How do I know if my roof is a fit?",
    answer:
      "Adion starts with address, roof exposure, utility usage, and shade review before recommending a system size or next step.",
  },
  {
    question: "Will panels change the appearance of my home?",
    answer:
      "Panel placement is reviewed against roofline, visibility, and electrical constraints so the design fits the property rather than feeling bolted on.",
  },
  {
    question: "Can I add a battery?",
    answer:
      "Yes. Battery interest is captured during the estimate so Adion can guide inverter, backup, and storage options early.",
  },
  {
    question: "What if I have HOA questions?",
    answer:
      "Share the community or HOA context during the request. Adion can discuss appearance, roof placement, and any documentation needed before you move forward.",
  },
  {
    question: "How long does the estimate process take?",
    answer:
      "The first step is a property and utility review. Timing depends on the roof, utility data, battery interest, and how quickly the needed details are available.",
  },
  {
    question: "What warranties should I ask about?",
    answer:
      "Ask about panel output warranty, product warranty, inverter coverage, battery terms, workmanship, and what support looks like after installation.",
  },
  {
    question: "Does Adion make exact savings promises?",
    answer:
      "No. Exact claims are shown only when substantiated by project data. Estimates are framed as guidance until Adion reviews the property.",
  },
];

export const commercialFaqs: FAQ[] = [
  {
    question: "What does Adion need for a business estimate?",
    answer:
      "Utility usage, property type, rough roof or land availability, timeline, and any operational constraints that affect installation planning.",
  },
  {
    question: "Will installation interrupt operations?",
    answer:
      "Commercial planning should account for access, schedule, operations, and electrical coordination before installation begins.",
  },
  {
    question: "Can Adion help with incentives?",
    answer:
      "Adion can review incentive considerations, but the site avoids tax or savings guarantees unless the client provides substantiation.",
  },
  {
    question: "How do we think about payback period?",
    answer:
      "Payback depends on usage, rate structure, system size, incentives, financing, and operating goals. Adion starts by reviewing your real utility context.",
  },
  {
    question: "Can batteries support a business property?",
    answer:
      "Battery storage can be reviewed for backup, energy management, and resilience goals, but the right fit depends on critical loads and system design.",
  },
  {
    question: "Who handles maintenance and monitoring questions?",
    answer:
      "Use the business estimate or support path to discuss monitoring expectations, equipment support, and any maintenance planning needed for the property.",
  },
];

export const serviceAreas: ServiceArea[] = [
  {
    slug: "madison-ga",
    name: "Madison, GA",
    intro:
      "Solar estimates and product guidance from Adion's local base on Lions Club Road.",
    proof:
      "Madison-area customers can start with local contact information, B.I. Production Works proof, and a request path for home, business, or product support.",
    image: heroImages.about,
  },
  {
    slug: "lake-oconee",
    name: "Lake Oconee",
    intro:
      "Residential and premium-property solar guidance for homes around Lake Oconee.",
    proof:
      "Lake Oconee homeowners can ask about roofline visibility, panel placement, battery backup, and a practical estimate path.",
    image: {
      src: "https://images.pexels.com/photos/1430677/pexels-photo-1430677.jpeg?auto=compress&cs=tinysrgb&w=1600",
      alt: "Lakefront homes and warm Georgia landscape",
      label: "Lake Oconee",
    },
  },
  {
    slug: "greensboro-ga",
    name: "Greensboro, GA",
    intro:
      "Solar planning for Greensboro homes, businesses, and product buyers.",
    proof:
      "Greensboro property owners can route home estimates, business estimates, product questions, and PO support from one place.",
    image: heroImages.residential,
  },
  {
    slug: "eatonton-ga",
    name: "Eatonton, GA",
    intro:
      "Practical solar estimates and equipment support for Eatonton-area properties.",
    proof:
      "Eatonton-area customers can share property details, utility context, equipment questions, or support needs for the right follow-up.",
    image: heroImages.commercial,
  },
];
