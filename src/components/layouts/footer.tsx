"use client";
import { Mail, MapPin, Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#3E3E3E] text-white py-8 px-2 sm:px-4 md:px-8">
      <div className="mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10">
        {/* Left: Logo & About */}
        <div className="space-y-4 col-span-1">
          <div className="flex items-center gap-2 mb-2">
            <Image
              src="/Images/SmileKraft Logo - Transparent.png"
              alt="Tulip Dental Logo"
              width={160}
              height={100}
              className="w-32 sm:w-40 md:w-48 h-auto"
              loading="lazy"
              sizes="(max-width: 640px) 128px, (max-width: 768px) 160px, 192px"
              quality={95} // High quality for logo
            />
            {/* <span className="font-bold text-md md:text-2xl py-2">SMILEKRAFT DENTAL</span> */}
          </div>
          <p className="text-xs sm:text-sm text-white">
            SmileKraft Dental in Jersey City, NJ is dedicated to creating healthy, confident smiles through advanced family and cosmetic dentistry. Our caring team offers preventive care, cleanings, and fillings, along with cosmetic services like whitening, veneers, and Invisalign®. For patients needing restorative solutions, we provide implants, crowns, and bridges - all delivered with modern technology and personalized attention. Same-day emergency dental care is also available to restore comfort when urgent issues arise. Conveniently located on Martin Luther King Drive, we proudly serve Bergen-Lafayette (07304, 07305), McGinley Square (07304, 07306, 07302), Greenville (07305), Journal Square (07306), and The Heights (07306, 07307).
          </p>
          <div className="flex items-center gap-3 mt-4">
            <a href="#" onClick={(e) => e.preventDefault()}>
              <Image
                src="/Images/facebook.webp"
                alt="Facebook"
                width={24}
                height={24}
                className="w-6 h-6"
                loading="lazy"
                sizes="24px"
                quality={95} // High quality for social icons
              />
            </a>
            <a href="#" onClick={(e) => e.preventDefault()}>
              <Image
                src="/Images/instagram.webp"
                alt="Instagram"
                width={24}
                height={24}
                className="w-6 h-6"
                loading="lazy"
                sizes="24px"
                quality={95} // High quality for social icons
              />
            </a>
            <a href="#" onClick={(e) => e.preventDefault()}>
              <Image
                src="/Images/twitter.webp"
                alt="Twitter"
                width={24}
                height={24}
                className="w-6 h-6"
                loading="lazy"
                sizes="24px"
                quality={95} // High quality for social icons
              />
            </a>
          </div>
        </div>

        {/* Middle: Services Columns */}
        <div className="col-span-1 sm:col-span-1 lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div>
            <h4 className="font-semibold mb-3 text-base sm:text-lg">
              Services
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li>
                <Link
                  href="/services/emergency-dentistry-jerseycity-nj"
                  className="hover:underline"
                >
                  Emergency Dentistry
                </Link>
              </li>
              <li>
                <Link
                  href="/services/root-canal-treatment-jerseycity-nj"
                  className="hover:underline"
                >
                  Root Canal
                </Link>
              </li>
              <li>
                <Link
                  href="/services/oral-surgery-jerseycity-nj"
                  className="hover:underline"
                >
                  Oral Surgery
                </Link>
              </li>
              <li>
                <Link
                  href="/services/cosmetic-dentistry-maplewood-nj"
                  className="hover:underline"
                >
                  Cosmetic Dentistry
                </Link>
              </li>
              <li>
                <Link
                  href="/services/dental-fillings-jerseycity-nj"
                  className="hover:underline"
                >
                  Dental Fillings
                </Link>
              </li>
              <li>
                <Link
                  href="/services/dental-implants-jerseycity-nj"
                  className="hover:underline"
                >
                  Dental Implants
                </Link>
              </li>
              {/* <li><Link href="/services/orthodontics" className="hover:underline">Orthodontics</Link></li>
              <li><Link href="/services/crowns-and-bridges" className="hover:underline">Crowns and Bridges</Link></li>
              <li><Link href="/services/dental-emergencies" className="hover:underline">Dental Emergencies</Link></li>
              <li><Link href="/services/tooth-extraction" className="hover:underline">Tooth Extraction</Link></li> */}
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-3 text-base sm:text-lg">
              Importance
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li>
                <Link
                  href="/about-smilekraft-dental-jerseycity-nj"
                  className="hover:underline"
                >
                  About us
                </Link>
              </li>
              <li>
                <Link href="/dental-blog" className="hover:underline">
                  Blogs
                </Link>
              </li>
              <li>
                <Link href="/terms-and-conditions" className="hover:underline">
                  Terms and Conditions
                </Link>
              </li>
              <li>
                <Link href="/privacy-policy" className="hover:underline">
                  Privacy Policy
                </Link>
              </li>
              {/* <li><Link href="/accessibility" className="hover:underline">Accessibility</Link></li> */}
              <li>
                <Link
                  href="/contact-smilekraft-dental-jerseycity-nj"
                  className="hover:underline"
                >
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/sitemap-page" className="hover:underline">
                  Site map
                </Link>
              </li>

              {/* <li><Link href="/services/endodontics" className="hover:underline">Endodontics</Link></li>
              <li><Link href="/services/same-day-dentistry" className="hover:underline">Same-Day Dentistry</Link></li> 
              <li><Link href="/services/painless-treatment" className="hover:underline">Painless Treatment</Link></li> 
              <li><Link href="/services/perio-protect" className="hover:underline">Perio Protect</Link></li>
              <li><Link href="/services/halitosis" className="hover:underline">Halitosis</Link></li> */}
            </ul>
          </div>
        </div>

        {/* Right: Contact Info */}
        <div className="space-y-4 col-span-1">
          <h4 className="font-semibold mb-3 text-base sm:text-lg">
            Contact Us
          </h4>
          <div className="text-xs sm:text-sm text-gray-200">
            <a
              href="https://maps.app.goo.gl/oHDT9P2G77YfBgt29"
              target="_blank"
              rel="noopener noreferrer"
              className="mb-2 text-sm text-[#FFFFFF] flex gap-2 items-start underline"
            >
              <MapPin size={16} className="mt-0.5" />
              543 Martin Luther King Drive, Jersey City NJ 07304
            </a>

            <p className="mb-2 text-sm text-[#FFFFFF] flex gap-2 items-center">
              <Phone size={16} />{" "}
              <a href="tel:201-731-2700" className="underline">
                201-731-2700
              </a>
            </p>
            <p className="mb-2 text-sm text-[#FFFFFF] flex gap-2 items-center">
              <Mail size={16} />{" "}
              <a
                href="mailto:jerseycity@smilekraftnj.com"
                className="underline"
              >
                jerseycity@smilekraftnj.com
              </a>
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Row */}
      <div className="border-t border-white/20 mt-8 pt-4 flex flex-col md:flex-row items-center justify-between text-xs text-gray-300 gap-2">
        <div className="flex items-center text-white">
          {/* <div className="flex items-center"> */}
          <span>
            &copy; {new Date().getFullYear()} SmilesKraft Dental. All rights reserved.
          </span>
          {/* <span className="hidden md:inline"></span> */}
          {/* <span> */}
        </div>
        <div className="flex items-center text-white">
          <span>
            Designed by{" "}
            <a
              href="https://clearconceptsolutions.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-300"
            >
              Clear Concept Solutions
            </a>
          </span>
          {/* </div> */}
        </div>
        <div className="flex flex-wrap gap-2 sm:gap-4 justify-center md:justify-end w-full md:w-auto text-white">
          <Link href="/privacy-policy" className="hover:underline">
            Privacy Policy
          </Link>
          <Link href="/terms-and-conditions" className="hover:underline">
            Terms & Conditions
          </Link>
          <Link href="/accessibility" className="hover:underline">
            Accessibility
          </Link>
          <Link href="/contact-smilekraft-dental-jerseycity-nj" className="hover:underline">
            Contact Us
          </Link>
        </div>
      </div>
    </footer>
  );
}
