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

export default function ToothExtractionPage() {
  const features = [
    {
      icon: "/Images/icons/tooth-extraction.png",
      title: "Comprehensive Extraction Services",
      description:
        "We perform a wide range of tooth removal procedures.",
      points: [
        "Simple extractions for decayed or broken teeth",
        "Wisdom teeth removal for teens and adults",
        "Surgical extractions for impacted teeth",
        "Removal of teeth before orthodontic treatment",
      ],
    },
    {
      icon: "/Images/icons/Smart Treatment Decisions Under Pressure.png",
      title: "Comfort-First Care",
      description:
        "Your safety and comfort are always our priority.",
      points: [
        "Local anesthesia and sedation available",
        "Gentle techniques to minimize discomfort",
        "Detailed aftercare instructions for healing",
        "Supportive team for patients of all ages",
      ],
    },
    {
      icon: "/Images/icons/Serving Harrisburg Nearby Communities.png",
      title: "Accessible Tooth Extractions in Jersey City",
      description:
        "We make it easy to receive the care you need.",
      points: [
        "Same-day emergency appointments available",
        "Evening and weekend scheduling options",
        "Insurance-friendly office with payment plans",
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
              <h1>Tooth Extractions in Jersey City, NJ</h1>
            </Fade>
            <Fade direction="down" duration={1000}>
              <h2 className="text-center">
                SmileKraft Dental | Gentle Tooth Removal Near You{" "}
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
                    src="/Images/tooth-extraction.webp"
                    alt="Tooth extractions at SmileKraft Dental in Jersey City"
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
              <div className="desc-text-subtitle">Tooth Extractions</div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold">
                {" "}
                What to Know About Tooth Extractions
              </h2>
              <p>
                Sometimes a tooth needs to be removed to protect your overall health. At{" "}
                <Link
                  href="/services/perio-protect-jerseycity-nj"
                  className="text-primary mr-2 hover:underline font-medium"
                >
                  SmileKraft Dental
                </Link>
                , we provide safe, comfortable tooth extractions for children, teens, and adults. Whether it’s a severely decayed tooth, a broken tooth beyond repair, or problematic
                {" "}
                <Link
                  href="/services/wisdome-teeth-removal-maplewood-nj"
                  className="text-primary mr-2 hover:underline font-medium"
                >
                  wisdom teeth
                </Link>
                our team ensures the procedure is as painless and stress-free as possible.{" "}
              </p>
              <p>
                We proudly serve patients in <Link
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
                If you’re searching for “tooth extractions near me” in Jersey City, SmileKraft Dental offers expert care with your comfort in mind.
              </p>
              {/* </Fade> */}
            </div>
          </div>
          <div className="wcu-section">
            <div className="wcu-text-section">
              {/* <Fade cascade direction="up" delay={1000} duration={600}> */}
              <div className="wcu-title">
                <h2>
                  Why Choose SmileKraft Dental for Tooth Extractions
                </h2>
              </div>
              <div className="wcu-points-section">
                <ul className="wcu-points">
                  <li>
                    <h3 className="service-point-title">
                      <CheckCircle className="service-point-icon" /> Skilled Dentists with Gentle Techniques
                    </h3>
                  </li>
                  <li>
                    <h3 className="service-point-title">
                      <CheckCircle className="service-point-icon" /> Sedation & Anesthesia Options for Comfort
                    </h3>
                  </li>
                  <li>
                    <h3 className="service-point-title">
                      <CheckCircle className="service-point-icon" /> Affordable Treatment with Insurance Accepted
                    </h3>
                  </li>
                  <li>
                    <h3 className="service-point-title">
                      <CheckCircle className="service-point-icon" /> Same-Day Appointments for Urgent Extractions
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
              Safe, Stress-Free Tooth Removal{" "}
            </h2>
            <p className="features-description">
              Tooth extractions don’t have to be overwhelming. At SmileKraft Dental, we combine modern technology with a compassionate approach to make the experience simple and comfortable. From routine extractions to surgical wisdom teeth removal, we tailor every procedure to your needs.
              
            </p>
            <p className="features-description">
              Here’s What Makes Our Tooth Extractions Different:
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
            <h2 className="faq-heading">Tooth Extraction FAQs</h2>
            <div className="faq-acc-container">
              <Accordion type="single" className="w-full space-y-5">
                <AccordionItem value="q1" className="faq-acc">
                  <AccordionTrigger className="faq-qn">
                    <h3 className="text-lg">When is a tooth extraction necessary?</h3>
                  </AccordionTrigger>
                  <AccordionContent className="faq-ans">
                    <p>
                      Extractions may be needed for severe decay, infection, trauma, or to make space for orthodontic treatment.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="q2" className="faq-acc">
                  <AccordionTrigger className="faq-qn">
                    <h3 className="text-lg">
                      How long does recovery take?
                    </h3>
                  </AccordionTrigger>
                  <AccordionContent className="faq-ans">
                    <p>
                      Most patients heal within a few days to a week, depending on the complexity of the procedure.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="q3" className="faq-acc">
                  <AccordionTrigger className="faq-qn">
                    <h3 className="text-lg">
                      Do tooth extractions hurt?
                    </h3>
                  </AccordionTrigger>
                  <AccordionContent className="faq-ans">
                    <p>
                      With anesthesia and sedation, most patients feel little to no pain during the procedure. Mild soreness afterward is normal and manageable.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="q4" className="faq-acc">
                  <AccordionTrigger className="faq-qn">
                    <h3 className="text-lg">
                      Can wisdom teeth cause problems if not removed?
                    </h3>
                  </AccordionTrigger>
                  <AccordionContent className="faq-ans">
                    <p>
                      Yes. Impacted or overcrowded wisdom teeth can lead to pain, infection, and damage to neighboring teeth if left untreated.
                    </p>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>

          <div className="features-section">
            {/* <Fade direction="up" duration={1000}> */}
            <h2 className="features-heading">
              Ready for Comfortable Tooth Removal in Jersey City?
            </h2>
            <p className="features-description">
              At SmileKraft Dental, we specialize in gentle tooth extractions and wisdom teeth removal for patients of all ages. With advanced techniques, sedation options, and personalized aftercare, we make the process smooth and worry-free.
            </p>
            {/* </Fade> */}
          </div>

          <BookCallBtn />
        </div>
      </main>
    </div>
  );
}
