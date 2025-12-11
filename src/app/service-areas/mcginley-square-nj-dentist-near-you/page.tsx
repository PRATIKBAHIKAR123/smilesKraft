"use client";

import React, { useState } from "react";
import Image from "next/image";
import { CheckCircle } from "lucide-react";
import BookCallBtn from "@/app/services/book-call-btn";
import { Bounce, Fade, Zoom } from "react-awesome-reveal";
import BookCallBtnForServiceAreas from "@/app/services/book-call-btn-for-serviceAreas";
import { useWorkingHours } from "@/lib/hooks/useWorkingHours";
import Link from "next/link";

export default function HarrisburgServiceAreaClient() {
  const { workingHours, loading } = useWorkingHours();
  const locations = [
    {
      id: "maplewood",
      name: "Maplewood, NJ",
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
        // "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3024.1234567890123!2d-74.27123456789012!3d40.73123456789012!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c3a8b123456789%3A0x1234567890abcdef!2sMaplewood%2C%20NJ!5e0!3m2!1sen!2sus!4v1710000000000!5m2!1sen!2sus",
        "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d6047.5999171140365!2d-74.256008!3d40.72242!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c3acfa56220c03%3A0x4ed24acaf264373a!2s1585%20Springfield%20Ave%2C%20Maplewood%2C%20NJ%2007040%2C%20USA!5e0!3m2!1sen!2sin!4v1755873013308!5m2!1sen!2sin",
    },
  ];

  const [selected, setSelected] = useState(locations[0]);

  return (
    <div>
      {/* Header Section */}
      <div className="details-page-header-section ">
        <h1>Quality Dental Care for Families in McGinley Square, Jersey City 07304, 07306, 07302 </h1>
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
                  src="/Images/McGinley.webp"
                  alt="Family & Cosmetic Dentistry in McGinley Square NJ"
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
              Dedicated Dental Care in McGinley Square | SmileKraft Dental | Your Trusted Family & Cosmetic Dentist
            </h2>
            <p>
              At SmileKraft Dental, we proudly care for the McGinley Square community of Jersey City (07304, 07306, 07302) with dentistry that blends experience, technology, and compassion. Our goal is to make quality dental care simple and accessible - whether you’re scheduling your child’s first checkup, enhancing your smile with cosmetic treatments, or restoring function with advanced procedures.
            </p>
            <p>
              Every patient is treated with a personalized approach in a welcoming, stress-free environment designed to keep you comfortable from start to finish.
            </p>
            {/* </Fade> */}
          </div>
        </div>

        {/* Comprehensive Dental Care Section */}
        <div className="flex flex-col gap-4 p-6 md:p-0">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold">
            Complete Dental Services Tailored to Your Needs
          </h2>
          {/* <Fade cascade direction="up" delay={1000} duration={600}> */}
          <p>
            At SmileKraft Dental, we believe every smile deserves personalized attention. Our McGinley Square office combines advanced technology with a caring team to deliver a wide range of services for the whole family, including:
          </p>

          <ul className="list-disc pl-6 space-y-2 text-sm md:text-lg">
            <li>
              <h3 className="text-lg font-semibold">
                Preventive Dentistry
              </h3>
              <p>
                Regular checkups, cleanings, fluoride, and sealants to keep cavities and gum issues away.
              </p>
            </li>

            <li>
              <h3 className="text-lg font-semibold">Cosmetic Enhancements</h3>
              <p>
                Professional whitening, veneers, and Invisalign® to boost your confidence and improve your smile’s appearance.
              </p>
            </li>

            <li>
              <h3 className="text-lg font-semibold">
                Restorative Dentistry
              </h3>
              <p>
                {" "}
                Natural-looking crowns, bridges, fillings, and implant solutions to rebuild function and aesthetics.
              </p>
            </li>

            <li>
              <h3 className="text-lg font-semibold">
                Oral Surgery Services
              </h3>
              <p>
                Wisdom teeth removal, extractions, and other surgical care delivered with comfort-focused techniques.
              </p>
            </li>

            <li>
              <h3 className="text-lg font-semibold">
                Family & Pediatric Care
              </h3>
              <p> Gentle, reassuring dental visits for kids and complete care for parents and seniors alike.</p>
            </li>
          </ul>
          {/* </Fade> */}
        </div>

        {/* Why Choose Us Section */}
        <div className="wcu-section">
          <div className="wcu-text-section">
            {/* <Fade cascade direction="up" delay={1000} duration={600}> */}
            <div className="wcu-title">
              <h2>Why McGinley Square Families Trust SmileKraft Dental</h2>
            </div>
            <div className="wcu-desc">
              Patients from Maplewood McGinley Square (07304, 07306, 07302) and surrounding neighborhoods such as
               {" "} <Link
                  href="/service-areas/bergenlafayette-nj-dentist-near-you"
                  className="hover:underline font-bold"
                >Bergen-Lafayette (07304, 07305),</Link>{" "}
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
                continue to choose SmileKraft Dental because we go beyond routine care to create lasting relationships. Here’s what makes us different:
            </div>
            <div className="wcu-points-section">
              <ul className="wcu-points space-y-3">
                <li className="flex items-start gap-2">
                  <CheckCircle className="service-point-icon mt-1 shrink-0" />
                  <span>Comprehensive services for preventive, cosmetic, and restorative needs</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="service-point-icon mt-1 shrink-0" />
                  <span>
                    Gentle, patient-first approach to reduce dental anxiety
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="service-point-icon mt-1 shrink-0" />
                  <span>
                   Convenient location close to public transport and main roads
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="service-point-icon mt-1 shrink-0" />
                  <span>
                    Same-day appointments available for urgent cases
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="service-point-icon mt-1 shrink-0" />
                  <span>Long-term commitment to helping families maintain healthy smiles</span>
                </li>
              </ul>
            </div>
            {/* </Fade> */}
          </div>
          <div className="wcu-img-section">
            {/* <Zoom cascade damping={0.3} duration={800}> */}
            <img
              src="/Images/McGinley-1.webp"
              alt="Family & Cosmetic Dentistry in McGinley Square NJ"
              className="rounded-xl"
            />
            {/* </Zoom> */}
          </div>
        </div>

        {/* Schedule Appointment Section */}
        <div className="features-section">
          {/* <Fade direction="up" duration={1000}> */}
          <h2 className="features-heading">
            Your Next Dental Visit Made Simple with SmileKraft Dental
          </h2>
          <p className="features-description">
            
If you live in McGinley Square (07304, 07306, 07302) or surrounding areas like Bergen-Lafayette, Greenville, Journal Square, or The Heights, SmileKraft Dental is ready to provide the high-quality care your family deserves. From routine checkups to advanced cosmetic treatments, our team makes it easy to achieve a healthy, confident smile close to home.

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
