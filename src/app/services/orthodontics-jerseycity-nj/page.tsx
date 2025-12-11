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

export default function OrthodonticsPage() {
  const features = [
    {
      icon: "/Images/icons/braces1.png",
      title: "Full Range of Orthodontic Solutions",
      description:
        "We offer treatments designed to suit your needs and goals.",
      points: [
        "Traditional metal braces for reliable results",
        "Clear ceramic braces for a discreet option",
        "Invisalign® aligners for flexibility and comfort",
        "Early orthodontic care for children"
      ],
    },
    {
      icon: "/Images/icons/Smart Treatment Decisions Under Pressure.png",
      title: "Comfortable, Modern Orthodontics",
      description:
        "Our approach makes the process easier and more enjoyable.",
      points: [
        "Digital imaging for accurate planning",
        "Gentle adjustments to minimize discomfort",
        "Treatment tailored to your lifestyle",
        "Supportive care from start to finish"
      ],
    },
    {
      icon: "/Images/icons/Serving Harrisburg Nearby Communities.png",
      title: "Accessible Orthodontic Care in Jersey City",
      description:
        "We make orthodontics simple, convenient, and stress-free.",
      points: [
        "Flexible scheduling, including evenings",
        "Financing options available for braces & Invisalign®",
        "Family-friendly environment for kids and adults",
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
              <h1>Orthodontic Services in Jersey City, NJ</h1>
            </Fade>
            <Fade direction="down" duration={1000}>
              <h2 className="text-center">
                SmileKraft Dental | Braces & Invisalign® Near You{" "}
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
                    src="/Images/Orthodontics.webp"
                    alt="Orthodontics treatment at SmileKraft Dental in Jersey City"
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
              <div className="desc-text-subtitle">Orthodontic Treatment</div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold">
                What to Know About Orthodontics
              </h2>
              <p>
                Straight teeth do more than improve your appearance - they also support better oral health and function. At{" "}
                <Link
                  href="/"
                  className="text-primary mr-2 hover:underline font-medium"
                >
                  SmileKraft Dental
                </Link>
                we provide orthodontic treatments designed for children, teens, and adults. From traditional braces to discreet{" "}
                <Link
                  href="/services/invisalign-clear-aligners-jerseycity-nj"
                  className="text-primary mr-2 hover:underline font-medium"
                >
                  Invisalign®
                </Link>
                aligners, our team offers personalized care to help you achieve a healthy, balanced smile.{" "}
              </p>
              <p>
                We proudly serve families across <Link
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
                If you’re searching for a trusted “orthodontist near me” in Jersey City, SmileKraft Dental has treatment options for every age.
              </p>
              {/* </Fade> */}
            </div>
          </div>
          <div className="wcu-section">
            <div className="wcu-text-section">
              {/* <Fade cascade direction="up" delay={1000} duration={600}> */}
              <div className="wcu-title">
                <h2>Why Choose SmileKraft Dental for Orthodontics</h2>
              </div>
              <div className="wcu-points-section">
                <ul className="wcu-points">
                  <li>
                    <h3 className="service-point-title">
                      <CheckCircle className="service-point-icon" /> Experienced Orthodontic Care for All Ages
                    </h3>
                  </li>
                  <li>
                    <h3 className="service-point-title">
                      <CheckCircle className="service-point-icon" /> 
                      Options Including Braces & Invisalign®
                    </h3>
                  </li>
                  <li>
                    <h3 className="service-point-title">
                      <CheckCircle className="service-point-icon" />{" "}Affordable Payment Plans & Insurance Accepted
                      
                    </h3>
                  </li>
                  <li>
                    <h3 className="service-point-title">
                      <CheckCircle className="service-point-icon" /> Convenient Scheduling for Busy Families
                    </h3>
                  </li>
                  <li>
                    <h3 className="service-point-title">
                      <CheckCircle className="service-point-icon" /> Easy-to-Reach Jersey City Location
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
              Orthodontic Treatment That Fits Your Lifestyle
            </h2>
            <p className="features-description">
              Every smile is unique, and so is every treatment plan. At SmileKraft Dental, we combine advanced orthodontic techniques with personalized care to create results that last a lifetime.
              <p className="features-description">
                Here’s What Makes Our Orthodontic Care Different:
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
            <h2 className="faq-heading">Orthodontics FAQs</h2>
            <div className="faq-acc-container">
              <Accordion type="single" className="w-full space-y-5">
                <AccordionItem value="q1" className="faq-acc">
                  <AccordionTrigger className="faq-qn">
                    <h3 className="text-lg">
                      Can adults get orthodontic treatment?
                    </h3>
                  </AccordionTrigger>
                  <AccordionContent className="faq-ans">
                    <p>
                      Yes. Braces and Invisalign® are effective at any age, and many adults choose orthodontics to improve both appearance and dental health.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="q2" className="faq-acc">
                  <AccordionTrigger className="faq-qn">
                    <h3 className="text-lg">
                      Do I need to wear retainers after treatment?
                    </h3>
                  </AccordionTrigger>
                  <AccordionContent className="faq-ans">
                    <p>
                      Absolutely. Retainers are essential for maintaining your new alignment and preventing teeth from shifting back.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="q3" className="faq-acc">
                  <AccordionTrigger className="faq-qn">
                    <h3 className="text-lg">
                      How often will I need checkups during treatment?
                    </h3>
                  </AccordionTrigger>
                  <AccordionContent className="faq-ans">
                    <p>
                      Most patients return every 4-8 weeks for adjustments or progress checks, depending on the treatment plan.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="q4" className="faq-acc">
                  <AccordionTrigger className="faq-qn">
                    <h3 className="text-lg">Will orthodontics improve my oral health?</h3>
                  </AccordionTrigger>
                  <AccordionContent className="faq-ans">
                    <p>
                      Yes. Straighter teeth are easier to clean, reducing the risk of cavities, gum disease, and bite-related issues.
                    </p>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>

          <div className="features-section">
            {/* <Fade direction="up" duration={1000}> */}
            <h2 className="features-heading">
              Need a Trusted Orthodontist in Jersey City, NJ?
            </h2>
            <p className="features-description">
              If you’re ready to improve your smile, SmileKraft Dental offers professional orthodontics in Jersey City, NJ, including braces and Invisalign®. Our team provides personalized treatment for children, teens, and adults to achieve lasting results.
            </p>
            {/* </Fade> */}
          </div>

          <BookCallBtn />
        </div>
      </main>
    </div>
  );
}
