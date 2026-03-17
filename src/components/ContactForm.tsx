"use client";

import { useState } from "react";
import { ArrowRight } from "./icons";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  if (submitted) {
    return (
      <div className="text-center py-10">
        <div className="text-5xl mb-4 text-teal">&#10003;</div>
        <h3 className="text-[22px] font-bold text-navy mb-2">Thank you!</h3>
        <p className="text-text-light text-base">
          We will be in touch within 24 hours.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setSubmitted(true);
      }}
    >
      <div className="grid grid-cols-2 gap-4 mb-4 max-sm:grid-cols-1">
        <div>
          <label className="text-[13px] font-semibold text-text-light block mb-1.5">
            First Name *
          </label>
          <input
            required
            className="w-full px-[18px] py-3.5 border border-[#d0d5dd] rounded-[10px] text-[15px] text-text-primary bg-white outline-none transition-all duration-300 focus:border-teal focus:shadow-[0_0_0_3px_rgba(0,149,200,0.12)]"
            placeholder="First name"
          />
        </div>
        <div>
          <label className="text-[13px] font-semibold text-text-light block mb-1.5">
            Last Name *
          </label>
          <input
            required
            className="w-full px-[18px] py-3.5 border border-[#d0d5dd] rounded-[10px] text-[15px] text-text-primary bg-white outline-none transition-all duration-300 focus:border-teal focus:shadow-[0_0_0_3px_rgba(0,149,200,0.12)]"
            placeholder="Last name"
          />
        </div>
      </div>
      <div className="mb-4">
        <label className="text-[13px] font-semibold text-text-light block mb-1.5">
          Email *
        </label>
        <input
          required
          type="email"
          className="w-full px-[18px] py-3.5 border border-[#d0d5dd] rounded-[10px] text-[15px] text-text-primary bg-white outline-none transition-all duration-300 focus:border-teal focus:shadow-[0_0_0_3px_rgba(0,149,200,0.12)]"
          placeholder="email@facility.com"
        />
      </div>
      <div className="mb-4">
        <label className="text-[13px] font-semibold text-text-light block mb-1.5">
          Facility Name
        </label>
        <input
          className="w-full px-[18px] py-3.5 border border-[#d0d5dd] rounded-[10px] text-[15px] text-text-primary bg-white outline-none transition-all duration-300 focus:border-teal focus:shadow-[0_0_0_3px_rgba(0,149,200,0.12)]"
          placeholder="Your facility name"
        />
      </div>
      <div className="mb-4">
        <label className="text-[13px] font-semibold text-text-light block mb-1.5">
          Phone
        </label>
        <input
          type="tel"
          className="w-full px-[18px] py-3.5 border border-[#d0d5dd] rounded-[10px] text-[15px] text-text-primary bg-white outline-none transition-all duration-300 focus:border-teal focus:shadow-[0_0_0_3px_rgba(0,149,200,0.12)]"
          placeholder="(555) 000-0000"
        />
      </div>
      <div className="mb-6">
        <label className="text-[13px] font-semibold text-text-light block mb-1.5">
          Message
        </label>
        <textarea
          rows={4}
          className="w-full px-[18px] py-3.5 border border-[#d0d5dd] rounded-[10px] text-[15px] text-text-primary bg-white outline-none transition-all duration-300 resize-y focus:border-teal focus:shadow-[0_0_0_3px_rgba(0,149,200,0.12)]"
          placeholder="Tell us about your facility and how we can help..."
        />
      </div>
      <button
        type="submit"
        className="w-full inline-flex items-center justify-center gap-2 px-9 py-4 bg-teal text-white rounded-full text-base font-semibold border-none cursor-pointer transition-all duration-300 hover:bg-teal-dark hover:-translate-y-0.5 hover:shadow-[0_8px_25px_rgba(0,149,200,0.3)]"
      >
        Send Message <ArrowRight />
      </button>
    </form>
  );
}
