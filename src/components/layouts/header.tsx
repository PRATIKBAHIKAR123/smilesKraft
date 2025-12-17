"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import BookingModal from "@/app/booking/bookingScreen";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [isServicesAreasOpen, setIsServicesAreasOpen] = useState(false);
  const [isUrgentCareOpen, setIsUrgentCareOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile menu when clicking outside
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMobileMenuOpen]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    setIsServicesOpen(false); // Close services submenu when toggling main menu
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
    setIsServicesOpen(false);
  };

  const toggleServices = () => {
    setIsServicesOpen(!isServicesOpen);
  };

  const toggleServicesAreas = () => {
    setIsServicesAreasOpen(!isServicesAreasOpen);
  };

  const toggleUrgentCare = () => {
    setIsUrgentCareOpen(!isUrgentCareOpen);
  };

  return (
    <header
      className={`fixed top-0 w-full z-50 bg-white shadow transition-all duration-300 ${
        isScrolled ? "py-2 lg:py-4" : "py-3 lg:py-2"
      }`}
    >
      <div className=" mx-auto flex items-center justify-between px-1 lg:px-8">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src="/Images/SmileKraft Dental-Blue.png"
            alt="SmileKraft Dental Logo"
            width={isScrolled ? 180 : 220}
            height={isScrolled ? 90 : 110}
            className="hidden lg:block transition-all duration-300"
            priority
            sizes="(max-width: 1024px) 0px, 220px"
            quality={95} // High quality for logo
          />
          {/* <Image
            src="/Images/SmileKraft Dental-Blue-small.png"
            alt="SmileKraft Dental Logo"
            width={isScrolled ? 38 : 52}
            height={isScrolled ? 24 : 38}
            className="block lg:hidden transition-all duration-300"
            priority
            sizes="(max-width: 1024px) 42px, 0px"
            quality={95} // High quality for logo
          /> */}
          <span className="text-primary font-bold text-[10px] block lg:hidden text-center">
            SmileKraft Dental
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex gap-6 text-sm font-medium text-gray-700">
          <Link href="/" className="hover:text-primary transition">
            Home
          </Link>
          <Link
            href="/about-smilekraft-dental-jerseycity-nj"
            className="hover:text-primary transition"
          >
            About
          </Link>
          <Link href="/providers" className="hover:text-primary transition">
            Providers
          </Link>

          {/* Services with Desktop Dropdown */}
          <div className="relative group">
            <Link
              href="/services"
              className="hover:text-primary transition flex items-center gap-1"
            >
              Services
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </Link>

            {/* Desktop Dropdown */}
            <div className="absolute -left-38 mt-2 w-[100vh] max-w-5xl bg-white border shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-40 rounded-lg">
              <div className="grid grid-cols-4 gap-6 p-6 text-sm">
                {[
                  {
                    name: "Emergency Dentistry",
                    link: "emergency-dentistry-jerseycity-nj",
                  },
                  {
                    name: "Root Canal",
                    link: "root-canal-treatment-jerseycity-nj",
                  },
                  { name: "Oral Surgery", link: "oral-surgery-jerseycity-nj" },
                  {
                    name: "Cosmetic Dentistry",
                    link: "cosmetic-dentistry-jerseycity-nj",
                  },
                  {
                    name: "Dental Fillings",
                    link: "dental-fillings-jerseycity-nj",
                  },
                  {
                    name: "Dental Implants",
                    link: "dental-implants-jerseycity-nj",
                  },
                  { name: "Orthodontics", link: "orthodontics-jerseycity-nj" },
                  {
                    name: "Crowns and Bridges",
                    link: "crowns-and-bridges-jerseycity-nj",
                  },
                  {
                    name: "Dental Emergencies",
                    link: "dental-emergencies-jerseycity-nj",
                  },
                  {
                    name: "Tooth Extraction",
                    link: "tooth-extraction-jerseycity-nj",
                  },
                  {
                    name: "Whitening & Veneers",
                    link: "teeth-whitening-and-veneers-jerseycity-nj",
                  },
                  {
                    name: "Invisalign",
                    link: "invisalign-clear-aligners-jerseycity-nj",
                  },
                  {
                    name: "Kids & Children Dentistry",
                    link: "kids-and-children-dentistry-jerseycity-nj",
                  },
                  {
                    name: "Permanent Teeth Replacement",
                    link: "permanent-teeth-replacement-jerseycity-nj",
                  },
                  {
                    name: "Sports Dentistry",
                    link: "sports-dentistry-jerseycity-nj",
                  },
                  {
                    name: "Wisdom Teeth",
                    link: "wisdom-teeth-removal-jerseycity-nj",
                  },
                  { name: "Endodontics", link: "endodontics-jerseycity-nj" },
                  {
                    name: "Same-Day Dentistry",
                    link: "same-day-dentistry-jerseycity-nj",
                  },
                  {
                    name: "Painless Treatment",
                    link: "painless-dental-treatment-jerseycity-nj",
                  },
                  { name: "Perio Protect", link: "perio-protect-jerseycity-nj" },
                  {
                    name: "Halitosis",
                    link: "halitosis-treatment-jerseycity-nj",
                  },
                  {
                    name: "Dentures",
                    link: "dentures-jerseycity-nj",
                  },
                ].map((service, index) => (
                  <Link
                    key={index}
                    href={`/services/${service.link}`}
                    className="text-gray-700 hover:text-primary hover:underline transition"
                  >
                    {service.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <Link
            href="/patient-reviews-jerseycity-nj"
            className="hover:text-primary transition"
          >
            Reviews
          </Link>
          <Link href="/dental-blog" className="hover:text-primary transition">
            Blogs
          </Link>
          <Link
            href="/contact-smilekraft-dental-jerseycity-nj"
            className="hover:text-primary transition"
          >
            Contact
          </Link>
          <div className="relative group">
            <span className="hover:text-primary transition flex items-center gap-1 cursor-pointer">
              Services Areas
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </span>

            {/* Desktop Dropdown */}
            <div className="absolute -left-5 mt-2 w-50 max-w-5xl bg-white border shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-40 rounded-lg">
              <div className="grid grid-cols-1 gap-6 p-6 text-sm">
                {[
                  "Bergen-Lafayette, NJ",
                  "McGinley Square, NJ",
                  "Greenville, NJ",
                  "Journal Square, NJ",
                  " The Heights, NJ",
                ].map((service, index) => {
                  let slug = "";
                  if (service === "Bergen-Lafayette, NJ") {
                    slug = "bergenlafayette-nj-dentist-near-you";
                  } else if (service === "McGinley Square, NJ") {
                    slug = "mcginley-square-nj-dentist-near-you";
                  }
                  if (service === "Greenville, NJ") {
                    slug = "greenville-nj-dentist-near-you";
                  }
                  if (service === "Journal Square, NJ") {
                    slug = "journal-square-nj-dentist-near-you";
                  }
                  if (service === " The Heights, NJ") {
                    slug = "the-heights-nj-dentist-near-you";
                  }

                  return slug ? (
                    <Link
                      key={index}
                      href={`/service-areas/${slug}`}
                      className="text-gray-700 hover:text-primary hover:underline transition"
                    >
                      {service}
                    </Link>
                  ) : (
                    <span key={index} className="text-gray-500">
                      {service}
                    </span>
                  );
                })}
              </div>
            </div>
          </div>
          {/* <div className="relative group">
            <span className="hover:text-primary transition flex items-center gap-1 cursor-pointer">
              Urgent Care
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </span>

            <div className="absolute -left-5 mt-2 w-68 max-w-5xl bg-white border shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-40 rounded-lg">
              <div className="grid grid-cols-1 gap-3 p-6 text-sm">
                {[
                  {
                    name: "Urgent Care",
                    slug: "urgent-care-in-bloomfield-nj",
                  },
                  {
                    name: "Children's Urgent Care",
                    slug: "childrens-urgent-care-in-bloomfield-nj",
                  },
                  {
                    name: "Flu Shots",
                    slug: "flu-shots-in-bloomfield-nj",
                  },
                  {
                    name: "Seasonal Allergy Treatment",
                    slug: "seasonal-allergy-treatment-in-bloomfield-nj",
                  },
                  {
                    name: "Immigration Physicals",
                    slug: "immigration-physicals-in-bloomfield-nj",
                  },

                  {
                    name: "Tick Bite & Lyme Disease Treatment",
                    slug: "tick-bite-lyme-disease-treatment-in-bloomfield-nj",
                  },
                  {
                    name: "Bronchitis Treatment",
                    slug: "bronchitis-treatment-in-bloomfield-nj",
                  },
                ].map((service, index) => (
                  <Link
                    key={index}
                    href={`/urgent-care-services/${service.slug}`}
                    className="text-gray-700 hover:text-primary hover:underline transition py-1"
                  >
                    {service.name}
                  </Link>
                ))}
              </div>
            </div>
          </div> */}
        </nav>

        {/* Desktop Buttons */}
        <div className="hidden lg:flex gap-3">
          <a
            href="tel:201-731-2700"
            className="border border-primary text-primary rounded-lg px-4 py-3 hover:bg-blue-50 text-sm font-medium transition"
          >
            201-731-2700
          </a>
          <button
            onClick={() => setIsBookingOpen(true)}
            className="bg-primary hover:bg-secondary/80 text-white rounded-lg px-4 py-3 text-sm font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
          >
            Book Online
          </button>
        </div>

        {/* Mobile Buttons and Menu Toggle */}
        <div className="flex lg:hidden items-center gap-2">
          {/* Mobile Action Buttons */}
          <a
            href="tel:201-731-2700"
            className="border border-primary text-primary rounded-lg px-4 py-3 hover:bg-blue-50 text-xs font-medium transition"
          >
            201-731-2700
          </a>
          <button
            onClick={() => setIsBookingOpen(true)}
            className="bg-primary text-white rounded-lg px-4 py-3 hover:from-blue-700 hover:to-cyan-700 text-xs font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
          >
            Book Online
          </button>

          {/* Hamburger Menu Button */}
          <button
            onClick={toggleMobileMenu}
            className="ml-2 p-2 rounded-lg hover:bg-gray-100 transition"
            aria-label="Toggle menu"
          >
            <div className="w-6 h-6 flex flex-col justify-center items-center">
              <span
                className={`block w-5 h-0.5 bg-gray-600 transition-all duration-300 ${
                  isMobileMenuOpen ? "rotate-45 translate-y-1" : ""
                }`}
              />
              <span
                className={`block w-5 h-0.5 bg-gray-600 transition-all duration-300 mt-1 ${
                  isMobileMenuOpen ? "opacity-0" : ""
                }`}
              />
              <span
                className={`block w-5 h-0.5 bg-gray-600 transition-all duration-300 mt-1 ${
                  isMobileMenuOpen ? "-rotate-45 -translate-y-1" : ""
                }`}
              />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={closeMobileMenu}
        />
      )}

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-80 bg-white shadow-lg transform transition-transform duration-300 ease-in-out z-50 lg:hidden ${
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Mobile Menu Header */}
          <div className="flex items-center justify-between p-4 border-b">
            <Image
              src="/Images/SmileKraft Dental-Blue.png"
              alt="Tulip Dental Logo"
              width={138}
              height={40}
              loading="lazy"
              sizes="138px"
              quality={95} // High quality for logo
            />
            <button
              onClick={closeMobileMenu}
              className="p-2 rounded-lg hover:bg-gray-100 transition"
              aria-label="Close menu"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          {/* Mobile Menu Items */}
          <nav className="flex-1 overflow-y-auto">
            <div className="py-2">
              <Link
                href="/"
                className="block px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-primary transition border-b"
                onClick={closeMobileMenu}
              >
                Home
              </Link>
              <Link
                href="/about-smilekraft-dental-jerseycity-nj"
                className="block px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-primary transition border-b"
                onClick={closeMobileMenu}
              >
                About
              </Link>
              <Link
                href="/providers"
                className="block px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-primary transition border-b"
                onClick={closeMobileMenu}
              >
                Providers
              </Link>

              {/* Services with Mobile Submenu */}
              <div className="border-b">
                <button
                  onClick={toggleServices}
                  className="w-full flex items-center justify-between px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-primary transition"
                >
                  Services
                  <svg
                    className={`w-4 h-4 transform transition-transform ${
                      isServicesOpen ? "rotate-180" : ""
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>

                {/* Services Submenu */}
                {isServicesOpen && (
                  <div className="bg-gray-50 px-4 py-2">
                    <div className="grid grid-cols-2 gap-3 mt-2 text-sm">
                      {[
                        {
                          name: "Emergency Dentistry",
                          link: "emergency-dentistry-jerseycity-nj",
                        },
                        {
                          name: "Root Canal",
                          link: "root-canal-treatment-jerseycity-nj",
                        },
                        {
                          name: "Oral Surgery",
                          link: "oral-surgery-jerseycity-nj",
                        },
                        {
                          name: "Cosmetic Dentistry",
                          link: "cosmetic-dentistry-jerseycity-nj",
                        },
                        {
                          name: "Dental Fillings",
                          link: "dental-fillings-jerseycity-nj",
                        },
                        {
                          name: "Dental Implants",
                          link: "dental-implants-jerseycity-nj",
                        },
                        {
                          name: "Orthodontics",
                          link: "orthodontics-jerseycity-nj",
                        },
                        {
                          name: "Crowns and Bridges",
                          link: "crowns-and-bridges-jerseycity-nj",
                        },
                        {
                          name: "Dental Emergencies",
                          link: "dental-emergencies-jerseycity-nj",
                        },
                        {
                          name: "Tooth Extraction",
                          link: "tooth-extraction-jerseycity-nj",
                        },
                        {
                          name: "Whitening & Veneers",
                          link: "teeth-whitening-and-veneers-jerseycity-nj",
                        },
                        {
                          name: "Invisalign",
                          link: "invisalign-clear-aligners-jerseycity-nj",
                        },
                        {
                          name: "Kids & Children Dentistry",
                          link: "kids-and-children-dentistry-jerseycity-nj",
                        },
                        {
                          name: "Permanent Teeth Replacement",
                          link: "permanent-teeth-replacement-jerseycity-nj",
                        },
                        {
                          name: "Sports Dentistry",
                          link: "sports-dentistry-jerseycity-nj",
                        },
                        {
                          name: "Wisdom Teeth",
                          link: "wisdom-teeth-removal-jerseycity-nj",
                        },
                        {
                          name: "Endodontics",
                          link: "endodontics-jerseycity-nj",
                        },
                        {
                          name: "Same-Day Dentistry",
                          link: "same-day-dentistry-jerseycity-nj",
                        },
                        {
                          name: "Painless Treatment",
                          link: "painless-dental-treatment-jerseycity-nj",
                        },
                        {
                          name: "Perio Protect",
                          link: "perio-protect-jerseycity-nj",
                        },
                        {
                          name: "Halitosis",
                          link: "halitosis-treatment-jerseycity-nj",
                        },
                        {
                    name: "Dentures",
                    link: "dentures-jerseycity-nj",
                  }
                      ].map((service, index) => (
                        <Link
                          key={index}
                          href={`/services/${service.link}`}
                          onClick={closeMobileMenu}
                          className="text-gray-600 hover:text-primary hover:underline transition"
                        >
                          {service.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              <Link
                href="/patient-reviews-jerseycity-nj"
                className="block px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-primary transition border-b"
                onClick={closeMobileMenu}
              >
                Reviews
              </Link>
              <Link
                href="/dental-blog"
                className="block px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-primary transition border-b"
                onClick={closeMobileMenu}
              >
                Blogs
              </Link>
              <Link
                href="/contact-smilekraft-dental-jerseycity-nj"
                className="block px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-primary transition border-b"
                onClick={closeMobileMenu}
              >
                Contact
              </Link>
              <div className="border-b">
                <button
                  onClick={toggleServicesAreas}
                  className="w-full flex items-center justify-between px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-primary transition"
                >
                  Service Areas
                  <svg
                    className={`w-4 h-4 transform transition-transform ${
                      isServicesAreasOpen ? "rotate-180" : ""
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>

                {/* Services Submenu */}
                {isServicesAreasOpen && (
                  <div className="bg-gray-50 px-4 py-2">
                    <div className="grid grid-cols-2 gap-3 mt-2 text-sm">
                      {[
                        "Bergen-Lafayette, NJ",
                        "McGinley Square, NJ",
                        "Greenville, NJ",
                        "Journal Square, NJ",
                        " The Heights, NJ",
                      ].map((service, index) => {
                        let slug = "";
                        if (service === "Bergen-Lafayette, NJ") {
                          slug = "bergenlafayette-nj-dentist-near-you";
                        } else if (service === "McGinley Square, NJ") {
                          slug = "mcginley-square-nj-dentist-near-you";
                        }
                        if (service === "Greenville, NJ") {
                          slug = "greenville-nj-dentist-near-you";
                        }
                        if (service === "Journal Square, NJ") {
                          slug = "journal-square-nj-dentist-near-you";
                        }
                        if (service === " The Heights, NJ") {
                          slug = "the-heights-nj-dentist-near-you";
                        }
                        return slug ? (
                          <Link
                            key={index}
                            href={`/service-areas/${slug}`}
                            onClick={closeMobileMenu}
                            className="text-gray-600 hover:text-primary hover:underline transition"
                          >
                            {service}
                          </Link>
                        ) : (
                          <span key={index} className="text-gray-500">
                            {service}
                          </span>
                        );
                      })}
                    </div>
                  </div>
                )}
              </div>
              {/* <div className="border-b">
                <button
                  onClick={toggleUrgentCare}
                  className="w-full flex items-center justify-between px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-primary transition"
                >
                  Urgent Care
                  <svg
                    className={`w-4 h-4 transform transition-transform ${
                      isUrgentCareOpen ? "rotate-180" : ""
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>

                {isUrgentCareOpen && (
                  <div className="bg-gray-50 px-4 py-2">
                    <div className="grid grid-cols-1 gap-2 mt-2 text-sm">
                      {[
                        {
                          name: "Urgent Care",
                          slug: "urgent-care-in-bloomfield-nj",
                        },
                        {
                          name: "Children's Urgent Care",
                          slug: "childrens-urgent-care-in-bloomfield-nj",
                        },
                        {
                          name: "Immigration Physicals",
                          slug: "immigration-physicals-in-bloomfield-nj",
                        },
                        {
                          name: "Flu Shots",
                          slug: "flu-shots-in-bloomfield-nj",
                        },
                        {
                          name: "Seasonal Allergy Treatment",
                          slug: "seasonal-allergy-treatment-in-bloomfield-nj",
                        },
                        {
                          name: "Tick Bite & Lyme Disease Treatment",
                          slug: "tick-bite-lyme-disease-treatment-in-bloomfield-nj",
                        },
                        {
                          name: "Bronchitis Treatment",
                          slug: "bronchitis-treatment-in-bloomfield-nj",
                        },
                      ].map((service, index) => (
                        <Link
                          key={index}
                          href={`/urgent-care-services/${service.slug}`}
                          onClick={closeMobileMenu}
                          className="text-gray-600 hover:text-primary hover:underline transition py-1"
                        >
                          {service.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div> */}
            </div>
          </nav>
        </div>
      </div>
      <BookingModal open={isBookingOpen} setOpen={setIsBookingOpen} />
    </header>
  );
}
