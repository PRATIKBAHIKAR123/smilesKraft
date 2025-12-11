"use client";

import React, { useState } from "react";
import { CheckCircle } from "lucide-react";
import { Bounce, Fade, Zoom } from "react-awesome-reveal";
import BookCallBtnForServiceAreas from "@/app/services/book-call-btn-for-serviceAreas";
import { useWorkingHours } from "@/lib/hooks/useWorkingHours";
import Link from "next/link";

export default function IrvingtonServiceAreaClient() {
  const { workingHours, loading } = useWorkingHours();
  const locations = [
    {
      id: "irvington",
      name: "Bergen-Lafayette, NJ",
      address: "543 Martin Luther King Drive, Jersey City NJ 07304",
      phone: "973-671-5500",
      hours: [
        "Monday: 9:00 AM - 6:00 PM",
        "Tuesday: 9:00 AM - 6:00 PM",
        "Wednesday: 9:00 AM - 6:00 PM",
        "Thursday: 9:00 AM - 6:00 PM",
        "Friday: 9:00 AM - 6:00 PM",
        "Saturday: 9:00 AM - 3:30 PM",
        "Sunday: Closed",
      ],
      mapUrl:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d189.00480459885054!2d-74.07432869599977!3d40.716324178536574!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c250d85405807f%3A0xa748b8744dce927a!2s543%20Martin%20Luther%20King%20Dr%2C%20Jersey%20City%2C%20NJ%2007304%2C%20USA!5e0!3m2!1sen!2sin!4v1764705756736!5m2!1sen!2sin",
    },
  ];

  const [selected] = useState(locations[0]);

  return (
    <div>
      {/* Header Section */}
      <div className="details-page-header-section ">
        <h1>Quality Dental Care for Families in Bergen-Lafayette, Jersey City 07304, 07305</h1>
      </div>

      {/* Main Content Section */}
      <div className="max-w-7xl mx-auto px-4 py-12 flex flex-col gap-16">
        {/* Top Section: Image + Intro */}
        <div className="details-page-desc-section">
          {/* Image Section */}
          <div className="image_section">
            <div className="image_section-cover">
              {/* <Zoom cascade damping={0.3} duration={800}> */}
              <div className="main-image">
                <img
                  src="/Images/Bergen-Lafayette-1.webp"
                  alt="Family & Cosmetic Dentistry in Bergen-Lafayette NJ"
                  className="rounded-xl"
                />
              </div>
              {/* </Zoom> */}
            </div>
          </div>

          {/* Text Section with Fade-in after delay */}
          <div className="desc-text-section">
            {/* <Fade cascade direction="up" delay={1000} duration={600}> */}
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold">
              Personalized Dental Care in Bergen-Lafayette | SmileKraft Dental | Your Trusted Family & Cosmetic Dentist
            </h2>
            <p>
              At SmileKraft Dental, we proudly deliver modern, patient-focused dental care to the Bergen-Lafayette community in Jersey City, NJ (07304, 07305). Whether you’re searching for a reliable “dentist near me” or a practice that can serve your whole family, our office is here with advanced treatments and a welcoming approach.
            </p>
            <p>
              We care for patients of every age, providing preventive, cosmetic, and restorative dentistry in a comfortable environment designed to make every visit stress-free.
            </p>
            {/* </Fade> */}
          </div>
        </div>

        {/* Comprehensive Dental Care Section */}
        <div className="flex flex-col gap-4 p-6 md:p-0">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold">
            Comprehensive Dental Care for Every Smile
          </h2>
          {/* <Fade cascade direction="up" delay={1000} duration={600}> */}
          <p>
            Our Jersey City dental office is designed with your comfort in mind and equipped with the latest technology to provide efficient, high-quality care. From preventive services to advanced treatments, we offer a full range of dental solutions under one roof:
          </p>

          <ul className="list-disc pl-6 space-y-4 text-sm md:text-lg">
            <li>
              <h3 className="text-lg font-semibold">
                Urgent & Emergency Care
              </h3>
              <p>
                Fast, same-day treatment for dental pain, accidents, and broken restorations.
              </p>
            </li>

            <li>
              <h3 className="text-lg font-semibold">Preventive Services</h3>
              <p>
                Routine checkups, professional cleanings, and personalized care plans to protect long-term oral health.
              </p>
            </li>

            <li>
              <h3 className="text-lg font-semibold">
                Aesthetic & Cosmetic Dentistry
              </h3>
              <p>
                Whitening, veneers, and smile makeover options designed to enhance appearance naturally.
              </p>
            </li>

            <li>
              <h3 className="text-lg font-semibold">
                Restorative Treatments
              </h3>
              <p>
                Strong, functional solutions like crowns, bridges, and dental implants to repair or replace damaged teeth.
              </p>
            </li>

            <li>
              <h3 className="text-lg font-semibold">
                Pediatric & Family Dentistry
              </h3>
              <p>
                Gentle, positive experiences for kids and comprehensive care for patients of all ages.
              </p>
            </li>
          </ul>
          {/* </Fade> */}
        </div>

        <div className="wcu-section">
          <div className="wcu-text-section">
            {/* <Fade cascade direction="up" delay={1000} duration={600}> */}
            <div className="wcu-title">
              <h2>Why Bergen-Lafayette Patients Rely on SmileKraft Dental</h2>
            </div>
            <div className="wcu-desc">
              Families across Bergen-Lafayette (07304, 07305), {" "} <Link
                  href="/service-areas/mcginley-square-nj-dentist-near-you"
                  className="hover:underline font-bold"
                >McGinley Square (07304, 07306),</Link>{" "}
                <Link
                  href="/service-areas/greenville-nj-dentist-near-you"
                  className="hover:underline font-bold"
                >Greenville (07305),</Link>{" "}
                <Link
                  href="/service-areas/journal-square-nj-dentist-near-you"
                  className="hover:underline font-bold"
                >Journal Square (07306),</Link> and <Link
                  href="/service-areas/the-heights-nj-dentist-near-you"
                  className="hover:underline font-bold"
                >The Heights (07306, 07307).</Link>{" "}
                count on us for trusted, high-quality dental care. Here’s why patients choose us again and again:
            </div>
            <div className="wcu-points-section">
              <ul className="wcu-points space-y-3">
                <li className="flex items-start gap-2">
                  <CheckCircle className="service-point-icon mt-1 shrink-0" />
                  <span>Personalized care tailored to your individual needs</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="service-point-icon mt-1 shrink-0" />
                  <span>Modern technology that ensures precise, gentle treatment</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="service-point-icon mt-1 shrink-0" />
                  <span>Appointment times that fit your busy lifestyle</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="service-point-icon mt-1 shrink-0" />
                  <span>Multiple payment options designed to make care affordable</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="service-point-icon mt-1 shrink-0" />
                  <span>
                    A welcoming environment for children, adults, and seniors alike
                  </span>
                </li>
              </ul>
            </div>
            {/* </Fade> */}
          </div>
          <div className="wcu-img-section">
            {/* <Zoom cascade damping={0.3} duration={800}> */}
            <img
              src="/Images/Bergen-Lafayette.webp"
              alt="Tulip Dental in Bergen-Lafayette"
              className="rounded-xl"
            />
            {/* </Zoom> */}
          </div>
        </div>

        {/* Schedule Appointment Section */}
        <div className="features-section">
          {/* <Fade direction="up" duration={1000}> */}
          <h2 className="features-heading">
            Book Your Visit with SmileKraft Dental Today
          </h2>
          <p className="features-description">
            Whether you’re in Bergen-Lafayette (07304, 07305) or nearby neighborhoods like McGinley Square, Greenville, Journal Square, or The Heights, SmileKraft Dental is here to provide compassionate, modern dental care for the whole family. If you’ve been searching for a trusted “dentist near me” in Jersey City, your search ends here.
          </p>

          <BookCallBtnForServiceAreas />
          {/* </Fade> */}
        </div>

        {/* Map Section */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-4">
          {/* Info Block */}
          <div className="flex-1 h-[400px] text-center relative bg-[#0087ce] rounded-lg p-8 text-white shadow-lg overflow-hidden space-y-4">
            <Bounce>
              <h2 className="text-2xl font-bold">{selected.name}</h2>
            </Bounce>
            <p className="whitespace-pre-line text-center text-white">
              {selected.address}
            </p>

            <h3 className="text-md font-medium mt-4">Hours of Operation:</h3>
            <Fade delay={400}>
              {loading ? (
                <ul className="text-sm text-gray-700">
                  {[...Array(7)].map((_, i) => (
                    <li key={i} className="text-white">
                      <div className="h-4 bg-white/20 rounded animate-pulse mb-1"></div>
                    </li>
                  ))}
                </ul>
              ) : (
                <ul className="text-sm text-gray-700">
                  {workingHours.map((hour, i) => {
                    const isToday = new Date().getDay() === hour.dayOfWeek;
                    return (
                      <li
                        key={i}
                        className={`text-white ${
                          isToday
                            ? "bg-white/10 rounded-md border-2 border-secondary"
                            : ""
                        }`}
                      >
                        {hour.day}: {hour.time}
                      </li>
                    );
                  })}
                </ul>
              )}
            </Fade>
          </div>

          {/* Single Map */}
          <div className="flex-1 w-full h-[400px] rounded-xl overflow-hidden shadow">
            <iframe
              src={selected.mapUrl}
              width="100%"
              height="100%"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="border-0"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
