import SubHero from "@/components/SubHero";
import SectionHead from "@/components/SectionHead";
import FeatureRow from "@/components/FeatureRow";
import Btn from "@/components/Btn";
import { SunIcon, ClockIcon, ShieldIcon, UserIcon, TruckIcon, PhoneIcon, HeartIcon, AlertTriIcon, CheckIcon, ArrowRight } from "@/components/icons";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Adult Day Health Center Pharmacy | Western Avenue Pharmacy",
  description: "Pharmacy services for Adult Day Health Centers. Schedule-aligned delivery, medication administration support, and clinical oversight in Los Angeles.",
};

const CHALLENGES = [
  { t: "Split Medication Schedules", d: "Participants may take some medications at home and others at your center. Coordination between the two settings is critical to avoid missed doses or duplications." },
  { t: "Daily Census Changes", d: "Your participant roster shifts daily. Medications need to be available for whoever is attending that day, not stored for residents who live on-site." },
  { t: "Time-Sensitive Administration", d: "Medications need to be ready when participants arrive. A pharmacy that delivers late disrupts your entire morning routine and delays care." },
];

const FEATURES = [
  { icon: <ClockIcon />, title: "Pre-Program Delivery", desc: "Medications delivered before your program opens so everything is staged, organized, and ready when participants walk in. No scrambling, no delays, no disruption to your morning routine." },
  { icon: <ShieldIcon />, title: "Pre-Packaged & Clearly Labeled", desc: "Every participant's medications arrive in adherence packaging organized by administration time, with clear labels that your staff can verify at a glance. Reduces administration errors and simplifies documentation." },
  { icon: <UserIcon />, title: "Pharmacist Clinical Support", desc: "Our pharmacist reviews participant medication regimens, identifies interactions and high-risk combinations, and works with prescribers to optimize therapy. Available by phone for real-time consultations during your program hours." },
  { icon: <PhoneIcon />, title: "Coordination with Home Pharmacies", desc: "When a participant takes medications both at home and at your center, we coordinate with their home pharmacy to ensure there are no gaps, duplications, or conflicts in their regimen." },
  { icon: <TruckIcon />, title: "Medical Supplies & DME", desc: "Blood pressure monitors, glucometers, wound care supplies, incontinence products, and more. Delivered alongside medications through one coordinated service so you are not managing multiple vendors." },
  { icon: <HeartIcon />, title: "Staff Training & Compliance", desc: "We provide training for your medication administration staff on proper handling, storage, documentation, controlled substance protocols, and survey preparedness." },
];

const DOC_ITEMS = [
  "Medication Administration Records (MARS)",
  "Controlled Substance Distribution Records (CSDR)",
  "Narcotic count sheets",
  "NDC reports for billing and inventory",
  "Monthly cost analysis reports",
  "Custom reports tailored to your center's needs",
];

const AUDIT_ITEMS = [
  "Quarterly medication storage and handling reviews",
  "Documentation audits and gap identification",
  "Policy and procedure support for medication management",
  "On-call pharmacist availability during survey visits",
  "Corrective action support if findings occur",
];

const SCREEN_ITEMS = [
  "Fall-risk medications (sedatives, antihypertensives, anticholinergics)",
  "Drug-drug interactions across multiple prescribers",
  "Cumulative sedative burden from combined medications",
  "Medications inappropriate for older adults (Beers Criteria)",
  "Duplicate therapies from uncoordinated prescribing",
  "Doses that need age or renal adjustment",
];

const INSURANCES = ["Medicare", "Medi-Cal", "Kaiser-D", "Commercial PPO/HMO", "Workers Comp"];

