import ContactForm from "./ContactForm";

const CONTACT_INFO = [
  { label: "Phone", value: "(818) 747-4000", href: "tel:8187474000" },
  { label: "Fax", value: "(818) 981-9333" },
  { label: "Email", value: "Rx@Westernaverx.com", href: "mailto:Rx@Westernaverx.com" },
];

export default function Contact() {
  return (
    <section id="contact" className="py-25 px-6 bg-warm max-md:py-15">
      <div className="max-w-[1100px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-15">
          {/* Info */}
          <div>
            <p className="text-teal font-semibold text-sm tracking-[1.5px] uppercase mb-3">
              Get In Touch
            </p>
            <h2
              className="font-serif text-navy font-bold mb-5"
              style={{ fontSize: "clamp(28px, 4vw, 38px)" }}
            >
              Contact Us
            </h2>
            <p className="text-text-light text-base leading-[1.8] mb-8">
              Whether you are looking to switch pharmacies or just want to learn
              how we can support your facility, we would love to hear from you.
            </p>

            <div className="flex flex-col gap-5">
              {CONTACT_INFO.map((item, i) => (
                <div key={i}>
                  <p className="text-[13px] font-semibold text-teal uppercase tracking-[1px] mb-1">
                    {item.label}
                  </p>
                  {item.href ? (
                    <a
                      href={item.href}
                      className="text-navy text-lg font-semibold no-underline hover:text-teal transition-colors"
                    >
                      {item.value}
                    </a>
                  ) : (
                    <p className="text-navy text-lg font-semibold">
                      {item.value}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Form */}
          <div className="bg-white rounded-2xl p-9 border border-[#e8ecf0]">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}
