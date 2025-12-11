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
      icon: "/Images/icons/Immediate Pain Relief.png",
      title: "Dentures & Implant-Supported Dentures",
      description:
        "Modern designs for comfort and confidence.",
      points: [
        "Partial and full denture solutions available",
        "Implant-stabilized options for extra hold",
        "Lightweight, natural appearance",
        "Designed for easy wear and care",
      ],
    },
    {
      icon: "/Images/icons/Smart Treatment Decisions Under Pressure.png",
      title: "Dental Bridges",
      description:
        "A seamless way to fill gaps in your smile.",
      points: [
        "Fixed securely for stability",
        "Blends in with surrounding teeth",
        "Restores chewing and speaking function",
        "Cost-effective, lasting option",
      ],
    },
    {
      icon: "/Images/icons/Serving Harrisburg Nearby Communities.png",
      title: "Dental Implants",
      description:
        "The gold standard for permanent replacement.",
      points: [
        "Restores single or multiple missing teeth",
        "Stimulates jawbone to prevent bone loss",
        "Strong and secure for everyday use",
        "Feels just like natural teeth",
      ],
    },
  ];

  return (
    <div className="flex min-h-screen bg-gray-50">
      <main className="details-page-container">
        <div className="details-page">
          <div className="details-page-header-section">
            <Fade direction="up" duration={1000}>
              <h1>Permanent Teeth Replacement in Jersey City, NJ </h1>
            </Fade>
            <Fade direction="down" duration={1000}>
              <h2 className="text-center">
                SmileKraft Dental | Lasting Tooth Replacement Options Near You
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
                    src="/Images/permanenet-teeth-replacement.webp"
                    alt="Permanent Teeth Replacement at SmileKraft Dental in Jersey City"
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
              <div className="desc-text-subtitle">
                Permanent Teeth Replacement
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold">
                What to Know About Permanent Teeth Replacement
              </h2>
              <p>
                Missing teeth can impact your ability to eat, speak, and smile with confidence. At SmileKraft Dental, we specialize in permanent teeth replacement in Jersey City, NJ, providing natural-looking, durable solutions tailored to your needs. Whether you’ve lost a single tooth or several, our treatments restore both function and appearance for a healthier, more confident smile.
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
                If you’re searching for “tooth replacement near me,” SmileKraft Dental offers trusted solutions close to home.
              </p>
              {/* </Fade> */}
            </div>
          </div>
          <div className="wcu-section">
            <div className="wcu-text-section">
              {/* <Fade cascade direction="up" delay={1000} duration={600}> */}
              <div className="wcu-title">
                <h2>
                  Why Choose SmileKraft Dental for Teeth Replacement
                </h2>
              </div>
              <div className="wcu-points-section">
                <ul className="wcu-points">
                  <li>
                    <h3 className="text-lg  flex items-center gap-2">
                      <CheckCircle className="service-point-icon" />{" "}
                      Experienced Team with Advanced Training
                    </h3>
                  </li>
                  <li>
                    <h3 className="service-point-title">
                      <CheckCircle className="service-point-icon" /> Multiple Replacement Options to Fit Your Needs
                    </h3>
                  </li>
                  <li>
                    <h3 className="service-point-title">
                      <CheckCircle className="service-point-icon" />{" "}
                      Flexible Financing & Insurance Accepted
                    </h3>
                  </li>
                  <li>
                    <h3 className="service-point-title">
                      <CheckCircle className="service-point-icon" />{" "}
                      Convenient Jersey City Location
                    </h3>
                  </li>
                  <li>
                    <h3 className="service-point-title">
                      <CheckCircle className="service-point-icon" /> 
                      Personalized Care Focused on Comfort
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
              Complete & Reliable Tooth Replacement Solutions{" "}
            </h2>
            <p className="features-description">
              Living with missing teeth affects more than your appearance - it impacts how you eat, speak, and feel about your smile. At {" "}
              <Link
                href="/"
                className="text-primary hover:underline font-medium"
              >
                SmileKraft Dental
              </Link>{" "}
              , we specialize in permanent tooth replacement in Jersey City, offering advanced solutions that look natural and last for years.
              
            </p>
            <p className="features-description">
              Here’s What Sets Our Replacement Treatments Apart:
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
            <h2 className="faq-heading">Permanent Teeth Replacement FAQs</h2>
            <div className="faq-acc-container">
              <Accordion type="single" className="w-full space-y-5">
                <AccordionItem value="q1" className="faq-acc">
                  <AccordionTrigger className="faq-qn">
                    <h3 className="text-lg">
                      What happens if I don’t replace missing teeth?
                    </h3>
                  </AccordionTrigger>
                  <AccordionContent className="faq-ans">
                    <p>
                      Gaps can cause shifting of nearby teeth, bite problems, bone loss in the jaw, and even changes to your facial appearance over time.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="q2" className="faq-acc">
                  <AccordionTrigger className="faq-qn">
                    <h3 className="text-lg">
                      Are bridges, dentures, and implants the only options?
                    </h3>
                  </AccordionTrigger>
                  <AccordionContent className="faq-ans">
                    <p>
                      Yes - these are the most reliable permanent tooth replacement methods. We’ll help you choose the option that best fits your lifestyle, health, and budget.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="q3" className="faq-acc">
                  <AccordionTrigger className="faq-qn">
                    <h3 className="text-lg">How do I know if I’m a candidate for dental implants?</h3>
                  </AccordionTrigger>
                  <AccordionContent className="faq-ans">
                    <p>
                      Most adults with good oral and overall health are candidates. If you don’t have enough bone, procedures like grafting can prepare your mouth for implants.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="q4" className="faq-acc">
                  <AccordionTrigger className="faq-qn">
                    <h3 className="text-lg">
                      Is permanent tooth replacement painful?
                    </h3>
                  </AccordionTrigger>
                  <AccordionContent className="faq-ans">
                    <p>
                      No. With local anesthesia and modern techniques, procedures are safe and comfortable. Most patients report minimal discomfort and quick recovery times.
                    </p>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>

          <div className="features-section">
            {/* <Fade direction="up" duration={1000}> */}
            <h2 className="features-heading">
              Is It Time to Replace Missing Teeth and Regain Your Confidence?
            </h2>
            <p className="features-description">
              Don’t let missing teeth hold you back. At SmileKraft Dental, we provide trusted permanent teeth replacement in Jersey City, NJ, designed to restore your confidence, function, and oral health.
            </p>
            {/* </Fade> */}
          </div>

          <BookCallBtn />
        </div>
      </main>
    </div>
  );
}
