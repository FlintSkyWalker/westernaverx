import { ReactNode } from "react";

export default function FeatureRow({
  icon,
  title,
  desc,
}: {
  icon: ReactNode;
  title: string;
  desc: string;
}) {
  return (
    <div className="flex gap-[18px] items-start p-[22px_24px] rounded-[14px] bg-warm transition-all duration-300">
      <div className="w-11 h-11 rounded-[11px] bg-teal flex items-center justify-center text-white shrink-0">
        {icon}
      </div>
      <div>
        <h3 className="font-bold text-base text-navy mb-1.5">{title}</h3>
        <p className="text-text-light text-sm leading-[1.7]">{desc}</p>
      </div>
    </div>
  );
}
