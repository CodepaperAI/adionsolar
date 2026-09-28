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
  { label: "Equipment", href: "/products" },
  { label: "Projects", href: "/projects" },
  { label: "About", href: "/about" },
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
      "A permanent commercial solar project evaluated around facility energy use, available installation area, and long-term operating economics.",
    image: heroImages.caseStudies,
    stats: [
      { value: "84.2 kW", label: "System size" },
      { value: "73.4%", label: "Solar offset" },
      { value: "$413,945", label: "Projected 25-year savings" },
    ],
    sections: [
      {
        heading: "The situation",
        body: "B.I. Production Works wanted to reduce the facility’s long-term purchased-energy burden while building a system around the realities of an active commercial property.",
      },
      {
        heading: "The approach",
        body: "The project was evaluated around facility load, available installation area, electrical and equipment requirements, and the operating context of the site.",
      },
      {
        heading: "The projected result",
        body: "The current published project model shows a 73.4% solar offset and $413,945 in projected 25-year savings.",
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
    question: "How much could solar reduce my electric bill?",
    answer:
      "It depends on your usage, roof or site conditions, rate structure, system size, and other project factors. The estimate should be built from your utility data, not a generic savings percentage.",
  },
  {
    question: "Will panels change the appearance of my home?",
    answer:
      "They will be visible on many roofs. That is why layout matters. A deliberate design considers panel grouping, roofline, visibility, and electrical routing from the start.",
  },
  {
    question: "Can I add a battery?",
    answer:
      "Yes. Discuss battery goals early because storage can affect inverter selection, critical loads, equipment placement, and the overall system design.",
  },
  {
    question: "What if I have an HOA?",
    answer:
      "Share the community or HOA requirements during the estimate so appearance, placement, and documentation can be considered during design.",
  },
  {
    question: "What warranties should I compare?",
    answer:
      "Look beyond one headline number. Compare panel output coverage, product coverage, inverter and battery terms, workmanship, and what support looks like after installation.",
  },
];

export const commercialFaqs: FAQ[] = [
  {
    question: "What do you need to evaluate a project?",
    answer:
      "Recent utility data, the property address, facility type, operating schedule, approximate roof or land availability, and any known battery or resilience requirements are a strong starting point.",
  },
  {
    question: "Will installation interrupt operations?",
    answer:
      "The project plan should account for access, schedule, electrical coordination, and business operations before work begins.",
  },
  {
    question: "Can batteries support a commercial property?",
    answer:
      "Yes, depending on the use case. Storage can be evaluated for backup, critical loads, resilience, and energy-management goals as part of the overall design.",
  },
  {
    question: "How should we think about payback?",
    answer:
      "Payback depends on usage, rate structure, system size, incentives, financing, and operating goals. The business case should be modeled from actual property and utility data rather than a generic return assumption.",
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
