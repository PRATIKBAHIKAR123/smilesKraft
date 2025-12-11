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

export default function InvisilinePage() {
  const features = [
    {
      icon: "/Images/icons/Immediate Pain Relief.png",
      title: "Modern Aligner Technology",
      description:
        "Discreet treatment that fits your lifestyle.",
      points: [
        "Virtually invisible aligners",
        "Smooth and comfortable fit",
        "Easy to remove for eating and brushing",
        "Suitable for both teens and adults",
      ],
    },
    {
      icon: "/Images/icons/Smart Treatment Decisions Under Pressure.png",
      title: "Personalized Treatment Plans",
      description:
        "Every smile is unique, so your care should be too.",
      points: [
        "Custom aligners created with 3D scans",
        "Step-by-step progress monitoring",
        "Tailored plans for mild to complex cases",
        "Focused on efficiency and predictable outcomes",
      ],
    },
    {
      icon: "/Images/icons/Serving Harrisburg Nearby Communities.png",
      title: "Accessible Invisalign Care in Jersey City",
      description:
        "Even if you’ve been told you’re not a candidate for clear aligners, modern Invisalign technology may surprise you. We can treat many moderate to complex orthodontic cases.",
      points: [
        "We make orthodontics simple and convenient.",
        "Same-day Invisalign consultations",
        "Evening and weekend appointments",
        "Financing available for clear aligners",
      ],
    },
  ];

  return (
    <div className="flex min-h-screen bg-gray-50">
      <main className="details-page-container">
        <div className="details-page">
          <div className="details-page-header-section">
            <Fade direction="up" duration={1000}>
              <h1>Invisalign in Jersey City, NJ </h1>
            </Fade>
            <Fade direction="down" duration={1000}>
              <h2 className="text-center">
                SmileKraft Dental | Clear Aligner Orthodontics Near You{" "}
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
                    src="/Images/Invisalign.webp"
                    alt="Invisalign treatment at SmileKraft Dental in Jersey City"
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
              <div className="desc-text-subtitle">Invisalign</div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold">
                What to Know About Invisalign
              </h2>
              <p>
                Crooked or misaligned teeth don’t just affect your smile - they can also impact your bite and long-term oral health. At SmileKraft Dental, we provide Invisalign in Jersey City as a modern, discreet way to straighten teeth without the hassle of{" "}
                <Link
                  href="/service-areas/orhodontics-jerseycity-nj"
                  className="text-primary mr-2 hover:underline font-medium"
                >
                  metal braces
                </Link>
                Clear, removable aligners gently shift teeth into place, giving you the smile you’ve always wanted - with comfort and flexibility at every stage.{" "}
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
                If you’re searching for “Invisalign near me,” SmileKraft Dental is your trusted local provider.
              </p>
              {/* </Fade> */}
            </div>
          </div>
          <div className="wcu-section">
            <div className="wcu-text-section">
              {/* <Fade cascade direction="up" delay={1000} duration={600}> */}
              <div className="wcu-title">
                <h2>Why Choose SmileKraft Dental for Invisalign</h2>
              </div>
              <div className="wcu-points-section">
                <ul className="wcu-points">
                  <li>
                    <h3 className="service-point-title">
                      <CheckCircle className="service-point-icon" /> Experienced Providers with a Focus on Results
                    </h3>
                  </li>
                  <li>
                    <h3 className="service-point-title">
                      <CheckCircle className="service-point-icon" /> Digital Scanning for Precise Aligner Fit
                    </h3>
                  </li>
                  <li>
                    <h3 className="service-point-title">
                      <CheckCircle className="service-point-icon" />{" "}

                      Insurance-Friendly with Flexible Payment Options
                    </h3>
                  </li>
                  <li>
                    <h3 className="service-point-title">
                      <CheckCircle className="service-point-icon" /> 
                      Convenient Scheduling for Busy Patients
                    </h3>
                  </li>
                  <li>
                    <h3 className="service-point-title">
                      <CheckCircle className="service-point-icon" /> Centrally Located Jersey City Dental Office
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
            <h2 className="features-heading">Comfortable, Discreet Orthodontic Care</h2>
            <p className="features-description">
              Straightening your teeth doesn’t have to mean metal brackets and wires. Invisalign aligners are nearly invisible, removable, and custom-designed for your smile. At SmileKraft Dental, we use advanced digital technology to map your treatment from start to finish, giving you a clear view of your progress and results.
              
            </p>
            <p className="features-description">
              Here’s What Makes Our Invisalign Treatment Different:
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
            <h2 className="faq-heading">Invisalign FAQs</h2>
            <div className="faq-acc-container">
              <Accordion type="single" className="w-full space-y-5">
                <AccordionItem value="q1" className="faq-acc">
                  <AccordionTrigger className="faq-qn">
                    <h3 className="text-lg">
                      What dental issues can Invisalign fix?
                    </h3>
                  </AccordionTrigger>
                  <AccordionContent className="faq-ans">
                    <p>
                      Invisalign can correct crowded teeth, spacing issues, overbites, underbites, and crossbites - often without the need for metal braces.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="q2" className="faq-acc">
                  <AccordionTrigger className="faq-qn">
                    <h3 className="text-lg">Will Invisalign affect my speech?</h3>
                  </AccordionTrigger>
                  <AccordionContent className="faq-ans">
                    <p>
                      Some patients notice a slight adjustment period, but most adapt within a few days and speak normally with aligners in place.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="q3" className="faq-acc">
                  <AccordionTrigger className="faq-qn">
                    <h3 className="text-lg">
                      Can I eat and drink with Invisalign?
                    </h3>
                  </AccordionTrigger>
                  <AccordionContent className="faq-ans">
                    <p>
                      You should remove aligners when eating or drinking anything besides water to avoid staining or damaging them.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="q4" className="faq-acc">
                  <AccordionTrigger className="faq-qn">
                    <h3 className="text-lg">
                      How do I care for Invisalign aligners?
                    </h3>
                  </AccordionTrigger>
                  <AccordionContent className="faq-ans">
                    <p>
                      Rinse and brush your aligners daily with a soft toothbrush and store them in their case when not in use to keep them clean and clear.
                    </p>
                  </AccordionContent>
                </AccordionItem>

              </Accordion>
            </div>
          </div>

          <div className="features-section">
            {/* <Fade direction="up" duration={1000}> */}
            <h2 className="features-heading">
              Want Straighter Teeth with Invisalign Near You?
            </h2>
            <p className="features-description">
              A straighter smile doesn’t have to mean braces. With Invisalign in Jersey City, NJ,
              {" "}
              <Link
                href="/"
                className="text-primary mr-2 hover:underline font-medium"
              >SmileKraft Dental
                </Link>{" "}
              helps teens and adults achieve healthy, aligned teeth with a treatment designed for comfort and discretion. From your first consultation to your final results, we’re here to make your smile transformation simple and stress-free.
            </p>
            {/* </Fade> */}
          </div>

          <BookCallBtn />
        </div>
      </main>
    </div>
  );
}
