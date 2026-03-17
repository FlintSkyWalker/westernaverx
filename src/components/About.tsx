import { CheckIcon } from "./icons";

const CHECKLIST = [
  "Owner-operated: the pharmacist who owns the business serves your facility",
  "Closed-door model: 100% of our attention goes to facility partners",
  "Our own drivers: every delivery handled by our trained team",
  "Clinical depth: MTM, formulary optimization, compliance reviews",
  "One vendor: pharmacy, DME, supplies, lab, and imaging",
];

export default function About() {
  return (
    <section id="about" className="py-25 px-6 bg-warm max-md:py-15">
      <div className="max-w-[1100px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-15 items-center">
          {/* Text */}
          <div>
            <p className="text-teal font-semibold text-sm tracking-[1.5px] uppercase mb-3">
              About Us
            </p>
            <h2
              className="font-serif text-navy font-bold mb-5 leading-[1.25]"
              style={{ fontSize: "clamp(28px, 4vw, 38px)" }}
            >
              A Pharmacy Built for the Facilities That Need It Most
            </h2>
            <p className="text-text-light text-base leading-[1.8] mb-5">
              Western Avenue Pharmacy is a closed-door pharmacy in Los Angeles,
              built from the ground up to serve senior living facilities. We are
              not a retail pharmacy that happens to service facilities on the
              side. Every system we have was designed specifically for the
              facilities we serve.
            </p>
            <p className="text-text-light text-base leading-[1.8] mb-5">
              Founded by Shahryar Barzegar, PharmD, who saw firsthand how poorly
              most pharmacies serve senior care facilities. Long hold times,
              delayed deliveries, missing medications, zero clinical support. He
              built Western Avenue to be the pharmacy he wished existed.
            </p>
            <p className="text-navy text-base leading-[1.8] font-medium">
              Today, Shahryar is still the pharmacist who answers when you call.
              He knows the administrators, the caregivers, and the residents.
              That is not a marketing claim. It is how this pharmacy operates.
            </p>
          </div>

          {/* Checklist */}
          <div className="flex flex-col gap-4">
            {CHECKLIST.map((item, i) => (
              <div
                key={i}
                className="flex gap-3.5 items-start px-5 py-[18px] rounded-xl bg-white border border-[#e8ecf0]"
              >
                <div className="mt-0.5 shrink-0">
                  <CheckIcon />
                </div>
                <p className="text-text-primary text-[15px] leading-[1.6]">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
