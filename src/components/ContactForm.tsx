"use client";

import { useState } from "react";
import { ArrowRight } from "./icons";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  if (submitted) {
    return (
      <div className="bg-white rounded-2xl p-8 border border-border">
        <div className="text-center py-9">
          <div className="text-[44px] mb-3">&#10003;</div>
          <h3 className="text-xl font-bold text-navy mb-1.5">Thank you!</h3>
          <p className="text-text-light text-[15px]">We will be in touch within 24 hours.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-2xl p-8 border border-border">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          setSubmitted(true);
        }}
      >
        <div className="grid2 mb-3.5">
          <div>
            <label className="text-xs font-semibold text-text-light block mb-1.5">First Name *</label>
            <input className="input" required />
          </div>
          <div>
            <label className="text-xs font-semibold text-text-light block mb-1.5">Last Name *</label>
            <input className="input" required />
          </div>
        </div>
        <div className="mb-3.5">
          <label className="text-xs font-semibold text-text-light block mb-1.5">Facility Name</label>
          <input className="input" />
        </div>
        <div className="mb-3.5">
          <label className="text-xs font-semibold text-text-light block mb-1.5">Email *</label>
          <input className="input" type="email" required />
        </div>
        <div className="mb-3.5">
          <label className="text-xs font-semibold text-text-light block mb-1.5">Phone</label>
          <input className="input" type="tel" />
        </div>
        <div className="mb-5">
          <label className="text-xs font-semibold text-text-light block mb-1.5">Message</label>
          <textarea className="input" rows={3} style={{ resize: "vertical" }} />
        </div>
        <button
          type="submit"
          className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full text-[15px] font-semibold cursor-pointer transition-all duration-300 bg-teal text-white border-none hover:bg-teal-dark"
        >
          Send Message <ArrowRight />
        </button>
      </form>
    </div>
  );
}
