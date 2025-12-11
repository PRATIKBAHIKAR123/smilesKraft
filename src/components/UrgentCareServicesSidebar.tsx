"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, MenuIcon, X } from "lucide-react";

interface UrgentCareService {
  name: string;
  icon: string;
  link: string;
}

interface UrgentCareServicesSidebarProps {
  setISSidebarOpen: (open: boolean) => void;
}

// Urgent Care Services data
const urgentCareServices: UrgentCareService[] = [
  {
    name: "Urgent Care",
    icon: "/Images/icons/map.png",
    link: "/urgent-care-services/urgent-care-in-bloomfield-nj",
  },
  {
    name: "Children's Urgent Care",
    icon: "/Images/icons/map.png",
    link: "/urgent-care-services/childrens-urgent-care-in-bloomfield-nj",
  },
  {
    name: "Flu Shots",
    icon: "/Images/icons/map.png",
    link: "/urgent-care-services/flu-shots-in-bloomfield-nj",
  },
  {
    name: "Seasonal Allergy Treatment",
    icon: "/Images/icons/map.png",
    link: "/urgent-care-services/seasonal-allergy-treatment-in-bloomfield-nj",
  },
  {
    name: "Immigration Physicals",
    icon: "/Images/icons/map.png",
    link: "/urgent-care-services/immigration-physicals-in-bloomfield-nj",
  },
  {
    name: "Tick Bite & Lyme Disease Treatment",
    icon: "/Images/icons/map.png",
    link: "/urgent-care-services/tick-bite-lyme-disease-treatment-in-bloomfield-nj",
  },
  {
    name: "Bronchitis Treatment",
    icon: "/Images/icons/map.png",
    link: "/urgent-care-services/bronchitis-treatment-in-bloomfield-nj",
  },
];

export default function UrgentCareServicesSidebar({
  setISSidebarOpen,
}: UrgentCareServicesSidebarProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    setISSidebarOpen(!isMobileMenuOpen); // Sync with parent state
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
    setISSidebarOpen(false);
  };

  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* Mobile Menu Toggle Button - Only visible on mobile */}
      {!isScrolled && !isMobileMenuOpen ? (
        <div className="fixed bottom-2 md:bottom-8 left-4 z-50">
          <button
            onClick={toggleMobileMenu}
            className="w-full flex flex-col bg-secondary/90 hover:bg-primary text-white rounded-lg px-2 py-3  text-xs sm:text-sm font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
            aria-label="Toggle urgent care services menu"
          >
            <span>
              {isScrolled ? <MenuIcon /> : <span>Urgent Care Services</span>}
            </span>
          </button>
        </div>
      ) : null}

      {/* Mobile Backdrop - Only visible when mobile menu is open */}
      {isMobileMenuOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-black/50 z-40 top-16"
          onClick={closeMobileMenu}
        />
      )}

      {/* Main Sidebar */}
      <aside
        className={`
          sidebar-scrollbar bg-white shadow-lg flex flex-col overflow-y-auto overflow-x-visible
          
          /* Desktop styles (unchanged) */
          lg:top-20 lg:z-20 lg:h-[calc(100vh-80px)]
          
          /* Mobile styles (slide-out) */
          fixed top-16 left-0 z-40 h-[calc(100vh-80px)] w-80 max-w-[85vw]
          transition-transform duration-300 ease-in-out
          ${isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"}
        `}
        style={{ minWidth: 260, maxWidth: 260 }}
      >
        <div className="p-6 border-b bg-[#0087ce] sticky top-0 z-30">
          <div className="flex items-center justify-between">
            <h2 className="text-xl text-center font-bold text-white flex-1 lg:text-center lg:mt-5">
              Urgent Care Services
            </h2>
            {/* Mobile close button - only visible on mobile */}
            <button
              onClick={closeMobileMenu}
              className="text-white hover:text-gray-200 transition-colors ml-2 lg:mt-5"
              aria-label="Close menu"
            >
              <X size={20} />
            </button>
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex-1 px-4 py-2 overflow-visible">
          <ul className="space-y-1">
            {urgentCareServices.map((service: UrgentCareService) => (
              <li key={service.name} className="relative group">
                <Link
                  href={service.link}
                  onClick={closeMobileMenu} // Close mobile menu when service is selected
                  className="flex items-center gap-2 rounded-xl py-2 px-4 border border-gray-200 shadow-sm bg-white transition-all duration-200 hover:bg-[var(--primary)] hover:text-white hover:border-[var(--primary)] focus:bg-[var(--primary)] focus:text-white focus:border-[var(--primary)] w-full overflow-hidden"
                  style={{ boxShadow: "0 2px 8px 0 rgba(0,0,0,0.05)" }}
                >
                  <img
                    src={service.icon}
                    alt={service.name}
                    className="w-4 h-4 ml-2 object-contain group-hover:filter group-hover:brightness-0 group-hover:invert"
                  />
                  <span className="font-medium text-base truncate group-hover:text-white transition-colors duration-200">
                    {service.name}
                  </span>
                </Link>
                {/* Tooltip */}
                <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 z-[60] px-4 py-2.5 bg-gray-900 text-white text-sm rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 pointer-events-none max-w-lg min-w-[220px] text-center">
                  <span className="block whitespace-normal break-words leading-relaxed">
                    {service.name}
                  </span>
                  <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-gray-900"></div>
                </div>
              </li>
            ))}
          </ul>
        </nav>
      </aside>
    </>
  );
}
