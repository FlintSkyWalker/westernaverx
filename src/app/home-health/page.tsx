import SubHero from "@/components/SubHero";
import SectionHead from "@/components/SectionHead";
import FeatureRow from "@/components/FeatureRow";
import Btn from "@/components/Btn";
import { UserIcon, TruckIcon, ShieldIcon, PhoneIcon, ClockIcon, HeartIcon, CheckIcon, ArrowRight } from "@/components/icons";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home Health Pharmacy Services | Western Avenue Pharmacy",
  description: "Coordinated pharmacy services for home health patients. Reliable delivery, medication management, and direct pharmacist access in Los Angeles.",
};

const STATS = [
  { n: "55%", l: "of home health patients take 5+ medications" },
  { n: "30%", l: "experience a medication discrepancy at discharge" },
  { n: "20%", l: "are rehospitalized within 30 days" },
  { n: "70%", l: "of readmissions are medication-related and preventable" },
];

const FEATURES = [
  { icon: <TruckIcon />, title: "Scheduled Home Delivery", desc: "Medications delivered directly to patients at home on a schedule aligned with their care plan. Our drivers are pharmacy-trained and HIPAA-compliant. No third-party couriers." },
  { icon: <ClockIcon />, title: "STAT & Emergency Delivery", desc: "When a patient's condition changes and they need a new medication immediately, we deliver within hours, any time of day or night. 24/7, 365 days a year." },
  { icon: <ShieldIcon />, title: "Medication Synchronization", desc: "We align all refill dates so patients receive their complete medication supply together, reducing confusion, missed doses, and the burden of multiple delivery visits." },
  { icon: <UserIcon />, title: "Direct Pharmacist Access", desc: "Your nurses and patients can call our pharmacist directly for medication questions, drug interaction concerns, dosing guidance, and therapy recommendations. One call, no phone trees." },
  { icon: <HeartIcon />, title: "Medication Therapy Management", desc: "Proactive review of every patient's regimen during transitions of care. We identify interactions, duplications, and high-risk medications, then coordinate with your physicians to optimize therapy." },
  { icon: <PhoneIcon />, title: "Care Team Coordination", desc: "We communicate directly with your nurses, physicians, and discharge planners. When a patient leaves the hospital, we ensure their medications are reconciled, filled, and delivered before your first home visit." },
];

const PACKAGING = [
  { t: "Adherence Packaging", d: "Bubble packs and multi-dose packaging organized by day and time. Large, clear labels with simple instructions. Designed for patients who may have vision or cognitive challenges." },
  { t: "Medical Supplies & DME", d: "Wound care, incontinence supplies, blood pressure monitors, glucometers, and durable medical equipment. All delivered alongside medications through a single coordinated service." },
  { t: "Discharge Medication Kits", d: "Pre-packaged medication kits ready for patients transitioning from hospital to home. Reconciled against discharge orders, labeled clearly, and delivered before your first visit." },
];

const TRANSITION_ITEMS = [
  "Medication reconciliation within hours of discharge",
  "Direct coordination with hospital pharmacy and discharge planners",
  "New prescriptions filled and delivered same-day",
  "Patient and caregiver education on new or changed medications",
  "Ongoing monitoring and refill management",
  "30-day post-discharge pharmacist check-in",
];

const INSURANCES = ["Medicare", "Medicaid", "Kaiser-D", "Commercial PPO/HMO", "Workers Comp"];

