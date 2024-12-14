import Link from "next/link";
import { BsInstagram, BsTwitter } from "react-icons/bs";
import { FaFacebook } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">About Us</h3>
            <p className="text-gray-400">
              Sancahari Tours is your gateway to unforgettable adventures and
              breathtaking destinations.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" legacyBehavior>
                  <a className="text-gray-400 hover:text-white">Home</a>
                </Link>
              </li>
              <li>
                <Link href="/services" legacyBehavior>
                  <a
                    href="/services"
                    className="text-gray-400 hover:text-white"
                  >
                    Services
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/contact" legacyBehavior>
                  <a href="/contact" className="text-gray-400 hover:text-white">
                    Contact
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/about" legacyBehavior>
                  <a href="/about" className="text-gray-400 hover:text-white">
                    About
                  </a>
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white">
                <FaFacebook className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <BsTwitter className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <BsInstagram className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-700 pt-8 text-center text-gray-400">
          <p>&copy; 2023 Paradise Tours. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
