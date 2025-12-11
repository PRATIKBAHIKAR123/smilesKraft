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

export default function Page() {
  const features = [
    {
      icon: "/Images/icons/root-canal.png",
      title: "Advanced Infection Control",
      description:
        "We address infections at their source to prevent them from spreading or recurring.",
      points: [
        "Thorough cleaning and sealing of affected areas",
        "Targeted treatment for abscesses and inflammation",
        "Focus on long-term tooth health",
        "Preventive strategies to protect surrounding teeth",
      ],
    },
    {
      icon: "/Images/icons/braces1.png",
      title: "Gentle, Patient-Centered Care",
      description:
        "Our approach is designed to make treatment stress-free and comfortable.",
      points: [
        "Options for local anesthesia & sedation",
        "Calming environment for anxious patients",
        "Clear guidance before and after treatment",
        "Supportive care for adults and teens",
      ],
    },
    {
      icon: "/Images/icons/emergency denstiry.png",
      title: "Accessible Endodontic Services in Jersey City",
      description:
        "We make high-quality care available to everyone in our community.",
      points: [
        "Same-day appointments for urgent cases",
        "Evening & weekend scheduling options",
        "Insurance-friendly office with flexible financing",
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
              <h1>Endodontic Services in Jersey City, NJ</h1>
            </Fade>
            <Fade direction="down" duration={1000}>
              <h2 className="text-center">
                SmileKraft Dental | Expert Endodontic Care Near You
              </h2>
            </Fade>
            {/* <div className='flex items-center justify-center gap-2'> <Link href={'/'} className='font-medium'>Home </Link><span><ChevronRight/></span> <span className='text-white/80'>Emergency Dentistry</span></div> */}
          </div>
          <div className="details-page-desc-section">
            {/* Image Section */}
            <div className="image_section">
              <div className="image_section-cover">
                {/* <Zoom cascade damping={0.3} duration={800}> */}
                {/* </Fade> */}
                <div className="main-image">
                  <img
                    src="/Images/enthodontics.webp"
                    alt="Endodontics at SmileKraft Dental in Jersey City"
                  />
                </div>
                {/* <img
              src="/Images/s1.webp"
              className="overlay-image"
              alt="Overlay"
            /> */}
                {/* </Fade> */}
                {/* </Zoom> */}
              </div>
            </div>

            {/* Text Section with Fade-in after delay */}
            <div className="desc-text-section">
              {/* <Fade cascade direction="up" delay={1000} duration={600}> */}
              <div className="desc-text-subtitle">Endodontics </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold">
                What to Know About Endodontics
              </h2>
              <p>
                
                <Link
                  href="/root-canal-treatment-jerseycity-nj"
                  className="text-primary hover:underline font-medium"
                >
                  Endodontics
                </Link>{" "}
                focuses on the health of the inner tooth - the pulp and surrounding tissues. Infections or injuries in this area can cause serious discomfort if untreated. At SmileKraft Dental, we provide advanced endodontic treatment in Jersey City, NJ, offering gentle solutions to relieve pain, eliminate infection, and preserve your natural teeth.
              </p>
              <p>
                We proudly serve {" "}
                <Link
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
                <Link
                  href="/services/painless-dental-treatment-jerseycity-nj"
                  className="text-primary mr-2 hover:underline font-medium"
                >
                  dental team
                </Link>
                If you’re searching for trusted endodontics near me, SmileKraft Dental is here for you.
              </p>
              {/* </Fade> */}
            </div>
          </div>
          <div className="wcu-section">
            <div className="wcu-text-section">
              {/* <Fade cascade direction="up" delay={1000} duration={600}> */}
              <div className="wcu-title">
                <h2>Why Choose SmileKraft Dental for Endodontics</h2>
              </div>
              <div className="wcu-points-section">
                <ul className="wcu-points">
                  <li>
                    <h3 className="service-point-title">
                      <CheckCircle className="service-point-icon" /> Skilled Specialists Focused on Tooth Preservation
                    </h3>
                  </li>
                  <li>
                    <h3 className="service-point-title">
                      <CheckCircle className="service-point-icon" /> Modern Imaging & Precision Diagnostics
                    </h3>
                  </li>
                  <li>
                    <h3 className="service-point-title">
                      <CheckCircle className="service-point-icon" /> Patient Comfort with Sedation & Gentle Techniques
                    </h3>
                  </li>
                  <li>
                    <h3 className="service-point-title">
                      <CheckCircle className="service-point-icon" /> Same-Day Relief for Dental Pain & Infections
                    </h3>
                  </li>
                  <li>
                    <h3 className="service-point-title">
                      <CheckCircle className="service-point-icon" /> Conveniently Located in the Heart of Jersey City
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
            <h2 className="features-heading">Lasting Relief & Protection Through Endodontics </h2>
            <p className="features-description">
              Endodontic treatment goes beyond relieving pain - it’s about saving your natural teeth whenever possible. At
              {" "} <Link
                href="/"
                className="text-primary ml-2 hover:underline font-medium"
              >
                SmileKraft Dental
              </Link>,{" "}
              we combine technology and expertise to deliver effective care tailored to each patient.
              
            </p>
            <p className="features-description">
              Here’s What Makes Our Endodontic Services Different:
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
            <h2 className="faq-heading">Endodontics FAQs</h2>
            <div className="faq-acc-container">
              <Accordion type="single" className="w-full space-y-5">
                <AccordionItem value="q1" className="faq-acc">
                  <AccordionTrigger className="faq-qn">
                    <h3 className="text-lg">
                      What does endodontic treatment involve?
                    </h3>
                  </AccordionTrigger>
                  <AccordionContent className="faq-ans">
                    <p>
                      It focuses on treating the inside of the tooth when the pulp becomes infected or damaged, relieving pain and preserving the natural tooth.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="q2" className="faq-acc">
                  <AccordionTrigger className="faq-qn">
                    <h3 className="text-lg">
                      How do I know if I need endodontic care?
                    </h3>
                  </AccordionTrigger>
                  <AccordionContent className="faq-ans">
                    <p>
                      Common signs include tooth sensitivity, severe pain, swelling, or gum tenderness. A dental exam confirms the diagnosis.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="q3" className="faq-acc">
                  <AccordionTrigger className="faq-qn">
                    <h3 className="text-lg">
                      Are endodontic treatments painful?
                    </h3>
                  </AccordionTrigger>
                  <AccordionContent className="faq-ans">
                    <p>
                      No - with modern anesthesia and gentle techniques, most patients experience little to no discomfort during treatment.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="q4" className="faq-acc">
                  <AccordionTrigger className="faq-qn">
                    <h3 className="text-lg">
                      Can endodontics save a tooth instead of removing it?
                    </h3>
                  </AccordionTrigger>
                  <AccordionContent className="faq-ans">
                    <p>
                      Yes. The goal of endodontics is to preserve your natural tooth whenever possible, preventing the need for extraction.
                    </p>
                  </AccordionContent>
                </AccordionItem>

              </Accordion>
            </div>
          </div>

          <div className="features-section">
            {/* <Fade direction="up" duration={1000}> */}
            <h2 className="features-heading">
              Ready to Restore Your Smile with Endodontics in Jersey City?
            </h2>
            <p className="features-description">
              Don’t let tooth pain or infection impact your daily life. At SmileKraft Dental, we offer advanced endodontic care in Jersey City, NJ, designed to treat problems at the source and keep your natural teeth healthy for years to come. 
            </p>
            {/* </Fade> */}
            {/* </Fade> */}
          </div>

          <BookCallBtn />
        </div>
      </main>
    </div>
  );
}
