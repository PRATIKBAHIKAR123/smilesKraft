"use client";

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

export default function SameDayPage() {
  const features = [
    {
      icon: "/Images/icons/Immediate Pain Relief.png",
      title: "Same-Day Restorations & Crowns",
      description:
        "Broken teeth or damaged crowns can be restored in just one visit.",
      points: [
        "Digital scanning for accurate impressions",
        "High-quality materials designed to last",
        "Natural appearance that blends seamlessly",
        "Skip multiple appointments and temporary fixes",
      ],
    },
    {
      icon: "/Images/icons/Smart Treatment Decisions Under Pressure.png",
      title: "Immediate Emergency Treatments",
      description:
        "When pain or damage strikes, we’re ready to help right away.",
      points: [
        "Quick relief for toothaches and infections",
        "Repairs for broken or lost fillings, crowns, or bridges",
        "Focus on saving and protecting natural teeth",
        "Gentle care for adults and children alike",
      ],
    },
    {
      icon: "/Images/icons/Serving Harrisburg Nearby Communities.png",
      title: "Same-Day Cosmetic Repairs",
      description:
        "Don’t let a cracked or chipped tooth affect your confidence.",
      points: [
        "Tooth bonding completed in a single visit",
        "Shade-matched to your natural smile",
        "Durable repairs designed to last",
        " Ideal for last-minute events or urgent needs",
      ],
    },
  ];

  return (
    <div className="flex min-h-screen bg-gray-50">
      <main className="details-page-container">
        <div className="details-page">
          <div className="details-page-header-section">
            <Fade direction="up" duration={1000}>
              <h1>Same Day Dentistry in Jersey City, NJ</h1>
            </Fade>
            <Fade direction="down" duration={1000}>
              <h2 className="text-center">
                SmileKraft Dental | Quick, Convenient Dental Care Near You
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
                    src="/Images/same-day-dentistry.webp"
                    alt="Same-Day Dental Care at SmileKraft Dental in Jersey City"
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
              <div className="desc-text-subtitle">Same-Day Dentistry</div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold">
                What to Know About Same Day Dentistry
              </h2>
              <p>
                Sometimes{" "}
                <Link
                  href="/services"
                  className="text-primary hover:underline font-medium"
                >
                  dental care
                </Link> {" "}
                just can’t wait - and at SmileKraft Dental, we make sure you don’t have to. Our same day dentistry in Jersey City, NJ provides fast, high-quality solutions for urgent needs like broken teeth, lost
                <Link
                  href="/services/dental-fillings-jerseycity-nj"
                  className="text-primary ml-2 hover:underline font-medium"
                >
                  fillings
                </Link>
                , sudden toothaches, or
                {" "}
                <Link
                  href="/services/cosmetic-denistry-jerseycity-nj"
                  className="text-primary mr-2 hover:underline font-medium"
                >
                  cosmetic 
                </Link>
                touch-ups before a big event. With advanced technology and a patient-first approach, we can often complete your treatment in a single visit so you can get back to your day with confidence.
              </p>
              <p>
                We proudly serve patients from  <Link
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
                If you’re searching for a trusted “same day dentist near me” in Jersey City, SmileKraft Dental is ready to help.
              </p>
              {/* </Fade> */}
            </div>
          </div>
          <div className="wcu-section">
            <div className="wcu-text-section">
              {/* <Fade cascade direction="up" delay={1000} duration={600}> */}
              <div className="wcu-title">
                <h2>
                  Why Choose SmileKraft Dental for Same Day Dentistry
                </h2>
              </div>
              <div className="wcu-points-section">
                <ul className="wcu-points">
                  <li>
                    <h3 className="service-point-title">
                      <CheckCircle className="service-point-icon" /> Experienced Team with a Patient-First Approach
                    </h3>
                  </li>
                  <li>
                    <h3 className="service-point-title">
                      <CheckCircle className="service-point-icon" /> Modern Technology for Faster Results
                    </h3>
                  </li>
                  <li>
                    <h3 className="service-point-title">
                      <CheckCircle className="service-point-icon" /> Insurance Accepted & Flexible Financing Options
                    </h3>
                  </li>
                  <li>
                    <h3 className="service-point-title">
                      <CheckCircle className="service-point-icon" /> Same-Day Appointments & Walk-Ins Welcome
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
              Fast Solutions with Same Day Dental Care{" "}
            </h2>
            <p className="features-description">
              Needing urgent dental attention doesn’t mean you should settle for less. At SmileKraft Dental, we combine speed with precision, ensuring every same-day treatment is carried out with the same level of care as planned procedures.{" "}
              
            </p>
            <p className="features-description">
              Here’s What Sets Our Same Day Dentistry Apart:
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
            <h2 className="faq-heading">Same Day Dentistry FAQs</h2>
            <div className="faq-acc-container">
              <Accordion type="single" className="w-full space-y-5">
                <AccordionItem value="q1" className="faq-acc">
                  <AccordionTrigger className="faq-qn">
                    <h3 className="text-lg">
                      What types of treatments can be completed in one day?
                    </h3>
                  </AccordionTrigger>
                  <AccordionContent className="faq-ans">
                    <p>
                      Services such as crowns, fillings, bonding, extractions, and emergency repairs can often be done in just one visit.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="q2" className="faq-acc">
                  <AccordionTrigger className="faq-qn">
                    <h3 className="text-lg">Do I need an appointment for same day dentistry?</h3>
                  </AccordionTrigger>
                  <AccordionContent className="faq-ans">
                    <p>
                      We encourage patients to call ahead, but we do accept walk-ins for urgent dental needs whenever possible.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="q3" className="faq-acc">
                  <AccordionTrigger className="faq-qn">
                    <h3 className="text-lg">
                      How long will a same-day crown take?
                    </h3>
                  </AccordionTrigger>
                  <AccordionContent className="faq-ans">
                    <p>
                      Most crowns can be scanned, created, and placed in just a few hours thanks to advanced dental technology.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="q4" className="faq-acc">
                  <AccordionTrigger className="faq-qn">
                    <h3 className="text-lg">
                      Will same day dental services cost extra?
                    </h3>
                  </AccordionTrigger>
                  <AccordionContent className="faq-ans">
                    <p>
                      Not typically. Pricing depends on the procedure, and we accept most insurance plans along with flexible payment options.
                    </p>
                  </AccordionContent>
                </AccordionItem>

              </Accordion>
            </div>
          </div>

          <div className="features-section">
            {/* <Fade direction="up" duration={1000}> */}
            <h2 className="features-heading">
              Considering to Restore Your Smile with Same Day Dentistry in Jersey City?
            </h2>
            <p className="features-description">
              If you’re dealing with sudden pain, damage, or need a fast repair,
              {" "}
              <Link
                  href="/"
                  className="text-primary mr-2 hover:underline font-medium"
                >
                  SmileKraft Dental 
                </Link>{" "}
              provides trusted same day dentistry in Jersey City, NJ. From crowns to emergency treatments, we’re here to restore your smile with care and efficiency. 
            </p>
            {/* </Fade> */}
          </div>

          <BookCallBtn />
        </div>
      </main>
    </div>
  );
}
