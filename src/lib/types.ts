export type RequestType =
  | "home"
  | "business"
  | "product"
  | "po"
  | "support"
  | "general";

export type NavItem = {
  label: string;
  href: string;
};

export type HeroVisual = {
  src: string;
  alt: string;
  label: string;
};

export type Stat = {
  value: string;
  label: string;
  detail?: string;
};

export type Product = {
  name: string;
  category: string;
  price: string;
  description: string;
  specs: string[];
  warranty: string;
  image: HeroVisual;
  shopHref: string;
};

export type CaseStudy = {
  slug: string;
  title: string;
  location: string;
  type: string;
  summary: string;
  image: HeroVisual;
  stats: Stat[];
  sections: {
    heading: string;
    body: string;
  }[];
};

export type FAQ = {
  question: string;
  answer: string;
};

export type ServiceArea = {
  slug: string;
  name: string;
  intro: string;
  proof: string;
  image: HeroVisual;
};
