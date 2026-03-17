import { ReactNode } from "react";

export default function SubHero({
  badge,
  title,
  subtitle,
}: {
  badge?: ReactNode;
  title: string;
  subtitle: string;
}) {
  return (
    <div className="sub-hero">
      <div className="max-w-[1100px] mx-auto px-0">
        {badge && <div className="badge mb-4">{badge}</div>}
        <h1
          className="font-serif font-bold mb-4"
          style={{ fontSize: "clamp(30px, 5vw, 48px)" }}
        >
          {title}
        </h1>
        <p className="text-white/75 text-[17px] leading-[1.7] max-w-[600px]">
          {subtitle}
        </p>
      </div>
    </div>
  );
}
