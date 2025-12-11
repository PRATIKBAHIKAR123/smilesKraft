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

export default function Page() {
  const features = [
    {
      icon: "/Images/icons/Immediate Pain Relief.png",
      title: "Preventive Monitoring & Early Evaluation",
      description:
        "We closely track wisdom tooth development to prevent future complications before they begin.",
      points: [
        "Digital X-rays to spot impaction early",
        "Teen and young adult evaluations",
        "Personalized timing recommendations",
        "Focus on long-term oral health",
      ],
    },
    {
      icon: "/Images/icons/tooth-extraction.png",
      title: "Gentle & Effective Extractions",
      description:
        "Our experienced dentists use advanced techniques designed to keep the procedure smooth and stress-free.",
      points: [
        "Options for simple and surgical removal",
        "Sedation available for stress-free visits",
        "Modern techniques for faster recovery",
        "Clear post-op guidance and follow-ups",
      ],
    },
    {
      icon: "/Images/icons/Serving Harrisburg Nearby Communities.png",
      title: "Accessible Care for Every Patient",
      description:
        "We make it easy to get the care you need with flexible options for busy schedules and urgent cases.",
      points: [
        "Same-day relief for urgent wisdom tooth pain",
        "Evening and weekend appointment availability",
        "Insurance-friendly and financing options",
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
              <h1>Wisdom Teeth Removal in Jersey City, NJ</h1>
            </Fade>
            <Fade direction="down" duration={1000}>
              <h2 className="text-center">
                SmileKraft Dental | Gentle Wisdom Tooth Extractions Near You
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
                    src="/Images/wisdom-teeth.webp"
                    alt="Wisdom Teeth Removal at SmileKraft Dental in Jersey City"
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
              <div className="desc-text-subtitle">Wisdom Teeth Removal</div>
              <h3 className="desc-text-title">What to Know About Wisdom Teeth </h3>
              <p>
                Wisdom teeth often erupt in the late teens or early twenties, and for many people, they can cause pain, crowding, or infection. At{" "}
                <Link
                  href="/"
                  className="text-primary hover:underline font-medium"
                >
                  SmileKraft Dental
                </Link>,{" "}
                we provide wisdom teeth removal in Jersey City, NJ, offering both simple and surgical{" "}
                <Link
                  href="/tooth-extraction-jerseycity-nj"
                  className="text-primary hover:underline font-medium"
                >
                  extractions 
                </Link>{" "}
                to prevent long-term complications. Our gentle approach and modern technology ensure treatment is as comfortable as possible.
              </p>
              <p>
                We proudly serve patients from{" "}
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
                If you’re searching for “wisdom tooth extraction near me,” SmileKraft Dental is here to help.
              </p>
              {/* </Fade> */}
            </div>
          </div>
          <div className="wcu-section">
            <div className="wcu-text-section">
              {/* <Fade cascade direction="up" delay={1000} duration={600}> */}
              <div className="wcu-title">
                <h2>Why Choose SmileKraft Dental for Wisdom Teeth Removal</h2>
              </div>
              <div className="wcu-points-section">
                <ul className="wcu-points">
                  <li>
                    <h3 className="service-point-title">
                      <CheckCircle className="service-point-icon" /> Skilled Team with Surgical Expertise
                    </h3>
                  </li>
                  <li>
                    <h3 className="service-point-title">
                      <CheckCircle className="service-point-icon" /> Modern Imaging for Accurate Diagnosis
                    </h3>
                  </li>
                  <li>
                    <h3 className="service-point-title">
                      <CheckCircle className="service-point-icon" /> Sedation Options for Stress-Free Treatment
                    </h3>
                  </li>
                  <li>
                    <h3 className="service-point-title">
                      <CheckCircle className="service-point-icon" /> Insurance Accepted with Flexible Payment Plans
                    </h3>
                  </li>
                  <li>
                    <h3 className="service-point-title">
                      <CheckCircle className="service-point-icon" /> 
                      Convenient Jersey City Location
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
            <h2 className="features-heading">Comfortable Care for Problematic Wisdom Tooth </h2>
            <p className="features-description">
              Wisdom teeth can lead to serious issues if left untreated, including swelling, infections, and shifting of nearby teeth. At SmileKraft Dental, we take a proactive approach to prevent discomfort and protect your overall oral health.
              
            </p>
            <p className="features-description">
              Here’s What Makes Our Wisdom Teeth Services Different:
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
            <h2 className="faq-heading">Wisdom Teeth FAQs</h2>
            <div className="faq-acc-container">
              <Accordion type="single" className="w-full space-y-5">
                <AccordionItem value="q1" className="faq-acc">
                  <AccordionTrigger className="faq-qn">
                    <h3 className="text-lg">
                      Do all wisdom teeth need to be removed?
                    </h3>
                  </AccordionTrigger>
                  <AccordionContent className="faq-ans">
                    <p>
                      Not always. Some wisdom teeth come in healthy and aligned, but many are impacted or crowd other teeth. We evaluate each case individually.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="q2" className="faq-acc">
                  <AccordionTrigger className="faq-qn">
                    <h3 className="text-lg">
                      Can wisdom teeth affect other teeth if not removed?
                    </h3>
                  </AccordionTrigger>
                  <AccordionContent className="faq-ans">
                    <p>
                      Yes. Impacted wisdom teeth can push against nearby teeth, leading to misalignment, decay, or gum issues.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="q3" className="faq-acc">
                  <AccordionTrigger className="faq-qn">
                    <h3 className="text-lg">
                      What foods can I eat after wisdom tooth extraction?
                    </h3>
                  </AccordionTrigger>
                  <AccordionContent className="faq-ans">
                    <p>
                      Stick to soft foods like yogurt, smoothies, and soups for the first few days. Avoid crunchy, spicy, or hot foods until healing improves.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="q4" className="faq-acc">
                  <AccordionTrigger className="faq-qn">
                    <h3 className="text-lg">
                      How do I know if my wisdom teeth are impacted?
                    </h3>
                  </AccordionTrigger>
                  <AccordionContent className="faq-ans">
                    <p>
                      Common signs include jaw stiffness, swelling, repeated infections, or pain in the back of your mouth. A dental X-ray confirms impaction.
                    </p>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>

          <div className="features-section">
            {/* <Fade direction="up" duration={1000}> */}
            <h2 className="features-heading">
              Looking for Stress-Free Wisdom Tooth Care You Can Trust?
            </h2>
            <p className="features-description">
              If wisdom teeth are causing pain, swelling, or crowding, SmileKraft Dental is here with trusted wisdom teeth removal in Jersey City, NJ. Our caring team provides convenient, effective treatment designed to keep you comfortable while protecting your smile.
            </p>
            {/*</Fade> */}
          </div>

          <BookCallBtn />
        </div>
      </main>
    </div>
  );
}
