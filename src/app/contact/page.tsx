import SubHero from "@/components/SubHero";
import ContactForm from "@/components/ContactForm";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | Western Avenue Pharmacy",
  description: "Get in touch with Western Avenue Pharmacy. Call (818) 747-4000 or send us a message. 24/7 pharmacy services for senior living facilities in Los Angeles.",
};

const CONTACT_INFO = [
  { label: "Phone", value: "(818) 747-4000", href: "tel:8187474000" },
  { label: "Fax", value: "(818) 981-9333" },
  { label: "Email", value: "Rx@Westernaverx.com", href: "mailto:Rx@Westernaverx.com" },
];

export default function ContactPage() {
  return (
    <>
      <SubHero
        title="Contact Us"
        subtitle="Whether you are looking to switch pharmacies or want to learn how we can support your facility, we would love to hear from you."
      />

      <div className="sec bg-white">
        <div className="max-w-[1100px] mx-auto grid2 items-start">
          <div>
            <div className="mb-8">
              {CONTACT_INFO.map((c, i) => (
                <div key={i} className="mb-5">
                  <p className="text-xs font-semibold text-teal uppercase tracking-[1px] mb-1">{c.label}</p>
                  {c.href ? (
                    <a href={c.href} className="text-navy text-lg font-semibold no-underline hover:text-teal transition-colors">
                      {c.value}
                    </a>
                  ) : (
                    <p className="text-navy text-lg font-semibold">{c.value}</p>
                  )}
                </div>
              ))}
            </div>
            <div className="p-5 px-6 rounded-[14px] bg-warm">
              <p className="font-semibold text-navy mb-2">Hours</p>
              <p className="text-text-light text-sm leading-[1.7]">
                Pharmacy: 24/7 (on-call pharmacist always available)<br />
                Office: Monday through Friday, 9 AM to 6 PM<br />
                Delivery: 24/7, 365 days a year
              </p>
            </div>
          </div>
          <ContactForm />
        </div>
      </div>
    </>
  );
}
