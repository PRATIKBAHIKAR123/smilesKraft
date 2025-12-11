import type { Metadata } from "next";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import React from "react";
import Reveal, { Fade, Zoom } from "react-awesome-reveal";
import Link from "next/link";
import ServiceSidebar from "@/components/ServiceSidebar";
import BookCallBtn from "../book-call-btn";
import { CheckCircle } from "lucide-react";
import { generateServiceMetadata } from "@/lib/metadata";

export const metadata: Metadata = generateServiceMetadata(
  "halitosis-treatment-maplewood-nj",
  "/Images/Halitosis.webp"
);

export default function Page() {
  const features = [
    {
      icon: "/Images/icons/Immediate Pain Relief.png",
      title: "Deep Cleaning & Bacteria Control",
      description:
        "Bad breath often comes from bacteria hiding in hard-to-reach areas.",
      points: [
        "Professional cleanings and scaling",
        "Gum care for periodontal health",
        "Antibacterial rinses and therapies",
        "Guidance for home hygiene routines",
      ],
    },
    {
      icon: "/Images/icons/Smart Treatment Decisions Under Pressure.png",
      title: "Solutions for Dry Mouth & Decay",
      description:
        "Halitosis can worsen if dry mouth or cavities are left untreated.",
      points: [
        "Gentle cavity fillings and restorations",
        "Preventive care to stop problems early",
        "Focus on long-term oral comfort",
      ],
    },
    {
      icon: "/Images/icons/Serving Harrisburg Nearby Communities.png",
      title: "Accessible Halitosis Treatment in Jersey City",
      description:
        "We make care simple, discreet, and stress-free.",
      points: [
        "Same-day halitosis consultations available",
        "Weekend and evening appointments offered",
        "Insurance-friendly with payment flexibility",
        "Serving Bergen-Lafayette, McGinley Square, Greenville, Journal Square, and The Heights",
      ],
    },
  ];

  return (
    <div className="flex min-h-screen bg-gray-50">
      <main className="details-page-container">
        <div className="details-page">
          <div className="details-page-header-section">
            <Fade direction="up" duration={1000}>
              <h1>Halitosis Treatment in Jersey City, NJ</h1>
            </Fade>
            <Fade direction="down" duration={1000}>
              <h2 className="text-center">
                SmileKraft Dental | Fresh Breath Care Near You
              </h2>
            </Fade>
            {/* <div className='flex items-center justify-center gap-2'> <Link href={'/'} className='font-medium'>Home </Link><span><ChevronRight/></span> <span className='text-white/80'>Emergency Dentistry</span></div> */}
          </div>
          <div className="details-page-desc-section">
            {/* Image Section */}
            <div className="image_section">
              <div className="image_section-cover">
                {/* <Zoom cascade damping={0.3} duration={800}> */}
                <div className="main-image">
                  <img
                    src="/Images/Halitosis.webp"
                    alt="Halitosis treatment at Tulip Dental Maplewood"
                  />
                </div>
                {/* <img
              src="/Images/s1.webp"
              className="overlay-image"
              alt="Overlay"
            /> */}
                {/* </Zoom> */}
              </div>
            </div>

            {/* Text Section with Fade-in after delay */}
            <div className="desc-text-section">
              {/* <Fade cascade direction="up" delay={1000} duration={600}> */}
              <div className="desc-text-subtitle">Halitosis</div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold">
                What to Know About Halitosis
              </h2>
              <p>
                Persistent bad breath (halitosis) can make daily interactions uncomfortable and may point to deeper oral health concerns. At SmileKraft Dental in Jersey City, we specialize in identifying the cause of halitosis and providing lasting solutions. Whether your bad breath is due to plaque buildup, dry mouth, or
                {" "}
                <Link
                  href="/services/perio-protect-jerseycity-nj"
                  className="text-primary ml-2 hover:underline font-medium"
                >
                  gum disease
                </Link>
                , our gentle and effective treatments target the problem at its source. 
                
              </p>
              <p>
                We proudly serve{" "}
                <Link
                  href="/services/painless-dental-treatment-jerseycity-nj"
                  className="text-primary hover:underline font-bold"
                >Bergen-Lafayette (07304, 07305),</Link>{" "} <Link
                  href="/services/painless-dental-treatment-jerseycity-nj"
                  className="text-primary hover:underline font-bold"
                >McGinley Square (07304, 07306),</Link>{" "}
                <Link
                  href="/services/painless-dental-treatment-jerseycity-nj"
                  className="text-primary hover:underline font-bold"
                >Greenville (07305),</Link>{" "}
                <Link
                  href="/services/painless-dental-treatment-jerseycity-nj"
                  className="text-primary hover:underline font-bold"
                >Journal Square (07306),</Link> and <Link
                  href="/services/painless-dental-treatment-jerseycity-nj"
                  className="text-primary hover:underline font-bold"
                >The Heights (07306, 07307)</Link>{" "}
                If you’re searching for “halitosis dentist near me,” our team is here to help you breathe and smile with confidence again.
              </p>
              {/* </Fade> */}
            </div>
          </div>
          <div className="wcu-section">
            <div className="wcu-text-section">
              {/* <Fade cascade direction="up" delay={1000} duration={600}> */}
              <div className="wcu-title">
                <h2>
                  Why Choose SmileKraft Dental for Halitosis Treatment
                </h2>
              </div>
              <div className="wcu-points-section">
                <ul className="wcu-points">
                  <li>
                    <h3 className="service-point-title">
                      <CheckCircle className="service-point-icon" /> Skilled Team with Expertise in Oral Health
                    </h3>
                  </li>
                  <li>
                    <h3 className="service-point-title">
                      <CheckCircle className="service-point-icon" /> Thorough Diagnosis to Find the Root Cause
                    </h3>
                  </li>
                  <li>
                    <h3 className="service-point-title">
                      <CheckCircle className="service-point-icon" /> Tailored Treatment Options for Fresh Breath
                    </h3>
                  </li>
                  <li>
                    <h3 className="service-point-title">
                      <CheckCircle className="service-point-icon" /> Flexible Financing and Insurance Acceptance
                    </h3>
                  </li>
                  <li>
                    <h3 className="service-point-title">
                      <CheckCircle className="service-point-icon" /> Convenient Location in the Heart of Jersey City
                    </h3>
                  </li>
                </ul>
              </div>
              {/* </Fade> */}
            </div>

            <div className="wcu-img-section">
              {/* <Zoom cascade damping={0.3} duration={800}> */}
              <img
                className="bdr-doctor-img"
                src="/Images/top-reasons.webp"
                alt="Expert Dentist at Tulip Dental Maplewood"
              />
              {/* </Zoom> */}
            </div>
          </div>

          <div className="features-section">
            {/* <Fade direction="up" duration={1000}> */}
            <h2 className="features-heading">
              Effective Bad Breath Treatment for Lasting Freshness{" "}
            </h2>
            <p className="features-description">
              Halitosis isn’t just about odor - it’s often tied to oral health issues that need professional care. At SmileKraft Dental, our focus is on
              {" "}
              <Link
                  href="/services"
                  className="text-primary mr-2 hover:underline font-medium"
                >
                  comprehensive solutions 
                </Link>{" "}
              that restore fresh breath and protect your overall health. From advanced cleanings to customized home care recommendations, we create a plan that works for you.
            </p>
            <p className="features-description">Here’s What Makes Our Halitosis Care Stand Out: </p>
            {/* </Fade> */}

            <div className="features-grid">
              {features.map((service, idx) => (
                <div className="feature-card" key={idx}>
                  <div className="flex flex-col items-start mb-3">
                    <img
                      src={service.icon}
                      alt={service.title}
                      className="w-12 h-12 mb-2"
                    />
                    <h3>{service.title}</h3>
                  </div>
                  <p>{service.description}</p>
                  <ul className="feature-list">
                    {service.points.map((point, i) => (
                      <li
                        key={i}
                        className="feature-list-item flex items-start gap-2"
                      >
                        <CheckCircle className="text-primary shrink-0 mt-[2px]" />
                        <span className="leading-snug">{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
          <div className="faq-section">
            <h2 className="faq-heading">Halitosis FAQs</h2>
            <div className="faq-acc-container">
              <Accordion type="single" className="w-full space-y-5">
                <AccordionItem value="q1" className="faq-acc">
                  <AccordionTrigger className="faq-qn">
                    <h3 className="text-lg">What’s the difference between occasional and chronic bad breath?</h3>
                  </AccordionTrigger>
                  <AccordionContent className="faq-ans">
                    <p>
                      Occasional bad breath is usually linked to foods or dehydration, while chronic halitosis requires professional care to identify and treat the cause.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="q2" className="faq-acc">
                  <AccordionTrigger className="faq-qn">
                    <h3 className="text-lg">
                      Can gum disease cause bad breath?
                    </h3>
                  </AccordionTrigger>
                  <AccordionContent className="faq-ans">
                    <p>
                      Yes. Gum disease is one of the leading causes of halitosis, as bacteria and infection release persistent odors.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="q3" className="faq-acc">
                  <AccordionTrigger className="faq-qn">
                    <h3 className="text-lg">
                      Will professional cleaning get rid of bad breath?
                    </h3>
                  </AccordionTrigger>
                  <AccordionContent className="faq-ans">
                    <p>
                      In many cases, yes. Removing plaque, tartar, and bacteria buildup often eliminates halitosis when paired with good home care.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="q4" className="faq-acc">
                  <AccordionTrigger className="faq-qn">
                    <h3 className="text-lg">
                      Is halitosis treatable long-term?
                    </h3>
                  </AccordionTrigger>
                  <AccordionContent className="faq-ans">
                    <p>
                      Absolutely. With the right dental care and daily habits, most patients enjoy lasting fresh breath and healthier smiles.
                    </p>
                  </AccordionContent>
                </AccordionItem>

              </Accordion>
            </div>
          </div>

          <div className="features-section">
            {/* <Fade direction="up" duration={1000}> */}
            <h2 className="features-heading">
              Looking for a Lasting Solution to Bad Breath in Jersey City?
            </h2>
            <p className="features-description">
              Don’t let halitosis hold you back any longer. At{" "}
              <Link
                href="/"
                className="text-primary mr-2 hover:underline font-medium"
              >
                SmileKraft Dental
              </Link>,
              we provide professional bad breath treatment in Jersey City, NJ, designed to address the root cause and restore lasting freshness. Schedule your visit today and take the first step toward a healthier smile and renewed confidence..
            </p>
            {/* </Fade> */}
          </div>

          <BookCallBtn />
        </div>
      </main>
    </div>
  );
}
