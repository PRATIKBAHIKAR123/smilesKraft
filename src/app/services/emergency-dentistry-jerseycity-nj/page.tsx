import type { Metadata } from "next";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import React from "react";
import Reveal, { Fade, Zoom } from "react-awesome-reveal";
import ServiceSidebar from "@/components/ServiceSidebar";
import { CheckCircle } from "lucide-react";
import BookCallBtn from "../book-call-btn";
import { generateServiceMetadata } from "@/lib/metadata";
import Link from "next/link";

export const metadata: Metadata = generateServiceMetadata(
  "emergency-dentistry-maplewood-nj",
  "/Images/emergency-dentistry.webp"
);

export default function EmergencyDentistryPage() {
  const features = [
    {
      icon: "/Images/icons/Immediate Pain Relief.png",
      title: "Comprehensive Emergency Services",
      description:
        "From sudden toothaches to dental trauma, we manage a wide range of urgent conditions.",
      points: [
        "Treatment for cracked or knocked-out teeth",
        "Emergency repair of crowns, fillings & dentures",
        "Infection and abscess treatment",
        "Relief for orthodontic emergencies (braces & wires)",
      ],
    },
    {
      icon: "/Images/icons/Smart Treatment Decisions Under Pressure.png",
      title: "Comfort-Focused Emergency Dentistry",
      description:
        "We combine advanced care with a gentle touch to make emergencies less stressful.",
      points: [
        "Pain management tailored to each patient",
        "Sedation options for anxiety or severe cases",
        "Family-friendly care for kids and adults",
        "Supportive team focused on reassurance",
      ],
    },
    {
      icon: "/Images/icons/Serving Harrisburg Nearby Communities.png",
      title: "Accessible Emergency Dental Care in Jersey City",
      description: "Our convenient location makes urgent care easy to access when every minute matters.",
      points: [
        "Same-day scheduling & walk-in availability",
        "Evening and weekend flexibility",
        "Insurance-friendly office with financing options",
        "Serving Bergen-Lafayette (07304, 07305), McGinley Square (07304, 07306, 07302), Greenville (07305), Journal Square (07306), and The Heights (07306, 07307)"
        
      ],
    },
  ];

  return (
    <div className="flex min-h-screen bg-gray-50">
      <div className="details-page-container">
        <div className="details-page">
          <div className="details-page-header-section">
            <Fade direction="up" duration={1000}>
              <h1>Emergency Dental Services in Jersey City, NJ</h1>
            </Fade>
            <Fade direction="down" duration={1000}>
              <h2 className="text-center">
                SmileKraft Dental | Urgent Dental Services Near You{" "}
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
                    src="/Images/emergency-dentistry.webp"
                    alt="Emergency Dentistry at SmileKraft Dental in Jersey City"
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
              <div className="desc-text-subtitle">Emergency Dentistry</div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold">
                What to Know About Emergency Dentistry
              </h2>
              <p>
                Dental emergencies can strike at any time - whether it’s a severe toothache, a fractured crown, or an injury. At{" "}
                <Link
                  href="/"
                  className="text-primary hover:underline font-bold"
                >
                  SmileKraft Dental
                </Link>{" "}
                your trusted <strong className="text-primary">emergency dentist in Jersey City, NJ</strong>
                , we understand the urgency. That’s why we provide <strong className="text-primary">
                <Link
                  href="/services/painless-dental-treatment-jerseycity-nj"
                  className="text-primary hover:underline font-bold"
                >
                  same-day
                </Link>{" "}
                dental care
                </strong>{" "}
                with a gentle, patient-first approach. From children with sports accidents to adults facing unexpected pain, our team is ready to deliver fast, effective treatment.{" "}
              </p>
              <p>
                We proudly serve <Link
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
                >The Heights (07306, 07307)</Link>{" "} If you’re searching for a reliable <strong>“emergency dentist near me”</strong> in Jersey City, SmileKraft Dental is close by.{" "}
              </p>
            </div>
          </div>

          <div className="wcu-section">
            <div className="wcu-text-section">
              <div className="wcu-title">
                <h2>
                  Why Choose SmileKraft Dental for Emergency Dentistry
                </h2>
              </div>
              <div className="wcu-points-section">
                <ul className="wcu-points">
                  <li>
                    <h3 className="service-point-title">
                      <CheckCircle className="service-point-icon" />
                      Experienced Team Focused on Patient Comfort
                    </h3>
                  </li>

                  <li>
                    <h3 className="service-point-title">
                      <CheckCircle className="service-point-icon" /> Advanced Tools for Quick Diagnosis & Treatment
                    </h3>
                  </li>
                  <li>
                    <h3 className="service-point-title">
                      <CheckCircle className="service-point-icon" /> Insurance Accepted with Flexible Financing Options
                    </h3>
                  </li>
                  <li>
                    <h3 className="service-point-title">
                      <CheckCircle className="service-point-icon" /> Same-Day Emergency Visits & Walk-In Care
                    </h3>
                  </li>
                  <li>
                    <h3 className="service-point-title">
                      <CheckCircle className="service-point-icon" /> Easy-to-Reach Jersey City Location
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
              Fast Relief & Trusted Care When Dental Emergencies Happen{" "}
            </h2>
            <p className="features-description text-center">
              A{" "}
              <Link
                href="/"
                className="text-primary hover:underline font-medium"
              >
                dental emergency
              </Link>
              doesn’t just cause pain - it can interrupt your daily life and impact your health. At SmileKraft Dental, we act quickly to relieve discomfort and protect your smile. From the moment you arrive, our team focuses on your comfort, delivering treatment that is both effective and compassionate.
              <br />
            </p>
            <p className="features-description">
              Here’s What Makes Our Emergency Dentistry Different:
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
            <h2 className="faq-heading">Emergency Dentistry FAQs </h2>
            <div className="faq-acc-container">
              <Accordion type="single" collapsible className="w-full space-y-6">
                <AccordionItem value="q1" className="faq-acc">
                  <AccordionTrigger className="faq-qn rounded-md">
                    <h3 className="text-lg">
                      {" "}
                      Do you take walk-ins for dental emergencies?
                    </h3>
                  </AccordionTrigger>
                  <AccordionContent className="faq-ans ">
                    Yes - we welcome walk-ins and do our best to provide same-day care.{" "}
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="q2" className="faq-acc">
                  <AccordionTrigger className="faq-qn rounded-md">
                    <h3 className="text-lg">
                      {" "}
                      Can a toothache be an emergency?{" "}
                    </h3>
                  </AccordionTrigger>
                  <AccordionContent className="faq-ans">
                    Absolutely. Severe or persistent pain is a sign you should see an emergency dentist right away.{" "}
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="q3" className="faq-acc">
                  <AccordionTrigger className="faq-qn rounded-md">
                    <h3 className="text-lg">
                      {" "}
                     What if I break or lose a crown?
                    </h3>
                  </AccordionTrigger>
                  <AccordionContent className="faq-ans">
                    <p className="mb-2">
                      Save the crown and bring it with you - we can repair or replace it quickly.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="q4" className="faq-acc">
                  <AccordionTrigger className="faq-qn rounded-md">
                    <h3 className="text-lg">
                      {" "}
                      Do you treat kids during emergencies?
                    </h3>
                  </AccordionTrigger>
                  <AccordionContent className="faq-ans">
                    Yes, we provide gentle emergency dental care for children, teens, and adults.{" "}
                    
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
          {/* Call to Action Section */}
        </div>
        <div className="features-section">
          <h2 className="features-heading">
            Looking for an Emergency Dentist in Jersey City?
          </h2>
          <p className="features-description">
            
            When a dental emergency strikes, SmileKraft Dental is here with trusted emergency dentistry in Jersey City, NJ. Our team provides same-day emergency care to relieve pain and restore your smile quickly. Walk-ins are welcome, and we make every effort to treat you without delay.{" "}
          </p>
          <BookCallBtn />
        </div>
      </div>
    </div>
  );
}
