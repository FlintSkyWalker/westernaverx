import { UserIcon, TruckIcon, ShieldIcon, PhoneIcon } from "./icons";

const CARDS = [
  {
    icon: <UserIcon />,
    title: "You Talk to the Owner",
    desc: "Western Avenue Pharmacy is owned and operated by Shahryar Barzegar, PharmD. When you call us, you reach a pharmacist who knows your facility, your residents, and your staff by name. No call centers. No hold music. No ticket numbers.",
  },
  {
    icon: <TruckIcon />,
    title: "Our Own Delivery Fleet",
    desc: "We do not outsource delivery. Every driver is trained by our pharmacy, equipped for HIPAA-compliant medication handling, and dispatched through optimized routing to guarantee on-time delivery. STAT medications at 2 AM? We are already on the way.",
  },
  {
    icon: <ShieldIcon />,
    title: "More Than a Dispensary",
    desc: "We embed ourselves in your care team. Medication therapy management, formulary optimization, staff training, and quarterly compliance reviews. We keep your facility audit-ready and your residents safe.",
  },
  {
    icon: <PhoneIcon />,
    title: "One Call Does It All",
    desc: "Pharmacy, DME, medical supplies, lab work, imaging. Instead of managing five vendors, you manage one relationship. We coordinate everything so your staff can focus on care, not logistics.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-25 px-6 bg-white max-md:py-15">
      <div className="max-w-[1100px] mx-auto">
        <p className="text-teal font-semibold text-sm tracking-[1.5px] uppercase mb-3">
          Why Choose Us
        </p>
        <h2 className="font-serif text-navy font-bold mb-4 max-w-[550px]" style={{ fontSize: "clamp(28px, 4vw, 42px)" }}>
          Why Facilities Choose Us Over Big-Box Pharmacies
        </h2>
        <p className="text-text-light text-[17px] leading-[1.7] max-w-[560px] mb-12">
          We built this pharmacy from the ground up for one purpose: to serve
          the facilities that serve our seniors.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
          {CARDS.map((card, i) => (
            <div
              key={i}
              className="flex gap-5 items-start p-7 rounded-[14px] bg-warm transition-all duration-300 hover:bg-accent hover:translate-x-1"
            >
              <div className="w-12 h-12 rounded-xl bg-teal flex items-center justify-center text-white shrink-0">
                {card.icon}
              </div>
              <div>
                <h3 className="font-bold text-[17px] text-navy mb-2">
                  {card.title}
                </h3>
                <p className="text-text-light text-[15px] leading-[1.7]">
                  {card.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
