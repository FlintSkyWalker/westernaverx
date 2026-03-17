const NAV_ITEMS = ["Home", "Services", "About", "Contact"];

export default function Footer() {
  return (
    <footer className="bg-navy text-white/70 px-6 pt-12 pb-8">
      <div className="max-w-[1100px] mx-auto">
        <div className="flex justify-between items-center flex-wrap gap-5 mb-8">
          <div>
            <p className="text-white font-bold text-lg mb-1.5">
              Western Avenue Pharmacy
            </p>
            <p className="text-sm">
              Your partner in senior living pharmacy care.
            </p>
          </div>
          <div className="flex gap-6">
            <a
              href="tel:8187474000"
              className="text-white/80 no-underline text-sm hover:text-white transition-colors"
            >
              (818) 747-4000
            </a>
            <a
              href="mailto:Rx@Westernaverx.com"
              className="text-white/80 no-underline text-sm hover:text-white transition-colors"
            >
              Rx@Westernaverx.com
            </a>
          </div>
        </div>

        <div className="border-t border-white/10 pt-5 flex justify-between items-center text-[13px] flex-wrap gap-4">
          <p>&copy; {new Date().getFullYear()} Western Avenue Pharmacy. All rights reserved.</p>
          <div className="flex gap-5">
            {NAV_ITEMS.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-white/60 no-underline hover:text-white/90 transition-colors text-[13px]"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
