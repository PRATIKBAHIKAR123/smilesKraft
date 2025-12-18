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

export default function KidsAndChildrenPage() {
  const features = [
    {
      icon: "/Images/icons/Immediate Pain Relief.png",
      title: "Preventive & Routine Care",
      description:
        "Keeping kids’ teeth strong and healthy.",
      points: [
        "First dental visits and gentle checkups",
        "Professional cleanings and fluoride treatments",
        "Protective dental sealants for cavity prevention",
        "Education on brushing and flossing habits",
      ],
    },
    {
      icon: "/Images/icons/Smart Treatment Decisions Under Pressure.png",
      title: "Restorative & Corrective Care",
      description:
        "Solutions when problems arise.",
      points: [
        "Tooth-colored fillings for cavities",
        "Early orthodontic evaluations",
        "Space maintainers for proper tooth alignment",
        "Gentle extractions if necessary",
      ],
    },
    {
      icon: "/Images/icons/Serving Harrisburg Nearby Communities.png",
      title: "Accessible Pediatric Dental Care in Jersey City",
      description:
        "Convenient care for busy parents and kids.",
      points: [
        "Same-day emergency appointments available",
        "Evening and weekend scheduling options",
        "Insurance-friendly practice with financing available",
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
              <h1>Children’s Dentistry in Jersey City, NJ </h1>
            </Fade>
            <Fade direction="down" duration={1000}>
              <h2 className="text-center">
                SmileKraft Dental | Pediatric Dental Care Near You
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
                    src="/Images/kids-dentistry.webp"
                    alt="Kids & Children Dentistry at SmileKraft Dental in Jersey City"
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
                Kids & Children’s Dentistry
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold">
                What to Know About Children’s Dentistry
              </h2>
              <p>
                Good oral health starts early, and at
                <Link
                  href="/service-areas/mcginley-square-nj-dentist-near-you"
                  className="text-primary ml-2 hover:underline font-medium"
                >
                  SmileKraft Dental,
                </Link>{" "}
                 we make dental care for kids a positive, stress-free experience. Our team specializes in children’s dentistry in Jersey City, offering everything from first checkups and preventive treatments to gentle emergency care when needed. By building healthy habits early, we help kids grow up with strong teeth, healthy gums, and confident smiles.,{" "}
                
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
                If you’re searching for a trusted “kids dentist near me,” SmileKraft Dental is here to care for your little one.
              </p>
              {/* </Fade> */}
            </div>
          </div>
          <div className="wcu-section">
            <div className="wcu-text-section">
              {/* <Fade cascade direction="up" delay={1000} duration={600}> */}
              <div className="wcu-title">
                <h2>Why Choose SmileKraft Dental for Children’s Dentistry</h2>
              </div>
              <div className="wcu-points-section">
                <ul className="wcu-points">
                  <li>
                    <h3 className="service-point-title">
                      <CheckCircle className="service-point-icon" /> Experienced Pediatric-Friendly Dental Team
                    </h3>
                  </li>
                  <li>
                    <h3 className="service-point-title">
                      <CheckCircle className="service-point-icon" /> Gentle Techniques to Keep Kids Comfortable
                    </h3>
                  </li>
                  <li>
                    <h3 className="service-point-title">
                      <CheckCircle className="service-point-icon" /> Preventive Care Focused on Long-Term Health
                    </h3>
                  </li>
                  <li>
                    <h3 className="service-point-title">
                      <CheckCircle className="service-point-icon" /> Flexible Scheduling for Busy Families
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
              Caring Dentistry for Growing Smiles
            </h2>
            <p className="features-description">
              From toddlers to teens, children have unique dental needs that change as they grow. At SmileKraft Dental, we offer comprehensive pediatric dental services to protect their smiles at every stage. Our child-friendly environment ensures every visit feels welcoming and worry-free.
             
            </p>
            <p className="features-description">
              Here’s What Makes Our Children’s Dentistry Special:
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
            <h2 className="faq-heading">Children’s Dentistry FAQs</h2>
            <div className="faq-acc-container">
              <Accordion type="single" className="w-full space-y-5">
                <AccordionItem value="q1" className="faq-acc">
                  <AccordionTrigger className="faq-qn">
                    <h3 className="text-lg">
                      Why are baby teeth important if they eventually fall out?
                    </h3>
                  </AccordionTrigger>
                  <AccordionContent className="faq-ans">
                    <p>
                      Baby teeth guide permanent teeth into place and are essential for chewing, speaking, and jaw development. Keeping them healthy prevents future issues.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="q2" className="faq-acc">
                  <AccordionTrigger className="faq-qn">
                    <h3 className="text-lg">
                      What treatments help prevent cavities in children?
                    </h3>
                  </AccordionTrigger>
                  <AccordionContent className="faq-ans">
                    <p>
                      Preventive options like fluoride treatments and dental sealants protect against decay and are highly recommended for kids.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="q3" className="faq-acc">
                  <AccordionTrigger className="faq-qn">
                    <h3 className="text-lg">
                      How can I prepare my child for their dental visit?
                    </h3>
                  </AccordionTrigger>
                  <AccordionContent className="faq-ans">
                    <p>
                      Talking positively about the dentist, reading fun storybooks about dental visits, and scheduling morning appointments often help kids feel more relaxed.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="q4" className="faq-acc">
                  <AccordionTrigger className="faq-qn">
                    <h3 className="text-lg">
                      Do you offer special care for kids with unique needs?
                    </h3>
                  </AccordionTrigger>
                  <AccordionContent className="faq-ans">
                    <p>
                      Yes - our team is experienced in caring for children with different needs and provides a calm, supportive environment for every child.
                    </p>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>

          <div className="features-section">
            {/* <Fade direction="up" duration={1000}> */}
            <h2 className="features-heading">
              Want the Best Start for Your Child’s Smile in Jersey City?
            </h2>
            <p className="features-description">
              At SmileKraft Dental, we make children’s dentistry in Jersey City, NJ a positive experience for kids and parents alike. From preventive checkups to gentle treatments, we’re here to keep your child’s smile healthy and bright.
            </p>
            {/* </Fade> */}
          </div>

          <BookCallBtn />
        </div>
      </main>
    </div>
  );
}
