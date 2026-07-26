import Link from "next/link";
import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";

type Variant = "primary" | "outline" | "emergency" | "gold" | "ghost";
type Size = "md" | "sm";

const variantClasses: Record<Variant, string> = {
  primary: "bg-cedar-950 text-ivory-50 border-cedar-950 hover:bg-cedar-800 hover:border-cedar-800",
  outline:
    "bg-transparent border-cedar-950 text-cedar-950 hover:bg-cedar-950 hover:text-ivory-50",
  emergency: "bg-burgundy-700 text-ivory-50 border-burgundy-700 hover:bg-burgundy-800 hover:border-burgundy-800",
  gold: "bg-gold-400 text-cedar-950 border-gold-400 hover:bg-gold-300 hover:border-gold-300",
  ghost: "bg-transparent text-ivory-50 border-ivory-50/50 hover:bg-ivory-50/10",
};

const sizeClasses: Record<Size, string> = {
  md: "px-6 py-3 text-[15px]",
  sm: "px-4 py-2.5 text-[13.5px] sm:px-6 sm:py-3 sm:text-[15px]",
};

const base =
  "inline-flex items-center gap-2 rounded font-semibold " +
  "border min-h-[44px] transition-colors " +
  "focus-visible:outline focus-visible:outline-[3px] focus-visible:outline-gold-400 focus-visible:outline-offset-2";

interface CommonProps {
  variant?: Variant;
  size?: Size;
  className?: string;
  children: ReactNode;
}

type LinkProps = CommonProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & { href: string };
type NativeButtonProps = CommonProps &
  ButtonHTMLAttributes<HTMLButtonElement> & { href?: undefined };

export function Button(props: LinkProps | NativeButtonProps) {
  const { variant = "primary", size = "md", className = "", children, ...rest } = props;
  const classes = `${base} ${sizeClasses[size]} ${variantClasses[variant]} ${className}`;

  if ("href" in props && props.href) {
    const { href, ...anchorRest } = rest as AnchorHTMLAttributes<HTMLAnchorElement> & {
      href: string;
    };
    return (
      <Link href={href} className={classes} {...anchorRest}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} {...(rest as ButtonHTMLAttributes<HTMLButtonElement>)}>
      {children}
    </button>
  );
}
