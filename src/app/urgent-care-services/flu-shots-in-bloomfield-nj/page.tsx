"use client";

import React from "react";
import { CheckCircle } from "lucide-react";
// import BookCallBtnForServiceAreas from "@/app/services/book-call-btn-for-serviceAreas";

export default function FluShotsInBloomfieldNJPage() {
  return (
    <div>
      {/* Header Section */}
      <div className="details-page-header-section ">
        <h1>Flu Shots in Bloomfield, NJ 07003</h1>
      </div>

      {/* Main Content Section */}
      <div className="max-w-7xl mx-auto px-2 py-6 flex flex-col gap-8">
        {/* Top Section: Image + Intro */}
        <div className="details-page-desc-section">
          <div className="image_section">
            <div className="image_section-cover">
              <div className="main-image">
                <img
                  src="/Images/urgent-care-services/FluShotsinBloomfield.jpg"
                  alt="Flu Shots in Bloomfield, NJ"
                  className="rounded-xl"
                />
              </div>
            </div>
          </div>

          <div className="desc-text-section">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold">
              Seasonal Flu Vaccines in Bloomfield | Fast, Walk-In Protection for
              Every Family
            </h2>
            <p>
              As flu season approaches, getting your annual{" "}
              <a
                href="https://www.afcurgentcare.com/bloomfield/patient-services/flu-shots/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800 hover:underline"
              >
                flu shot
              </a>{" "}
              is one of the easiest and most effective ways to stay healthy.
              Local{" "}
              <a
                href="https://www.afcurgentcare.com/bloomfield/patient-services/walk-in-clinic/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800 hover:underline"
              >
                walk-in clinics
              </a>{" "}
              in Bloomfield make vaccination quick, safe, and stress-free for
              patients of all ages. Whether you're protecting yourself, your
              children, or elderly family members, flu shots help reduce your
              risk of illness and serious complications.
            </p>
            <p>
              <a
                href="https://www.afcurgentcare.com/bloomfield/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800 hover:underline"
              >
                AFC Urgent Care Bloomfield
              </a>{" "}
              offers convenient, walk-in flu shots administered by experienced
              medical professionals - helping keep Bloomfield families protected
              all season long.
            </p>
          </div>
        </div>

        {/* Comprehensive Services Section */}
        <div className="flex flex-col gap-4 p-2 md:p-0">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold">
            Comprehensive Flu Shot Services in Bloomfield
          </h2>
          <p>
            Walk-in clinics in Bloomfield provide flu vaccinations designed to
            keep individuals and families protected throughout the year. These
            services are safe, effective, and available with no appointment
            needed. These include:
          </p>

          <div className="space-y-6 text-sm md:text-lg">
            <div>
              <h3 className="text-xl font-semibold mb-2">
                Annual Flu Vaccinations
              </h3>
              <p>
                Each year, flu shots are updated to target the most common
                strains expected during the season. Getting{" "}
                <a
                  href="https://www.afcurgentcare.com/bloomfield/patient-services/cold-and-flu-treatment/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800 hover:underline"
                >
                  vaccinated
                </a>{" "}
                annually helps strengthen your immunity and protect against
                complications like pneumonia or severe respiratory infections.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-2">
                Flu Shots for Adults & Children
              </h3>
              <p>
                Whether for yourself or your{" "}
                <a
                  href="https://www.afcurgentcare.com/bloomfield/patient-services/family-care/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800 hover:underline"
                >
                  children
                </a>{" "}
                family, flu vaccines are recommended for everyone over six
                months of age. Clinics in Bloomfield provide age-appropriate
                doses that are both safe and effective.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-2">
                Walk-In Convenience
              </h3>
              <p>
                No appointment? No problem. Bloomfield residents can walk in for
                flu shots any day of the week. Most visits take just a few
                minutes - making it easy to get vaccinated on your schedule.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-2">
                Vaccinations for High-Risk Groups
              </h3>
              <p>
                Certain groups are more vulnerable to flu-related complications.
                Flu shots are especially recommended for:
              </p>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>Seniors and young children</li>
                <li>Individuals with chronic health conditions</li>
                <li>Healthcare and public-facing workers</li>
                <li>
                  Caregivers for elderly or immunocompromised family members
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-2">
                Flu Prevention & Aftercare Guidance
              </h3>
              <p>
                After receiving your vaccine, providers offer helpful advice on
                maintaining strong immunity, managing mild post-vaccine
                symptoms, and preventing seasonal illness.
              </p>
            </div>
          </div>
        </div>

        {/* Why Choose Us Section */}
        <div className="wcu-section">
          <div className="wcu-text-section">
            <div className="wcu-title">
              <h2>Trusted Choice for Flu Vaccines in Bloomfield</h2>
            </div>
            <div className="wcu-desc">
              Families across Bloomfield (07003) and nearby Montclair (07042),
              Belleville (07109), East Orange (07017), Glen Ridge (07028), and
              Nutley (07110) rely on walk-in flu vaccination services because:
            </div>
            <div className="wcu-points-section">
              <ul className="wcu-points space-y-3">
                <li className="flex items-start gap-2">
                  <CheckCircle className="service-point-icon mt-1 shrink-0" />
                  <span>
                    Fast, convenient walk-in access - no appointment required
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="service-point-icon mt-1 shrink-0" />
                  <span>Safe, CDC-recommended vaccines</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="service-point-icon mt-1 shrink-0" />
                  <span>Friendly, professional medical staff</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="service-point-icon mt-1 shrink-0" />
                  <span>Affordable pricing and most insurance accepted</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="service-point-icon mt-1 shrink-0" />
                  <span>Extended weekday and weekend hours</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="wcu-img-section">
            <img
              src="/Images/urgent-care-services/flu shot1.jpg"
              alt="Flu Shots in Bloomfield"
              className="rounded-xl"
              // style={{ objectFit: 'contain', width: '100%', height: 'auto', maxHeight: '280px' }}
            />
          </div>
        </div>

        {/* Schedule Appointment Section */}
        <div className="features-section">
          <h2 className="features-heading">
            Visit for a Quick, Convenient Flu Shot in Bloomfield Today
          </h2>
          <p className="features-description">
            Staying healthy this flu season starts with one simple step -
            vaccination. Local clinics in Bloomfield make it easy to get your
            flu shot quickly and conveniently.
          </p>
          <p className="features-description">
            If you're in{" "}
            <strong>
              Bloomfield or nearby areas like Montclair, Belleville, or Glen
              Ridge, AFC Urgent Care Bloomfield
            </strong>{" "}
            provides walk-in flu vaccinations for adults and children to help
            you stay protected all year round.
          </p>

          {/* <BookCallBtnForServiceAreas /> */}
        </div>
      </div>
    </div>
  );
}
