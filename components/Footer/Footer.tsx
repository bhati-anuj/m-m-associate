import Image from 'next/image';
import Link from 'next/link';
import logo from "@/utils/logoFull.png"

const Footer = () => {
  return (
    <footer className="bg-bgBlue rounded-lg shadow dark:bg-gray-900 ">
      <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <Link href="https://flowbite.com/" className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
           
              <Image
                src={logo}
                className="h-20"
                width={62}
                height={62}
                alt="M&M Associate Logo"
              />
              <span className="self-center text-textGolden text-2xl font-semibold whitespace-nowrap dark:text-white">
                M&M Associate
              </span>
            
          </Link>
          <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-200 sm:mb-0 dark:text-gray-400">
            <li>
              <Link href="#" className="hover:underline me-4 md:me-6">
               About
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:underline me-4 md:me-6">
              Privacy Policy
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:underline me-4 md:me-6">
               Licensing
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:underline">
               Contact
              </Link>
            </li>
          </ul>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span className="block text-sm text-gray-400 sm:text-center dark:text-gray-400">
          © 2025 <Link href="https://flowbite.com/" className="hover:underline">
          M&M Associate™
          </Link>. All Rights Reserved.
        </span>
      </div>
    </footer>
  );
};

export default Footer;
