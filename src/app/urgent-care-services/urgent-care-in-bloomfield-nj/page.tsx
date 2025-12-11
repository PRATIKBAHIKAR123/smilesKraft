"use client";

import React from "react";
import { CheckCircle } from "lucide-react";

export default function UrgentCareInBloomfieldPage() {
  return (
    <div>
      {/* Header Section */}
      <div className="details-page-header-section ">
        <h1>Urgent Care in Bloomfield, NJ 07003</h1>
      </div>

      {/* Main Content Section */}
      <div className="max-w-7xl mx-auto px-2 py-6 flex flex-col gap-8">
        {/* Top Section: Image + Intro */}
        <div className="details-page-desc-section">
          <div className="image_section">
            <div className="image_section-cover">
              <div className="main-image">
                <img
                  src="/Images/urgent-care-services/UrgentCareinBloomfield.jpg"
                  alt="Urgent Care in Bloomfield, NJ"
                  className="rounded-xl"
                />
              </div>
            </div>
          </div>

          <div className="desc-text-section">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold">
              Quality Walk-In Medical Care in Bloomfield | Same-Day Treatment
              Near You
            </h2>
            <p>
              If you're looking for fast, dependable medical attention without
              the wait, Bloomfield residents can count on{" "}
              <a
                href="https://www.afcurgentcare.com/bloomfield/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800 hover:underline"
              >
                AFC Urgent Care Bloomfield
              </a>{" "}
              for trusted, same-day treatment. From minor illnesses and injuries
              to{" "}
              <a
                href="https://www.afcurgentcare.com/bloomfield/patient-services/on-site-labs/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800 hover:underline"
              >
                on-site lab testing
              </a>{" "}
              and vaccinations, this local walk-in clinic makes healthcare
              simple, affordable, and accessible for patients of all ages.
            </p>
            <p>
              Our community is supported by experienced medical professionals
              who prioritize comfort, convenience, and quick relief. Whether
              it's a fever,{" "}
              <a
                href="https://www.afcurgentcare.com/bloomfield/patient-services/acute-injury-treatment/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800 hover:underline"
              >
                sprain
              </a>
              , or unexpected concern, you'll receive efficient, high-quality
              care close to home - without the need for an ER visit.
            </p>
          </div>
        </div>

        {/* Comprehensive Services Section */}
        <div className="flex flex-col gap-4 p-2 md:p-0">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold">
            Comprehensive Urgent Care Services in Bloomfield
          </h2>
          <p>
            Urgent care centers in Bloomfield provide a full range of same-day
            medical services to help you get back to feeling your best quickly.
            These include:
          </p>

          <div className="space-y-6 text-sm md:text-lg">
            <div>
              <h3 className="text-xl font-semibold mb-2">
                Illness & Injury Treatment
              </h3>
              <p>
                From unexpected fevers to minor injuries, urgent care clinics in
                Bloomfield handle a variety of common health issues quickly and
                effectively. Patients can walk in for treatment of colds, flu,
                ear infections, sore throats, rashes, sprains, minor cuts, and
                burns - all without needing an appointment.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-2">
                On-Site Lab Testing
              </h3>
              <p>
                Fast, accurate diagnostics are key to effective treatment.
                Bloomfield's urgent care centers offer on-site lab services for
                tests such as strep, flu,{" "}
                <a
                  href="https://www.afcurgentcare.com/bloomfield/patient-services/covid-19-services/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800 hover:underline"
                >
                  COVID-19
                </a>
                , urinalysis, blood work, and more. Most results are available
                the same day, helping your provider diagnose conditions quickly
                and begin appropriate treatment right away.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-2">Physical Exams</h3>
              <p>
                Urgent care centers in Bloomfield also perform routine and
                specialized physical exams to meet school, sports, employment,
                and annual wellness requirements. Each exam includes a thorough
                health review and documentation tailored to your specific needs.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-2">
                Vaccinations & Immunizations
              </h3>
              <p>
                Staying current on vaccinations is essential for family and
                community health. Bloomfield residents can receive flu shots,
                tetanus boosters, travel vaccines, and routine immunizations at
                local urgent care centers. These services are ideal for both
                adults and children, ensuring everyone stays protected from
                preventable illnesses year-round.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-2">
                Occupational Health Services
              </h3>
              <p>
                Employers and employees alike benefit from comprehensive
                occupational health care available at Bloomfield urgent care
                centers. Services include pre-employment physicals, DOT exams,
                drug and alcohol screenings,{" "}
                <a
                  href="https://www.afcurgentcare.com/bloomfield/resources/dot-physicals/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800 hover:underline"
                >
                  workplace injury{" "}
                </a>
                evaluations, and return-to-work clearances.
              </p>
            </div>
          </div>
        </div>

        {/* Why Choose Us Section */}
        <div className="wcu-section">
          <div className="wcu-text-section">
            <div className="wcu-title">
              <h2>The Preferred Walk-In Care Option for Bloomfield Families</h2>
            </div>
            <div className="wcu-desc">
              Patients across Bloomfield (07003) and nearby East Orange (07017),
              Belleville (07109), Montclair (07042), Glen Ridge (07028), and
              Nutley (07110) should choose local urgent care services because:
            </div>
            <div className="wcu-points-section">
              <ul className="wcu-points space-y-3">
                <li className="flex items-start gap-2">
                  <CheckCircle className="service-point-icon mt-1 shrink-0" />
                  <span>Convenient walk-in access - no long waits</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="service-point-icon mt-1 shrink-0" />
                  <span>Affordable pricing compared to ER visits</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="service-point-icon mt-1 shrink-0" />
                  <span>Extended evening and weekend hours</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="service-point-icon mt-1 shrink-0" />
                  <span>Family-friendly, comfortable environment</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="service-point-icon mt-1 shrink-0" />
                  <span>
                    Skilled medical professionals with local experience
                  </span>
                </li>
              </ul>
            </div>
          </div>
          <div className="wcu-img-section">
            <img
              src="/Images/urgent-care-services/flu shot1.jpg"
              alt="Urgent Care in Bloomfield"
              className="rounded-xl"
            />
          </div>
        </div>

        {/* Schedule Appointment Section */}
        <div className="features-section">
          <h2 className="features-heading">
            Visit an Urgent Care Center in Bloomfield Today
          </h2>
          <p className="features-description">
            From cold symptoms to minor injuries, urgent care services are
            always nearby in Bloomfield. Walk-in care makes it easy to get
            treatment when you need it most - quickly, affordably, and close to
            home.
          </p>
          <p className="features-description">
            If you're in{" "}
            <strong>
              Bloomfield or nearby areas like Montclair, Belleville, or Glen
              Ridge, AFC Urgent Care Bloomfield{" "}
            </strong>{" "}
            offers trusted urgent care services for both children and adults.
          </p>
        </div>
      </div>
    </div>
  );
}
