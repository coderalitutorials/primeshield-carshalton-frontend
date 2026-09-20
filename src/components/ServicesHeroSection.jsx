




// import React from "react";
// import { Link } from "react-router-dom";
// import { ArrowRight, ShieldCheck, MapPin } from "lucide-react";

// export default function ServicesHeroSection() {
//   return (
//     // h-full ki jagah mobile par min-h aur automatic spacing handle karne ke liye padding add ki hai
//     <section className="relative min-h-[620px] sm:min-h-[680px] md:min-h-[640px] lg:h-[720px] flex items-center overflow-hidden bg-[#7a6363] font-sans pt-28 pb-12 md:py-0">
//       <img
//         src="/images/services-primeshield-banner.webp"
//         alt="PrimeShield Services Limited pest control services for London homes and businesses"
//         className="absolute inset-0 w-full h-full object-cover object-center"
//         loading="eager"
//         decoding="async"
//       />

//       {/* Overlays */}
//       <div className="absolute inset-0 bg-[#111111]/65" />
//       <div className="absolute inset-0 bg-gradient-to-r from-[#111111]/95 via-[#111111]/65 to-[#111111]/35" />
//       <div className="absolute inset-0 bg-gradient-to-t from-[#111111]/70 via-transparent to-transparent" />

//       {/* Decorative Bars */}
//       <div className="absolute top-0 right-0 w-64 md:w-96 h-[6px] bg-[#F36F21]" />
//       <div className="absolute bottom-0 left-0 w-full h-[6px] bg-[#F36F21]" />

//       <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10 lg:px-14 w-full flex items-center">
//         <div className="max-w-4xl w-full">
          
//           {/* Subtitle */}
//           <span className="inline-flex items-center gap-3 text-[#F36F21] text-[10px] sm:text-xs font-black uppercase tracking-[0.28em] mb-4 sm:mb-6">
//             <span className="w-6 sm:w-10 h-[2px] bg-[#F36F21]" />
//             PrimeShield Pest Control
//           </span>

//           {/* Main Heading - Responsive sizing saaf overlap khatam karega */}
//           <h1 className="text-white text-4xl sm:text-6xl lg:text-[88px] font-black leading-[1.05] sm:leading-[1.02] tracking-tight uppercase">
//             Services
//           </h1>

//           {/* Divider Line */}
//           <div className="w-16 sm:w-24 h-[3px] bg-[#F36F21] mt-5 mb-5 sm:mt-8 sm:mb-8" />

//           {/* Description */}
//           <p className="text-white/80 text-xs sm:text-sm md:text-lg leading-relaxed max-w-2xl">
//             Professional pest control services for London homes, landlords and
//             businesses. From rodents and bed bugs to wasps, cockroaches, ants
//             and fleas, our team helps protect your property with reliable
//             treatment and prevention support.
//           </p>

//           {/* CTA Buttons */}
//           <div className="mt-7 sm:mt-9 flex flex-wrap gap-3 sm:gap-4">
//             <Link
//               to="/contact-us"
//               className="inline-flex items-center justify-center gap-3 bg-[#F36F21] text-white px-6 py-3.5 sm:px-8 sm:py-4 text-[11px] sm:text-xs font-black uppercase tracking-[0.22em] hover:bg-[#D95A13] transition-colors w-full sm:w-auto"
//             >
//               Contact Us
//               <ArrowRight size={17} />
//             </Link>

//             <Link
//               to="/about-us"
//               className="inline-flex items-center justify-center gap-3 border border-white/40 text-white px-6 py-3.5 sm:px-8 sm:py-4 text-[11px] sm:text-xs font-black uppercase tracking-[0.22em] hover:bg-white hover:text-[#111111] transition-colors w-full sm:w-auto"
//             >
//               About Company
//             </Link>
//           </div>

