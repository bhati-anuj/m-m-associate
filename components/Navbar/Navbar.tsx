'use client'
import { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [serviceMenuOpen, setServiceMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background">
      <div className="container flex h-24 items-center justify-between py-2">
        <div className="flex items-center gap-2">
          <Link href="/">
            <Image src="/M.png" alt="mnm-logo" width={60} height={60} className="w-32 h-24" />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          {[
            { name: "Home", path: "/" },
            { name: "Projects", path: "/projects" },
            { name: "About", path: "/about" },
            { name: "Contact", path: "/contact" }
          ].map((link) => (
            <Link 
              key={link.path} 
              href={link.path} 
              className={`text-sm font-medium hover:underline underline-offset-4 ${
                pathname === link.path ? "text-golden" : "text-blue"
              }`}
            >
              {link.name}
            </Link>
          ))}

          <div className="relative">
            <button 
              onClick={() => setServiceMenuOpen(!serviceMenuOpen)} 
              className={`text-sm font-medium hover:underline underline-offset-4 ${
                pathname.includes("/mnm-") ? "text-golden" : "text-blue"
              }`}
            >
              Services
            </button>
            {serviceMenuOpen && (
              <div className="absolute left-0 mt-2 w-48 bg-white border shadow-md rounded-lg">
                {[
                  { name: "ArcCon", path: "/mnm-construction" },
                  { name: "Interior Designing", path: "/mnm-interior" },
                  { name: "Lift Service", path: "/mnm-lifts" }
                ].map((service) => (
                  <Link 
                    key={service.path} 
                    href={service.path} 
                    className={`block px-4 py-2 hover:bg-gray-100 ${
                      pathname === service.path ? "text-golden" : "text-blue"
                    }`}
                  >
                    {service.name}
                  </Link>
                ))}
              </div>
            )}
          </div>
        </nav>

        <Button 
          className="hidden md:inline-flex bg-golden hover:bg-golden/90 text-white" 
          onClick={() => window.location.href = `tel:${process.env.NEXT_PUBLIC_PHONE_NUMBER}`}
        >
          Call Us
        </Button>

        {/* Mobile Menu Toggle */}
        <Button
          variant="outline"
          size="icon"
          className="md:hidden border-blue text-blue hover:bg-blue/10 hover:text-blue"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span className="sr-only">Toggle menu</span>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
            <line x1="4" x2="20" y1="12" y2="12" />
            <line x1="4" x2="20" y1="6" y2="6" />
            <line x1="4" x2="20" y1="18" y2="18" />
          </svg>
        </Button>
      </div>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <nav className="md:hidden flex flex-col items-center gap-4 bg-background p-4 border-t">
          {[
            { name: "Home", path: "/" },
            { name: "Projects", path: "/projects" },
            { name: "About", path: "/about" },
            { name: "Contact", path: "/contact" }
          ].map((link) => (
            <Link 
              key={link.path} 
              href={link.path} 
              className={`text-sm font-medium hover:underline underline-offset-4 ${
                pathname === link.path ? "text-golden" : "text-blue"
              }`}
            >
              {link.name}
            </Link>
          ))}

          <div className="relative w-full text-center">
            <button 
              onClick={() => setServiceMenuOpen(!serviceMenuOpen)} 
              className={`text-sm font-medium hover:underline underline-offset-4 w-full ${
                pathname.includes("/mnm-") ? "text-golden" : "text-blue"
              }`}
            >
              Services
            </button>
            {serviceMenuOpen && (
              <div className="mt-2 bg-white border shadow-md rounded-lg w-full">
                {[
                  { name: "ArcCon", path: "/mnm-construction" },
                  { name: "Interior Designing", path: "/mnm-interior" },
                  { name: "Lift Service", path: "/mnm-lifts" }
                ].map((service) => (
                  <Link 
                    key={service.path} 
                    href={service.path} 
                    className={`block px-4 py-2 hover:bg-gray-100 ${
                      pathname === service.path ? "text-golden" : "text-blue"
                    }`}
                  >
                    {service.name}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Button 
            className="bg-golden hover:bg-golden/90 text-white w-full" 
            onClick={() => window.location.href = `tel:${process.env.NEXT_PUBLIC_PHONE_NUMBER}`}
          >
            Call Us
          </Button>
        </nav>
      )}
    </header>
  );
}
