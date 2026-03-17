import SubHero from "@/components/SubHero";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Services | Western Avenue Pharmacy",
  description: "Comprehensive pharmacy services including 24/7 pharmacist access, delivery, DME, laboratory, imaging, and medication therapy management.",
};

const SERVICES = [
  { title: "Pharmacy Services", desc: "24/7 pharmacist access through a single direct line. Rapid STAT delivery, clinical consultation, multilingual labels, and expert medication selection based on formulary and insurance optimization." },
  { title: "Facility Specialty Services", desc: "Medication adherence packaging, customized MARS and CSDR reports, formulary management, RCFE staff training and certification, quarterly compliance reviews, and Medication Therapy Management." },
  { title: "Delivery Services", desc: "Our own pharmacy-trained, HIPAA-compliant drivers. Routes optimized daily. Same-day standard. Emergency STAT available 24/7, 365 days a year." },
  { title: "Medical Equipment & DME", desc: "Dedicated billing professionals handle the entire DME process from equipment selection and insurance authorization to delivery and ongoing support." },
  { title: "Laboratory & Imaging", desc: "Through our partnership with SoCal MMS, integrated laboratory and imaging services. One point of contact for diagnostics and treatment planning." },
  { title: "Medication Therapy Management", desc: "Proactive review targeting fall-risk medications, drug interactions, and polypharmacy. The exact drivers of preventable hospitalizations." },
];

export default function ServicesPage() {
  return (
    <>
      <SubHero
        title="Our Services"
        subtitle="Comprehensive pharmacy services, clinical support, delivery, DME, and diagnostics under one roof."
      />

      <div className="sec bg-white">
        <div className="max-w-[1100px] mx-auto">
          <div className="grid3">
            {SERVICES.map((s, i) => (
              <div key={i} className="card">
                <h3 className="font-bold text-[17px] text-navy mb-2.5">{s.title}</h3>
                <p className="text-text-light text-sm leading-[1.75]">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