//           {/* Info Badges - Grid automatic rows control karega */}
//           <div className="mt-8 sm:mt-10 grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 max-w-2xl">
//             <div className="bg-white/10 border border-white/15 backdrop-blur-sm p-3 sm:p-4 flex items-center gap-3">
//               <ShieldCheck className="w-5 h-5 text-[#F36F21] shrink-0" />
//               <span className="text-white text-xs sm:text-sm font-bold tracking-wide">
//                 Safe & Targeted Treatments
//               </span>
//             </div>

//             <div className="bg-white/10 border border-white/15 backdrop-blur-sm p-3 sm:p-4 flex items-center gap-3">
//               <MapPin className="w-5 h-5 text-[#F36F21] shrink-0" />
//               <span className="text-white text-xs sm:text-sm font-bold tracking-wide">
//                12 Old Bond Street, London, England,W1S4PW
//               </span>
//             </div>
//           </div>

//         </div>
//       </div>
//     </section>
//   );
// }













// import React from "react";
// import { Link } from "react-router-dom";
// import { ArrowRight, ShieldCheck, MapPin } from "lucide-react";

// export default function ServicesHeroSection() {
//   return (
//     <section className="relative min-h-[620px] sm:min-h-[680px] md:min-h-[640px] lg:h-[720px] flex items-center overflow-hidden bg-[#7a6363] font-sans pt-28 pb-12 md:py-0">
//       <img
//         src="/images/services-primeshield-banner.webp"
//         alt="PrimeShield Kensington pest control services for Kensington and South Kensington properties"
//         className="absolute inset-0 w-full h-full object-cover object-center"
//         loading="eager"
//         decoding="async"
//       />

//       <div className="absolute inset-0 bg-[#111111]/65" />
//       <div className="absolute inset-0 bg-gradient-to-r from-[#111111]/95 via-[#111111]/65 to-[#111111]/35" />
//       <div className="absolute inset-0 bg-gradient-to-t from-[#111111]/70 via-transparent to-transparent" />

//       <div className="absolute top-0 right-0 w-64 md:w-96 h-[6px] bg-[#F36F21]" />
//       <div className="absolute bottom-0 left-0 w-full h-[6px] bg-[#F36F21]" />

//       <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10 lg:px-14 w-full flex items-center">
//         <div className="max-w-4xl w-full">
//           <span className="inline-flex items-center gap-3 text-[#F36F21] text-[10px] sm:text-xs font-black uppercase tracking-[0.28em] mb-4 sm:mb-6">
//             <span className="w-6 sm:w-10 h-[2px] bg-[#F36F21]" />
//             PrimeShield Kensington
//           </span>

//           <h1 className="text-white text-4xl sm:text-6xl lg:text-[88px] font-black leading-[1.05] sm:leading-[1.02] tracking-tight uppercase">
//             Services
//           </h1>

//           <div className="w-16 sm:w-24 h-[3px] bg-[#F36F21] mt-5 mb-5 sm:mt-8 sm:mb-8" />

//           <p className="text-white/80 text-xs sm:text-sm md:text-lg leading-relaxed max-w-2xl">
//             Professional pest control services for Kensington homes, landlords
//             and businesses. From rodents and bed bugs to wasps, cockroaches,
//             ants and fleas, PrimeShield Kensington helps protect local
//             properties with reliable treatment, inspection and prevention
//             support from 40 Harrington Rd, South Kensington, London SW7 3ND.
//           </p>

//           <div className="mt-7 sm:mt-9 flex flex-wrap gap-3 sm:gap-4">
//             <Link
//               to="/contact-us"
//               className="inline-flex items-center justify-center gap-3 bg-[#F36F21] text-white px-6 py-3.5 sm:px-8 sm:py-4 text-[11px] sm:text-xs font-black uppercase tracking-[0.22em] hover:bg-[#D95A13] transition-colors w-full sm:w-auto"
//             >
//               Contact Kensington Team
//               <ArrowRight size={17} />
//             </Link>

