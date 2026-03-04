import clsx from "clsx";

export function Button({
  children,
  variant = "primary",
  href,
  className,
  ...props
}: {
  children: React.ReactNode;
  variant?: "primary" | "outline";
  href?: string;
  className?: string;
} & React.ButtonHTMLAttributes<HTMLButtonElement>) {
  const base =
    "inline-flex items-center justify-center px-7 py-3.5 text-[0.9375rem] font-heading font-semibold rounded-lg transition-all duration-200 cursor-pointer";

  const variants = {
    primary:
      "bg-gold-400 text-navy-900 hover:bg-gold-500 active:bg-gold-600 shadow-sm hover:shadow-md",
    outline:
      "border-2 border-white/20 text-white hover:bg-white/10 active:bg-white/15",
  };

  const classes = clsx(base, variants[variant], className);

  if (href) {
    return (
      <a href={href} className={classes}>
        {children}
      </a>
    );
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}
