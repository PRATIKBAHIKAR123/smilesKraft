import type { Metadata } from "next";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import React from "react";
import { Fade, Zoom } from "react-awesome-reveal";
import BookCallBtn from "../book-call-btn";
import { CheckCircle } from "lucide-react";
import { generateServiceMetadata } from "@/lib/metadata";
import Link from "next/link";

export const metadata: Metadata = generateServiceMetadata(
  "cosmetic-dentistry-jerseycity-nj",
  "/Images/Cosmetic Dentistry.webp"
);

export default function CosmeticDentistryPage() {
  const features = [
    {
      icon: "/Images/icons/teeth-whitening.png",
      title: "Wide Range of Smile Enhancements",
      description:
        "Our cosmetic solutions are designed for every need, big or small.",
      points: [
        "Professional in-office & take-home whitening options",
        
        "Custom porcelain veneers for dramatic transformations",
        "Cosmetic bonding for chips, cracks, and gaps",
        "Comprehensive smile makeover plans",
      ],
    },
    {
      icon: "/Images/icons/Smart Treatment Decisions Under Pressure.png",
      title: "Natural, Long-Lasting Beauty",
      description:
        "We focus on delivering results that are as durable as they are beautiful.",
      points: [
        "High-quality, tooth-colored materials",
        "Custom restorations for a seamless look",
        "Modern techniques for improved longevity",
        "Smiles designed to look and feel natural",
      ],
    },
    {
      icon: "/Images/icons/Serving Harrisburg Nearby Communities.png",
      title: "Accessible Cosmetic Dentistry in Jersey City",
      description:
        "We make achieving your dream smile simple and stress-free.",
      points: [
        "Flexible appointments, including evenings and weekends",
        "Financing options to fit your budget",
        "Compassionate, welcoming team environment",
        "Serving Bergen-Lafayette, McGinley Square, Greenville, Journal Square, and The Heights"
      ],
    },
  ];

  return (
    <div className="flex min-h-screen bg-gray-50">
      <main className="details-page-container">
        <div className="details-page">
          <div className="details-page-header-section">
            <Fade direction="up" duration={1000}>
              <h1>Cosmetic Dental Services in Jersey City, NJ</h1>
            </Fade>
            <Fade direction="down" duration={1000}>
              <h2 className="text-center">
                SmileKraft Dental | Trusted Cosmetic Dentist Near You{" "}
              </h2>
            </Fade>
            {/* <div className='flex items-center justify-center gap-2'> <Link href={'/'} className='font-medium'>Home </Link><span><ChevronRight/></span> <span className='text-white/80'>Emergency Dentistry</span></div> */}
          </div>
          <div className="details-page-desc-section">
            {/* Image Section */}
            <div className="image_section">
              <div className="image_section-cover">
                <div className="main-image">
                  <img
                    src="/Images/cosmetic-dentistry.webp"
                    alt="Cosmetic Dentistry at SmileKraft Dental in Jersey City"
                  />
                </div>
                {/* <img
              src="/Images/s1.webp"
              className="overlay-image"
              alt="Overlay"
            /> */}
              </div>
            </div>

            {/* Text Section with Fade-in after delay */}
            <div className="desc-text-section">
              <div className="desc-text-subtitle">Cosmetic Dentistry</div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold">
                What to Know About Cosmetic Dentistry
              </h2>
              <p>
                Your smile is one of the first things people notice - and cosmetic dentistry can help you make a lasting impression. At{" "}
                <Link
                  href="/"
                  className="text-primary mr-2 hover:underline font-medium"
                >
                  SmileKraft Dental,
                </Link>
                we provide customized treatments that improve the color, shape, and overall appearance of your teeth. From quick enhancements like whitening to full{" "}
                <Link
                  href="/services/teeth-whitening-and-veneers-jerseycity-nj"
                  className="text-primary hover:underline font-medium"
                >
                  smile makeovers
                </Link>{" "}
                with veneers or bonding, our team uses modern techniques to deliver results that look natural and feel comfortable.{" "}
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
                If you’ve been searching for a trusted “cosmetic dentist near me” in Jersey City, SmileKraft Dental is your go-to destination for personalized smile transformations.
              </p>
            </div>
          </div>
          <div className="wcu-section">
            <div className="wcu-text-section">
              {/* <div className="wcu-subtitle">Top Reasons</div> */}
              <div className="wcu-title">
                <h2>
                  Why Choose SmileKraft Dental for Cosmetic Dentistry
                </h2>
              </div>
              <div className="wcu-points-section">
                <ul className="wcu-points">
                  <li>
                    <h3 className="service-point-title">
                      <CheckCircle className="service-point-icon" />{" "}
                      Skilled Dentists with an Eye for Detail
                    </h3>
                  </li>
                  <li>
                    <h3 className="service-point-title">
                      <CheckCircle className="service-point-icon" /> Modern Technology for Natural, Lasting Results
                    </h3>
                  </li>
                  <li>
                    <h3 className="service-point-title">
                      <CheckCircle className="service-point-icon" />{" "}
                      Affordable Options with Flexible Financing
                    </h3>
                  </li>
                  <li>
                    <h3 className="service-point-title">
                      <CheckCircle className="service-point-icon" /> Smile Enhancements Tailored to You
                    </h3>
                  </li>
                  <li>
                    <h3 className="service-point-title">
                      <CheckCircle className="service-point-icon" /> Convenient Location Serving the Jersey City Community
                    </h3>
                  </li>
                </ul>
              </div>
            </div>
            <div className="wcu-img-section">
              <Zoom cascade damping={0.3} duration={800}>
                <img
                  className="bdr-doctor-img"
                  src="/Images/top-reasons.webp"
                  alt="Expert Dentist at Tulip Dental Maplewood"
                />
              </Zoom>
            </div>
          </div>
          <div className="features-section">
            <h2 className="features-heading">
              Cosmetic Care That Redefines Your Smile
            </h2>
            <p className="features-description">
              Cosmetic dentistry is more than just fixing imperfections - it’s about creating balance, harmony, and confidence. At SmileKraft Dental, we blend artistry with advanced techniques to ensure your new smile looks natural, feels comfortable, and lasts for years.
              
            </p>
            <p className="features-description">
Here’s What Sets Our Cosmetic Dentistry Apart:
            </p>

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
            <h2 className="faq-heading">Cosmetic Dentistry FAQs</h2>
            <div className="faq-acc-container">
              <Accordion type="single" className="w-full space-y-5">
                <AccordionItem value="q1" className="faq-acc">
                  <AccordionTrigger className="faq-qn">
                    <h3 className="text-lg">What treatments are considered cosmetic dentistry?</h3>
                  </AccordionTrigger>
                  <AccordionContent className="faq-ans">
                    <p>
                      Services include teeth whitening, veneers, bonding, crowns, Invisalign®, and full smile makeovers.{" "}
                      
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="q2" className="faq-acc">
                  <AccordionTrigger className="faq-qn">
                    <h3 className="text-lg">
                      Will my cosmetic dentistry look natural?
                    </h3>
                  </AccordionTrigger>
                  <AccordionContent className="faq-ans">
                    <p>
                      Yes. We use advanced materials and techniques to ensure results that complement your natural teeth.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="q3" className="faq-acc">
                  <AccordionTrigger className="faq-qn">
                    <h3 className="text-lg">How long do cosmetic treatments last?</h3>
                  </AccordionTrigger>
                  <AccordionContent className="faq-ans">
                    <p>
                      With proper care, veneers and crowns can last over 10 years, while whitening results may require occasional touch-ups.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="q4" className="faq-acc">
                  <AccordionTrigger className="faq-qn">
                    <h3 className="text-lg">
                      Is cosmetic dentistry affordable?
                    </h3>
                  </AccordionTrigger>
                  <AccordionContent className="faq-ans">
                    <p>
                      We offer a range of options for every budget and flexible financing to make treatment accessible.
                    </p>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>

          <div className="features-section">
            <h2 className="features-heading">
              Ready for a Smile Makeover in Jersey City?
            </h2>
            <p className="features-description">
              Transform your smile with SmileKraft Dental - your trusted choice for cosmetic dentistry in Jersey City, NJ. Whether you want a brighter smile, straighter teeth, or a full makeover, our team combines artistry and expertise to bring your vision to life.
            </p>
          </div>

          <BookCallBtn />
        </div>
      </main>
    </div>
  );
}
