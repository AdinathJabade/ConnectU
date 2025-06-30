import React, { useState } from "react";

const faqs = [
  {
    q: "Who can join ConnectU?",
    a: "Students, Alumni, Teachers, and TPOs from any campus can join and benefit from our platform.",
  },
  {
    q: "Is ConnectU free to use?",
    a: "Yes, ConnectU is free for all users. Premium features may be added in the future.",
  },
  {
    q: "How is my data protected?",
    a: "We use industry-standard security and never share your data without consent.",
  },
  {
    q: "Can I connect with people from other campuses?",
    a: "Yes! ConnectU encourages cross-campus networking and collaboration.",
  },
];

const FAQSection = () => {
  const [open, setOpen] = useState(-1);
  return (
    <section id="faq" className="w-full py-20 bg-gradient-to-br from-white via-blue-50 to-indigo-100 flex flex-col items-center text-center px-4 md:px-8">
      <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-blue-800 mb-8">Frequently Asked Questions</h2>
      <div className="max-w-2xl w-full mx-auto text-left">
        {faqs.map((faq, idx) => (
          <div key={faq.q} className="mb-4 border-b border-blue-200 pb-4">
            <button
              className="w-full flex justify-between items-center text-base md:text-lg font-semibold text-blue-700 focus:outline-none"
              onClick={() => setOpen(open === idx ? -1 : idx)}
            >
              {faq.q}
              <span className="ml-2 text-blue-400">{open === idx ? "-" : "+"}</span>
            </button>
            {open === idx && (
              <p className="mt-2 text-blue-600 text-sm md:text-base">{faq.a}</p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQSection;
