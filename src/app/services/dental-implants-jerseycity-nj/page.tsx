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
  "dental-implants-maplewood-nj",
  "/Images/Dental Implants.webp"
);

export default function DentalImplantsPage() {
  const features = [
    {
      icon: "/Images/icons/tooth-implant.png",
      title: "Comprehensive Implant Options",
      description:
        "We provide a full range of implant solutions to meet your needs.",
      points: [
        "Single-tooth dental implants",
        "Multiple teeth replacement with implant bridges",
        "Implant-supported dentures for full-arch restoration",
        "Bone grafting and sinus lifts for implant support"
      ],
    },
    {
      icon: "/Images/icons/Smart Treatment Decisions Under Pressure.png",

      title: "Long-Term Benefits & Natural Look",
      description:
        "Implants are designed to last for decades while protecting your oral health.",
      points: [
        "Durable titanium posts for lifelong stability",
        "Custom crowns crafted to match your smile",
        "Prevents bone loss and preserves facial structure",
        "Restores natural biting and chewing strength"
      ],
    },
    {
      icon: "/Images/icons/Serving Harrisburg Nearby Communities.png",

      title: "Accessible Dental Implants in Jersey City",
      description:
        "We make implant care simple and convenient for our patients.",
      points: [
        "Flexible scheduling to fit your lifestyle",
        "Financing and insurance assistance available",
        "Comfortable, supportive environment",
        "Serving Bergen-Lafayette, McGinley Square, Greenville, Journal Square, and The Heights"
      ],
    },
  ];

  return (
    <div className="flex min-h-screen bg-gray-50">
      <main className="details-page-container">
        <div className="details-page">
          <div className="details-page-header-section">
            <Fade direction="up" duration={1000}>
              <h1>Dental Implants in Jersey City, NJ</h1>
            </Fade>
            <Fade direction="down" duration={1000}>
              <h2 className="text-center">
                SmileKraft Dental | Permanent Tooth Replacement Near You{" "}
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
                    src="/Images/dental-implant.webp"
                    alt="Dental Fillings at SmileKraft Dental in Jersey City"
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
              <div className="desc-text-subtitle">Dental Implants</div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold">
                What to Know About Dental Implants
              </h2>
              <p>
                Missing teeth can affect more than your appearance - they impact your health, confidence, and daily comfort. At SmileKraft Dental, we provide advanced dental implant solutions that look, feel, and function just like natural teeth. Whether you’re replacing a single tooth, multiple teeth, or need full-mouth restoration, implants are the most reliable and long-lasting option for restoring your smile.{" "}
                
              </p>
              <p>
                We proudly serve patients across <Link
                  href="/service-areas/bergenlafayette-nj-dentist-near-you"
                  className="text-primary hover:underline font-bold"
                >Bergen-Lafayette (07304, 07305),</Link>{" "} <Link
                  href="/service-areas/mcginley-square-nj-dentist-near-you"
                  className="text-primary hover:underline font-bold"
                >McGinley Square (07304, 07306),</Link>{" "}
                <Link
                  href="/service-areas/greenville-nj-dentist-near-you"
                  className="text-primary hover:underline font-bold"
                >Greenville (07305),</Link>{" "}
                <Link
                  href="/service-areas/journal-square-nj-dentist-near-you"
                  className="text-primary hover:underline font-bold"
                >Journal Square (07306),</Link> and <Link
                  href="/service-areas/the-heights-nj-dentist-near-you"
                  className="text-primary hover:underline font-bold"
                >The Heights (07306, 07307)</Link>{" "}
                If you’re searching for a trusted “dental implant near me” in Jersey City, SmileKraft Dental is here to deliver life-changing results.
              </p>
              {/* </Fade> */}
            </div>
          </div>
          <div className="wcu-section">
            <div className="wcu-text-section">
              {/* <Fade cascade direction="up" delay={1000} duration={600}> */}
              <div className="wcu-title">
                <h2>Why Choose SmileKraft Dental for Dental Implants</h2>
              </div>
              <div className="wcu-points-section">
                <ul className="wcu-points">
                  <li>
                    <h3 className="service-point-title">
                      <CheckCircle className="service-point-icon" /> Skilled Implant Dentists with Proven Expertise
                    </h3>
                  </li>
                  <li>
                    <h3 className="service-point-title">
                      <CheckCircle className="service-point-icon" /> Advanced 3D Imaging & Guided Implant Technology
                    </h3>
                  </li>
                  <li>
                    <h3 className="service-point-title">
                      <CheckCircle className="service-point-icon" />  Affordable Payment Plans & Insurance Guidance
                    </h3>
                  </li>
                  <li>
                    <h3 className="service-point-title">
                      <CheckCircle className="service-point-icon" /> Customized Implant Solutions for Every Patient
                    </h3>
                  </li>
                  <li>
                    <h3 className="service-point-title">
                      <CheckCircle className="service-point-icon" /> Convenient Jersey City Location
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
            <h2 className="features-heading">Restore Your Smile with Dental Implants</h2>
            <p className="features-description">
              Dental implants are the gold standard in tooth replacement, offering stability, beauty, and confidence that dentures or
              <Link href="/"
                className="text-primary hover:underline font-medium">{" "}bridges </Link>{" "} can’t always match. At
              <Link href="/"
                className="text-primary hover:underline font-medium">{" "}SmileKraft Dental,</Link>{" "}
                 we use advanced technology and high-quality materials to give you results that look and feel completely natural.
              
            </p>
            <p className="features-description">
              Here’s What Makes Our Dental Implants Different:
            </p>
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
            <h2 className="faq-heading">Dental Implant FAQs</h2>
            <div className="faq-acc-container">
              <Accordion type="single" className="w-full space-y-5">
                <AccordionItem value="q1" className="faq-acc">
                  <AccordionTrigger className="faq-qn">
                    <h3 className="text-lg">How do dental implants compare to dentures?</h3>
                  </AccordionTrigger>
                  <AccordionContent className="faq-ans">
                    <p>
                      Unlike removable dentures, implants are fixed in place, offering more stability, comfort, and a natural feel when eating or speaking.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="q2" className="faq-acc">
                  <AccordionTrigger className="faq-qn">
                    <h3 className="text-lg">
                      How long does the dental implant process take?
                    </h3>
                  </AccordionTrigger>
                  <AccordionContent className="faq-ans">
                    <p>
                      The process can take a few months, depending on healing time and whether additional procedures like bone grafting are needed.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="q3" className="faq-acc">
                  <AccordionTrigger className="faq-qn">
                    <h3 className="text-lg">
                      Can implants replace several teeth at once?
                    </h3>
                  </AccordionTrigger>
                  <AccordionContent className="faq-ans">
                    <p>
                      Yes. Implants can support multiple crowns or even full-arch restorations, making them ideal for patients missing several teeth.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="q4" className="faq-acc">
                  <AccordionTrigger className="faq-qn">
                    <h3 className="text-lg">
                      Are dental implants safe?
                    </h3>
                  </AccordionTrigger>
                  <AccordionContent className="faq-ans">
                    <p>
                      Absolutely. Dental implants have a high success rate and are considered one of the safest and most predictable dental procedures when performed by experienced dentists.
                    </p>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>

          <div className="features-section">
            {/* <Fade direction="up" duration={1000}> */}
            <h2 className="features-heading">
              Considering Dental Implants in Jersey City?
            </h2>
            <p className="features-description">
              If you’re missing one or more teeth, SmileKraft Dental offers advanced dental implants in Jersey City, NJ to restore your confidence and quality of life. Our team is here to guide you every step of the way - from consultation to your brand-new smile.
            </p>
            {/* </Fade> */}
          </div>

          <BookCallBtn />
        </div>
      </main>
    </div>
  );
}
