import SubHero from "@/components/SubHero";
import SectionHead from "@/components/SectionHead";
import FeatureRow from "@/components/FeatureRow";
import Btn from "@/components/Btn";
import { UserIcon, TruckIcon, ShieldIcon, PhoneIcon, ArrowRight } from "@/components/icons";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home Health Pharmacy Services | Western Avenue Pharmacy",
  description: "Coordinated pharmacy services for home health patients. Reliable delivery, medication management, and direct pharmacist access in Los Angeles.",
};

export default function HomeHealthPage() {
  return (
    <>
      <SubHero
        badge={<><UserIcon /> Facility Type</>}
        title="Home Health"
        subtitle="Coordinated pharmacy services for patients receiving care at home. Reliable delivery, medication management, and direct pharmacist access."
      />

      <div className="sec bg-white">
        <div className="max-w-[1100px] mx-auto">
          <SectionHead tag="What We Provide" title="Supporting Care in the Home" />
          <div className="grid2">
            {[
              { icon: <TruckIcon />, title: "Home Delivery", desc: "Medications delivered directly to patients at home on a schedule that works for their care plan." },
              { icon: <ShieldIcon />, title: "Medication Synchronization", desc: "We align refill dates so patients receive all their medications together, reducing confusion and missed doses." },
              { icon: <UserIcon />, title: "Pharmacist Consultations", desc: "Direct phone access to a pharmacist for medication questions, interactions, and care plan support." },
              { icon: <PhoneIcon />, title: "Care Team Coordination", desc: "We communicate directly with your nurses and physicians to ensure seamless medication management across transitions of care." },
            ].map((c, i) => <FeatureRow key={i} icon={c.icon} title={c.title} desc={c.desc} />)}
          </div>
          <div className="mt-10 text-center">
            <Btn href="/contact">Get Started <ArrowRight /></Btn>
          </div>
        </div>
      </div>
    </>
  );
}
