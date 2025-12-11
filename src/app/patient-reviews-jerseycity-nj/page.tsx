import type { Metadata } from "next";
import Image from "next/image";
import clsx from "clsx";
import { generatePageMetadata } from "@/lib/metadata";

export const metadata: Metadata = generatePageMetadata(
  "patient-reviews-maplewood-nj"
);

const reviews = [
  {
    name: "Sarah D.",
    date: "Jul 10, 2025",
    rating: 5,
    text: "I’ve always been nervous about going to the dentist, but the team here completely changed that. Everyone was welcoming, the office was spotless, and the treatment was gentle. I finally feel confident about keeping up with regular care.",
    image: "/Images/836.webp",
  },
  {
    name: "Monica T.",
    date: "Apr 30, 2025",
    rating: 5,
    text: "When I needed urgent help with a broken tooth, SmileKraft got me in the same day. The dentist explained everything clearly and the repair was quick and painless. Grateful to have this office so close by.",
    image: "/Images/837.webp",
  },
  {
    name: "Joseph T. ",
    date: "Mar 04, 2025",
    rating: 4,
    text: "My kids actually look forward to checkups now. The staff is wonderful with children - patient, caring, and fun. They make visits stress-free for parents too!",
    image: "/Images/836.webp",
  },
  {
    name: "Timothy H.",
    date: "Feb 14, 2025",
    rating: 5,
    text: "Dr. Manmeet Arora did an amazing job with my veneers. The results look so natural, and I get compliments all the time. The process was smooth from consultation to final placement.",
    image: "/Images/837.webp",
  },
  {
    name: "Jennifer P.",
    date: "Jan 19, 2025",
    rating: 5,
    text: "Professional, efficient, and thorough! I came in for a cleaning and left with great advice for improving my home routine. The hygienist was gentle, and the dentist checked in to make sure I was comfortable.",
    image: "/Images/836.webp",
  },
  {
    name: "Esther B.",
    date: "Dec 22, 2024",
    rating: 5,
    text: "From the front desk to the dental chair, everything was top-notch. The staff is kind and attentive, and the technology they use is impressive. I highly recommend SmileKraft for anyone in Jersey City.",
    image: "/Images/837.webp",
  },
];

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex items-center mb-2">
      {[...Array(5)].map((_, i) => (
        <svg
          key={i}
          className={clsx(
            "w-5 h-5",
            i < rating ? "text-yellow-400" : "text-gray-300"
          )}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.967a1 1 0 00.95.69h4.175c.969 0 1.371 1.24.588 1.81l-3.38 2.455a1 1 0 00-.364 1.118l1.287 3.966c.3.922-.755 1.688-1.54 1.118l-3.38-2.454a1 1 0 00-1.175 0l-3.38 2.454c-.784.57-1.838-.196-1.54-1.118l1.287-3.966a1 1 0 00-.364-1.118L2.05 9.394c-.783-.57-.38-1.81.588-1.81h4.175a1 1 0 00.95-.69l1.286-3.967z" />
        </svg>
      ))}
    </div>
  );
}

export default function ReviewsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white pb-12">
      {/* Header Section */}
      <div className="details-page-header-section">
        <h1>Hear From Our Happy Patients About The SmileKraft Dental Experience</h1>
        <h2>Patient Testimonials from Jersey City & Surrounding Areas</h2>
      </div>
      <div className="max-w-7xl mt-10 mx-auto px-2 sm:px-4 md:px-8">
        <h2 className="text-center text-lg sm:text-xl font-semibold mb-8">
          Patient Reviews
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
          {reviews.map((review, idx) => (
            <div
              key={review.name + review.date}
              className="relative bg-white rounded-3xl shadow-xl overflow-hidden flex flex-col items-center w-full transition-transform hover:-translate-y-2 hover:shadow-2xl border border-teal-100 h-72 sm:h-80 md:h-80 lg:h-80 xl:h-80 mx-auto"
              style={{ minWidth: 0 }}
            >
              <div className="flex-1 flex flex-col justify-between items-center p-4 sm:p-6 w-full">
                <div className="mb-3 flex justify-center w-full">
                  <StarRating rating={review.rating} />
                </div>
                <p className="text-sm sm:text-base  mb-1 leading-relaxed flex-1 flex ">
                  {review.text}
                </p>
                <div className="mt-auto text-xs sm:text-sm text-gray-500 text-center w-full">
                  <span className="font-semibold">{review.name}</span> |{" "}
                  {review.date}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
