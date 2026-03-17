import SubHero from "@/components/SubHero";
import SectionHead from "@/components/SectionHead";
import FeatureRow from "@/components/FeatureRow";
import Btn from "@/components/Btn";
import { SunIcon, ClockIcon, ShieldIcon, UserIcon, TruckIcon, ArrowRight } from "@/components/icons";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Adult Day Health Center Pharmacy | Western Avenue Pharmacy",
  description: "Pharmacy services for Adult Day Health Centers. Schedule-aligned delivery, medication administration support, and clinical oversight in Los Angeles.",
};

export default function AdultDayPage() {
  return (
    <>
      <SubHero
        badge={<><SunIcon /> Facility Type</>}
        title="Adult Day Health Centers"
        subtitle="Medication management timed to your daily schedule, with delivery and clinical support designed around your center's operations."
      />

      <div className="sec bg-white">
        <div className="max-w-[1100px] mx-auto">
          <SectionHead tag="What We Provide" title="Pharmacy Services for Adult Day Programs" />
          <div className="grid2">
            {[
              { icon: <ClockIcon />, title: "Schedule-Aligned Delivery", desc: "Medications delivered before your program starts so everything is ready when participants arrive." },
              { icon: <ShieldIcon />, title: "Medication Administration Support", desc: "Pre-packaged medications with clear labeling for your staff, reducing administration errors." },
              { icon: <UserIcon />, title: "Clinical Oversight", desc: "Pharmacist review of participant medications to identify interactions and optimize therapy." },
              { icon: <TruckIcon />, title: "DME & Supplies", desc: "Medical equipment and supplies delivered alongside medications through a single coordinated service." },
            ].map((c, i) => <FeatureRow key={i} icon={c.icon} title={c.title} desc={c.desc} />)}
          </div>
          <div className="mt-10 text-center">
            <Btn href="/contact">Schedule a Consultation <ArrowRight /></Btn>
          </div>
        </div>
      </div>
    </>
  );
}
