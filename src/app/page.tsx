import type { Metadata } from "next";
import HomePage from "./home/page";

export const metadata: Metadata = {
  title: "SmileKraft Dental | Dentist in Jersey City NJ | Family & Cosmetic Dentistry",
  description: "SmileKraft Dental in Jersey City, NJ provides gentle family and cosmetic care, including implants, Invisalign®, whitening, and same-day emergencies. Serving Bergen-Lafayette (07304, 07305), McGinley Square (07304, 07306, 07302), Greenville (07305), Journal Square (07306), and The Heights (07306, 07307). Call today or book online.",
};

export default function Home() {
  return (
    <HomePage/>
  );
}
