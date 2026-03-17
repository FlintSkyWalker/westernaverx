const SERVICES = [
  {
    title: "Pharmacy Services",
    desc: "24/7 pharmacist access through a single direct line. No automated phone trees. Rapid STAT delivery, clinical consultation for complex regimens, multilingual labels, and expert medication selection based on current formulary and insurance optimization.",
  },
  {
    title: "Facility Specialty Services",
    desc: "Medication adherence packaging, customized MARS and CSDR reports, formulary management, RCFE staff training and certification, quarterly compliance reviews, and Medication Therapy Management for optimized treatment outcomes.",
  },
  {
    title: "Delivery Services",
    desc: "Our own pharmacy-trained, HIPAA-compliant drivers. No third-party couriers. Routes optimized daily for on-time delivery. Same-day standard. Emergency STAT delivery available 24/7, 365 days a year.",
  },
  {
    title: "Medical Equipment & DME",
    desc: "A dedicated team of billing professionals handles the entire DME process, from equipment selection and insurance authorization to delivery and ongoing support. Your residents get what they need without the administrative burden.",
  },
  {
    title: "Laboratory & Imaging",
    desc: "Through our partnership with SoCal MMS, we offer integrated laboratory and imaging services. Streamline diagnostics and treatment planning through a single point of contact.",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-25 px-6 bg-warm max-md:py-15">
      <div className="max-w-[1100px] mx-auto">
        <p className="text-teal font-semibold text-sm tracking-[1.5px] uppercase mb-3">
          Our Services
        </p>
        <h2 className="font-serif text-navy font-bold mb-12" style={{ fontSize: "clamp(28px, 4vw, 42px)" }}>
          Comprehensive Care Under One Roof
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((svc, i) => (
            <div
              key={i}
              className="service-card bg-white border border-[#e8ecf0] rounded-2xl p-9 transition-all duration-[350ms] cursor-default hover:border-teal hover:shadow-[0_12px_40px_rgba(0,149,200,0.1)] hover:-translate-y-1"
            >
              <h3 className="font-bold text-lg text-navy mb-3">{svc.title}</h3>
              <p className="text-text-light text-[15px] leading-[1.75]">
                {svc.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