export default function HomeHealthPage() {
  return (
    <>
      <SubHero
        badge={<><UserIcon /> Facility Type</>}
        title="Home Health"
        subtitle="Your patients are at home. Their pharmacy should still feel like it is right next door. We provide coordinated medication delivery, clinical support, and direct pharmacist access for home health agencies across Los Angeles."
      />

      {/* Stats - Why It Matters */}
      <div className="sec bg-white">
        <div className="max-w-[1100px] mx-auto">
          <SectionHead
            tag="Why It Matters"
            title="The Challenge of Managing Medications at Home"
            sub="Home health patients face unique medication risks. They manage complex regimens without on-site clinical staff, increasing the likelihood of errors, missed doses, and adverse events."
          />
          <div className="flex gap-5 flex-wrap mb-10">
            {STATS.map((s, i) => (
              <div key={i} className="flex-1 basis-[220px] py-6 px-5 rounded-[14px] bg-warm text-center">
                <div className="text-[32px] font-bold text-teal font-serif mb-1.5">{s.n}</div>
                <div className="text-[13px] text-text-light">{s.l}</div>
              </div>
            ))}
          </div>
          <div className="py-4 px-[22px] rounded-xl bg-[#FFF8E6] border border-[#F0DCA0]">
            <p className="text-sm font-semibold text-[#8B6914]">The transition from hospital to home is when patients are most vulnerable. A pharmacy that coordinates directly with your nurses and physicians closes the gap that causes readmissions.</p>
          </div>
        </div>
      </div>

      {/* Core Services */}
      <div className="sec bg-warm">
        <div className="max-w-[1100px] mx-auto">
          <SectionHead
            tag="What We Provide"
            title="Pharmacy Services Built for Home Health"
            sub="We do not just deliver medications to a doorstep. We integrate into your care workflow."
          />
          <div className="grid2">
            {FEATURES.map((c, i) => <FeatureRow key={i} icon={c.icon} title={c.title} desc={c.desc} />)}
          </div>
        </div>
      </div>

      {/* Packaging & Supplies */}
      <div className="sec bg-white">
        <div className="max-w-[1100px] mx-auto">
          <SectionHead
            tag="Packaging & Supplies"
            title="Simplifying Medication Management at Home"
            sub="For patients managing their own medications, clear packaging and organization can be the difference between adherence and a hospital readmission."
          />
          <div className="grid3">
            {PACKAGING.map((p, i) => (
              <div key={i} className="card">
                <h3 className="font-bold text-[17px] text-navy mb-2.5">{p.t}</h3>
                <p className="text-text-light text-sm leading-7">{p.d}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Transition of Care */}
      <div className="sec bg-warm">
        <div className="max-w-[1100px] mx-auto">
          <SectionHead tag="Transition of Care" title="Closing the Gap Between Discharge and Home" />
          <div className="grid2">
            <div>
              <p className="text-text-light text-[15px] leading-[1.8] mb-5">The first 48 hours after discharge are the highest risk period for medication errors. Patients go home with new prescriptions, changed dosages, and discontinued medications. Without proper coordination, errors happen.</p>
              <p className="text-text-light text-[15px] leading-[1.8] mb-5">Western Avenue Pharmacy works directly with hospital discharge planners and your home health team to ensure every medication is reconciled, filled, and in the patient&apos;s hands before your nurse arrives for the first visit.</p>
              <p className="text-navy text-[15px] leading-[1.8] font-medium">The result: fewer readmissions, fewer adverse events, and better outcomes for your patients and your agency.</p>
            </div>
            <div className="flex flex-col gap-3.5">
              {TRANSITION_ITEMS.map((item, i) => (
                <div key={i} className="flex gap-2.5 items-start py-3.5 px-4 rounded-xl bg-white border border-border">
                  <div className="mt-0.5"><CheckIcon /></div>
                  <p className="text-text text-sm leading-relaxed">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Insurance & Billing */}
      <div className="sec bg-white">
        <div className="max-w-[1100px] mx-auto">
          <div className="p-8 rounded-2xl bg-accent border border-teal/15">
            <h3 className="font-bold text-xl text-navy mb-3">Insurance & Billing</h3>
            <p className="text-text-light text-[15px] leading-[1.8] mb-4">We accept all major insurances including Medicare, Medicaid, and commercial plans. We handle prior authorizations, coordinate benefits, and work directly with payers so your agency and your patients are never burdened with billing complexity.</p>
            <div className="flex gap-3 flex-wrap">
              {INSURANCES.map((ins, i) => (
                <span key={i} className="py-1.5 px-3.5 rounded-full bg-white text-[13px] text-navy font-medium border border-border">{ins}</span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="sec bg-warm">
        <div className="max-w-[1100px] mx-auto">
          <div className="bg-gradient-to-br from-navy to-teal-dark rounded-[20px] py-14 px-10 text-center text-white">
            <h2 className="font-serif text-[clamp(24px,4vw,34px)] font-bold mb-3.5">Your Patients Are at Home. Their Pharmacy Should Feel Like It Is Right Next Door.</h2>
            <p className="text-base text-white/75 max-w-[520px] mx-auto mb-7 leading-[1.7]">Schedule a free consultation and discover how we can support your home health agency.</p>
            <div className="flex gap-3.5 justify-center flex-wrap">
              <Btn href="/contact">Schedule a Free Consultation <ArrowRight /></Btn>
              <Btn outline href="tel:8187474000"><PhoneIcon /> (818) 747-4000</Btn>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