//             <Link
//               to="/about-us"
//               className="inline-flex items-center justify-center gap-3 border border-white/40 text-white px-6 py-3.5 sm:px-8 sm:py-4 text-[11px] sm:text-xs font-black uppercase tracking-[0.22em] hover:bg-white hover:text-[#111111] transition-colors w-full sm:w-auto"
//             >
//               About PrimeShield Kensington
//             </Link>
//           </div>

//           <div className="mt-8 sm:mt-10 grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 max-w-2xl">
//             <div className="bg-white/10 border border-white/15 backdrop-blur-sm p-3 sm:p-4 flex items-center gap-3">
//               <ShieldCheck className="w-5 h-5 text-[#F36F21] shrink-0" />
//               <span className="text-white text-xs sm:text-sm font-bold tracking-wide">
//                 Safe & Targeted Treatments
//               </span>
//             </div>

//             <div className="bg-white/10 border border-white/15 backdrop-blur-sm p-3 sm:p-4 flex items-center gap-3">
//               <MapPin className="w-5 h-5 text-[#F36F21] shrink-0" />
//               <span className="text-white text-xs sm:text-sm font-bold tracking-wide">
//                 40 Harrington Rd, South Kensington, London SW7 3ND
//               </span>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }














// import React from "react";
// import { Link } from "react-router-dom";
// import {
//   ArrowUpRight,
//   ShieldCheck,
//   MapPin,
//   Phone,
//   Bug,
// } from "lucide-react";

// export default function ServicesHeroSection() {
//   return (
//     <section className="relative overflow-hidden bg-[#292929] font-sans pt-24 lg:pt-28">
//       <div className="max-w-[1500px] mx-auto px-5 sm:px-8 lg:px-12">

//         {/* Main Hero */}
//         <div className="relative min-h-[680px] lg:min-h-[700px] grid lg:grid-cols-[0.92fr_1.08fr]">

//           {/* Left Content Panel */}
//           <div className="relative z-20 flex flex-col justify-center bg-[#292929] px-6 py-14 sm:px-10 sm:py-16 lg:px-16 lg:py-20">

//             {/* Small Label */}
//             <div className="flex items-center gap-3 mb-8">
//               <div className="w-8 h-8 flex items-center justify-center border border-[#F47B2B]">
//                 <Bug size={15} className="text-[#F47B2B]" />
//               </div>

//               <span className="text-[#F47B2B] text-[10px] sm:text-xs font-black uppercase tracking-[0.25em]">
//                 Pest Control • Bromley
//               </span>
//             </div>

//             {/* Heading */}
//             <h1 className="text-white text-5xl sm:text-6xl md:text-7xl lg:text-[76px] font-black uppercase leading-[0.94] tracking-[-0.04em]">
//               The Right
//               <span className="block text-[#F47B2B] mt-2">
//                 Response
//               </span>
//               <span className="block mt-2">
//                 For Pests.
//               </span>
//             </h1>

//             {/* Orange Divider */}
//             <div className="flex items-center gap-4 mt-8 mb-7">
//               <div className="w-20 h-[3px] bg-[#F47B2B]" />
//               <div className="w-2 h-2 rounded-full bg-[#F47B2B]" />
//             </div>

//             {/* Description */}
//             <p className="text-white/75 text-sm sm:text-base leading-7 max-w-xl">
//               From an isolated sighting to a pest problem that keeps returning,
//               PrimeShield Services Bromley provides focused pest control for
//               residential and commercial properties. Our services are built
//               around identifying the issue, treating it appropriately and
//               helping reduce the chance of further activity.
//             </p>

//             {/* Buttons */}
//             <div className="flex flex-col sm:flex-row gap-3 mt-9">
//               <Link
//                 to="/contact-us"
//                 className="group inline-flex items-center justify-center gap-4 bg-[#F47B2B] text-white px-7 py-4 text-[11px] font-black uppercase tracking-[0.18em] hover:opacity-90 transition-opacity"
//               >
//                 Arrange An Enquiry
//                 <ArrowUpRight
//                   size={17}
//                   className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
//                 />
//               </Link>

