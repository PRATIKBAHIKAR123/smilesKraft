"use client";
import { CheckCircle } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import BookingModal from "@/app/booking/bookingScreen";

export default function OffersPage() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  return (
    <div className="w-full">
      {/* Header Section */}
      <div className="details-page-header-section flex flex-col items-center justify-center">
        <h1>Transform Your Smile with $299 Whitening</h1>
        <h2>
          Professional Whitening at the Right Price | SmileKraft Dental | Trusted Cosmetic Dentist
        </h2>
      </div>

      {/* Welcome Offer Section */}
      <div className="max-w-7xl mx-auto text-center py-10 px-4">
        <h3 className="text-xl font-bold mb-2">
          Limited-Time Whitening Special Designed for Your Best Smile{" "}
        </h3>
        <p className="mb-2">
          Want a brighter, more confident smile without overspending? SmileKraft Dental in Jersey City is offering a limited-time $299 professional whitening treatment, designed for both new and returning patients. Using advanced, enamel-safe technology, our team delivers same-day results in a single visit - with no hidden fees and complete comfort from start to finish. Whether you’re dealing with coffee stains, discoloration, or just want a refresh, this whitening special makes it easy to love your smile again.
        </p>
        <p className="mb-2 p-4">
          We proudly serve patients from Jersey City neighborhoods including The Heights (07306, 07307), Greenville (07305), McGinley Square (07304, 07306, 07302), and Bergen-Lafayette (07304, 07305). If you’ve been searching for “teeth whitening near me” or “affordable whitening in Jersey City,” SmileKraft Dental is your go-to choice for safe, effective results.
        </p>

        <button
          onClick={() => setIsBookingOpen(true)}
          className="bg-secondary/90 text-white px-6 py-2 rounded font-semibold shadow-lg hover:shadow-xl hover:bg-primary duration-300 transform hover:scale-105"
        >
          Claim Your Special Offer Now
        </button>
      </div>

      {/* Main Offer Section */}
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-8 py-8 px-4">
        <div className="w-full md:w-1/2 flex justify-center">
          <Image
            src="/Images/offers.webp"
            alt="Teeth Whitening"
            width={400}
            height={350}
            className="rounded-lg shadow-lg object-cover w-full h-auto max-h-[350px]"
          />
        </div>
        <div className="w-full md:w-1/2">
          <h2 className="text-xl md:text-2xl font-bold mb-4 ">
            What to Expect with Your $299 Whitening Treatment{" "}
          </h2>
          <ul className="space-y-4 text-left">
            <li className="flex items-start gap-3">
              <span className="text-primary mt-1">
                <CheckCircle />
              </span>
              <div>
                <h3 className="text-base font-semibold">
                  Advanced Whitening Technology
                </h3>
                <p>
                  We use modern whitening systems that target surface stains and deeper discoloration while keeping enamel protected. The result is a safe, effective, and comfortable experience.
                </p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-primary mt-1">
                <CheckCircle />
              </span>
              <div>
                <h3 className="text-base font-semibold">
                  Brighter Smile in One Visit{" "}
                </h3>
                <p>
                  Most patients leave with teeth several shades lighter after just one session. It’s a quick, convenient option when you want results you can see immediately.
                </p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-primary mt-1">
                <CheckCircle />
              </span>
              <div>
                <h3 className="text-base font-semibold">
                  Guidance for Long-Lasting Brightness{" "}
                </h3>
                <p>
                  Our team provides tailored advice and easy aftercare instructions to help you maintain your new smile at home for months to come.
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>

      {/* Why Choose Us Section */}
      <div className="w-full details-page-header-section text-left text-white py-10 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-xl md:text-3xl font-bold mb-4 text-center">
            What Makes SmileKraft Dental the Preferred Choice for Whitening
          </h2>
          <p className="mb-4 text-base">
            When it comes to professional whitening, SmileKraft Dental stands out for quality, safety, and convenience. Patients from The Heights, Greenville, and beyond choose us because:
          </p>
          <ul className="space-y-2 text-base">
            <li className="flex items-start gap-2">
              <CheckCircle size={18} className="mt-1" />
              Our dentists specialize in cosmetic treatments with proven results
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle size={18} className="mt-1" />
              We offer stress-free visits in a modern, welcoming office
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle size={18} className="mt-1" />
              Flexible scheduling to fit busy lifestyles
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle size={18} className="mt-1" />
              Affordable whitening with no surprise charges
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle size={18} className="mt-1" />
              A trusted reputation in Jersey City’s local communities
            </li>
          </ul>
        </div>
      </div>

      {/* What to Expect Section */}
      <div className="max-w-5xl mx-auto py-12 px-4">
        <h2 className="text-xl md:text-3xl font-semibold mb-4 text-center">
          Your Step-by-Step Whitening Experience
        </h2>
        <p className="text-center mb-8">
          At SmileKraft Dental, your comfort comes first. From start to finish, we make whitening straightforward and rewarding:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white rounded-lg shadow p-6 flex items-start gap-4">
            <span className="text-primary text-2xl mt-1">
              <CheckCircle />
            </span>
            <span className="font-semibold">
              Friendly introduction and smooth check-in when you arrive
            </span>
          </div>
          <div className="bg-white rounded-lg shadow p-6 flex items-start gap-4">
            <span className="text-primary text-2xl mt-1">
              <CheckCircle />
            </span>
            <span className="font-semibold">
              A quick exam to confirm whitening is the best choice for your teeth
            </span>
          </div>
          <div className="bg-white rounded-lg shadow p-6 flex items-start gap-4">
            <span className="text-primary text-2xl mt-1">
              <CheckCircle />
            </span>
            <span className="font-semibold">
              Professional whitening session with advanced technology for noticeable results in one visit
            </span>
          </div>
          <div className="bg-white rounded-lg shadow p-6 flex items-start gap-4">
            <span className="text-primary text-2xl mt-1">
              <CheckCircle />
            </span>
            <span className="font-semibold">
              Helpful maintenance advice to keep your smile glowing longer
            </span>
          </div>
        </div>
        <p className="text-center mt-8">
          Our goal is simple: a brighter smile and a positive dental experience every time.
        </p>
        <div className="flex justify-center mt-8">
          <button
            onClick={() => setIsBookingOpen(true)}
            className="bg-secondary/90 text-white px-6 py-2 rounded font-semibold shadow-lg hover:shadow-xl hover:bg-primary transition-all duration-300 transform hover:scale-105"
          >
            Claim Your Free Exam Today!
          </button>
        </div>
      </div>

      {/* Booking Modal */}
      <BookingModal open={isBookingOpen} setOpen={setIsBookingOpen} />
    </div>
  );
}
