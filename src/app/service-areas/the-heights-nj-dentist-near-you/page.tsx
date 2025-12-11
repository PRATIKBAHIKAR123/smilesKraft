"use client";

import React, { useState } from "react";
import Image from "next/image";
import { CheckCircle } from "lucide-react";
import BookCallBtn from "@/app/services/book-call-btn";
import { Bounce, Fade, Zoom } from "react-awesome-reveal";
import BookCallBtnForServiceAreas from "@/app/services/book-call-btn-for-serviceAreas";
import { useWorkingHours } from "@/lib/hooks/useWorkingHours";
import Link from "next/link";

export default function VauxhallServiceAreaClient() {
  const { workingHours, loading } = useWorkingHours();
  const locations = [
    {
      id: "vauxhall",
      name: "Vauxhall, NJ",
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
        <h1>Quality Dental Care for Families in The Heights, Jersey City 07306, 07307 </h1>
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
                  src="/Images/the-heights.webp"
                  alt="Family & Cosmetic Dentistry in The Heights NJ"
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
              Convenient & Comfortable Dentistry in The Heights | SmileKraft Dental | Your Trusted Family & Cosmetic Dentist
            </h2>
            <p>
              SmileKraft Dental proudly serves the vibrant community of The Heights in Jersey City (07306, 07307), offering advanced dental care for patients of all ages. From preventive visits to complex treatments, our team provides compassionate, personalized dentistry designed to protect your oral health and enhance your smile.
            </p>
            <p>
              We combine modern technology, a comfortable environment, and a patient-first approach, making every visit convenient and stress-free.
            </p>
            {/* </Fade> */}
          </div>
        </div>

        {/* Comprehensive Dental Care Section */}
        <div className="flex flex-col gap-4 p-6 md:p-0">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold">
            Advanced Dental Care Made Simple
          </h2>
          {/* <Fade cascade direction="up" delay={1000} duration={600}> */}
          <p>
            At SmileKraft Dental, patients in The Heights can get modern, compassionate dentistry all in one convenient office. Below are some of the core services our team provides to protect oral health, restore function, and improve the look of your smile:
          </p>

          <ul className="list-disc pl-6 space-y-2 text-sm md:text-lg">
            <li>
              <h3 className="text-lg font-semibold">
                Smile Makeovers
              </h3>
              <p>
                Customized treatment plans combining cosmetic options like whitening, veneers etc.
              </p>
            </li>

            <li>
              <h3 className="text-lg font-semibold">Root Canal Therapy</h3>
              <p>
                Gentle, effective treatment to save natural teeth and relieve pain from deep infection.
              </p>
            </li>

            <li>
              <h3 className="text-lg font-semibold">
                Gum Disease Care
              </h3>
              <p>
                Scaling, root planing, and maintenance therapies to protect gums and prevent tooth loss.
              </p>
            </li>

            <li>
              <h3 className="text-lg font-semibold">
                Oral Surgery
              </h3>
              <p>
                Safe and precise procedures, including extractions and minor surgical treatments.
              </p>
            </li>

            <li>
              <h3 className="text-lg font-semibold">
                Emergency Dentistry
              </h3>
              <p>Prompt care for dental injuries, sudden pain, or urgent issues to restore comfort quickly.</p>
            </li>
          </ul>
          {/* </Fade> */}
        </div>

        {/* Why Choose Us Section */}
        <div className="wcu-section">
          <div className="wcu-text-section">
            {/* <Fade cascade direction="up" delay={1000} duration={600}> */}
            <div className="wcu-title">
              <h2>Dependable Dentistry for Patients in The Heights</h2>
            </div>
            <div className="wcu-desc">
              Patients from The Heights (07306, 07307) - along with nearby neighborhoods like
              {" "} <Link
                  href="/service-areas/bergenlafayette-nj-dentist-near-you"
                  className="hover:underline font-bold"
                >Bergen-Lafayette (07304, 07305),</Link>{" "}
                <Link
                  href="/service-areas/greenville-nj-dentist-near-you"
                  className="hover:underline font-bold"
                >Greenville (07305),</Link>{" "}
                <Link
                  href="/service-areas/mcginley-square-nj-dentist-near-you"
                  className="hover:underline font-bold"
                >McGinley Square (07304, 07306, 07302),</Link> and <Link
                  href="/service-areas/the-heights-nj-dentist-near-you"
                  className="hover:underline font-bold"
                >The Heights (07306, 07307).</Link>{" "}
                - keep choosing SmileKraft Dental because we combine clinical excellence with genuine care and a focus on lasting oral health. Here’s why so many patients return to us:
            </div>
            <div className="wcu-points-section">
              <ul className="wcu-points space-y-3">
                <li className="flex items-start gap-2">
                  <CheckCircle className="service-point-icon mt-1 shrink-0" />
                  <span>Preventive, cosmetic, and restorative care offered in one location</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="service-point-icon mt-1 shrink-0" />
                  <span>Compassionate team focused on patient comfort and trust</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="service-point-icon mt-1 shrink-0" />
                  <span>Convenient office hours designed for busy families and professionals</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="service-point-icon mt-1 shrink-0" />
                  <span>Clear treatment plans with upfront pricing and no surprises</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="service-point-icon mt-1 shrink-0" />
                  <span>
                    Advanced techniques that provide lasting, natural-looking results
                  </span>
                </li>
              </ul>
            </div>
            {/* </Fade> */}
          </div>
          <div className="wcu-img-section">
            {/* <Zoom cascade damping={0.3} duration={800}> */}
            <img
              src="/Images/the-heights-1.webp"
              alt="Family & Cosmetic Dentistry in The Heights NJ"
              className="rounded-xl"
            />
            {/* </Zoom> */}
          </div>
        </div>

        {/* Schedule Appointment Section */}
        <div className="features-section">
          {/* <Fade direction="up" duration={1000}> */}
          <h2 className="features-heading">
            Discover Personalized Dentistry with SmileKraft Dental
          </h2>
          <p className="features-description">
            Serving patients in The Heights (07306, 07307) as well as Bergen-Lafayette, McGinley Square, Greenville, and Journal Square, SmileKraft Dental is dedicated to making quality care accessible for every family. From regular checkups to advanced dental treatments, we keep your smile healthy, bright, and worry-free.
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
