"use client";

import React, { useState } from "react";
import Image from "next/image";
import { CheckCircle } from "lucide-react";
import BookCallBtn from "@/app/services/book-call-btn";
import { Bounce, Fade, Zoom } from "react-awesome-reveal";
import BookCallBtnForServiceAreas from "@/app/services/book-call-btn-for-serviceAreas";
import { useWorkingHours } from "@/lib/hooks/useWorkingHours";
import Link from "next/link";

export default function NewarkServiceAreaClient() {
  const { workingHours, loading } = useWorkingHours();
  const locations = [
    {
      id: "newark",
      name: "Newark, NJ",
      address: "1585 Springfield Avenue, Store #1, Maplewood, NJ 07040",
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
        "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d6047.5999171140365!2d-74.256008!3d40.72242!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c3acfa56220c03%3A0x4ed24acaf264373a!2s1585%20Springfield%20Ave%2C%20Maplewood%2C%20NJ%2007040%2C%20USA!5e0!3m2!1sen!2sin!4v1755873013308!5m2!1sen!2sin",
    },
  ];

  const [selected, setSelected] = useState(locations[0]);

  return (
    <div>
      {/* Header Section */}
      <div className="details-page-header-section ">
        <h1>Quality Dental Care for Families in Greenville, Jersey City 07305</h1>
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
                  src="/Images/Greenville.webp"
                  alt="Family & Cosmetic Dentistry in Greenville NJ"
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
              Modern Dentistry in Greenville | SmileKraft Dental | Your Trusted Family & Cosmetic Dentist
            </h2>
            <p>
              SmileKraft Dental is proud to serve the Greenville neighborhood of Jersey City, NJ (07305) with a full spectrum of dental care designed for comfort, convenience, and long-term results. Whether you’re coming in for routine cleanings, a smile makeover, or advanced treatment, our experienced team ensures every visit is personalized to your needs.
            </p>
            <p>
              We welcome patients of all ages and provide care in a friendly environment where your oral health and confidence always come first.
            </p>
            {/* </Fade> */}
          </div>
        </div>

        {/* Comprehensive Dental Care Section */}
        <div className="flex flex-col gap-4 p-6 md:p-0">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold">
            Full-Service Dentistry for Every Patient
          </h2>
          {/* <Fade cascade direction="up" delay={1000} duration={600}> */}
          <p>
            Our Greenville office is designed to deliver high-quality care in one convenient location. With advanced technology and a skilled team, we provide a wide range of services to meet the needs of families, including:
          </p>

          <ul className="list-disc pl-6 space-y-2 text-sm md:text-lg">
            <li>
              <h3 className="text-lg font-semibold">
                Dental Checkups & Cleanings
              </h3>
              <p>
                Regular exams and gentle cleanings to maintain healthy teeth and prevent future dental issues.
              </p>
            </li>

            <li>
              <h3 className="text-lg font-semibold">Fillings & Cavity Care</h3>
              <p>
                Tooth-colored fillings that restore strength and protect against further decay.
              </p>
            </li>

            <li>
              <h3 className="text-lg font-semibold">
                Teeth Whitening
              </h3>
              <p>
                Safe, professional whitening options for a brighter, more confident smile.
              </p>
            </li>

            <li>
              <h3 className="text-lg font-semibold">
                Dental Crowns & Bridges
              </h3>
              <p>
                Reliable solutions to repair damaged teeth or replace missing ones seamlessly.
              </p>
            </li>

            <li>
              <h3 className="text-lg font-semibold">
                Pediatric Dental Visits
              </h3>
              <p>
                Kid-friendly appointments that make dental care positive, comfortable, and stress-free.
              </p>
            </li>
          </ul>
          {/* </Fade> */}
        </div>

        {/* Why Choose Us Section */}
        <div className="wcu-section">
          <div className="wcu-text-section">
            {/* <Fade cascade direction="up" delay={1000} duration={600}> */}
            <div className="wcu-title">
              <h2>Dedicated Dental Care for Greenville Residents</h2>
            </div>
            <div className="wcu-desc">
              Residents of Greenville (07305) and nearby communities like {" "} <Link
                  href="/service-areas/bergenlafayette-nj-dentist-near-you"
                  className="hover:underline font-bold"
                >Bergen-Lafayette (07304, 07305),</Link>{" "}
                <Link
                  href="/service-areas/mcginley-square-nj-dentist-near-you"
                  className="hover:underline font-bold"
                >McGinley Square (07304, 07306, 07302),</Link>{" "}
                <Link
                  href="/service-areas/journal-square-nj-dentist-near-you"
                  className="hover:underline font-bold"
                >Journal Square (07306),</Link> and <Link
                  href="/service-areas/the-heights-nj-dentist-near-you"
                  className="hover:underline font-bold"
                >The Heights (07306, 07307).</Link>{" "}
                turn to SmileKraft Dental because they know their smiles are in good hands. Our approach is centered on comfort, quality, and long-term results:
            </div>
            <div className="wcu-points-section">
              <ul className="wcu-points space-y-3">
                <li className="flex items-start gap-2">
                  <CheckCircle className="service-point-icon mt-1 shrink-0" />
                  <span>Wide variety of services for children, teens, and adults</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="service-point-icon mt-1 shrink-0" />
                  <span>
                    Modern technology that makes visits faster and more precise
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="service-point-icon mt-1 shrink-0" />
                  <span>Flexible scheduling to fit busy family routines</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="service-point-icon mt-1 shrink-0" />
                  <span>Affordable payment options with insurance-friendly care</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="service-point-icon mt-1 shrink-0" />
                  <span>Compassionate team dedicated to personalized treatment</span>
                </li>
              </ul>
            </div>
            {/* </Fade> */}
          </div>
          <div className="wcu-img-section">
            {/* <Zoom cascade damping={0.3} duration={800}> */}
            <img
              src="/Images/Greenville-1.webp"
              alt="Tulip Dental in Newark"
              className="rounded-xl"
            />
            {/* </Zoom> */}
          </div>
        </div>

        {/* Schedule Appointment Section */}
        <div className="features-section">
          {/* <Fade direction="up" duration={1000}> */}
          <h2 className="features-heading">
            Schedule Your Next Visit with SmileKraft Dental
          </h2>
          <p className="features-description">
            If you’re located in Greenville (07305) or the surrounding Jersey City communities, SmileKraft Dental is here to make excellent oral care easy and accessible. From checkups to cosmetic upgrades, our team provides the personalized attention your smile deserves.
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
