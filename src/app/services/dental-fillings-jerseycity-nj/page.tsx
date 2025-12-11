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

export default function DentalFillingPage() {
  const features = [
    {
      icon: "/Images/icons/Immediate Pain Relief.png",
      title: "Comprehensive Filling Solutions",
      description:
        "We repair and protect teeth with advanced filling techniques.",
      points: [
        "Tooth-colored composite fillings",
        "Replacement of old metal fillings",
        "Small fracture and chip repairs",
        "Preventive fillings to stop further decay",
      ],
    },
    {
      icon: "/Images/icons/Smart Treatment Decisions Under Pressure.png",
      title: "Comfort-Focused Restorative Care",
      description:
        "Our approach ensures a stress-free experience for every patient.",
      points: [
        "Gentle cavity preparation",
        "Local anesthesia for pain-free treatment",
        "Quick, efficient procedures",
        "Family-friendly care for kids and adults",
      ],
    },
    {
      icon: "/Images/icons/Serving Harrisburg Nearby Communities.png",
      title: "Accessible Dental Fillings in Jersey City",
      description:
        "We make restorative care simple and stress-free.",
      points: [
        "Same-day cavity treatment available",
        "Flexible scheduling, including evenings",
        "Insurance and financing support ",
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
              <h1>Dental Filling Services in Jersey City, NJ</h1>
            </Fade>
            <Fade direction="down" duration={1000}>
              <h2 className="text-center">
                SmileKraft Dental | Tooth Repair & Restorative Care Near You{" "}
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
                    src="/Images/dental-fillings.webp"
                    alt="Dental Fillings at Tulip Dental Maplewood"
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
              <div className="desc-text-subtitle">Dental Fillings</div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold">
                What to Know About Dental Fillings
              </h2>
              <p>
                Cavities and minor tooth damage can happen to anyone - but with modern dental fillings, you can restore strength and function while keeping your smile natural. At SmileKraft Dental, we use tooth-colored, durable materials that blend seamlessly with your existing teeth. Whether it’s repairing decay, fixing a small chip, or replacing old metal fillings, our team ensures comfortable, long-lasting results.
                
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
                If you’re searching for a trusted “tooth filling near me” in Jersey City, SmileKraft Dental is here to restore your smile with care.
              </p>
              {/* </Fade> */}
            </div>
          </div>
          <div className="wcu-section">
            <div className="wcu-text-section">
              {/* <Fade cascade direction="up" delay={1000} duration={600}> */}
              <div className="wcu-title">
                <h2>Why Choose SmileKraft Dental for Dental Fillings</h2>
              </div>
              <div className="wcu-points-section">
                <ul className="wcu-points">
                  <li>
                    <h3 className="service-point-title">
                      <CheckCircle className="service-point-icon" />{" "}
                      Experienced Dentists with Gentle Techniques
                    </h3>
                  </li>
                  <li>
                    <h3 className="service-point-title">
                      <CheckCircle className="service-point-icon" /> 
                      Modern, Tooth-Colored Filling Materials
                    </h3>
                  </li>
                  <li>
                    <h3 className="service-point-title">
                      <CheckCircle className="service-point-icon" /> 
                      Affordable Care with Insurance & Payment Options
                    </h3>
                  </li>
                  <li>
                    <h3 className="service-point-title">
                      <CheckCircle className="service-point-icon" /> 
                      Same-Day Appointments for Cavities & Repairs
                    </h3>
                  </li>
                  <li>
                    <h3 className="service-point-title">
                      <CheckCircle className="service-point-icon" /> 
                      Convenient Location in Jersey City
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
            <h2 className="features-heading">Reliable Tooth Repair & Natural-Looking Results</h2>
            <p className="features-description">
              A cavity or crack doesn’t have to compromise your smile. At SmileKraft Dental, we provide fillings that protect your teeth and restore their appearance. Every treatment is designed to be quick, comfortable, and effective, so you can get back to smiling with confidence.
              
              
            </p>
            <p className="features-description">
              Here’s What Makes Our Dental Fillings Different:
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
            <h2 className="faq-heading">Dental Fillings FAQs</h2>
            <div className="faq-acc-container">
              <Accordion type="single" className="w-full space-y-5">
                <AccordionItem value="q1" className="faq-acc">
                  <AccordionTrigger className="faq-qn">
                    <h3 className="text-lg">Are tooth-colored fillings durable?</h3>
                  </AccordionTrigger>
                  <AccordionContent className="faq-ans">
                    <p>
                      Yes. Composite fillings are strong, long-lasting, and designed to withstand normal biting and chewing.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="q2" className="faq-acc">
                  <AccordionTrigger className="faq-qn">
                    <h3 className="text-lg">
                      How do I know if I need a filling?
                    </h3>
                  </AccordionTrigger>
                  <AccordionContent className="faq-ans">
                    <p>
                      Common signs include sensitivity, tooth pain, visible dark spots, or chips. A dental exam can confirm if a filling is needed.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="q3" className="faq-acc">
                  <AccordionTrigger className="faq-qn">
                    <h3 className="text-lg">How long does a filling procedure take?</h3>
                  </AccordionTrigger>
                  <AccordionContent className="faq-ans">
                    <p>
                      Most dental fillings can be completed in less than an hour, depending on the size and location of the cavity.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="q4" className="faq-acc">
                  <AccordionTrigger className="faq-qn">
                    <h3 className="text-lg">Can kids get dental fillings?</h3>
                  </AccordionTrigger>
                  <AccordionContent className="faq-ans">
                    <p>
                      Absolutely. We provide gentle fillings for children to stop decay and protect their developing smiles.
                    </p>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>

          <div className="features-section">
            {/* <Fade direction="up" duration={1000}> */}
            <h2 className="features-heading">
              Want a Stronger, Healthier Smile with Dental Fillings? 
            </h2>
            <p className="features-description">
              If you have a cavity, cracked tooth, or need to replace an old filling,{" "}
              <Link
                href="/"
                className="text-primary mr-2 hover:underline font-medium"
              >
                SmileKraft Dental
              </Link>
              offers expert dental fillings in Jersey City, NJ. Our natural-looking restorations protect your teeth while keeping your smile beautiful.
            </p>
            {/* </Fade> */}
          </div>

          <BookCallBtn />
        </div>
      </main>
    </div>
  );
}
