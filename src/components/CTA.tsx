import { PhoneIcon, ArrowRight } from "./icons";

export default function CTA() {
  return (
    <section className="py-25 px-6 bg-white max-md:py-15">
      <div className="max-w-[1100px] mx-auto">
        <div
          className="relative overflow-hidden rounded-3xl px-12 py-16 text-center text-white max-md:px-6 max-md:py-10 max-md:rounded-2xl"
          style={{
            background: "linear-gradient(135deg, #0A2540 0%, #007AA3 100%)",
          }}
        >
          {/* Background glow */}
          <div
            className="absolute pointer-events-none"
            style={{
              top: "-40%", right: "-20%",
              width: "60%", height: "140%",
              background: "radial-gradient(circle, rgba(255,255,255,0.05) 0%, transparent 60%)",
            }}
          />

          <h2
            className="font-serif font-bold mb-4 relative"
            style={{ fontSize: "clamp(26px, 4vw, 38px)" }}
          >
            Ready to See What a Real Pharmacy Partnership Looks Like?
          </h2>
          <p className="text-[17px] leading-[1.7] text-white/80 max-w-[560px] mx-auto mb-8 relative">
            Schedule a free consultation. We will review your current pharmacy
            setup and show you exactly how we can improve your operations. No
            pressure, no commitment.
          </p>
          <div className="flex gap-4 justify-center flex-wrap relative">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-9 py-4 bg-white text-navy rounded-full text-base font-semibold no-underline transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_8px_25px_rgba(0,0,0,0.15)]"
            >
              Schedule a Free Consultation <ArrowRight />
            </a>
            <a
              href="tel:8187474000"
              className="inline-flex items-center gap-2 px-9 py-4 bg-transparent text-white border-2 border-white/40 rounded-full text-base font-semibold no-underline transition-all duration-300 hover:border-white hover:bg-white/10"
            >
              <PhoneIcon /> (818) 747-4000
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
