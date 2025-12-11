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

export default function DentalEmergencyPage() {
  const features = [
    {
      icon: "/Images/icons/Immediate Pain Relief.png",
      title: "Common Dental Emergencies We Treat",
      description:
        "We handle a wide variety of urgent dental problems.",
      points: [
        "Severe toothaches and infections",
        "Knocked-out or broken teeth",
        "Lost crowns, fillings, or restorations",
        "Oral injuries causing bleeding or swelling",
      ],
    },
    {
      icon: "/Images/icons/Smart Treatment Decisions Under Pressure.png",
      title: "Patient-Centered Emergency Care",
      description:
        "Our approach focuses on both comfort and results.",
      points: [
        "Gentle techniques for children and adults",
        "Sedation options for anxious patients",
        "Clear communication and treatment planning",
        "Focus on saving natural teeth whenever possible",
      ],
    },
    {
      icon: "/Images/icons/Serving Harrisburg Nearby Communities.png",
      title: "Accessible Emergency Dentistry in Jersey City",
      description:
        "We make urgent care easy and stress-free.",
      points: [
        "Same-day scheduling & walk-ins welcome",
        "Evening and weekend availability",
        "Insurance-friendly practice with financing options",
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
              <h1>Dental Emergencies in Jersey City, NJ</h1>
            </Fade>
            <Fade direction="down" duration={1000}>
              <h2 className="text-center">
                SmileKraft Dental | Same-Day Urgent Dental Care Near You
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
                    src="/Images/dental-emergency.webp"
                    alt="Dental emergencies at SmileKraft Dental in Jersey City"
                  />
                </div>
                {/* </Zoom> */}
              </div>
            </div>

            {/* Text Section with Fade-in after delay */}
            <div className="desc-text-section">
              {/* <Fade cascade direction="up" delay={1000} duration={600}> */}
              <div className="desc-text-subtitle">Dental Emergencies</div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold">
                {" "}
                What to Know About Dental Emergencies
              </h2>
              <p>
                A{" "}
                <Link
                  href="/services/emergency-dentistry-jerseycity-nj"
                  className="text-primary mr-2 hover:underline font-medium"
                >
                  dental emergency
                </Link>
                can happen suddenly - from a knocked-out tooth to a painful abscess - and requires immediate attention to avoid further damage. At SmileKraft Dental, we provide urgent dental care in Jersey City with same-day appointments for children, teens, and adults. Our goal is to stop pain quickly, prevent complications, and preserve your natural teeth whenever possible.{" "}
             
              </p>
              <p>
                We proudly care for patients across <Link
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
              </p>
              {/* </Fade> */}
            </div>
          </div>
          <div className="wcu-section">
            <div className="wcu-text-section">
              {/* <Fade cascade direction="up" delay={1000} duration={600}> */}
              <div className="wcu-title">
                <h2>Why Choose SmileKraft Dental for Dental Emergencies</h2>
              </div>
              <div className="wcu-points-section">
                <ul className="wcu-points">
                  <li>
                    <h3 className="service-point-title">
                      <CheckCircle className="service-point-icon" /> Fast Response for Pain & Trauma
                    </h3>
                  </li>
                  <li>
                    <h3 className="service-point-title">
                      <CheckCircle className="service-point-icon" />{" "}
                      Advanced Technology for Immediate Care
                    </h3>
                  </li>
                  <li>
                    <h3 className="service-point-title">
                      <CheckCircle className="service-point-icon" /> 
                      Flexible Payment & Insurance Options
                    </h3>
                  </li>
                  <li>
                    <h3 className="service-point-title">
                      <CheckCircle className="service-point-icon" /> 
                      Same-Day Appointments & Walk-In Availability
                    </h3>
                  </li>
                  <li>
                    <h3 className="service-point-title">
                      <CheckCircle className="service-point-icon" /> Conveniently Located in Jersey City
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
              Urgent Dental Care You Can Count On
            </h2>
            <p className="features-description">
              When an emergency strikes, timely treatment makes all the difference. At SmileKraft Dental, we act quickly to provide relief, restore function, and protect your
              {" "}<Link
                  href="/services/oral-surgery-jerseycity-nj"
                  className="text-primary hover:underline font-bold"
                >oral</Link>{" "}
                health. From the moment you arrive, our team ensures you feel comfortable and informed throughout the process.
              
            </p>
            <p className="features-description">
              Here’s What Makes Our Emergency Dental Care Different:
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
            <h2 className="faq-heading">Dental Emergencies FAQs</h2>
            <div className="faq-acc-container">
              <Accordion type="single" className="w-full space-y-5">
                <AccordionItem value="q1" className="faq-acc">
                  <AccordionTrigger className="faq-qn">
                    <h3 className="text-lg">
                      How do I know if my situation is a dental emergency?
                    </h3>
                  </AccordionTrigger>
                  <AccordionContent className="faq-ans">
                    <p>
                      Any issue causing severe pain, swelling, bleeding, or visible damage should be treated as an emergency. It’s always safer to call our office and get evaluated right away.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="q2" className="faq-acc">
                  <AccordionTrigger className="faq-qn">
                    <h3 className="text-lg">
                      Can I wait until my regular appointment for treatment?
                    </h3>
                  </AccordionTrigger>
                  <AccordionContent className="faq-ans">
                    <p>
                      Delaying care can make the problem worse. Quick treatment often means less pain, lower costs, and a better chance of saving your tooth.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="q3" className="faq-acc">
                  <AccordionTrigger className="faq-qn">
                    <h3 className="text-lg">
                      What if I break or chip a tooth?
                    </h3>
                  </AccordionTrigger>
                  <AccordionContent className="faq-ans">
                    <p>
                      Rinse your mouth with warm water and use a cold compress to reduce swelling. Save any broken pieces and bring them to your appointment.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="q4" className="faq-acc">
                  <AccordionTrigger className="faq-qn">
                    <h3 className="text-lg">
                      Do you accept walk-ins for dental emergencies?
                    </h3>
                  </AccordionTrigger>
                  <AccordionContent className="faq-ans">
                    <p>
                      Yes. We do our best to see emergency patients the same day, and walk-ins are welcome during office hours.
                    </p>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>

          <div className="features-section">
            {/* <Fade direction="up" duration={1000}> */}
            <h2 className="features-heading">
              Facing a Dental Emergency in Jersey City?
            </h2>
            <p className="features-description">
              When urgent dental problems arise,{" "}
              <Link
                href="/"
                className="text-primary mr-2 hover:underline font-medium"
              >
                SmileKraft Dental
              </Link>
              is your trusted provider for dental emergencies in Jersey City, NJ. From toothaches and broken teeth to lost restorations, our team delivers same-day care to get you out of pain and back to smiling.
            </p>
            {/* </Fade> */}
          </div>

          <BookCallBtn />
        </div>
      </main>
    </div>
  );
}
