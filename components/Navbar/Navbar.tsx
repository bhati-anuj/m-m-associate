'use client'
import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [serviceMenuOpen, setServiceMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background">
      <div className="container flex h-16 items-center justify-between py-4">
        <div className="flex items-center gap-2">
          <Image src="/logo-white.png" alt="mnm-logo"  width={80} height={60}/>
          <span className="text-xl font-bold text-blue">M&M Associates</span>
        </div>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <Link href="/" className="text-sm font-medium text-blue hover:text-golden hover:underline underline-offset-4">Home</Link>
          <div
            className="relative"
            // onMouseEnter={() => setServiceMenuOpen(true)}
            // onMouseLeave={() => setServiceMenuOpen(false)}
          >
            <button onClick={()=>setServiceMenuOpen(!serviceMenuOpen)} className="text-sm font-medium text-golden hover:underline underline-offset-4">Services</button>
            {serviceMenuOpen && (
              <div 
                className="absolute left-0 mt-2 w-48 bg-white border shadow-md rounded-lg"
                // onMouseEnter={() => setServiceMenuOpen(true)}
                // onMouseLeave={() => setServiceMenuOpen(false)}
              >
                <Link href="/mnm-construction" className="block px-4 py-2 text-blue hover:bg-gray-100">ArcCon</Link>
                <Link href="/mnm-interior" className="block px-4 py-2 text-blue hover:bg-gray-100">Interior Designing</Link>
                <Link href="/mnm-lifts" className="block px-4 py-2 text-blue hover:bg-gray-100">Lift Service</Link>
              </div>
            )}
          </div>
          <Link href="/projects" className="text-sm font-medium text-blue hover:text-golden hover:underline underline-offset-4">Projects</Link>
          <Link href="/about" className="text-sm font-medium text-blue hover:text-golden hover:underline underline-offset-4">About</Link>
          <Link href="/contact" className="text-sm font-medium text-blue hover:text-golden hover:underline underline-offset-4">Contact</Link>
        </nav>
        
        <Button className="hidden md:inline-flex bg-golden hover:bg-golden/90 text-white">Get a Quote</Button>
        
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
          <Link href="/" className="text-sm font-medium text-blue hover:text-golden hover:underline underline-offset-4">Home</Link>
          <div className="relative w-full text-center">
            <button onClick={() => setServiceMenuOpen(!serviceMenuOpen)} className="text-sm font-medium text-golden hover:underline underline-offset-4 w-full">
              Services
            </button>
            {serviceMenuOpen && (
              <div className="mt-2 bg-white border shadow-md rounded-lg w-full">
                <Link href="/mnm-construction" className="block px-4 py-2 text-blue hover:bg-gray-100">ArcCon</Link>
                <Link href="/mnm-interior" className="block px-4 py-2 text-blue hover:bg-gray-100">Interior Designing</Link>
                <Link href="/mnm-lifts" className="block px-4 py-2 text-blue hover:bg-gray-100">Lift Service</Link>
              </div>
            )}
          </div>
          <Link href="/projects" className="text-sm font-medium text-blue hover:text-golden hover:underline underline-offset-4">Projects</Link>
          <Link href="/about" className="text-sm font-medium text-blue hover:text-golden hover:underline underline-offset-4">About</Link>
          <Link href="/contact" className="text-sm font-medium text-blue hover:text-golden hover:underline underline-offset-4">Contact</Link>
          <Button className="bg-golden hover:bg-golden/90 text-white w-full">Get a Quote</Button>
        </nav>
      )}
    </header>
  );
}