//               <Link
//                 to="/about-us"
//                 className="inline-flex items-center justify-center gap-3 border border-white/25 text-white px-7 py-4 text-[11px] font-black uppercase tracking-[0.18em] hover:bg-white hover:text-[#292929] transition-colors"
//               >
//                 About PrimeShield
//               </Link>
//             </div>

//             {/* Local Detail */}
//             <div className="mt-10 pt-7 border-t border-white/15 grid sm:grid-cols-2 gap-6">

//               <div className="flex items-start gap-3">
//                 <MapPin
//                   size={18}
//                   className="text-[#F47B2B] mt-0.5 shrink-0"
//                 />

//                 <div>
//                   <p className="text-white text-[10px] font-black uppercase tracking-[0.18em] mb-1">
//                     Local Office
//                   </p>

//                   <p className="text-white/60 text-xs leading-5">
//                     65 Powster Rd,
//                     <br />
//                     Bromley BR1 5HE
//                   </p>
//                 </div>
//               </div>

//               <div className="flex items-start gap-3">
//                 <Phone
//                   size={18}
//                   className="text-[#F47B2B] mt-0.5 shrink-0"
//                 />

//                 <div>
//                   <p className="text-white text-[10px] font-black uppercase tracking-[0.18em] mb-1">
//                     Call PrimeShield
//                   </p>

//                   <a
//                     href="tel:07356271145"
//                     className="text-white/70 text-sm font-bold hover:text-[#F47B2B] transition-colors"
//                   >
//                     07356 271145
//                   </a>
//                 </div>
//               </div>

//             </div>
//           </div>

//           {/* Right Image Area */}
//           <div className="relative min-h-[420px] lg:min-h-full overflow-hidden">

//             <img
//               src="/images/services-primeshield-banner.webp"
//               alt="PrimeShield Services Bromley pest control"
//               className="absolute inset-0 w-full h-full object-cover object-center"
//               loading="eager"
//               decoding="async"
//             />

//             {/* Image Overlay */}
//             <div className="absolute inset-0 bg-gradient-to-r from-[#292929]/45 via-transparent to-[#292929]/10" />

//             <div className="absolute inset-0 bg-gradient-to-t from-[#292929]/70 via-transparent to-transparent" />

//             {/* Orange Vertical Accent */}
//             <div className="absolute left-0 top-0 bottom-0 w-2 bg-[#F47B2B]" />

//             {/* Image Label */}
//             <div className="absolute top-7 right-7 sm:top-10 sm:right-10 bg-[#292929] px-5 py-4">
//               <div className="flex items-center gap-3">
//                 <ShieldCheck
//                   size={18}
//                   className="text-[#F47B2B]"
//                 />

//                 <span className="text-white text-[10px] font-black uppercase tracking-[0.18em]">
//                   Professional Service
//                 </span>
//               </div>
//             </div>

//             {/* Image Bottom Information */}
//             <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8 lg:p-10">

//               <div className="max-w-md bg-[#292929]/90 backdrop-blur-sm p-6 sm:p-7 border-l-4 border-[#F47B2B]">

//                 <p className="text-[#F47B2B] text-[10px] font-black uppercase tracking-[0.22em] mb-3">
//                   Services Across Bromley
//                 </p>

//                 <p className="text-white text-xl sm:text-2xl font-black leading-tight uppercase">
//                   One place for
//                   <span className="text-[#F47B2B]"> pest control support.</span>
//                 </p>

//               </div>

//             </div>
//           </div>
//         </div>

//         {/* Bottom Service Strip */}
//         <div className="grid grid-cols-2 lg:grid-cols-4 border-t border-white/10">

//           <div className="px-5 sm:px-8 py-6 border-r border-white/10">
//             <p className="text-[#F47B2B] text-2xl sm:text-3xl font-black">
//               01
//             </p>

