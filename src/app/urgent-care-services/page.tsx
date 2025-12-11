import React from "react";
import Image from "next/image";

export default function UrgentCareServicesPage() {
  return (
    <div>
      {/* Header Section */}
      <div className="details-page-header-section ">
        <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-5xl ">
          Urgent Care Services / Bloomfield, NJ
        </h1>
      </div>

      {/* Main Content Section */}
      <div className="max-w-7xl mx-auto px-4 py-12 flex flex-col gap-16">
        {/* Top Section: Image + Intro */}
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="flex-1 flex justify-center">
            <Image
              src="/Images/close-up-man-carrying-young-woman-his-back.webp"
              alt="Urgent Care Services"
              width={400}
              height={300}
              className="rounded-md w-full max-w-md object-cover"
            />
          </div>
          <div className="flex-1 flex flex-col gap-4">
            <h2 className="text-2xl font-semibold">
              Urgent Care Services in Bloomfield, NJ
            </h2>
            <p className="text-lg text-gray-600">
              At Tulip Dental, we are proud to offer exceptional urgent care
              services near Bloomfield, NJ. Our experienced team is dedicated to
              providing comprehensive healthcare services to patients of all
              ages. Whether you're seeking immediate medical attention,
              preventive care, or specialized treatments, we are here to help
              you achieve optimal health.
            </p>
          </div>
        </div>

        {/* Comprehensive Urgent Care Services Section */}
        <div className="flex flex-col gap-4">
          <h3 className="text-2xl font-bold">
            Comprehensive Urgent Care Services for Bloomfield Residents
          </h3>
          <p className="text-lg">
            Our state-of-the-art medical facility is conveniently located near
            Bloomfield, NJ, making it easy for you and your family to access
            top-quality urgent care services. We offer a wide range of services,
            including:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <span className="font-semibold">Urgent Care</span>
              <br />
              <span className="text-gray-600">
                Same-day appointments for urgent medical issues and immediate
                care needs.
              </span>
            </li>
            <li>
              <span className="font-semibold">Children's Urgent Care</span>
              <br />
              <span className="text-gray-600">
                Specialized pediatric urgent care services for children and
                adolescents.
              </span>
            </li>
            <li>
              <span className="font-semibold">Immigration Physicals</span>
              <br />
              <span className="text-gray-600">
                Comprehensive immigration physical examinations and
                documentation.
              </span>
            </li>
            <li>
              <span className="font-semibold">Flu Shots</span>
              <br />
              <span className="text-gray-600">
                Seasonal flu vaccinations to protect you and your family.
              </span>
            </li>
            <li>
              <span className="font-semibold">Seasonal Allergy Treatment</span>
              <br />
              <span className="text-gray-600">
                Expert diagnosis and treatment for seasonal allergies and
                related symptoms.
              </span>
            </li>
            <li>
              <span className="font-semibold">
                Tick Bite & Lyme Disease Treatment
              </span>
              <br />
              <span className="text-gray-600">
                Specialized care for tick bites and comprehensive Lyme disease
                treatment.
              </span>
            </li>
            <li>
              <span className="font-semibold">Bronchitis Treatment</span>
              <br />
              <span className="text-gray-600">
                Effective treatment and management of acute and chronic
                bronchitis.
              </span>
            </li>
          </ul>
        </div>

        {/* Why Choose Us Section */}
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="flex-1 flex flex-col gap-4">
            <h3 className="text-2xl font-bold">
              Why Choose Our Urgent Care Services Near Bloomfield?
            </h3>
            <p className="text-lg">
              We know that finding the right urgent care provider is crucial.
              Here's why families in Bloomfield trust our services:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <span className="font-semibold">Personalized Care</span>
                <br />
                <span className="text-gray-600">
                  We believe in building lasting relationships with our patients
                  through unhurried consultations and clear communication.
                </span>
              </li>
              <li>
                <span className="font-semibold">Advanced Technology</span>
                <br />
                <span className="text-gray-600">
                  From modern diagnostic tools to effective treatment
                  techniques, we ensure accurate diagnoses and effective care.
                </span>
              </li>
              <li>
                <span className="font-semibold">Comfortable Environment</span>
                <br />
                <span className="text-gray-600">
                  Our facility is designed to help you feel relaxed, making
                  every visit a positive experience.
                </span>
              </li>
            </ul>
          </div>
          <div className="flex-1 flex justify-center">
            <Image
              src="/Images/portrait-smiling-child-with-braces-dentist-s-office.webp"
              alt="Happy Patient"
              width={400}
              height={300}
              className="rounded-md w-full max-w-md object-cover"
            />
          </div>
        </div>

        {/* Schedule Appointment Section */}
        <div className="flex flex-col items-center gap-4 text-center py-8">
          <h2 className="text-3xl font-bold">
            Schedule Your Appointment Today!
          </h2>
          <p className="text-lg max-w-2xl">
            We are proud to serve the communities of Bloomfield, NJ with
            high-quality, personalized urgent care services.
            <br />
            Ready to experience exceptional care? Contact us today to schedule
            your appointment!
          </p>
          <a
            href="/booking"
            className="bg-primary text-white px-6 py-3 rounded-md text-lg font-semibold hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
          >
            BOOK ONLINE
          </a>
        </div>

        {/* Map Section */}
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="flex-1">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3024.1234567890123!2d-74.27123456789012!3d40.73123456789012!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c3a8b123456789%3A0x1234567890abcdef!2sBloomfield%2C%20NJ!5e0!3m2!1sen!2sus!4v1710000000000!5m2!1sen!2sus"
              width="100%"
              height="300"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="border-0 w-full rounded-md shadow-md"
            />
          </div>
          <div className="flex-1 text-center space-y-2">
            <h3 className="text-xl font-bold">Bloomfield</h3>
            <p>
              1585 Springfield Avenue, Store #1
              <br />
              Maplewood, NJ 07040
            </p>
            <div className="text-left inline-block mx-auto">
              <h4 className="font-semibold mt-4">Hours of Operation:</h4>
              <ul className="text-sm">
                <li>Monday: 9:00 AM - 6:00 PM</li>
                <li>Tuesday: 9:00 AM - 6:00 PM</li>
                <li>Wednesday: 9:00 AM - 6:00 PM</li>
                <li>Thursday: 9:00 AM - 6:00 PM</li>
                <li>Friday: 9:00 AM - 6:00 PM</li>
                <li>Saturday: 9:00 AM - 3:30 PM</li>
                <li>Sunday: Closed</li>
              </ul>
            </div>
            <div className="flex flex-col md:flex-row gap-2 justify-center mt-4">
              <a
                href="tel:9736715500"
                className="bg-blue-100 text-primary border border-primary px-5 py-2 rounded-md text-sm hover:opacity-50 transition"
              >
                973-671-5500
              </a>
              <a
                href="/booking"
                className="bg-primary text-white px-5 py-2 rounded-md text-sm hover:from-blue-700 hover:to-cyan-700 font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                BOOK ONLINE
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
