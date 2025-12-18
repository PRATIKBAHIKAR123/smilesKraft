import type { Metadata } from "next";
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
import { generateServiceMetadata } from "@/lib/metadata";

export const metadata: Metadata = generateServiceMetadata(
  "root-canal-treatment-maplewood-nj",
  "/Images/root-canal.webp"
);

export default function RootCanalClient() {
  const features = [
    {
      icon: "/Images/icons/Immediate Pain Relief.png",
      title: "Effective Pain Relief & Infection Removal",
      description:
        "We focus on eliminating discomfort quickly and addressing the root cause of infection.",
      points: [
        "Elimination of infected pulp",
        "Same-day emergency availability",
        "Sedation options for nervous patients",
        "Treatment for both children and adults",
      ],
    },
    {
      icon: "/Images/icons/tooth-implant.png",
      title: "Long-Lasting Tooth Protection",
      description:
        "Our restorations are designed to strengthen and protect your natural tooth for years to come.",
      points: [
        "Sealing the tooth to prevent reinfection",
        " Natural-looking crowns and restorations",
        "Advanced materials for durability",
        "Focus on preserving natural teeth whenever possible",
      ],
    },
    {
      icon: "/Images/icons/Serving Harrisburg Nearby Communities.png",
      title: "Trusted Root Canal Dentist in Jersey City",
      description:
        "Patients choose SmileKraft Dental for root canal therapy because of our expertise and patient-focused approach.",
      points: [
        "Highly trained dentists with years of endodontic experience",
        "Gentle techniques to make treatment comfortable",
        "Convenient scheduling, including same-day visits for urgent cases",
        "A commitment to preserving your natural smile with long-term results"

      ],
    },
  ];
  return (
    <div className="flex min-h-screen bg-gray-50">
      <main className="details-page-container">
        <div className="details-page">
          <div className="details-page-header-section">
            <Fade direction="up" duration={1000}>
              <h1>Root Canal Therapy in Jersey City, NJ</h1>
            </Fade>
            <Fade direction="down" duration={1000}>
              <h2 className="text-center">
                SmileKraft Dental | Gentle Endodontic Care Near You {" "}
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
                    src="/Images/root-canal.webp"
                    alt="Root Canal Specialists at SmileKraft Dental in Jersey City"
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
              <div className="desc-text-subtitle">Root Canal</div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold">
                What to Know About Root Canal Treatment
              </h2>
              <p>
                A root canal may sound intimidating, but at SmileKraft Dental, it’s a simple, effective way to save your natural tooth. This treatment removes infection from inside the tooth, relieves pain, and restores function. Using advanced technology and a gentle approach, our team ensures the procedure is comfortable and stress-free.{" "}
                
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
                If you’ve been searching for a trusted “root canal dentist near me” in Jersey City, SmileKraft Dental is here to help.
              </p>
              {/* </Fade> */}
            </div>
          </div>
          <div className="wcu-section">
            <div className="wcu-text-section">
              {/* <Fade cascade direction="up" delay={1000} duration={600}> */}
              <div className="wcu-title">
                <h2>
                  Why Choose SmileKraft Dental for Root Canal Therapy
                </h2>
              </div>
              <div className="wcu-points-section">
                <ul className="wcu-points">
                  <li>
                    <h3 className="service-point-title">
                      <CheckCircle className="service-point-icon" /> 
                      Gentle, Patient-Focused Care
                    </h3>
                  </li>
                  <li>
                    <h3 className="service-point-title">
                      <CheckCircle className="service-point-icon" /> 
                      Advanced Equipment for Precise Treatment 
                    </h3>
                  </li>
                  <li>
                    <h3 className="service-point-title">
                      <CheckCircle className="service-point-icon" /> 
                      Same-Day Appointments for Severe Pain
                    </h3>
                  </li>
                  <li>
                    <h3 className="service-point-title">
                      <CheckCircle className="service-point-icon" /> 
                      Insurance-Friendly with Flexible Financing
                    </h3>
                  </li>
                  <li>
                    <h3 className="service-point-title">
                      <CheckCircle className="service-point-icon" /> 
                      Convenient Location on Martin Luther King Drive
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
              Comfortable, Tooth-Saving Treatment 
            </h2>
            <p className="features-description">
              <Link href="/"
                className="text-primary hover:underline font-medium">Root canals</Link>{" "} not only relieve pain but also protect your tooth from future complications. At
              {" "}<Link href="/"
                className="text-primary hover:underline font-medium">SmileKraft Dental,</Link>{" "}
              we combine advanced techniques with compassionate care to make sure your experience is as smooth as possible.
            </p>
            <p className="features-description">
              Here’s What Makes Our Root Canal Treatment Stand Out:
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
          <p className="p-4">
            Looking for a trusted “root canal specialist near you”? Tulip Dental
            is your go-to destination for expert care and real results.
          </p>
          <div className="faq-section">
            <h2 className="faq-heading">Root Canal Treatment FAQs</h2>
            <div className="faq-acc-container">
              <Accordion type="single" collapsible className="w-full space-y-6">
                <AccordionItem value="q1" className="faq-acc">
                  <AccordionTrigger className="faq-qn rounded-md">
                    <h3 className="text-lg">
                      {" "}
                      Is a root canal painful?{" "}
                    </h3>
                  </AccordionTrigger>
                  <AccordionContent className="faq-ans ">
                    No. With modern anesthesia and gentle techniques, most patients compare a root canal to getting a simple filling.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="q2" className="faq-acc">
                  <AccordionTrigger className="faq-qn rounded-md">
                    <h3 className="text-lg">
                      {" "}
                      How do I know if I need a root canal?{" "}
                    </h3>
                  </AccordionTrigger>
                  <AccordionContent className="faq-ans">
                    
                    <p className="mt-2">
                      Common signs include severe tooth pain, prolonged sensitivity to hot or cold, swelling in the gums, or a tooth that has darkened in color. 
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="q3" className="faq-acc">
                  <AccordionTrigger className="faq-qn rounded-md">
                    <h3 className="text-lg">How many visits does a root canal take?</h3>
                  </AccordionTrigger>
                  <AccordionContent className="faq-ans">
                    In most cases, treatment is completed in one appointment, though more complex cases may require two.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="q4" className="faq-acc">
                  <AccordionTrigger className="faq-qn rounded-md">
                    <h3 className="text-lg">
                      {" "}
                      What should I expect after treatment?{" "}
                    </h3>
                  </AccordionTrigger>
                  <AccordionContent className="faq-ans">
                    Mild soreness is normal for a few days. A crown or restoration is usually placed to protect the tooth and restore full function.
                  </AccordionContent>
                </AccordionItem>

              </Accordion>
            </div>
          </div>

          <div className="features-section">
            {/* <Fade direction="up" duration={1000}> */}
            <h2 className="features-heading">
              Book Your Root Canal Treatment in Jersey City Today
            </h2>
            <p className="features-description">
              If you’ve been searching for a trusted root canal dentist near me in Jersey City, SmileKraft Dental is here to help. Our experienced team provides gentle, effective root canal therapy in Jersey City, NJ to relieve pain, eliminate infection, and save your natural tooth.
            </p>
            {/* </Fade> */}
          </div>
          <BookCallBtn />
        </div>
      </main>
    </div>
  );
}