//             <p className="text-white/65 text-[10px] sm:text-xs font-bold uppercase tracking-[0.14em] mt-2">
//               Rodent Control
//             </p>
//           </div>

//           <div className="px-5 sm:px-8 py-6 lg:border-r border-white/10">
//             <p className="text-[#F47B2B] text-2xl sm:text-3xl font-black">
//               02
//             </p>

//             <p className="text-white/65 text-[10px] sm:text-xs font-bold uppercase tracking-[0.14em] mt-2">
//               Bed Bug Treatment
//             </p>
//           </div>

//           <div className="px-5 sm:px-8 py-6 border-r border-white/10">
//             <p className="text-[#F47B2B] text-2xl sm:text-3xl font-black">
//               03
//             </p>

//             <p className="text-white/65 text-[10px] sm:text-xs font-bold uppercase tracking-[0.14em] mt-2">
//               Cockroach Control
//             </p>
//           </div>

//           <div className="px-5 sm:px-8 py-6">
//             <p className="text-[#F47B2B] text-2xl sm:text-3xl font-black">
//               04
//             </p>

//             <p className="text-white/65 text-[10px] sm:text-xs font-bold uppercase tracking-[0.14em] mt-2">
//               Wasp & Insect Control
//             </p>
//           </div>

//         </div>

//       </div>
//     </section>
//   );
// }












import React from "react";
import { Link } from "react-router-dom";
import {
  ArrowUpRight,
  ShieldCheck,
  MapPin,
  Phone,
  Bug,
  Home,
  Building2,
} from "lucide-react";

