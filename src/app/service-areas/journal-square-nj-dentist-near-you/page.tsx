"use client";

import React, { useState } from "react";
import Image from "next/image";
import { CheckCircle } from "lucide-react";
import BookCallBtn from "@/app/services/book-call-btn";
import { Bounce, Fade, Zoom } from "react-awesome-reveal";
import BookCallBtnForServiceAreas from "@/app/services/book-call-btn-for-serviceAreas";
import { useWorkingHours } from "@/lib/hooks/useWorkingHours";
import Link from "next/link";

export default function SouthOrangeServiceAreaClient() {
  const { workingHours, loading } = useWorkingHours();
  const locations = [
    {
      id: "south-orange",
      name: "Journal Square, NJ",
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

  const [selected, setSelected] = useState(locations[0]);

  return (
    <div>
      {/* Header Section */}
      <div className="details-page-header-section ">
        <h1>Quality Dental Care for Families in Journal Square, Jersey City 07306 </h1>
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
                  src="/Images/journal-square.webp"
                  alt="Family & Cosmetic Dentistry in Journal Square NJ"
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
              Advanced & Gentle Dental Care in Journal Square | SmileKraft Dental | Your Trusted Family & Cosmetic Dentist
            </h2>
            <p>
              At SmileKraft Dental, we’re proud to serve the Journal Square neighborhood of Jersey City (07306) with high-quality, personalized dentistry. Whether you’re a busy professional, a student, or a family looking for dependable care, our office combines expertise with compassion to make your visits stress-free and effective.
            </p>
            <p>
              From preventive checkups to advanced cosmetic and restorative treatments, we’re here to help every patient feel confident in their smile.
            </p>
            {/* </Fade> */}
          </div>
        </div>

        {/* Comprehensive Dental Care Section */}
        <div className="flex flex-col gap-4 p-6 md:p-0">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold">
            All-in-One Dental Services for Lasting Smiles
          </h2>
          {/* <Fade cascade direction="up" delay={1000} duration={600}> */}
          <p>
            At SmileKraft Dental, we make it easy for patients in Journal Square to access quality care in one convenient location. Our team provides a wide range of dental solutions to keep every smile strong, healthy, and confident:
          </p>

          <ul className="list-disc pl-6 space-y-2 text-sm md:text-lg">
            <li>
              <h3 className="text-lg font-semibold">
                General Dentistry
              </h3>
              <p>
                {" "}
                Regular exams, cleanings, and preventive care to maintain everyday oral health.
              </p>
            </li>

            <li>
              <h3 className="text-lg font-semibold">Cosmetic Treatments</h3>
              <p>
                {" "}
                Options like whitening and veneers to brighten and enhance your smile’s appearance.
              </p>
            </li>

            <li>
              <h3 className="text-lg font-semibold">
                Restorative Care
              </h3>
              <p>
                Fillings, crowns, and bridges to repair damaged or missing teeth.
              </p>
            </li>

            <li>
              <h3 className="text-lg font-semibold">
                Specialty Services
              </h3>
              <p>
                Gum care, extractions, and advanced treatments performed with precision and comfort.
              </p>
            </li>

            <li>
              <h3 className="text-lg font-semibold">
                Family Dentistry
              </h3>
              <p>Friendly, reliable dental visits for children, teens, and adults alike.</p>
            </li>
          </ul>
          {/* </Fade> */}
        </div>

        <div className="wcu-section">
          <div className="wcu-text-section">
            {/* <Fade cascade direction="up" delay={1000} duration={600}> */}
            <div className="wcu-title">
              <h2>Caring for Smiles in the Journal Square Community</h2>
            </div>
            <div className="wcu-desc">
              Families in Journal Square (07306) - as well as those from
              {" "} <Link
                  href="/service-areas/mcginley-square-nj-dentist-near-you"
                  className="hover:underline font-bold"
                >McGinley Square (07304, 07306),</Link>{" "}
                <Link
                  href="/service-areas/greenville-nj-dentist-near-you"
                  className="hover:underline font-bold"
                >Greenville (07305),</Link>{" "}
                <Link
                  href="/service-areas/bergenlafayette-nj-dentist-near-you"
                  className="hover:underline font-bold"
                >Bergen-Lafayette (07304, 07305),</Link> and <Link
                  href="/service-areas/the-heights-nj-dentist-near-you"
                  className="hover:underline font-bold"
                >The Heights (07306, 07307).</Link>{" "}
                - trust SmileKraft Dental for dependable, high-quality dentistry. Here’s why so many patients return to us:
            </div>
            <div className="wcu-points-section">
              <ul className="wcu-points space-y-3">
                <li className="flex items-start gap-2">
                  <CheckCircle className="service-point-icon mt-1 shrink-0" />
                  <span>
                    Wide variety of services for children, adults, and seniors
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="service-point-icon mt-1 shrink-0" />
                  <span>Gentle, patient-focused approach to reduce anxiety</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="service-point-icon mt-1 shrink-0" />
                  <span>Same-day scheduling and flexible appointment options</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="service-point-icon mt-1 shrink-0" />
                  <span>Affordable payment plans and insurance-friendly care</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="service-point-icon mt-1 shrink-0" />
                  <span>
                    Modern office designed for comfort and convenience
                  </span>
                </li>
              </ul>
            </div>
            {/* </Fade> */}
          </div>
          <div className="wcu-img-section">
            {/* <Zoom cascade damping={0.3} duration={800}> */}
            <img
              src="/Images/journal-square-1.webp"
              alt="Family & Cosmetic Dentistry in Journal Square NJ"
              className="rounded-xl"
            />
            {/* </Zoom> */}
          </div>
        </div>

        {/* Schedule Appointment Section */}
        <div className="features-section">
          {/* <Fade direction="up" duration={1000}> */}
          <h2 className="features-heading">
            Experience Hassle-Free Dentistry Right Here at SmileKraft Dental
          </h2>
          <p className="features-description">
            Whether you’re located in Journal Square (07306) or nearby neighborhoods like Bergen-Lafayette, McGinley Square, Greenville, or The Heights, SmileKraft Dental is here to provide compassionate care for your whole family. From preventive checkups to advanced restorative treatments, our team makes achieving a healthy smile simple and stress-free.
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
            {/* <Fade delay={400}> */}
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
            {/* </Fade> */}
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
