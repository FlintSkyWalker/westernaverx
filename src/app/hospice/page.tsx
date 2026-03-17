import SubHero from "@/components/SubHero";
import SectionHead from "@/components/SectionHead";
import FeatureRow from "@/components/FeatureRow";
import Btn from "@/components/Btn";
import ComparisonTable from "@/components/ComparisonTable";
import { HeartIcon, UserIcon, ShieldIcon, ClockIcon, TruckIcon, CheckIcon, ArrowRight, PhoneIcon } from "@/components/icons";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hospice & Palliative Care Pharmacy | Western Avenue Pharmacy",
  description: "24/7 hospice pharmacy services with STAT delivery, custom comfort kits, pain management support, and compassionate care coordination in Los Angeles.",
};

export default function HospicePage() {
  return (
    <>
      <SubHero
        badge={<><HeartIcon /> Facility Type</>}
        title="Hospice & Palliative Care"
        subtitle="When every moment matters, your pharmacy should never be the reason for a delay. We provide compassionate, 24/7 pharmacy services designed around the urgency and sensitivity of end-of-life care."
      />

      {/* Core Promise */}
      <div className="sec bg-white">
        <div className="max-w-[1100px] mx-auto">
          <SectionHead
            tag="Our Promise"
            title="A Pharmacy That Understands Hospice"
            sub="We do not operate like a retail pharmacy that fills hospice orders on the side. Every system we have, from our delivery fleet to our on-call pharmacists, is built to serve the urgency and compassion that hospice care demands."
          />
          <div className="flex gap-5 flex-wrap mb-10">
            {[
              { num: "24/7", label: "Pharmacist available, no exceptions" },
              { num: "<4 hrs", label: "STAT delivery anywhere in LA County" },
              { num: "100%", label: "In-house drivers, never outsourced" },
              { num: "All", label: "Insurances accepted incl. Medicare/Medicaid" },
            ].map((s, i) => (
              <div key={i} className="flex-1 min-w-[220px] p-5 px-5 rounded-[14px] bg-warm text-center">
                <div className="text-[32px] font-bold text-teal font-serif mb-1.5">{s.num}</div>
                <div className="text-[13px] text-text-light">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Delivery Services */}
      <div className="sec bg-warm">
        <div className="max-w-[1100px] mx-auto">
          <SectionHead
            tag="Delivery"
            title="Around-the-Clock Delivery Services"
            sub="Your patients cannot wait. Neither do we."
          />
          <div className="grid2">
            <div>
              <div className="card mb-5">
                <h3 className="font-bold text-[17px] text-navy mb-3.5">Delivery Tiers</h3>
                {[
                  { tier: "Same Day", time: "Delivered by end of day", desc: "Standard orders placed during business hours" },
                  { tier: "STAT", time: "Within 4 hours", desc: "Urgent comfort medications and symptom management" },
                  { tier: "Rush STAT", time: "Within 3 hours", desc: "Escalated priority for acute symptom changes" },
                  { tier: "Super STAT", time: "Within 2 hours", desc: "Critical, time-sensitive medications" },
                ].map((d, i) => (
                  <div key={i} className={`flex justify-between items-center py-3 ${i < 3 ? "border-b border-border" : ""}`}>
                    <div>
                      <span className="font-semibold text-navy text-[15px]">{d.tier}</span>
                      <p className="text-[13px] text-text-light mt-0.5">{d.desc}</p>
                    </div>
                    <span className="text-sm font-semibold text-teal whitespace-nowrap ml-4">{d.time}</span>
                  </div>
                ))}
              </div>
              <div className="p-4 px-5 rounded-xl bg-accent border border-teal/15">
                <p className="text-sm text-teal-dark font-medium">
                  No extra charge for deliveries placed during business hours. All deliveries handled by our pharmacy-trained, HIPAA-compliant drivers.
                </p>
              </div>
            </div>
            <div className="card">
              <h3 className="font-bold text-[17px] text-navy mb-3.5">Areas We Serve</h3>
              <p className="text-text-light text-sm leading-[1.7] mb-4">
                We deliver throughout the greater Los Angeles area and surrounding counties:
              </p>
              <div className="flex flex-wrap gap-2">
                {["Los Angeles County", "Orange County", "San Fernando Valley", "Pasadena", "Glendale", "Burbank", "San Bernardino", "Riverside", "Ventura", "And more..."].map((area, i) => (
                  <span key={i} className="px-3.5 py-1.5 rounded-full bg-warm text-[13px] text-text-primary font-medium">
                    {area}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Comfort Kits */}
      <div className="sec bg-white">
        <div className="max-w-[1100px] mx-auto">
          <SectionHead
            tag="Comfort Kits"
            title="Custom E-Kits for Every Patient"
            sub="Pre-assembled or customized to your hospice's protocols. Ready when your patients need them, so your nurses never have to wait."
          />
          <div className="grid3">
            <div className="card">
              <h3 className="font-bold text-[17px] text-navy mb-3.5">Standard Comfort Kit</h3>
              <p className="text-text-light text-sm leading-[1.7] mb-4">
                Our standard kit covers the most common end-of-life symptoms, ready to deploy immediately upon admission:
              </p>
              {["Pain management", "Anxiety and restlessness", "Shortness of breath", "Excessive secretions", "Nausea and vomiting", "Fever management", "Constipation"].map((item, i) => (
                <div key={i} className="flex gap-2.5 mb-2">
                  <CheckIcon /><span className="text-text-primary text-sm">{item}</span>
                </div>
              ))}
            </div>
            <div className="card">
              <h3 className="font-bold text-[17px] text-navy mb-3.5">Custom Kits</h3>
              <p className="text-text-light text-sm leading-[1.7] mb-4">
                We work with your clinical team to build kits tailored to your hospice&apos;s formulary and patient population:
              </p>
              {["Disease-specific symptom profiles", "Your preferred medication selections", "Dosing protocols matched to your SOPs", "Branded to your hospice if needed", "Updated as your protocols evolve"].map((item, i) => (
                <div key={i} className="flex gap-2.5 mb-2">
                  <CheckIcon /><span className="text-text-primary text-sm">{item}</span>
                </div>
              ))}
            </div>
            <div className="card">
              <h3 className="font-bold text-[17px] text-navy mb-3.5">Why It Matters</h3>
              <p className="text-text-light text-sm leading-[1.7] mb-4">
                A comfort kit that arrives late or incomplete can mean hours of unnecessary suffering for a patient and stress for a family already in crisis.
              </p>
              <div className="p-4 px-[18px] rounded-[10px] bg-warning-bg border border-warning-border">
                <p className="text-sm font-semibold text-warning-text">
                  Our kits are pre-assembled, quality-checked, and delivered proactively so your nurses have what they need before they need it.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Clinical & Administrative Services */}
      <div className="sec bg-warm">
        <div className="max-w-[1100px] mx-auto">
          <SectionHead
            tag="Clinical Services"
            title="Clinical and Administrative Excellence"
            sub="We integrate into your hospice operation so deeply that it feels like we are on your staff."
          />
          <div className="grid2">
            {[
              { icon: <UserIcon />, title: "Direct Pharmacist Access", desc: "One call connects you to a pharmacist who understands hospice. Medication selection, dosing guidance, drug interactions, alternative routes of administration. No phone trees, no hold music." },
              { icon: <ShieldIcon />, title: "Formulary Management", desc: "We build and maintain your formulary to balance clinical effectiveness with cost control. Regular reviews ensure your formulary reflects current best practices and payer requirements." },
              { icon: <ClockIcon />, title: "Medication Therapy Management", desc: "Proactive review of every patient's medication regimen. We identify interactions, recommend simplifications, and optimize therapy to maximize comfort while minimizing unnecessary medications." },
              { icon: <HeartIcon />, title: "Pain & Symptom Management Support", desc: "Our pharmacist works directly with your physicians and nurses on complex pain management, including opioid conversions, breakthrough dosing calculations, and alternative delivery routes." },
            ].map((c, i) => <FeatureRow key={i} icon={c.icon} title={c.title} desc={c.desc} />)}
          </div>
          <div className="mt-8 grid2">
            {[
              { icon: <ShieldIcon />, title: "Specialized Reporting", desc: "NDC reports, detailed invoice reports, clinical and cost analysis, and custom reports tailored to your hospice's needs. Data you can use for quality improvement and compliance." },
              { icon: <TruckIcon />, title: "Medical Supplies & DME", desc: "Comprehensive medical supplies always in stock. From wound care to incontinence supplies to durable medical equipment, all coordinated through a single point of contact." },
              { icon: <UserIcon />, title: "Staff Training", desc: "We train your hospice staff on pain management protocols, hypoglycemia management, controlled substance handling, administrative procedures, and survey preparedness." },
              { icon: <ShieldIcon />, title: "Audit & Compliance Preparation", desc: "We assist with documentation, medication reviews, and regulatory compliance to keep your hospice survey-ready. Waste prevention through therapy assessment and duplication prevention." },
            ].map((c, i) => <FeatureRow key={i} icon={c.icon} title={c.title} desc={c.desc} />)}
          </div>
        </div>
      </div>

      {/* Packaging */}
      <div className="sec bg-white">
        <div className="max-w-[1100px] mx-auto">
          <SectionHead
            tag="Packaging"
            title="Adherence Packaging Built for Hospice"
            sub="Medication errors in hospice settings are preventable. Our packaging systems are designed to eliminate confusion at the bedside."
          />
          <div className="grid3">
            {[
              { title: "Bubble Pack / Blister Cards", desc: "Pre-sorted, clearly labeled medication cards organized by time of day. Reduces administration errors and simplifies documentation for your nurses." },
              { title: "Multi-Dose Packaging", desc: "For patients on complex regimens, we package multiple medications into single dose packs with clear labeling, reducing the chance of missed or duplicated doses." },
              { title: "Facility Documentation", desc: "We provide MARS, CSDR, narcotic sheets, and all relevant documents tailored to your facility's needs. Paper or electronic, formatted to match your workflows." },
            ].map((p, i) => (
              <div key={i} className="card">
                <h3 className="font-bold text-[17px] text-navy mb-2.5">{p.title}</h3>
                <p className="text-text-light text-sm leading-[1.75]">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Insurance & Billing */}
      <div className="sec bg-warm">
        <div className="max-w-[1100px] mx-auto">
          <SectionHead
            tag="Insurance & Billing"
            title="We Handle the Billing Complexity"
            sub="So your team can focus on patient care, not paperwork."
          />
          <div className="grid2">
            <div>
              <p className="text-text-light text-[15px] leading-[1.8] mb-5">
                Western Avenue Pharmacy accepts all insurances, including Medicare, Medicaid, Kaiser-D, and PPOs. We handle prior authorizations, manage the billing process, and work directly with payers to resolve issues before they reach your staff.
              </p>
              <p className="text-text-light text-[15px] leading-[1.8]">
                For hospices managing per-diem budgets, we provide financially sensitive therapy options. Our pharmacist identifies therapeutic substitutions that maintain clinical effectiveness while reducing medication costs, helping you control per-patient spend without compromising care.
              </p>
            </div>
            <div className="flex flex-col gap-3.5">
              {[
                "All major insurances accepted (Medicare, Medicaid, Kaiser-D, PPOs)",
                "Prior authorization management",
                "Transparent pricing with no hidden fees",
                "Financially sensitive therapy substitution options",
                "Detailed cost analysis reports for your finance team",
                "Free delivery on all orders during business hours",
              ].map((item, i) => (
                <div key={i} className="flex gap-2.5 items-start">
                  <div className="mt-0.5"><CheckIcon /></div>
                  <p className="text-text-primary text-sm leading-[1.6]">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Why Switch */}
      <div className="sec bg-white">
        <div className="max-w-[1100px] mx-auto">
          <SectionHead tag="Why Switch" title="What Makes Us Different from Your Current Pharmacy" />
          <ComparisonTable
            headers={["Capability", "Typical Pharmacy", "Western Ave"]}
            rows={[
              ["After-hours pharmacist access", "Answering service / callback", "Direct pharmacist line 24/7"],
              ["STAT delivery time", "Next day or 6+ hours", "Under 4 hours, anytime"],
              ["Delivery team", "Third-party courier", "Own trained, HIPAA-compliant drivers"],
              ["Comfort kit customization", "Standard only", "Fully customizable per patient or hospice"],
              ["Pain management consultation", "Limited", "Opioid conversions, dosing, route alternatives"],
              ["Formulary management", "Basic list", "Active management with cost optimization"],
              ["Staff training", "Rarely offered", "Regular training on protocols and compliance"],
              ["Reporting", "Basic invoices", "NDC, clinical, cost analysis, custom reports"],
            ]}
          />
        </div>
      </div>

      {/* CTA */}
      <div className="sec bg-warm">
        <div className="max-w-[1100px] mx-auto">
          <div
            className="relative overflow-hidden rounded-[20px] py-14 px-10 text-center text-white"
            style={{ background: "linear-gradient(135deg, #0A2540, #007AA3)" }}
          >
            <h2
              className="font-serif font-bold mb-3.5"
              style={{ fontSize: "clamp(24px, 4vw, 34px)" }}
            >
              Your Patients Deserve a Pharmacy That Moves as Fast as You Do
            </h2>
            <p className="text-base text-white/75 max-w-[520px] mx-auto mb-7 leading-[1.7]">
              Schedule a free consultation. We will review your current pharmacy setup and show you how we can improve your hospice operations.
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
