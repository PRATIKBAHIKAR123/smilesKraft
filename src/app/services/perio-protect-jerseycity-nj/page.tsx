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

export default function PerioProtectPage() {
  const features = [
    {
      icon: "/Images/icons/Immediate Pain Relief.png",
      title: "Effective Gum Disease Treatment",
      description:
        "Custom trays deliver medication deep below the gums, where brushing and flossing can’t reach.",
      points: [
        "Targets bacteria that cause infection",
        "Reduces gum inflammation and bleeding",
        "Supports healthier bone and tissue",
        "Helps prevent progression of gum disease",
      ],
    },
    {
      icon: "/Images/icons/Smart Treatment Decisions Under Pressure.png",
      title: "Comfortable At-Home Therapy",
      description:
        "Unlike traditional procedures, Perio Protect can be done daily in just minutes.",
      points: [
        "Easy-to-use trays designed just for you",
        "Painless and non-invasive treatment",
        "Quick sessions that fit your routine",
        "Safe for long-term use",
      ],
    },
    {
      icon: "/Images/icons/Serving Harrisburg Nearby Communities.png",
      title: "Accessible Gum Care in Jersey City",
      description:
        "We make it simple to start and maintain your treatment.",
      points: [
        "Same-day consultations available",
        "Flexible scheduling, including evenings",
        "Insurance-friendly with financing plans",
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
              <h1>Perio Protect in Jersey City, NJ</h1>
            </Fade>
            <Fade direction="down" duration={1000}>
              <h2 className="text-center">
                SmileKraft Dental | Advanced Gum Care Near You
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
                    src="/Images/perio-protect.webp"
                    alt="Perio Protect gum disease treatment at SmileKraft Dental in Jersey City"
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
              <div className="desc-text-subtitle">Perio Protect</div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold">
                What to Know About Perio Protect
              </h2>
              <p>
                Gum disease is one of the most common dental problems, and it can silently damage your smile if not treated. At SmileKraft Dental in Jersey City, NJ, we offer Perio Protect trays - a modern, non-invasive solution designed to fight bacteria below the gumline. With custom-fitted trays and a special antibacterial gel, this therapy helps reduce infection, freshen breath, and improve gum health from the comfort of your home.
                
              </p>
              <p>
                We proudly serve{" "}
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
                If you’re searching for “Perio Protect near me,” SmileKraft Dental is your trusted choice.
              </p>
              {/* </Fade> */}
            </div>
          </div>
          <div className="wcu-section">
            <div className="wcu-text-section">
              {/* <Fade cascade direction="up" delay={1000} duration={600}> */}
              <div className="wcu-title">
                <h2>Why Choose SmileKraft Dental for Perio Protect</h2>
              </div>
              <div className="wcu-points-section">
                <ul className="wcu-points">
                  <li>
                    <h3 className="service-point-title">
                      <CheckCircle className="service-point-icon" />{" "}
                      Experienced Team in Gum Health
                    </h3>
                  </li>
                  <li>
                    <h3 className="service-point-title">
                      <CheckCircle className="service-point-icon" /> Advanced Technology for Precise Tray Fitting
                    </h3>
                  </li>
                  <li>
                    <h3 className="service-point-title">
                      <CheckCircle className="service-point-icon" /> Insurance Options & Flexible Financing
                    </h3>
                  </li>
                  <li>
                    <h3 className="service-point-title">
                      <CheckCircle className="service-point-icon" /> Same-Day Evaluations & Convenient Appointments
                    </h3>
                  </li>
                  <li>
                    <h3 className="service-point-title">
                      <CheckCircle className="service-point-icon" /> Easily Accessible Jersey City Location
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
            <h2 className="features-heading">Gentle Gum Care with Perio Protect</h2>
            <p className="features-description">
              Traditional gum disease treatments can feel overwhelming, but Perio Protect offers a simple alternative. At
              {" "}
              <Link
                  href="/"
                  className="text-primary hover:underline font-medium"
                >
                  SmileKraft Dental
                </Link>, we guide you through every step, ensuring you see real improvements in both gum health and overall wellness
              
            </p>
            <p className="features-description">
              Here’s What Makes Our Perio Protect Therapy Different:
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
            <h2 className="faq-heading">Perio Protect FAQs</h2>
            <div className="faq-acc-container">
              <Accordion type="single" className="w-full space-y-5">
                <AccordionItem value="q1" className="faq-acc">
                  <AccordionTrigger className="faq-qn">
                    <h3 className="text-lg">What is Perio Protect?</h3>
                  </AccordionTrigger>
                  <AccordionContent className="faq-ans">
                    <p>
                      It’s a customized tray system that delivers antibacterial gel directly under the gums, helping control infection and improve oral health.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="q2" className="faq-acc">
                  <AccordionTrigger className="faq-qn">
                    <h3 className="text-lg">
                      Who is a good candidate for Perio Protect?
                    </h3>
                  </AccordionTrigger>
                  <AccordionContent className="faq-ans">
                    <p>
                      Anyone with signs of gum disease, such as bleeding gums, bad breath, or gum recession, may benefit from this treatment.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="q3" className="faq-acc">
                  <AccordionTrigger className="faq-qn">
                    <h3 className="text-lg">How often do I need to use the trays?</h3>
                  </AccordionTrigger>
                  <AccordionContent className="faq-ans">
                    <p>
                      Most patients wear their trays for just a few minutes each day as directed by their dentist.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="q4" className="faq-acc">
                  <AccordionTrigger className="faq-qn">
                    <h3 className="text-lg">Can Perio Protect replace cleanings?</h3>
                  </AccordionTrigger>
                  <AccordionContent className="faq-ans">
                    <p>
                      No - professional cleanings are still important. Perio Protect works alongside cleanings to improve gum health and reduce the need for more invasive treatments.
                    </p>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>

          <div className="features-section">
            {/* <Fade direction="up" duration={1000}> */}
            <h2 className="features-heading">
              Want Healthier Gums with Perio Protect in Jersey City?
            </h2>
            <p className="features-description">
              Keep your gums healthy and your smile strong with Perio Protect in Jersey City, NJ. Our team at SmileKraft Dental uses modern, non-invasive solutions to make gum disease management easier and more effective than ever.
            </p>
            {/* </Fade> */}
          </div>

          <BookCallBtn />
        </div>
      </main>
    </div>
  );
}
