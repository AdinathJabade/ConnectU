import React from "react";

const logos = [
  { src: "/company-logos/Amazon.svg", alt: "Amazon" },
  { src: "/company-logos/Capgemini.svg", alt: "Capgemini" },
  { src: "/company-logos/Facebook.svg", alt: "Facebook" },
  { src: "/company-logos/Flipkart.svg", alt: "Flipkart" },
  { src: "/company-logos/Google.svg", alt: "Google" },
  { src: "/company-logos/Hcl.svg", alt: "HCL" },
  { src: "/company-logos/Hexaware.svg", alt: "Hexaware" },
  { src: "/company-logos/Infosys.svg", alt: "Infosys" },
  { src: "/company-logos/Microsoft.svg", alt: "Microsoft" },
  { src: "/company-logos/Phonepe.svg", alt: "PhonePe" },
  { src: "/company-logos/Tcs.svg", alt: "TCS" },
  { src: "/company-logos/Techmahindra.svg", alt: "Tech Mahindra" },
];

const CompanyLogosSection = () => (
  <section className="w-full py-14 bg-white flex flex-col items-center relative overflow-hidden px-4 md:px-8">
    <h3 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-blue-800 mb-10 tracking-tight text-center drop-shadow-sm">
      Trusted by <span className="text-blue-500">Top Companies</span>
    </h3>
    <div className="relative h-16 sm:h-20 md:h-28 w-full max-w-6xl overflow-hidden">
      <div
        className="flex flex-row gap-6 sm:gap-12 md:gap-20 items-center animate-logos-horizontal whitespace-nowrap"
        style={{ animation: `logos-horizontal ${logos.length * 3}s linear infinite` }}
      >
        {[...logos, ...logos].map((logo, idx) => (
          <img
            key={idx}
            src={logo.src}
            alt={logo.alt}
            className="h-10 sm:h-16 md:h-20 lg:h-28 w-auto object-contain opacity-95 hover:scale-110 transition duration-300 inline-block"
            draggable="false"
          />
        ))}
      </div>
    </div>
    <style>{`
      @keyframes logos-horizontal {
        0% { transform: translateX(0); }
        100% { transform: translateX(-50%); }
      }
      .animate-logos-horizontal {
        will-change: transform;
        min-width: 200%;
        display: inline-flex;
      }
      @media (max-width: 1024px) {
        .animate-logos-horizontal {
          min-width: 250%;
        }
      }
    `}</style>
  </section>
);

export default CompanyLogosSection;
