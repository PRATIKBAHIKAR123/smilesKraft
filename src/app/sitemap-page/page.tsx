import Link from "next/link";

export default function SiteMapPage() {
  const baseUrl = "https://smilekraftnj.com";

  const routes = [
    "",
    "/about-smilekraft-dental-jerseycity-nj",
    "/contact-smilekraft-dental-jerseycity-nj",
    "/dental-blog",
    "/patient-reviews-jerseycity-nj",
    "/providers",
    "/services",
    "/teeth-whitening-offer-jerseycity-nj",
    "/terms-and-conditions",
    "/privacy-policy",
    "/accessibility",

    // Service pages
    "/services/emergency-dentistry-jerseycity-nj",
    "/services/root-canal-treatment-jerseycity-nj",
    "/services/oral-surgery-jerseycity-nj",
    "/services/cosmetic-dentistry-jerseycity-nj",
    "/services/dental-fillings-jerseycity-nj",
    "/services/dental-implants-jerseycity-nj",
    "/services/orthodontics-jerseycity-nj",
    "/services/crowns-and-bridges-jerseycity-nj",
    "/services/dental-emergencies-jerseycity-nj",
    "/services/tooth-extraction-jerseycity-nj",
    "/services/teeth-whitening-and-veneers-jerseycity-nj",
    "/services/invisalign-clear-aligners-jerseycity-nj",
    "/services/kids-and-children-dentistry-jerseycity-nj",
    "/services/permanent-teeth-replacement-jerseycity-nj",
    "/services/sports-dentistry-jerseycity-nj",
    "/services/wisdom-teeth-removal-jerseycity-nj",
    "/services/endodontics-jerseycity-nj",
    "/services/same-day-dentistry-jerseycity-nj",
    "/services/painless-dental-treatment-jerseycity-nj",
    "/services/perio-protect-jerseycity-nj",
    "/services/halitosis-treatment-jerseycity-nj",

    "/service-areas",
    "/service-areas/mcginley-square-nj-dentist-near-you",
    "/service-areas/journal-square-nj-dentist-near-you",
    "/service-areas/bergenlafayette-nj-dentist-near-you",
    "/service-areas/the-heights-nj-dentist-near-you",
    "/service-areas/greenville-nj-dentist-near-you",

    // Provider pages
    "/providers/urvashi-banerjee-maplewood-nj-dentist",

    // Urgent care services
    "/urgent-care-services",
    "/urgent-care-services/urgent-care-in-bloomfield-nj",
    "/urgent-care-services/childrens-urgent-care-in-bloomfield-nj",
    "/urgent-care-services/immigration-physicals-in-bloomfield-nj",
    "/urgent-care-services/flu-shots-in-bloomfield-nj",
    "/urgent-care-services/seasonal-allergy-treatment-in-bloomfield-nj",
    "/urgent-care-services/tick-bite-lyme-disease-treatment-in-bloomfield-nj",
    "/urgent-care-services/bronchitis-treatment-in-bloomfield-nj",
  ];

  return (
    <div style={{ padding: "40px", maxWidth: "900px", margin: "auto" }}>
      <h1 style={{ fontSize: "32px", marginBottom: "20px" }}>
        Sitemap – SmileKraft Dental NJ
      </h1>

      <p style={{ marginBottom: "20px", fontSize: "16px" }}>
        Click any link below to visit that page.
      </p>

      <ul style={{ lineHeight: "2", fontSize: "16px" }}>
        {routes.map((path) => (
          <li key={path}>
            <Link href={`${baseUrl}${path}`} target="_blank">
              {baseUrl + path}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
