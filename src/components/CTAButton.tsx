import Link from "next/link";
import type { ReactNode } from "react";
import { ArrowIcon } from "@/components/ArrowIcon";

type CTAButtonProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "dark" | "light" | "ghost";
  external?: boolean;
  onClick?: () => void;
};

const variantClasses = {
  primary: "bg-[#f78c2d] text-[#241034] shadow-[0_22px_55px_-32px_rgba(247,140,45,0.75)]",
  dark: "bg-[#482366] text-white shadow-[0_24px_55px_-32px_rgba(72,35,102,0.75)]",
  light: "bg-[#fffdf8] text-[#482366] shadow-[0_24px_55px_-36px_rgba(72,35,102,0.55)]",
  ghost: "bg-white/10 text-white ring-1 ring-white/18",
};

export function CTAButton({
  href,
  children,
  variant = "primary",
  external = false,
  onClick,
}: CTAButtonProps) {
  const classes = `group inline-flex min-h-12 items-center justify-center gap-3 rounded-full px-2 py-2 pl-5 text-center text-[0.78rem] font-bold uppercase tracking-[0.14em] transition-all duration-700 bezier-smooth hover:-translate-y-1 active:scale-[0.98] sm:pl-6 sm:text-sm sm:tracking-[0.16em] ${variantClasses[variant]}`;
  const content = (
    <>
      <span>{children}</span>
      <span className="grid size-9 place-items-center rounded-full bg-white/22 text-current transition-transform duration-700 bezier-smooth group-hover:translate-x-1 group-hover:-translate-y-[1px]">
        <ArrowIcon className="size-4" />
      </span>
    </>
  );

  if (external) {
    return (
      <a href={href} className={classes} target="_blank" rel="noreferrer" onClick={onClick}>
        {content}
      </a>
    );
  }

  return (
    <Link href={href} className={classes} onClick={onClick}>
      {content}
    </Link>
  );
}
