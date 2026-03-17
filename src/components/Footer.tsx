import Link from "next/link";

const NAV_ITEMS = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export default function Footer() {
  return (
    <footer className="bg-navy text-white/65 px-6 pt-11 pb-7">
      <div className="max-w-[1100px] mx-auto">
        <div className="flex justify-between flex-wrap gap-5 mb-7">
          <div>
            <p className="text-white font-bold text-[17px] mb-1">
              Western Avenue Pharmacy
            </p>
            <p className="text-[13px]">
              24/7 Closed-Door Pharmacy | Specialized in Senior Living
            </p>
          </div>
          <div className="flex gap-5 text-[13px] items-center flex-wrap">
            <a
              href="tel:8187474000"
              className="text-white/75 no-underline hover:text-white transition-colors"
            >
              (818) 747-4000
            </a>
            <span>Fax: (818) 981-9333</span>
            <a
              href="mailto:Rx@Westernaverx.com"
              className="text-white/75 no-underline hover:text-white transition-colors"
            >
              Rx@Westernaverx.com
            </a>
          </div>
        </div>

        <div className="border-t border-white/[0.08] pt-[18px] flex justify-between items-center text-xs flex-wrap gap-4">
          <span>&copy; {new Date().getFullYear()} Western Avenue Pharmacy. All rights reserved.</span>
          <div className="flex gap-4">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-white/50 no-underline hover:text-white/80 transition-colors text-xs"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
