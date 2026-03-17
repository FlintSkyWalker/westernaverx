import SubHero from "@/components/SubHero";
import SectionHead from "@/components/SectionHead";
import StatCard from "@/components/StatCard";
import Btn from "@/components/Btn";
import ComparisonTable from "@/components/ComparisonTable";
import { HomeIcon, CheckIcon, AlertTriIcon, ArrowRight, PhoneIcon } from "@/components/icons";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "RCFE & Assisted Living Pharmacy Services | Western Avenue Pharmacy",
  description: "Integrated pharmacy services for RCFEs and Assisted Living Facilities. Medication management, compliance support, staff training, and 24/7 delivery in Los Angeles.",
};

export default function RCFEPage() {
  return (
    <>
      <SubHero
        badge={<><HomeIcon /> Facility Type</>}
        title="RCFEs & Assisted Living Facilities"
        subtitle="Integrated pharmacy services that protect your residents, support your staff, and keep your facility compliant."
      />

      {/* The Challenge */}
      <div className="sec bg-white">
        <div className="max-w-[1100px] mx-auto">
          <SectionHead
            tag="The Challenge"
            title="Medication Risk in Senior Living"
            sub="Medication-related harm is a leading, preventable driver of loss of independence among older adults in senior communities."
          />
          <div className="flex gap-6 flex-wrap mb-10">
            <StatCard num="65%" label="of adults 65+ take 5 or more medications" />
            <StatCard num="30%" label="take 10 or more medications" />
            <StatCard num="1 in 10" label="hospitalizations are medication-related" />
            <StatCard num="70%" label="of those are preventable with pharmacist review" />
          </div>
          <div className="grid2">
            <div className="card">
              <h3 className="font-bold text-[17px] text-navy mb-2.5">Falls & Fractures: The Primary Threat</h3>
              <p className="text-text-light text-sm leading-[1.75]">
                Falls represent the single most frequent medication-related adverse event leading to hospitalization and permanent loss of independence. About 20% of medication-related hospitalizations involve a fall, commonly linked to sedatives, antihypertensives, anticholinergics, and polypharmacy.
              </p>
              <div className="mt-4 p-3.5 px-[18px] rounded-[10px] bg-warning-bg border border-warning-border">
                <p className="text-sm font-semibold text-warning-text">
                  Among adults 70+ with hip fractures, roughly 50% are discharged to skilled nursing. Many never return to independent living.
                </p>
              </div>
            </div>
            <div className="card">
              <h3 className="font-bold text-[17px] text-navy mb-2.5">Other Drivers of Decline</h3>
              {[
                "Delirium & Confusion: Anticholinergics, sedatives, opioids",
                "Hypoglycemia: Insulin, sulfonylureas in older adults",
                "Hypotension & Syncope: Antihypertensives, diuretics",
                "Acute Kidney Injury: NSAIDs, ACE inhibitors, diuretics",
                "Bleeding Events: Anticoagulants and interactions",
                "Sedation & Decline: Cumulative sedative burden",
              ].map((item, i) => (
                <div key={i} className="flex gap-2.5 items-start mb-2.5">
                  <div className="mt-0.5"><AlertTriIcon /></div>
                  <p className="text-text-light text-[13px] leading-[1.6]">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Our Approach */}
      <div className="sec bg-warm">
        <div className="max-w-[1100px] mx-auto">
          <SectionHead
            tag="Our Approach"
            title="Pharmacist-Led Medication Review"
            sub="Structured pharmacist intervention addresses the specific drivers of medication-related harm."
          />
          <div className="grid3">
            {[
              { title: "Review & Identify", items: ["Drug-drug interaction screening", "Drug-disease contraindications", "Cumulative sedative burden assessment"] },
              { title: "Optimize & Simplify", items: ["Deprescribing when appropriate", "Age-appropriate dose adjustments", "Regimen simplification"] },
              { title: "Educate & Support", items: ["Resident medication education", "Adherence support & packaging", "Ongoing monitoring"] },
            ].map((col, i) => (
              <div key={i} className="card">
                <h3 className="font-bold text-[17px] text-teal mb-4">{col.title}</h3>
                {col.items.map((item, j) => (
                  <div key={j} className="flex gap-2.5 mb-2.5">
                    <CheckIcon /><p className="text-text-primary text-sm">{item}</p>
                  </div>
                ))}
              </div>
            ))}
          </div>
          <div className="mt-8 p-5 px-7 rounded-[14px] bg-accent text-center">
            <p className="font-bold text-[17px] text-navy">
              Goal: Fewer falls. Fewer hospitalizations. Residents staying independent longer.
            </p>
          </div>
        </div>
      </div>

      {/* Business Case */}
      <div className="sec bg-white">
        <div className="max-w-[1100px] mx-auto">
          <SectionHead
            tag="Business Case"
            title="The Financial Impact of Pharmacy Integration"
            sub="Medication safety is not only a clinical imperative. It is a strategic business decision."
          />
          <div className="flex gap-5 flex-wrap mb-10">
            {[
              { num: "5-7%", label: "Occupancy increase with pharmacy integration" },
              { num: "$6.6M", label: "Avg. liability payout per medication error case" },
              { num: "27%", label: "of residents affected by medication errors" },
              { num: "#1", label: "Cited deficiency: medication management" },
            ].map((s, i) => (
              <div key={i} className="flex-1 min-w-[220px] p-5 px-5 rounded-[14px] bg-warm text-center">
                <div className="text-[32px] font-bold text-teal font-serif mb-1.5">{s.num}</div>
                <div className="text-[13px] text-text-light">{s.label}</div>
              </div>
            ))}
          </div>

          <h3 className="font-bold text-xl text-navy mb-5">A Tale of Two Facilities</h3>
          <p className="text-text-light text-[15px] leading-[1.7] mb-6">
            Consider two comparable 40-resident facilities. One uses a standard non-integrated pharmacy. The other partners with Western Avenue Pharmacy.
          </p>

          <ComparisonTable
            headers={["Metric", "Non-Integrated", "With WAP"]}
            rows={[
              ["Avg. medications per resident", "8.2", "6.4"],
              ["Residents on high-risk meds", "62%", "38%"],
              ["Fall-related ER transfers/yr", "14", "6"],
              ["Medication-related hospitalizations", "8", "3"],
              ["State survey citations", "4 findings", "0 findings"],
              ["Family satisfaction", "72%", "94%"],
              ["Avg. length of stay", "18 months", "26 months"],
            ]}
          />

          <div
            className="mt-6 p-5 px-7 rounded-[14px] text-center"
            style={{ background: "linear-gradient(135deg, #0A2540, #007AA3)" }}
          >
            <p className="text-white font-bold text-xl">Estimated Annual Savings: $144,500+</p>
            <p className="text-white/70 text-sm mt-1.5">
              Through reduced hospitalizations, fewer ER transfers, recovered bed-days, and avoided citations.
            </p>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="sec bg-warm">
        <div className="max-w-[1100px] mx-auto text-center">
          <h2 className="font-serif text-[32px] font-bold text-navy mb-3.5">
            Ready to Protect Your Residents and Your Business?
          </h2>
          <p className="text-text-light text-base mb-7">
            Schedule a free consultation and see how integrated pharmacy services can transform your facility.
          </p>
          <Btn href="/contact">Schedule a Free Consultation <ArrowRight /></Btn>
        </div>
      </div>
    </>
  );
}
