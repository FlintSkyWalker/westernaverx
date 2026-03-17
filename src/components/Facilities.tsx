import { CheckIcon } from "./icons";

const FACILITY_TAGS = [
  "Assisted Living Facilities",
  "RCFEs",
  "Board & Care Homes",
  "Hospice & Palliative Care",
  "Adult Day Health Centers",
  "Home Health",
  "Nursing Homes",
  "Transition of Care",
];

const FACILITY_DETAILS = [
  {
    title: "Assisted Living & RCFEs",
    desc: "Medication packaging, MARS reports, staff training, compliance support, and formulary management tailored to residential care operations.",
  },
  {
    title: "Hospice & Palliative Care",
    desc: "Rapid access to comfort medications, 24/7 STAT delivery, and compassionate coordination with your care teams when time matters most.",
  },
  {
    title: "Adult Day Health Centers",
    desc: "Medication management timed to your daily schedule, with delivery coordinated around your facility's operations.",
  },
  {
    title: "Home Health & Board and Care",
    desc: "Coordinated dispensing and delivery for patients in their homes, and personalized service for smaller facilities often overlooked by larger pharmacies.",
  },
];

export default function Facilities() {
  return (
    <section id="facilities" className="py-25 px-6 bg-white max-md:py-15">
      <div className="max-w-[1100px] mx-auto">
        <p className="text-teal font-semibold text-sm tracking-[1.5px] uppercase mb-3">
          Who We Serve
        </p>
        <h2 className="font-serif text-navy font-bold mb-4" style={{ fontSize: "clamp(28px, 4vw, 42px)" }}>
          We Serve the Facilities That Serve Our Seniors
        </h2>
        <p className="text-text-light text-[17px] leading-[1.7] max-w-[560px] mb-10">
          Every facility type has unique pharmacy needs. We tailor our services
          to fit yours.
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-3.5 mb-12">
          {FACILITY_TAGS.map((tag, i) => (
            <span
              key={i}
              className="inline-flex items-center gap-2 px-[22px] py-3.5 rounded-full bg-white border border-[#e0e4e8] text-sm font-medium text-navy transition-all duration-300 hover:border-teal hover:bg-accent hover:text-teal-dark"
            >
              <CheckIcon /> {tag}
            </span>
          ))}
        </div>

        {/* Detail cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {FACILITY_DETAILS.map((f, i) => (
            <div key={i} className="p-7 rounded-[14px] bg-accent">
              <h3 className="font-bold text-[17px] text-navy mb-2.5">
                {f.title}
              </h3>
              <p className="text-text-light text-[15px] leading-[1.7]">
                {f.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
