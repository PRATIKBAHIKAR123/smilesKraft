"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import React from "react";
import Reveal, { Fade, Zoom } from "react-awesome-reveal";
import ServiceSidebar from "@/components/ServiceSidebar";
import BookCallBtn from "../book-call-btn";
import { CheckCircle } from "lucide-react";
import Link from "next/link";

export default function DenturesPage() {
  const features = [
    {
      icon: "/Images/icons/Immediate Pain Relief.png",
      title: "Fully Customized Denture Options",
      description:
        "",
      points: [
        "Natural-looking full and partial dentures",
        "Designed for secure fit and long-term comfort",
        "Helps restore proper chewing and facial support",
        "Multiple styles and materials based on your needs"

      ],
    },
    {
      icon: "/Images/icons/Smart Treatment Decisions Under Pressure.png",
      title: "Implant-Supported Dentures",
      description:
        "",
      points: [
        "Extra stability with no slipping or irritation",
        "Ideal for long-term bite strength and confidence",
        "Helps prevent bone loss after tooth loss",
        "A strong, modern upgrade from traditional dentures"

      ],
    },
    {
      icon: "/Images/icons/Serving Harrisburg Nearby Communities.png",
      title: "Convenient Denture Care Near You",
      description:
        "",
      points: [
        "Same-day appointments for denture repairs and relines",
        "Evening and weekend scheduling available",
        "Budget-friendly with insurance and financing options",
        "Proudly serving Bergen-Lafayette (07304, 07305), McGinley Square (07304, 07306, 07302), Greenville (07305), Journal Square (07306), and The Heights (07306, 07307)"

      ],
    },
  ];

  return (
    <div className="flex min-h-screen bg-gray-50">
      <main className="details-page-container">
        <div className="details-page">
          <div className="details-page-header-section">
            <Fade direction="up" duration={1000}>
              <h1>Dentures in Jersey City, NJ</h1>
            </Fade>
            <Fade direction="down" duration={1000}>
              <h2 className="text-center">
                SmileKraft Dental | Natural-Looking Smiles Restored Near You{" "}
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
                    src="/Images/dentures.webp"
                    alt="Oral Surgery at Tulip Dental Maplewood"
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
              <div className="desc-text-subtitle">Dentures</div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold">
                What to Know About Dentures
              </h2>
              <p>
                Tooth loss can make everyday activities like eating, speaking, and smiling feel uncomfortable - but dentures offer a reliable way to restore function and confidence. At 
                {" "}
                <Link
                  href="/"
                  className="text-primary hover:underline font-medium"
                >SmileKraft Dental</Link>{" "} in Jersey City, we design custom dentures that look natural, feel secure, and support long-term oral health. Whether you're missing a few teeth or need a complete smile restoration, we provide personalized solutions to help you feel like yourself again.{" "}
                {" "}
              </p>
              <p>
                We proudly serve patients from <Link
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
                If you're searching for a trusted “dentures dentist near me,” we’re here with comfortable options for every need.
              </p>
              {/* </Fade> */}
            </div>
          </div>
          <div className="wcu-section">
            <div className="wcu-text-section">
              {/* <Fade cascade direction="up" delay={1000} duration={600}> */}
              <div className="wcu-title">
                <h2>Why Choose SmileKraft Dental for Dentures</h2>
              </div>
              <div className="wcu-points-section">
                <ul className="wcu-points">
                  <li>
                    <h3 className="service-point-title">
                      <CheckCircle className="service-point-icon" /> Expert Craftsmanship for Natural Fit & Function
                    </h3>
                  </li>
                  <li>
                    <h3 className="service-point-title">
                      <CheckCircle className="service-point-icon" />{" "}
                      Personalized Options for Full or Partial Tooth Loss
                    </h3>
                  </li>
                  <li>
                    <h3 className="service-point-title">
                      <CheckCircle className="service-point-icon" />{" "}
                      Affordable Care with Insurance & Flexible Payments
                    </h3>
                  </li>
                  <li>
                    <h3 className="service-point-title">
                      <CheckCircle className="service-point-icon" /> Same-Day Appointments for Urgent Needs
                    </h3>
                  </li>
                  <li>
                    <h3 className="service-point-title">
                      <CheckCircle className="service-point-icon" /> Convenient Jersey City Location Near Public Transit
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
              Denture Solutions Designed Around Your Comfort & Confidence{" "}
            </h2>
            <p className="features-description">
              Missing teeth can make eating, speaking, and even smiling feel challenging. At SmileKraft Dental, we create dentures that look natural, feel secure, and support both your oral health and daily comfort.
              <p className="features-description">
                Here’s What Makes Our Denture Care Stand Out:
              </p>
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
            <h2 className="faq-heading">Dentures FAQs</h2>
            <div className="faq-acc-container">
              <Accordion type="single" className="w-full space-y-5">
                <AccordionItem value="q1" className="faq-acc">
                  <AccordionTrigger className="faq-qn">
                    <h3 className="text-lg">Will dentures look natural?</h3>
                  </AccordionTrigger>
                  <AccordionContent className="faq-ans">
                    <p>
                      Yes! Modern dentures are custom-designed to match the appearance of natural teeth, giving you a confident, seamless smile.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="q2" className="faq-acc">
                  <AccordionTrigger className="faq-qn">
                    <h3 className="text-lg">How long do dentures last?</h3>
                  </AccordionTrigger>
                  <AccordionContent className="faq-ans">
                    <p>
                      With proper care, dentures can last 5–10 years. Over time, adjustments or replacements may be needed due to natural changes in your gums and jaw.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="q3" className="faq-acc">
                  <AccordionTrigger className="faq-qn">
                    <h3 className="text-lg">
                      Are dentures comfortable to wear?
                    </h3>
                  </AccordionTrigger>
                  <AccordionContent className="faq-ans">
                    <p>
                      Absolutely. Today’s dentures are made for comfort, but it may take a short adjustment period as your mouth adapts. Implant-supported options offer even greater stability.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="q4" className="faq-acc">
                  <AccordionTrigger className="faq-qn">
                    <h3 className="text-lg">
                      What if my dentures become loose or damaged?
                    </h3>
                  </AccordionTrigger>
                  <AccordionContent className="faq-ans">
                    <p>
                      We provide denture relines, repairs, and replacements to ensure a proper fit. Simply bring them in - we often offer same-day fixes for urgent needs.
                    </p>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>

          <div className="features-section">
            {/* <Fade direction="up" duration={1000}> */}
            <h2 className="features-heading">
              Looking for Customized Full or Partial Dentures in Jersey City?
            </h2>
            <p className="features-description">
             Regain your confidence and enjoy a complete smile again with high-quality dentures from SmileKraft Dental. Whether you need your first denture or an upgrade for better comfort and stability, our team is here to help every step of the way.
            </p>
            {/* </Fade> */}
          </div>

          <BookCallBtn />
        </div>
      </main>
    </div>
  );
}
