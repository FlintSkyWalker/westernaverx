import SubHero from "@/components/SubHero";
import { CheckIcon } from "@/components/icons";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | Western Avenue Pharmacy",
  description: "A closed-door pharmacy in Los Angeles built from the ground up to serve senior living facilities. Owner-operated by Shahryar Barzegar, PharmD.",
};

const CHECKLIST = [
  "Owner-operated: the pharmacist who owns the business serves your facility",
  "Closed-door model: 100% of our attention goes to facility partners",
  "Our own drivers: every delivery handled by our trained team",
  "Clinical depth: MTM, formulary optimization, compliance reviews",
  "One vendor: pharmacy, DME, supplies, lab, and imaging",
];

export default function AboutPage() {
  return (
    <>
      <SubHero
        title="About Western Avenue Pharmacy"
        subtitle="A pharmacy built for the facilities that need it most."
      />

      <div className="sec bg-white">
        <div className="max-w-[1100px] mx-auto grid2 items-start">
          <div>
            <h2 className="font-serif text-[28px] font-bold text-navy mb-[18px]">Our Story</h2>
            <p className="text-text-light text-[15px] leading-[1.8] mb-[18px]">
              Western Avenue Pharmacy is a closed-door pharmacy in Los Angeles, built from the ground up to serve senior living facilities. We are not a retail pharmacy that happens to service facilities on the side. Every system we have was designed specifically for the facilities we serve.
            </p>
            <p className="text-text-light text-[15px] leading-[1.8] mb-[18px]">
              Founded by Shahryar Barzegar, PharmD, who saw firsthand how poorly most pharmacies serve senior care facilities. Long hold times, delayed deliveries, missing medications, zero clinical support. He built Western Avenue to be the pharmacy he wished existed.
            </p>
            <p className="text-navy text-[15px] leading-[1.8] font-medium">
              Today, Shahryar is still the pharmacist who answers when you call. He knows the administrators, the caregivers, and the residents. That is not a marketing claim. It is how this pharmacy operates.
            </p>
          </div>
          <div className="flex flex-col gap-3.5">
            {CHECKLIST.map((item, i) => (
              <div key={i} className="flex gap-3 items-start p-4 px-[18px] rounded-xl bg-warm border border-border">
                <div className="mt-0.5"><CheckIcon /></div>
                <p className="text-text-primary text-sm leading-[1.6]">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
