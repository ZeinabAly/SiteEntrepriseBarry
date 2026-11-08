import Link from "next/link";

type Variant = "primary" | "secondary" | "secondary-light";

const base =
  "btn-shine inline-flex items-center justify-center gap-2 rounded-md px-4 text-[0.95rem] font-semibold transition duration-200 hover:-translate-y-0.5 duration-300 active:translate-y-0 active:scale-[0.985] motion-reduce:transition-none motion-reduce:hover:translate-y-0";
const sizes = { md: "h-12", sm: "h-11" } as const;
const variants: Record<Variant, string> = {
  primary: "bg-hot-deep text-white hover:bg-hot-deeper hover:shadow-[0_12px_24px_-12px_rgba(168,60,5,0.7)]",
  secondary: "border-[1.5px] border-ink text-ink hover:bg-ink hover:text-white",
  "secondary-light": "border-[1.5px] border-white/70 text-white hover:bg-white hover:text-ink",
};

type Props = {
  href: string;
  variant?: Variant;
  className?: string;
  children: React.ReactNode;
  external?: boolean;
  size?: keyof typeof sizes;
};

export function ButtonLink({ href, variant = "primary", className = "", children, external, size = "sm" }: Props) {
  const cls = `${base} ${sizes[size]} ${variants[variant]} ${className}`;
  // tel:, mailto: et liens externes : balise <a> classique
  if (external || /^(tel:|mailto:|https?:)/.test(href)) {
    return (
      <a href={href} className={cls} {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}>
        {children}
      </a>
    );
  }
  return (
    <Link href={href} className={cls}>
      {children}
    </Link>
  );
}