export default function AdultDayPage() {
  return (
    <>
      <SubHero
        badge={<><SunIcon /> Facility Type</>}
        title="Adult Day Health Centers"
        subtitle="Your center runs on a daily schedule. Your pharmacy should too. We provide medication management, packaging, delivery, and clinical support timed precisely to your program's operations."
      />

      {/* The Unique Challenge */}
      <div className="sec bg-white">
        <div className="max-w-[1100px] mx-auto">
          <SectionHead
            tag="The Challenge"
            title="Why Adult Day Health Centers Need a Specialized Pharmacy"
            sub="Adult Day Health Centers operate differently from residential facilities. Participants arrive in the morning, receive care during the day, and go home at night. This creates unique medication management challenges."
          />
          <div className="grid3">
            {CHALLENGES.map((c, i) => (
              <div key={i} className="card">
                <div className="mb-3"><AlertTriIcon /></div>
                <h3 className="font-bold text-[17px] text-navy mb-2">{c.t}</h3>
                <p className="text-text-light text-sm leading-7">{c.d}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* How We Solve It */}
      <div className="sec bg-warm">
        <div className="max-w-[1100px] mx-auto">
          <SectionHead
            tag="Our Solution"
            title="Pharmacy Services Designed Around Your Schedule"
            sub="We do not force your center into a pharmacy's workflow. We fit our workflow around yours."
          />
          <div className="grid2">
            {FEATURES.map((c, i) => <FeatureRow key={i} icon={c.icon} title={c.title} desc={c.desc} />)}
          </div>
        </div>
      </div>

      {/* Documentation & Reporting */}
      <div className="sec bg-white">
        <div className="max-w-[1100px] mx-auto">
          <SectionHead
            tag="Documentation"
            title="Reporting and Compliance Support"
            sub="Adult Day Health Centers face the same regulatory scrutiny as residential facilities. We help you stay prepared."
          />
          <div className="grid2">
            <div>
              <p className="text-text-light text-[15px] leading-[1.8] mb-5">We provide all the documentation your center needs for daily operations and regulatory compliance. Every report is formatted to match your workflows and delivered on your schedule.</p>
              <div className="flex flex-col gap-3">
                {DOC_ITEMS.map((item, i) => (
                  <div key={i} className="flex gap-2.5">
                    <CheckIcon /><p className="text-text text-sm">{item}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="card">
              <h3 className="font-bold text-[17px] text-navy mb-3.5">Audit & Survey Preparation</h3>
              <p className="text-text-light text-sm leading-7 mb-4">When a state survey is approaching, you should not be scrambling to organize medication records. We provide:</p>
              {AUDIT_ITEMS.map((item, i) => (
                <div key={i} className="flex gap-2.5 mb-2">
                  <CheckIcon /><span className="text-text text-sm">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Preserving Independence */}
      <div className="sec bg-white">
        <div className="max-w-[1100px] mx-auto">
          <SectionHead
            tag="Clinical Focus"
            title="Keeping Your Participants Independent"
            sub="The participants who attend your center are there because they are still independent enough to live at home. Our job is to help them stay that way."
          />
          <div className="grid2">
            <div>
              <p className="text-text-light text-[15px] leading-[1.8] mb-5">Medication-related harm is one of the leading preventable causes of functional decline in older adults. Falls caused by sedatives and blood pressure medications, confusion from drug interactions, hospitalizations from preventable adverse events. Each one can be the event that takes a participant from independent living to a higher level of care.</p>
              <p className="text-text-light text-[15px] leading-[1.8] mb-5">Our pharmacist proactively reviews every participant&apos;s medication regimen to identify the specific risks that threaten independence: high-risk drug combinations, cumulative sedative burden, medications that increase fall risk, and drug-disease conflicts. We then work with prescribers to optimize therapy before a problem occurs.</p>
              <p className="text-navy text-[15px] leading-[1.8] font-medium">The goal is simple: fewer falls, fewer ER visits, fewer hospitalizations, and more days where your participants show up at your center healthy and independent.</p>
            </div>
            <div className="flex flex-col gap-4">
              <div className="card">
                <h3 className="font-bold text-[17px] text-teal mb-3">What We Screen For</h3>
                {SCREEN_ITEMS.map((item, i) => (
                  <div key={i} className="flex gap-2.5 mb-2">
                    <CheckIcon /><span className="text-text text-sm">{item}</span>
                  </div>
                ))}
              </div>
              <div className="card bg-accent border border-teal/15">
                <h3 className="font-bold text-[17px] text-navy mb-2.5">On-Site Education Sessions</h3>
                <p className="text-text-light text-sm leading-[1.7]">Our pharmacist visits your center to conduct medication education sessions for participants and their families. We explain what each medication does, why it matters, and what to watch for. When participants understand their medications, adherence improves and adverse events decrease.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Insurance & Billing */}
      <div className="sec bg-warm">
        <div className="max-w-[1100px] mx-auto">
          <div className="p-8 rounded-2xl bg-accent border border-teal/15">
            <h3 className="font-bold text-xl text-navy mb-3">Insurance & Billing</h3>
            <p className="text-text-light text-[15px] leading-[1.8] mb-4">We accept all major insurances and handle the billing complexity so your staff can focus on participant care. Prior authorizations, benefits coordination, and therapy substitutions for cost management are all handled by our team.</p>
            <div className="flex gap-3 flex-wrap">
              {INSURANCES.map((ins, i) => (
                <span key={i} className="py-1.5 px-3.5 rounded-full bg-white text-[13px] text-navy font-medium border border-border">{ins}</span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="sec bg-white">
        <div className="max-w-[1100px] mx-auto">
          <div className="bg-gradient-to-br from-navy to-teal-dark rounded-[20px] py-14 px-10 text-center text-white">
            <h2 className="font-serif text-[clamp(24px,4vw,34px)] font-bold mb-3.5">Your Center Runs on a Schedule. Your Pharmacy Should Too.</h2>
            <p className="text-base text-white/75 max-w-[520px] mx-auto mb-7 leading-[1.7]">Schedule a free consultation and see how we can simplify medication management for your Adult Day Health Center.</p>
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
