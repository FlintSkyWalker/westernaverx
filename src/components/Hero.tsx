import { PhoneIcon, ClockIcon, TruckIcon, UserIcon, ShieldIcon, ArrowRight } from "./icons";

const TRUST_ITEMS = [
  { icon: <ClockIcon />, text: "24/7 Pharmacist On Call" },
  { icon: <TruckIcon />, text: "Same-Day Delivery" },
  { icon: <UserIcon />, text: "Owner-Operated" },
  { icon: <ShieldIcon />, text: "Serving 50+ Facilities" },
];

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-[92vh] flex flex-col justify-center overflow-hidden max-md:min-h-auto max-md:pb-[60px]"
      style={{
        background: "linear-gradient(165deg, #0A2540 0%, #0d3055 55%, #007AA3 100%)",
        padding: "140px 24px 80px",
      }}
    >
      {/* Background glow */}
      <div
        className="absolute pointer-events-none"
        style={{
          top: "-50%", right: "-20%",
          width: "80%", height: "150%",
          background: "radial-gradient(circle, rgba(0,149,200,0.15) 0%, transparent 60%)",
        }}
      />

      <div className="max-w-[1100px] mx-auto relative z-10">
        <p className="animate-in text-[#4dd4f0] font-semibold text-sm tracking-[2px] uppercase mb-5">
          Closed-Door Pharmacy for Senior Living
        </p>

        <h1
          className="animate-in font-serif font-bold text-white leading-[1.15] max-w-[700px] mb-6"
          style={{ fontSize: "clamp(36px, 5vw, 58px)", animationDelay: "0.15s" }}
        >
          Your Pharmacy Partner for Senior Living Facilities
        </h1>

        <p
          className="animate-in text-white/75 leading-[1.7] max-w-[580px] mb-10"
          style={{ fontSize: "clamp(16px, 2vw, 19px)", animationDelay: "0.3s" }}
        >
          24/7 pharmacy services, medication management, and same-day delivery
          to Assisted Living Facilities, RCFEs, Board and Care homes, Hospices,
          and Home Health providers across Los Angeles.
        </p>

        <div
          className="animate-in flex gap-4 flex-wrap"
          style={{ animationDelay: "0.45s" }}
        >
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-9 py-4 bg-teal text-white rounded-full text-base font-semibold no-underline transition-all duration-300 hover:bg-teal-dark hover:-translate-y-0.5 hover:shadow-[0_8px_25px_rgba(0,149,200,0.3)]"
          >
            Schedule a Consultation <ArrowRight />
          </a>
          <a
            href="tel:8187474000"
            className="inline-flex items-center gap-2 px-9 py-4 bg-transparent text-white border-2 border-white/40 rounded-full text-base font-semibold no-underline transition-all duration-300 hover:border-white hover:bg-white/10"
          >
            <PhoneIcon /> Call (818) 747-4000
          </a>
        </div>
      </div>

      {/* Trust Bar */}
      <div
        className="max-w-[1100px] mx-auto mt-20 w-full animate-in relative z-10"
        style={{ animationDelay: "0.6s" }}
      >
        <div className="flex gap-10 flex-wrap px-9 py-7 rounded-2xl backdrop-blur-[10px] bg-white/[0.06] border border-white/[0.08]">
          {TRUST_ITEMS.map((item, i) => (
            <div key={i} className="flex items-center gap-2.5 text-white/85 text-sm font-medium tracking-[0.3px]">
              <div className="w-[38px] h-[38px] rounded-[10px] bg-white/10 flex items-center justify-center text-[#4dd4f0]">
                {item.icon}
              </div>
              {item.text}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
