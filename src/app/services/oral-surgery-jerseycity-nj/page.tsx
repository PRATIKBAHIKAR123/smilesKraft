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

export default function OralSurgeryPage() {
  const features = [
    {
      icon: "/Images/icons/Immediate Pain Relief.png",
      title: "Full Range of Surgical Treatments",
      description:
        "Our office offers comprehensive oral surgery solutions under one roof. ",
      points: [
        "Simple and surgical tooth extractions ",
        "Wisdom teeth removal for teens and adults",
        "Dental implant surgery for missing teeth",
        "Jaw and gum procedures to support long-term oral health"

      ],
    },
    {
      icon: "/Images/icons/Smart Treatment Decisions Under Pressure.png",
      title: "Focused on Patient Experience",
      description:
        "We ensure every procedure is delivered with comfort and confidence.",
      points: [
        "Multiple sedation and anesthesia options ",
        "Gentle techniques to reduce discomfort",
        "Personalized aftercare instructions",
        "Compassionate approach for nervous patients"

      ],
    },
    {
      icon: "/Images/icons/Serving Harrisburg Nearby Communities.png",
      title: "Convenient Oral Surgery in Jersey City",
      description:
        "We make high-quality oral surgery accessible and stress-free.",
      points: [
        "Same-day and emergency appointments available",
        "Affordable payment plans and insurance acceptance",
        "Flexible hours to fit busy schedules",
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
              <h1>Oral Surgery in Jersey City, NJ</h1>
            </Fade>
            <Fade direction="down" duration={1000}>
              <h2 className="text-center">
                SmileKraft Dental | Expert Surgical Dental Care Near You{" "}
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
                    src="/Images/oral-surgery.webp"
                    alt="Oral Surgery at SmileKraft Dental in Jersey City"
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
              <div className="desc-text-subtitle">Oral Surgery</div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold">
                What to Know About Oral Surgery
              </h2>
              <p>
                Oral surgery can restore function, improve comfort, and protect long-term oral health. At SmileKraft Dental, our skilled dentists provide a range of surgical treatments, from simple tooth extractions to advanced procedures like <Link
                  href="/services/tooth-extraction-jerseycity-nj"
                  className="text-primary hover:underline font-medium"
                >dental implants</Link> and bone grafting. Using modern technology and gentle techniques, we make every step of the process as comfortable as possible.{" "}
                {" "}
              </p>
              <p>
                We proudly serve patients in <Link
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
                If you’re searching for a reliable “oral surgeon near me” in Jersey City, SmileKraft Dental is here to help.
              </p>
              {/* </Fade> */}
            </div>
          </div>
          <div className="wcu-section">
            <div className="wcu-text-section">
              {/* <Fade cascade direction="up" delay={1000} duration={600}> */}
              <div className="wcu-title">
                <h2>Why Choose SmileKraft Dental for Oral Surgery</h2>
              </div>
              <div className="wcu-points-section">
                <ul className="wcu-points">
                  <li>
                    <h3 className="service-point-title">
                      <CheckCircle className="service-point-icon" /> Skilled Surgeons with Gentle Approach
                    </h3>
                  </li>
                  <li>
                    <h3 className="service-point-title">
                      <CheckCircle className="service-point-icon" />{" "}
                      Advanced Surgical Tools for Precision
                    </h3>
                  </li>
                  <li>
                    <h3 className="service-point-title">
                      <CheckCircle className="service-point-icon" />{" "}
                      Same-Day Appointments for Urgent Cases
                    </h3>
                  </li>
                  <li>
                    <h3 className="service-point-title">
                      <CheckCircle className="service-point-icon" /> Insurance-Friendly with Flexible Payment Options
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
            <h2 className="features-heading">
              Advanced Oral Surgery with a Gentle Touch{" "}
            </h2>
            <p className="features-description">
              At SmileKraft Dental, we provide surgical care that combines precision with compassion. From routine tooth removals to advanced procedures like implants and bone grafts, our goal is to restore your health while keeping the experience as smooth and stress-free as possible.
              <p className="features-description">
                Here’s What Sets Our Oral Surgery Apart:
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
            <h2 className="faq-heading">Oral Surgery FAQs</h2>
            <div className="faq-acc-container">
              <Accordion type="single" className="w-full space-y-5">
                <AccordionItem value="q1" className="faq-acc">
                  <AccordionTrigger className="faq-qn">
                    <h3 className="text-lg">What types of oral surgery do you perform?</h3>
                  </AccordionTrigger>
                  <AccordionContent className="faq-ans">
                    <p>
                      We provide a full range of procedures, including extractions, wisdom teeth removal, dental implants, bone grafting, and other surgical treatments to restore oral health.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="q2" className="faq-acc">
                  <AccordionTrigger className="faq-qn">
                    <h3 className="text-lg">Will I feel pain during oral surgery?</h3>
                  </AccordionTrigger>
                  <AccordionContent className="faq-ans">
                    <p>
                      No - with anesthesia and sedation options, most patients feel little to no discomfort during treatment.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="q3" className="faq-acc">
                  <AccordionTrigger className="faq-qn">
                    <h3 className="text-lg">
                      How long is the recovery process?
                    </h3>
                  </AccordionTrigger>
                  <AccordionContent className="faq-ans">
                    <p>
                      Recovery depends on the procedure, but most patients return to normal activities within a few days. We provide detailed aftercare instructions to support healing.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="q4" className="faq-acc">
                  <AccordionTrigger className="faq-qn">
                    <h3 className="text-lg">
                      Do you offer oral surgery for children?
                    </h3>
                  </AccordionTrigger>
                  <AccordionContent className="faq-ans">
                    <p>
                      Yes - we provide gentle, family-friendly oral surgery for teens who need wisdom teeth removal and other age-appropriate procedures.
                    </p>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>

          <div className="features-section">
            {/* <Fade direction="up" duration={1000}> */}
            <h2 className="features-heading">
              Schedule Your Oral Surgery in Jersey City Today
            </h2>
            <p className="features-description">
              If you need wisdom teeth removal, dental implants, or other oral surgery in Jersey City, NJ, <Link
                  href="/"
                  className="text-primary hover:underline font-bold"
                >SmileKraft Dental</Link> is here to help. Our experienced team combines advanced technology with gentle techniques to ensure every procedure is safe, effective, and comfortable.
            </p>
            {/* </Fade> */}
          </div>

          <BookCallBtn />
        </div>
      </main>
    </div>
  );
}
