export default function SectionHead({
  tag,
  title,
  sub,
  light,
}: {
  tag: string;
  title: string;
  sub?: string;
  light?: boolean;
}) {
  return (
    <div className="mb-12">
      <p
        className={`font-semibold text-[13px] tracking-[2px] uppercase mb-2.5 ${
          light ? "text-white/60" : "text-teal"
        }`}
      >
        {tag}
      </p>
      <h2
        className={`font-serif font-bold leading-[1.2] ${
          light ? "text-white" : "text-navy"
        } ${sub ? "mb-3.5" : ""}`}
        style={{ fontSize: "clamp(26px, 4vw, 40px)" }}
      >
        {title}
      </h2>
      {sub && (
        <p
          className={`text-base leading-[1.7] max-w-[560px] ${
            light ? "text-white/70" : "text-text-light"
          }`}
        >
          {sub}
        </p>
      )}
    </div>
  );
}
