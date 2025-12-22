import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import clsx from "clsx";
import { generatePageMetadata } from "@/lib/metadata";

export const metadata: Metadata = generatePageMetadata("services");

const services = [
  {
    title: "Emergency Dentistry",
    image: "/Images/emergency-dentistry.webp",
    alt: "Emergency dental care services for urgent oral health issues and dental emergencies",
    link: "/services/emergency-dentistry-jerseycity-nj",
  },
  {
    title: "Root Canal",
    image: "/Images/root-canal-treatment-jerseycity.webp",
    alt: "Root Canal Specialists at SmileKraft Dental Jersey City",
    link: "/services/root-canal-treatment-jerseycity-nj",
  },
  {
    title: "Oral Surgery",
    image: "/Images/oral-surgery.webp",
    alt: "Oral Surgery at SmileKraft Dental Jersey City",
    link: "/services/oral-surgery-jerseycity-nj",
  },
  {
    title: "Cosmetic Dentistry",
    image: "/Images/cosmetic-dentistry.webp",
    alt: "Cosmetic Dentistry at SmileKraft Dental Jersey City",
    link: "/services/cosmetic-dentistry-maplewood-nj",
  },
  {
    title: "Dental Fillings",
    image: "/Images/dental-fillings.webp",
    alt: "Dental Fillings at SmileKraft Dental Jersey City",
    link: "/services/dental-fillings-jerseycity-nj",
  },
  {
    title: "Dental Implants",
    image: "/Images/dental-implant.webp",
    alt: "Dental Implants at SmileKraft Dental Jersey City",
    link: "/services/dental-implants-jerseycity-nj",
  },
  {
    title: "Orthodontics",
    image: "/Images/Orthodontics.webp",
    alt: "Orthodontics treatment at SmileKraft Dental Jersey City",
    link: "/services/orthodontics-jerseycity-nj",
  },
  {
    title: "Crowns and Bridges",
    image: "/Images/Dental Crown Bridge.webp",
    alt: "Dental crowns & bridges at SmileKraft Dental Jersey City",
    link: "/services/crowns-and-bridges-jerseycity-nj",
  },
  {
    title: "Dental Emergencies",
    image: "/Images/dental-emergency.webp",
    alt: "Dental emergencies at SmileKraft Dental Jersey City",
    link: "/services/dental-emergencies-jerseycity-nj",
  },
  {
    title: "Tooth Extraction",
    image: "/Images/tooth-extraction.webp",
    alt: "Tooth extractions at SmileKraft Dental Jersey City",
    link: "/services/tooth-extraction-jerseycity-nj",
  },
  {
    title: "Whitening & Veneers",
    image: "/Images/whitening-and-veneers.webp",
    alt: "Teeth Whitening & Veneers at SmileKraft Dental Jersey City",
    link: "/services/teeth-whitening-and-veneers-jerseycity-nj",
  },
  {
    title: "Invisalign",
    image: "/Images/Invisalign.webp",
    alt: "Invisalign treatment at SmileKraft Dental Jersey City",
    link: "/services/invisalign-clear-aligners-jerseycity-nj",
  },
  {
    title: "Kids & Children Dentistry",
    image: "/Images/kids-dentistry.webp",
    alt: "Kids & Children’s Dentistry at SmileKraft Dental Jersey City",
    link: "/services/kids-and-children-dentistry-jerseycity-nj",
  },
  {
    title: "Permanent Teeth Replacement",
    image: "/Images/permanenet-teeth-replacement.webp",
    alt: "Permanent Teeth Replacement at SmileKraft Dental Jersey City",
    link: "/services/permanent-teeth-replacement-jerseycity-nj",
  },
  {
    title: "Sports Dentistry",
    image: "/Images/Sports Dentistry.webp",
    alt: "Sports Dentistry at SmileKraft Dental Jersey City",
    link: "/services/sports-dentistry-jerseycity-nj",
  },
  {
    title: "Wisdom Teeth",
    image: "/Images/wisdom-teeth.webp",
    alt: "Wisdom teeth removal at SmileKraft Dental Jersey City",
    link: "/services/wisdom-teeth-removal-jerseycity-nj",
  },
  {
    title: "Endodontics",
    image: "/Images/enthodontics.webp",
    alt: "Endodontics at SmileKraft Dental Jersey City",
    link: "/services/endodontics-jerseycity-nj",
  },
  {
    title: "Same-day Dentistry",
    image: "/Images/same-day-dentistry.webp",
    alt: "Same Day Dentistry at SmileKraft Dental Jersey City",
    link: "/services/same-day-dentistry-jerseycity-nj",
  },
  {
    title: "Painless Treatment",
    image: "/Images/painless-treatment.webp",
    alt: "Painless Dentistry at SmileKraft Dental Jersey City",
    link: "/services/painless-dental-treatment-jerseycity-nj",
  },
  {
    title: "Perio Protect",
    image: "/Images/perio-protect.webp",
    alt: "Perio Protect gum disease treatment at SmileKraft Dental Jersey City",
    link: "/services/perio-protect-jerseycity-nj",
  },
  {
    title: "Halitosis",
    image: "/Images/Halitosis.webp",
    alt: "Halitosis treatment at SmileKraft Dental Jersey City",
    link: "/services/halitosis-treatment-jerseycity-nj",
  },
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white pb-8 sm:pb-12">
      {/* Header Section with blue background */}
      <div className="w-full details-page-header-section py-8 sm:py-12 px-4 md:px-0 mb-8 sm:mb-12">
        <div className="text-center">
          <h1>Complete Smile Care in Jersey City, NJ</h1>
          <h2 className="text-center">
            Personalized Preventive, Cosmetic & Restorative Solutions {" "}
          </h2>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Responsive Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 2xl:grid-cols-5 gap-4 sm:gap-6 lg:gap-8">
          {services.map((service) => (
            <div
              key={service.title}
              className="relative bg-white rounded-xl shadow-lg overflow-hidden flex flex-col items-center w-full transition-transform hover:-translate-y-2 hover:shadow-xl border border-blue-100 h-64 sm:h-72 lg:h-80"
            >
              <div className="w-full h-2/3 relative">
                <Image
                  src={service.image}
                  alt={service.alt}
                  fill
                  className="object-cover object-center rounded-t-xl"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, (max-width: 1536px) 25vw, 20vw"
                  priority={services.indexOf(service) < 5}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-secondary/20 to-transparent" />
              </div>
              <div className="flex-1 flex flex-col justify-end items-center p-3 sm:p-4 w-full">
                <h2 className="text-sm sm:text-base lg:text-lg font-bold text-primary mb-2 text-center leading-tight">
                  {service.title}
                </h2>
                <Link
                  href={service.link}
                  className=" flex flex-col bg-primary hover:bg-secondary/80 text-white rounded-lg px-1 md:px-4 py-3 text-sm font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
                >
                  Learn More
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
