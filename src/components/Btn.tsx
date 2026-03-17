import { ReactNode } from "react";
import Link from "next/link";

export default function Btn({
  children,
  outline,
  href,
}: {
  children: ReactNode;
  outline?: boolean;
  href?: string;
}) {
  const base =
    "inline-flex items-center gap-2 px-8 py-3.5 rounded-full text-[15px] font-semibold cursor-pointer transition-all duration-300 no-underline";
  const style = outline
    ? `${base} bg-transparent text-white border-2 border-white/40 hover:border-white hover:bg-white/10`
    : `${base} bg-teal text-white border-none hover:bg-teal-dark`;

  if (href) {
    return (
      <Link href={href} className={style}>
        {children}
      </Link>
    );
  }

  return <button className={style}>{children}</button>;
}
