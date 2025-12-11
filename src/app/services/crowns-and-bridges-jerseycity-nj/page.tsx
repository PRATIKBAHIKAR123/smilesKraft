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

export default function CrownsPage() {
  const features = [
    {
      icon: "/Images/icons/Teeth Replacement.png",
      title: "Comprehensive Crown & Bridge Solutions",
      description:
        "We provide a variety of restorative options to meet your needs.",
      points: [
        "Dental crowns for fractured, worn, or decayed teeth",
        "Bridges to replace one or more missing teeth",
        "Implant-supported crowns and bridges for added stability",
        "Replacement of old or failing restorations",
      ],
    },
    {
      icon: "/Images/icons/x-ray.png",
      title: "Comfort-Focused Restorative Care",
      description:
        "Your comfort and satisfaction come first in every treatment.",
      points: [
        "Local anesthesia for a pain-free experience",
        "Gentle techniques to preserve natural tooth structure",
        "Clear guidance on care and recovery",
        "Family-friendly approach for patients of all ages",
      ],
    },
    {
      icon: "/Images/icons/Serving Harrisburg Nearby Communities.png",
      title: "Accessible Crowns & Bridges in Jersey City",
      description:
        "We make high-quality restorative care simple and convenient.",
      points: [
        "Flexible scheduling, including evenings and weekends",
        "Insurance-friendly office with financing available",
        "Fast turnaround for urgent cases",
        "Serving Bergen-Lafayette, McGinley Square, Greenville, Journal Square, and The Heights",
      ],
    },
  ];

  return (
    <div className="flex min-h-screen bg-gray-50">
      <main className="details-page-container">
        <div className="details-page">
          <div className="details-page-header-section">
            <h1>Dental Crowns & Bridges in Jersey City, NJ</h1>
            <h2 className="text-center">
              SmileKraft Dental | Restorative Dentistry Solutions Near You{" "}
            </h2>
            {/* <div className='flex items-center justify-center gap-2'> <Link href={'/'} className='font-medium'>Home </Link><span><ChevronRight/></span> <span className='text-white/80'>Emergency Dentistry</span></div> */}
          </div>
          <div className="details-page-desc-section">
            {/* Image Section */}
            <div className="image_section">
              <div className="image_section-cover">
                {/* <Zoom cascade damping={0.3} duration={800}> */}
                <div className="main-image">
                  <img
                    src="/Images/Dental Crown Bridge.webp"
                    alt="Dental crowns & bridges at SmileKraft Dental in Jersey City"
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
              <div className="desc-text-subtitle">Dental Crowns & Bridges</div>
              <h2 className="text-2xl sm:text-3xl md:text-3xl lg:text-4xl font-semibold desc-text-title">
                What to Know About Crowns & Bridges
              </h2>
              <p>
                
                When teeth are damaged, weakened, or missing, dental crowns and bridges provide reliable solutions to restore strength, function, and appearance. At SmileKraft Dental, we design custom restorations that blend seamlessly with your natural teeth, ensuring durability and a confident smile. Crowns can protect and rebuild a single tooth, while bridges fill the gaps left by one or more missing teeth.{" "}
                
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
                If you’ve been searching for “dental crowns near me” or “dental bridges near me” in Jersey City, SmileKraft Dental provides advanced, patient-focused care.
              </p>
              {/* </Fade> */}
            </div>
          </div>
          <div className="wcu-section">
            <div className="wcu-text-section">
              {/* <Fade cascade direction="up" delay={1000} duration={600}> */}
              <div className="wcu-title">
                <h2>Why Choose SmileKraft Dental for Crowns & Bridges</h2>
              </div>
              <div className="wcu-points-section">
                <ul className="wcu-points">
                  <li>
                    <h3 className="service-point-title">
                      <CheckCircle className="service-point-icon" /> Experienced Team Specializing in Restorative Dentistry
                    </h3>
                  </li>
                  <li>
                    <h3 className="service-point-title">
                      <CheckCircle className="service-point-icon" /> High-Quality Materials for Natural Results
                    </h3>
                  </li>
                  <li>
                    <h3 className="service-point-title">
                      <CheckCircle className="service-point-icon" /> 
                      Affordable Options with Insurance & Financing
                    </h3>
                  </li>
                  <li>
                    <h3 className="service-point-title">
                      <CheckCircle className="service-point-icon" /> 
                      Same-Day Emergency Appointments Available
                    </h3>
                  </li>
                  <li>
                    <h3 className="service-point-title">
                      <CheckCircle className="service-point-icon" /> Convenient Location in Jersey City
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
              Restoring Smiles with Precision & Care
            </h2>
            <p className="features-description">
              Crowns and bridges are not just about fixing teeth - they restore your ability to eat, speak, and smile with confidence. At{" "}
              <Link
                href="/"
                className="text-primary mr-2 hover:underline font-medium"
              >
                SmileKraft Dental
              </Link>
               our team combines advanced technology with artistic craftsmanship to create restorations that are both durable and aesthetically pleasing.
              <p className="features-description">
                Here’s What Makes Our Crowns & Bridges Different:
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
            <h2 className="faq-heading">Crowns & Bridges FAQs</h2>
            <div className="faq-acc-container">
              <Accordion type="single" className="w-full space-y-5">
                <AccordionItem value="q1" className="faq-acc">
                  <AccordionTrigger className="faq-qn">
                    <h3 className="text-lg">What is the difference between a crown and a bridge?</h3>
                  </AccordionTrigger>
                  <AccordionContent className="faq-ans">
                    <p>
                      A crown covers and protects a single damaged tooth, while a bridge replaces one or more missing teeth by anchoring to neighboring teeth or implants.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="q2" className="faq-acc">
                  <AccordionTrigger className="faq-qn">
                    <h3 className="text-lg">
                      How long do crowns and bridges last?
                    </h3>
                  </AccordionTrigger>
                  <AccordionContent className="faq-ans">
                    <p>
                      With proper care, crowns and bridges can last 10-15 years or more. Good oral hygiene and regular checkups help extend their lifespan. 
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="q3" className="faq-acc">
                  <AccordionTrigger className="faq-qn">
                    <h3 className="text-lg">Are crowns and bridges noticeable?</h3>
                  </AccordionTrigger>
                  <AccordionContent className="faq-ans">
                    <p>
                      No - our crowns and bridges are custom-made using tooth-colored materials that blend naturally with your smile.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="q4" className="faq-acc">
                  <AccordionTrigger className="faq-qn">
                    <h3 className="text-lg">
                      Do crowns or bridges require special care?
                    </h3>
                  </AccordionTrigger>
                  <AccordionContent className="faq-ans">
                    <p>
                      They should be cared for just like your natural teeth - with daily brushing, flossing, and regular dental visits. Bridges may need extra attention when cleaning under and around the replacement tooth.
                    </p>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>

          <div className="features-section">
            <h2 className="features-heading">
              Looking for Dental Crowns & Bridges in Jersey City?
            </h2>
            <p className="features-description">
              If you’re dealing with a damaged tooth or missing teeth, SmileKraft Dental provides professional crowns and bridges in Jersey City, NJ to restore your smile. Our custom restorations are designed for comfort, function, and long-lasting results.
            </p>
          </div>

          <BookCallBtn />
        </div>
      </main>
    </div>
  );
}
