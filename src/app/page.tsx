import Link from "next/link";
import {
  PhoneIcon, ClockIcon, TruckIcon, UserIcon, ShieldIcon,
  ArrowRight, HomeIcon, HeartIcon, SunIcon,
} from "@/components/icons";
import SectionHead from "@/components/SectionHead";
import FeatureRow from "@/components/FeatureRow";
import Btn from "@/components/Btn";

const TRUST_ITEMS = [
  { icon: <ClockIcon />, text: "24/7 Pharmacist On Call" },
  { icon: <TruckIcon />, text: "Same-Day Delivery" },
  { icon: <UserIcon />, text: "Owner-Operated" },
  { icon: <ShieldIcon />, text: "Serving 50+ Facilities" },
];

const WHY_US = [
  { icon: <UserIcon />, title: "You Talk to the Owner", desc: "Shahryar Barzegar, PharmD, owns and operates this pharmacy. When you call, you reach a pharmacist who knows your facility, your residents, and your staff by name." },
  { icon: <TruckIcon />, title: "Our Own Delivery Fleet", desc: "Every driver is trained by our pharmacy and dispatched through optimized routing. STAT medications at 2 AM? We are already on the way." },
  { icon: <ShieldIcon />, title: "More Than a Dispensary", desc: "Medication therapy management, formulary optimization, staff training, and quarterly compliance reviews. We keep your facility audit-ready." },
  { icon: <PhoneIcon />, title: "One Call Does It All", desc: "Pharmacy, DME, medical supplies, lab work, imaging. One relationship instead of five vendors." },
];

const FACILITIES = [
  { title: "RCFEs & Assisted Living", desc: "Medication packaging, MARS reports, staff training, compliance support, and clinical oversight tailored to residential care.", href: "/rcfe", icon: <HomeIcon /> },
  { title: "Hospice & Palliative Care", desc: "Rapid comfort medications, 24/7 STAT delivery, compassionate coordination with care teams when time matters most.", href: "/hospice", icon: <HeartIcon /> },
  { title: "Home Health", desc: "Coordinated dispensing and delivery for patients receiving care in their own homes.", href: "/home-health", icon: <UserIcon /> },
  { title: "Adult Day Health Centers", desc: "Medication management timed to your daily schedule, with delivery coordinated around your operations.", href: "/adult-day", icon: <SunIcon /> },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section
        className="relative min-h-[88vh] flex flex-col justify-center overflow-hidden max-md:min-h-auto"
        style={{
          background: "linear-gradient(165deg, #0A2540 0%, #0d3055 55%, #007AA3 100%)",
          padding: "130px 24px 70px",
        }}
      >
        <div
          className="absolute pointer-events-none"
          style={{
            top: "-40%", right: "-15%",
            width: "70%", height: "140%",
            background: "radial-gradient(circle, rgba(0,149,200,0.12) 0%, transparent 60%)",
          }}
        />

        <div className="max-w-[1100px] mx-auto relative z-10">
          <p className="fin text-[#4dd4f0] font-semibold text-[13px] tracking-[2px] uppercase mb-[18px]">
            Closed-Door Pharmacy for Senior Living
          </p>
          <h1
            className="fin d1 font-serif font-bold text-white leading-[1.15] max-w-[680px] mb-[22px]"
            style={{ fontSize: "clamp(34px, 5vw, 56px)" }}
          >
            Your Pharmacy Partner for Senior Living Facilities
          </h1>
          <p
            className="fin d2 text-white/70 leading-[1.7] max-w-[560px] mb-9"
            style={{ fontSize: "clamp(15px, 2vw, 18px)" }}
          >
            24/7 pharmacy services, medication management, and same-day delivery
            to Assisted Living Facilities, RCFEs, Board and Care homes, Hospices,
            and Home Health providers across Los Angeles.
          </p>
          <div className="fin d3 flex gap-3.5 flex-wrap">
            <Btn href="/contact">Schedule a Consultation <ArrowRight /></Btn>
            <Btn outline>
              <a href="tel:8187474000" className="flex items-center gap-2 text-white no-underline">
                <PhoneIcon /> Call (818) 747-4000
              </a>
            </Btn>
          </div>
          <div className="fin d4 mt-[60px] flex gap-8 flex-wrap py-6 px-8 rounded-[14px] bg-white/[0.06] border border-white/[0.08]">
            {TRUST_ITEMS.map((item, i) => (
              <div key={i} className="flex items-center gap-2.5 text-white/80 text-[13px] font-medium">
                <div className="w-9 h-9 rounded-[9px] bg-white/10 flex items-center justify-center text-[#4dd4f0]">
                  {item.icon}
                </div>
                {item.text}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <div className="sec bg-white">
        <div className="max-w-[1100px] mx-auto">
          <SectionHead
            tag="Why Choose Us"
            title="Why Facilities Choose Us Over Big-Box Pharmacies"
            sub="We built this pharmacy from the ground up for one purpose: to serve the facilities that serve our seniors."
          />
          <div className="grid2">
            {WHY_US.map((c, i) => (
              <FeatureRow key={i} icon={c.icon} title={c.title} desc={c.desc} />
            ))}
          </div>
        </div>
      </div>

      {/* Facilities We Serve */}
      <div className="sec bg-warm">
        <div className="max-w-[1100px] mx-auto">
          <SectionHead
            tag="Who We Serve"
            title="We Serve the Facilities That Serve Our Seniors"
            sub="Every facility type has unique pharmacy needs. Click to learn how we serve yours."
          />
          <div className="grid2">
            {FACILITIES.map((f, i) => (
              <Link key={i} href={f.href} className="card cursor-pointer no-underline block">
                <div className="w-11 h-11 rounded-[11px] bg-accent flex items-center justify-center text-teal mb-4">
                  {f.icon}
                </div>
                <h3 className="font-bold text-[17px] text-navy mb-2">{f.title}</h3>
                <p className="text-text-light text-sm leading-[1.7] mb-3.5">{f.desc}</p>
                <span className="text-teal text-sm font-semibold flex items-center gap-1.5">
                  Learn more <ArrowRight />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="sec bg-white">
        <div className="max-w-[1100px] mx-auto">
          <div
            className="relative overflow-hidden rounded-[20px] py-14 px-10 text-center text-white"
            style={{ background: "linear-gradient(135deg, #0A2540, #007AA3)" }}
          >
            <h2
              className="font-serif font-bold mb-3.5"
              style={{ fontSize: "clamp(24px, 4vw, 36px)" }}
            >
              Ready to See What a Real Pharmacy Partnership Looks Like?
            </h2>
            <p className="text-base text-white/75 max-w-[520px] mx-auto mb-7 leading-[1.7]">
              Schedule a free consultation. No pressure, no commitment.
            </p>
            <div className="flex gap-3.5 justify-center flex-wrap">
              <Btn href="/contact">Schedule a Free Consultation <ArrowRight /></Btn>
              <Btn outline>
                <a href="tel:8187474000" className="flex items-center gap-2 text-white no-underline">
                  <PhoneIcon /> (818) 747-4000
                </a>
              </Btn>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
