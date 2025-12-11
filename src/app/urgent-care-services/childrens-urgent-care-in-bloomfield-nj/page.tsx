"use client";

import React from "react";
import { CheckCircle } from "lucide-react";

export default function ChildrensUrgentCareInBloomfieldPage() {
  return (
    <div>
      {/* Header Section */}
      <div className="details-page-header-section ">
        <h1>Children's Urgent Care in Bloomfield, NJ 07003</h1>
      </div>

      {/* Main Content Section */}
      <div className="max-w-7xl mx-auto px-2 py-6 flex flex-col gap-8">
        {/* Top Section: Image + Intro */}
        <div className="details-page-desc-section">
          <div className="image_section">
            <div className="image_section-cover">
              <div className="main-image">
                <img
                  src="/Images/urgent-care-services/ChildrenUrgentCareinBloomfield.jpg"
                  alt="Children's Urgent Care in Bloomfield, NJ"
                  className="rounded-xl"
                />
              </div>
            </div>
          </div>

          <div className="desc-text-section">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold">
              Compassionate Pediatric Urgent Care in Bloomfield | Walk-In
              Medical Care for Kids
            </h2>
            <p>
              When your child is sick or injured, waiting days for an
              appointment isn't an option. Families in Bloomfield can rely on
              trusted pediatric urgent care that offers gentle, expert care for
              infants, children, and teens.
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
              provides a comfortable, child-friendly environment and a calm
              alternative to the emergency room-ensuring quick, compassionate
              treatment without long waits or added stress.
            </p>
          </div>
        </div>

        {/* Comprehensive Services Section */}
        <div className="flex flex-col gap-4 p-2 md:p-0">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold">
            Comprehensive Pediatric Urgent Care Services in Bloomfield
          </h2>
          <p>
            <a
              href="https://www.afcurgentcare.com/bloomfield/patient-services/childrens-urgent-care/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800 hover:underline"
            >
              Pediatric urgent care
            </a>{" "}
            centers in Bloomfield provide a full range of non-emergency
            healthcare services for infants, children, and teens. Parents can
            walk in anytime for professional care that's fast, affordable, and
            family-focused. These include:
          </p>

          <div className="space-y-6 text-sm md:text-lg">
            <div>
              <h3 className="text-xl font-semibold mb-2">Injury Care</h3>
              <p>
                For minor bumps, bruises, or sprains, pediatric urgent care
                centers in Bloomfield provide thorough evaluations and gentle
                treatment. Clinics are equipped to handle cuts, strains, and
                mild fractures, helping{" "}
                <a
                  href="https://www.afcurgentcare.com/bloomfield/patient-services/child-vaccinations/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800 hover:underline"
                >
                  kids
                </a>{" "}
                recover comfortably and quickly.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-2">
                Minor Illness Treatment
              </h3>
              <p>
                Children often catch colds or experience sudden fevers. Urgent
                care providers treat common conditions such as the flu, sore
                throats, coughs, allergies, and ear infections. Your child
                receives an accurate diagnosis and medication if needed - all in
                one visit.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-2">
                Fever & Symptom Management
              </h3>
              <p>
                High fevers can be alarming, especially for young children.
                Urgent care professionals assess symptoms, identify the cause,
                and offer safe, effective treatment plans to help bring the
                fever down and relieve discomfort.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-2">
                On-Site Pediatric Lab Testing
              </h3>
              <p>
                Quick results mean quicker relief. Local clinics offer{" "}
                <a
                  href="https://www.afcurgentcare.com/bloomfield/patient-services/strep-throat/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800 hover:underline"
                >
                  strep
                </a>
                , flu, RSV, and COVID-19 testing with same-day results. Some
                facilities also provide on-site X-rays for accurate diagnosis of
                injuries - ensuring treatment can begin right away during your
                visit.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-2">
                School & Camp Physicals
              </h3>
              <p>
                Busy families love the convenience of walk-in physicals for
                school,{" "}
                <a
                  href="https://www.afcurgentcare.com/bloomfield/patient-services/physicals-sports-school/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800 hover:underline"
                >
                  sports
                </a>
                , and camp participation. Providers ensure your child is
                healthy, growing properly, and ready for upcoming activities.
              </p>
            </div>
          </div>
        </div>

        {/* Why Choose Us Section */}
        <div className="wcu-section">
          <div className="wcu-text-section">
            <div className="wcu-title">
              <h2>
                Where Quality Children's Care Meets Convenience in Bloomfield
              </h2>
            </div>
            <div className="wcu-desc">
              Families across Bloomfield (07003) and nearby Montclair (07042),
              Belleville (07109), East Orange (07017), Glen Ridge (07028), and
              Nutley (07110) turn to pediatric urgent care centers because:
            </div>
            <div className="wcu-points-section">
              <ul className="wcu-points space-y-3">
                <li className="flex items-start gap-2">
                  <CheckCircle className="service-point-icon mt-1 shrink-0" />
                  <span>Walk-in convenience - no appointments needed</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="service-point-icon mt-1 shrink-0" />
                  <span>
                    Experienced providers specializing in child health
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="service-point-icon mt-1 shrink-0" />
                  <span>Family-friendly, comfortable environment</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="service-point-icon mt-1 shrink-0" />
                  <span>On-site X-rays and lab testing for faster results</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="service-point-icon mt-1 shrink-0" />
                  <span>Open seven days a week with extended hours</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="wcu-img-section">
            <img
              src="/Images/urgent-care-services/flu shot1.jpg"
              alt="Children's Urgent Care in Bloomfield"
              className="rounded-xl"
            />
          </div>
        </div>

        {/* Schedule Appointment Section */}
        <div className="features-section">
          <h2 className="features-heading">
            Visit a Pediatric Urgent Care Center in Bloomfield
          </h2>
          <p className="features-description">
            Parents across Bloomfield know the importance of having reliable
            care nearby. Local pediatric urgent care centers provide the comfort
            and convenience families need when minor illnesses or injuries
            strike.
          </p>
          <p className="features-description">
            If you're in{" "}
            <strong>
              Bloomfield or nearby areas like Montclair, Belleville, or Glen
              Ridge, AFC Urgent Care Bloomfield
            </strong>{" "}
            delivers dependable urgent care services for both kids and adults -
            right in your community.
          </p>
        </div>
      </div>
    </div>
  );
}
