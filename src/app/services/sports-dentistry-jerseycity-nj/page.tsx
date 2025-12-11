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

export default function SportsDentistryPage() {
  const features = [
    {
      icon: "/Images/icons/Immediate Pain Relief.png",
      title: "Custom Sports Mouthguards",
      description:
        "Protecting your smile while you play.",
      points: [
        "Designed to fit comfortably and securely",
        "Helps prevent chips, fractures, and tooth loss",
        "Reduces risks of jaw injuries and concussions",
        "Available for athletes of all ages",
      ],
    },
    {
      icon: "/Images/icons/Smart Treatment Decisions Under Pressure.png",
      title: "Emergency Sports Dentistry",
      description:
        "Same-day solutions when accidents happen.",
      points: [
        "Treatment for knocked-out or broken teeth",
        "Repairs for damaged braces, crowns, or fillings",
        "Pain relief and infection prevention",
        "Gentle emergency care for children and adults",
      ],
    },
    {
      icon: "/Images/icons/Serving Harrisburg Nearby Communities.png",
      title: "Accessible Sports Dentistry in Jersey City",
      description:
        "Making dental protection simple and stress-free.",
      points: [
        "Flexible scheduling, including weekends",
        "Insurance-friendly with financing options",
        "Fast response for urgent needs",
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
              <h1>Sports Dentistry in Jersey City, NJ</h1>
            </Fade>
            <Fade direction="down" duration={1000}>
              <h2 className="text-center">
                SmileKraft Dental | Athletic Mouthguards & Injury Care Near You
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
                    src="/Images/Sports Dentistry.webp"
                    alt="Sports Dentistry at Tulip Dental Maplewood"
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
              <div className="desc-text-subtitle">Sports Dentistry</div>
              <h3 className="desc-text-title">What to Know About Sports Dentistry</h3>
              <p>
                Sports are great for health and confidence, but they can also put your teeth at risk. At SmileKraft Dental, we provide sports dentistry in Jersey City, NJ, including custom mouthguards, protective solutions, and{" "}
                <Link
                  href="/same-day-dentistry-jerseycity-nj"
                  className="text-primary hover:underline font-medium"
                >
                  same-day
                </Link>{" "}
                care for dental injuries. Whether it’s a knocked-out tooth,
                {" "}
                <Link
                  href="/orthodontics-jerseycity-nj"
                  className="text-primary hover:underline font-medium"
                >
                  broken braces
                </Link>{" "}
                or prevention with a professionally fitted guard, our team is here to keep athletes safe.{" "}
                
              </p>
              <p>
                We proudly serve families across <Link
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
                If you’re searching for a trusted “sports dentist near me,” SmileKraft Dental is right here in your community.
              </p>
              {/* </Fade> */}
            </div>
          </div>
          <div className="wcu-section">
            <div className="wcu-text-section">
              {/* <Fade cascade direction="up" delay={1000} duration={600}> */}
              <div className="wcu-title">
                <h2>Why Choose SmileKraft Dental for Sports Dentistry</h2>
              </div>
              <div className="wcu-points-section">
                <ul className="wcu-points">
                  <li>
                    <h3 className="service-point-title">
                      <CheckCircle className="service-point-icon" />{" "}
                      Experienced Care for Sports-Related Dental Injuries
                    </h3>
                  </li>
                  <li>
                    <h3 className="service-point-title">
                      <CheckCircle className="service-point-icon" /> Custom-Fit Mouthguards for Kids, Teens & Adults
                    </h3>
                  </li>
                  <li>
                    <h3 className="service-point-title">
                      <CheckCircle className="service-point-icon" /> Same-Day Emergency Treatment for Broken or Knocked-Out Teeth
                    </h3>
                  </li>
                  <li>
                    <h3 className="service-point-title">
                      <CheckCircle className="service-point-icon" /> 
                      Insurance Accepted with Flexible Payment Options
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
            <h2 className="features-heading">Convenient Jersey City Location </h2>
            <p className="features-description">
              {" "}
              <Link
                href="/emergency-dentistry-jerseycity-nj"
                className="text-primary hover:underline font-medium"
              >
                Dental injuries
              </Link>{" "}
              during sports can happen instantly - but the right prevention and care make all the difference. At SmileKraft Dental, we help athletes of all ages stay protected and provide immediate treatment when needed.
              
            </p>
            <p className="features-description">
              Here’s What Makes Our Sports Dentistry Different:
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
            <h2 className="faq-heading">Sports Dentistry FAQs</h2>
            <div className="faq-acc-container">
              <Accordion type="single" className="w-full space-y-5">
                <AccordionItem value="q1" className="faq-acc">
                  <AccordionTrigger className="faq-qn">
                    <h3 className="text-lg">
                      Why should athletes wear custom mouthguards?
                    </h3>
                  </AccordionTrigger>
                  <AccordionContent className="faq-ans">
                    <p>
                      Custom mouthguards provide a better fit, more comfort, and stronger protection than store-bought versions.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="q2" className="faq-acc">
                  <AccordionTrigger className="faq-qn">
                    <h3 className="text-lg">
                      What should I do if my child knocks out a tooth during sports?
                    </h3>
                  </AccordionTrigger>
                  <AccordionContent className="faq-ans">
                    <p>
                      Keep the tooth moist (in milk or saline) and come to us immediately for the best chance of saving it.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="q3" className="faq-acc">
                  <AccordionTrigger className="faq-qn">
                    <h3 className="text-lg">
                      Can I get a mouthguard if I wear braces?
                    </h3>
                  </AccordionTrigger>
                  <AccordionContent className="faq-ans">
                    <p>
                      Yes - we design specialized mouthguards that protect both your teeth and braces during sports.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="q4" className="faq-acc">
                  <AccordionTrigger className="faq-qn">
                    <h3 className="text-lg">
                      Do you treat sports injuries for kids and teens?
                    </h3>
                  </AccordionTrigger>
                  <AccordionContent className="faq-ans">
                    <p>
                      Absolutely. We provide gentle, same-day care for children with dental injuries from sports or playground accidents.
                    </p>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>

          <div className="features-section">
            {/* <Fade direction="up" duration={1000}> */}
            <h2 className="features-heading">
              Need Sports Dentistry Near You in Jersey City?
            </h2>
            <p className="features-description">
              Whether you’re on the field, court, or track,
              {" "}
              <Link
                  href="/"
                  className="text-primary hover:underline font-medium"
                >
                  SmileKraft Dental
                </Link>{" "}
               offers reliable sports dentistry in Jersey City, NJ. We’re here to safeguard your smile with prevention and fast injury care. Our goal is to keep athletes confident, protected, and ready to play without worrying about their smiles.
            </p>
            {/* </Fade> */}
          </div>

          <BookCallBtn />
        </div>
      </main>
    </div>
  );
}
