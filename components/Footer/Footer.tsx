import Link from 'next/link';
import { Building2} from "lucide-react"

const Footer = () => {
  return (
    <footer className="bg-darkBlue py-12 text-white">
    <div className="container">
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="flex items-center gap-2 mb-4">
            <Building2 className="h-6 w-6 text-golden" />
            <span className="text-xl font-bold">M&M Associates</span>
          </div>
          <p className="text-gray-300 mb-4">
            Transforming spaces with innovative architecture, expert construction, and thoughtful design.
          </p>
          <div className="flex gap-4">
            <Link href="#" className="text-gray-300 hover:text-golden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-5 w-5"
              >
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
              </svg>
              <span className="sr-only">Facebook</span>
            </Link>
            <Link href="#" className="text-gray-300 hover:text-golden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-5 w-5"
              >
                <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
              </svg>
              <span className="sr-only">Twitter</span>
            </Link>
            <Link href="#" className="text-gray-300 hover:text-golden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-5 w-5"
              >
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
              </svg>
              <span className="sr-only">Instagram</span>
            </Link>
            <Link href="#" className="text-gray-300 hover:text-golden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-5 w-5"
              >
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                <rect width="4" height="12" x="2" y="9" />
                <circle cx="4" cy="4" r="2" />
              </svg>
              <span className="sr-only">LinkedIn</span>
            </Link>
          </div>
        </div>
        <div>
          <h3 className="font-medium text-lg mb-4">Services</h3>
          <ul className="space-y-3">
            <li>
              <Link href="/mnm-construction" className="text-gray-300 hover:text-golden">
                ArcCon Architecture & Construction
              </Link>
            </li>
            <li>
              <Link href="/mnm-lifts" className="text-gray-300 hover:text-golden">
                Lift Services
              </Link>
            </li>
            <li>
              <Link href="/mnm-interior" className="text-gray-300 hover:text-golden">
                Interior Design
              </Link>
            </li>
            <li>
              <Link href="#" className="text-gray-300 hover:text-golden">
                Project Management
              </Link>
            </li>
            <li>
              <Link href="#" className="text-gray-300 hover:text-golden">
                Consultation Services
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="font-medium text-lg mb-4">Company</h3>
          <ul className="space-y-3">
            <li>
              <Link href="/about" className="text-gray-300 hover:text-golden">
                About Us
              </Link>
            </li>
            <li>
              <Link href="#" className="text-gray-300 hover:text-golden">
                Our Team
              </Link>
            </li>
            <li>
              <Link href="#" className="text-gray-300 hover:text-golden">
                Careers
              </Link>
            </li>
            <li>
              <Link href="#" className="text-gray-300 hover:text-golden">
                News & Press
              </Link>
            </li>
            <li>
              <Link href="#" className="text-gray-300 hover:text-golden">
                Sustainability
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="font-medium text-lg mb-4">Contact</h3>
          <ul className="space-y-3">
            <li className="flex items-start gap-2 text-gray-300">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-5 w-5 mt-0.5"
              >
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
              <span>
              AG-12A, Sector 144, Noida 
                <br />
                Uttar Pradesh 201301, India
              </span>
            </li>
            <li className="flex items-center gap-2 text-gray-300">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-5 w-5"
              >
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
              <span>+91 9990666325</span>
            </li>
            <li className="flex items-center gap-2 text-gray-300">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-5 w-5"
              >
                <rect width="20" height="16" x="2" y="4" rx="2" />
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
              </svg>
              <span>mnmassociate13@gmail.com</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="mt-12 pt-8 border-t border-blue/20">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-300">© {new Date().getFullYear()} M&M Associates. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="#" className="text-sm text-gray-300 hover:text-golden">
              Privacy Policy
            </Link>
            <Link href="#" className="text-sm text-gray-300 hover:text-golden">
              Terms of Service
            </Link>
            <Link href="#" className="text-sm text-gray-300 hover:text-golden">
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </div>
  </footer>
  );
};

export default Footer;