export default function ServicesHeroSection() {
  return (
    <main className="bg-black font-sans text-white">
      {/* =========================================================
          SERVICES HERO
      ========================================================== */}
      <section className="relative overflow-hidden bg-black pt-24 lg:pt-28">
        {/* Subtle background geometry */}
        <div className="pointer-events-none absolute right-0 top-0 h-[520px] w-[520px] -translate-y-1/3 translate-x-1/3 rounded-full border border-[#EE6C1A]/10" />

        <div className="pointer-events-none absolute left-[7%] top-[25%] hidden h-px w-[20%] bg-white/5 lg:block" />

        <div className="pointer-events-none absolute right-[8%] top-[38%] hidden h-px w-[16%] bg-[#EE6C1A]/20 lg:block" />

        <div className="relative mx-auto max-w-[1500px] px-5 sm:px-8 lg:px-14 xl:px-20">
          {/* =====================================================
              TOP IDENTITY BAR
          ====================================================== */}
          <div className="flex flex-col justify-between gap-5 border-b border-white/10 pb-6 sm:flex-row sm:items-center">
            <div className="flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-full border border-[#EE6C1A]">
                <Bug
                  size={16}
                  className="text-[#EE6C1A]"
                  strokeWidth={1.8}
                />
              </div>

              <div>
                <p className="text-[9px] font-black uppercase tracking-[0.3em] text-[#EE6C1A]">
                  PrimeShield Services
                </p>

                <p className="mt-1 text-[9px] font-bold uppercase tracking-[0.18em] text-white/25">
                  Carshalton / SM5
                </p>
              </div>
            </div>

            <div className="flex items-center gap-6">
              <span className="text-[8px] font-black uppercase tracking-[0.28em] text-white/25">
                Residential
              </span>

              <span className="h-1 w-1 rounded-full bg-[#EE6C1A]" />

              <span className="text-[8px] font-black uppercase tracking-[0.28em] text-white/25">
                Commercial
              </span>
            </div>
          </div>

          {/* =====================================================
              MAIN INTRO
          ====================================================== */}
          <div className="grid gap-16 py-20 sm:py-28 lg:grid-cols-[1.25fr_0.75fr] lg:gap-20 lg:py-32">
            {/* LEFT CONTENT */}
            <div className="relative">
              <div className="flex items-center gap-4">
                <span className="text-[9px] font-black uppercase tracking-[0.35em] text-[#EE6C1A]">
                  01 / Services
                </span>

                <span className="h-px w-14 bg-[#EE6C1A]" />
              </div>

              <h1 className="mt-8 max-w-6xl text-6xl font-black uppercase leading-[0.82] tracking-[-0.07em] sm:text-7xl md:text-8xl lg:text-[112px]">
                Pest
                <br />
                <span className="text-[#EE6C1A]">Control</span>
                <br />
                <span className="text-white/20">With Purpose.</span>
              </h1>

              <div className="mt-12 max-w-2xl border-l-2 border-[#EE6C1A] pl-6 sm:pl-8">
                <p className="text-sm leading-7 text-white/45 sm:text-base sm:leading-8">
                  Unwanted pests can affect kitchens, bedrooms, workplaces,
                  storage areas and the wider property. PrimeShield Services
                  Carshalton provides practical pest control support based on
                  the type of activity, the affected space and the circumstances
                  surrounding the problem.
                </p>
              </div>

              <div className="mt-10 flex flex-wrap gap-3">
                <Link
                  to="/contact-us"
                  className="group inline-flex items-center gap-4 bg-[#EE6C1A] px-7 py-4 text-[9px] font-black uppercase tracking-[0.2em] text-black transition-all duration-300 hover:bg-white"
                >
                  Discuss Your Pest Problem

                  <ArrowUpRight
                    size={16}
                    className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                  />
                </Link>

                <Link
                  to="/about-us"
                  className="inline-flex items-center gap-3 border border-white/15 px-7 py-4 text-[9px] font-black uppercase tracking-[0.2em] text-white/70 transition-all duration-300 hover:border-[#EE6C1A] hover:text-[#EE6C1A]"
                >
                  About PrimeShield
                </Link>
              </div>
            </div>

            {/* RIGHT INFORMATION / IMAGE */}
            <div className="relative flex flex-col justify-end">
              {/* Small image composition */}
              <div className="relative ml-auto w-full max-w-[430px]">
                <div className="absolute -right-3 -top-3 h-20 w-20 border-r border-t border-[#EE6C1A]" />

                <div className="relative overflow-hidden border border-white/10 bg-[#151414] p-2">
                  <img
                    src="/images/services-primeshield-banner.webp"
                    alt="PrimeShield Services Carshalton professional pest control"
                    className="h-[300px] w-full object-cover grayscale-[20%] transition duration-700 hover:scale-105"
                    loading="eager"
                    decoding="async"
                  />

                  <div className="absolute inset-2 bg-gradient-to-t from-black/70 via-transparent to-transparent" />

                  <div className="absolute bottom-6 left-6 right-6">
                    <div className="flex items-center justify-between gap-4 border-t border-white/20 pt-4">
                      <div>
                        <p className="text-[8px] font-black uppercase tracking-[0.25em] text-[#EE6C1A]">
                          Local Service
                        </p>

                        <p className="mt-2 text-lg font-black text-white">
                          Carshalton
                        </p>
                      </div>

                      <ShieldCheck
                        size={25}
                        strokeWidth={1.3}
                        className="text-[#EE6C1A]"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* LOCAL CONTACT */}
              <div className="mt-8 grid gap-5 border-t border-white/10 pt-7">
                <div className="flex items-start gap-4">
                  <MapPin
                    size={18}
                    className="mt-0.5 shrink-0 text-[#EE6C1A]"
                  />

                  <div>
                    <p className="text-[8px] font-black uppercase tracking-[0.28em] text-white/25">
                      Carshalton Base
                    </p>

                    <p className="mt-2 text-xs font-bold leading-5 text-white/65">
                      36 Glebe Rd, Carshalton
                      <br />
                      SM5 3EX, United Kingdom
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <Phone
                    size={18}
                    className="shrink-0 text-[#EE6C1A]"
                  />

                  <div>
                    <p className="text-[8px] font-black uppercase tracking-[0.28em] text-white/25">
                      Direct Enquiries
                    </p>

                    <a
                      href="tel:07438756809"
                      className="mt-2 block text-sm font-black text-white/70 transition-colors hover:text-[#EE6C1A]"
                    >
                      07438 756809
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* =====================================================
              SERVICE RANGE / PROPERTY TYPES
              SERVICE STRIP REMOVED
          ====================================================== */}
          <div className="border-b border-t border-white/10">
            <div className="grid sm:grid-cols-3">
              {/* RESIDENTIAL */}
              <div className="group border-b border-white/10 p-7 transition-colors duration-300 hover:bg-[#151414] sm:border-b-0 sm:border-r sm:p-9">
                <Home
                  size={21}
                  strokeWidth={1.4}
                  className="text-[#EE6C1A]"
                />

                <p className="mt-8 text-[8px] font-black uppercase tracking-[0.28em] text-white/25">
                  Residential
                </p>

                <h3 className="mt-3 text-lg font-black">
                  Homes & Flats
                </h3>

                <p className="mt-3 text-xs leading-6 text-white/30">
                  Pest control support for houses, flats, rental properties
                  and other residential spaces.
                </p>
              </div>

              {/* COMMERCIAL */}
              <div className="group border-b border-white/10 p-7 transition-colors duration-300 hover:bg-[#151414] sm:border-b-0 sm:border-r sm:p-9">
                <Building2
                  size={21}
                  strokeWidth={1.4}
                  className="text-[#EE6C1A]"
                />

                <p className="mt-8 text-[8px] font-black uppercase tracking-[0.28em] text-white/25">
                  Commercial
                </p>

                <h3 className="mt-3 text-lg font-black">
                  Workplaces & Premises
                </h3>

                <p className="mt-3 text-xs leading-6 text-white/30">
                  Practical support for offices, shops, workplaces and other
                  commercial environments.
                </p>
              </div>

              {/* COVERAGE */}
              <div className="group p-7 transition-colors duration-300 hover:bg-[#EE6C1A] hover:text-black sm:p-9">
                <MapPin
                  size={21}
                  strokeWidth={1.4}
                  className="text-[#EE6C1A] transition-colors duration-300 group-hover:text-black"
                />

                <p className="mt-8 text-[8px] font-black uppercase tracking-[0.28em] text-white/25 transition-colors duration-300 group-hover:text-black/50">
                  Coverage
                </p>

                <h3 className="mt-3 text-lg font-black">
                  Carshalton & Nearby Areas
                </h3>

                <p className="mt-3 text-xs leading-6 text-white/35 transition-colors duration-300 group-hover:text-black/55">
                  Local pest control support across Carshalton and surrounding
                  areas.
                </p>
              </div>
            </div>
          </div>

          {/* =====================================================
              FINAL SERVICE CTA
          ====================================================== */}
          <div className="flex flex-col justify-between gap-8 py-12 sm:flex-row sm:items-center sm:py-16">
            <div>
              <p className="text-[8px] font-black uppercase tracking-[0.3em] text-[#EE6C1A]">
                Need Help With A Pest Problem?
              </p>

              <p className="mt-3 max-w-xl text-sm leading-6 text-white/35">
                Tell us what you have noticed at your property and where you
                are located. PrimeShield Services Carshalton can discuss the
                type of pest control support you may require.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              <a
                href="tel:07438756809"
                className="inline-flex items-center gap-3 border border-white/15 px-6 py-4 text-[9px] font-black uppercase tracking-[0.2em] text-white transition-colors duration-300 hover:border-[#EE6C1A] hover:text-[#EE6C1A]"
              >
                <Phone size={15} />
                07438 756809
              </a>

              <Link
                to="/contact-us"
                className="inline-flex items-center gap-3 bg-[#EE6C1A] px-6 py-4 text-[9px] font-black uppercase tracking-[0.2em] text-black transition-colors duration-300 hover:bg-white"
              >
                Contact Us
                <ArrowUpRight size={15} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

