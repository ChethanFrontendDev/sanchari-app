import Link from "next/link";
import React from "react";
import { GiPalmTree } from "react-icons/gi";

const Header: React.FC = () => {
  return (
    <header className="bg-gradient-to-r from-orange-500 via-red-500 to-yellow-500 text-white p-4 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-semibold">
          <div className="flex items-center">
            <GiPalmTree className="h-8 w-auto sm:h-10 text-green-600" />
            <Link href="/" legacyBehavior>
              <a className="hover:text-gray-200 cursor-pointer">Sanchari App</a>
            </Link>
          </div>
        </h1>
        <nav>
          <ul className="flex space-x-6">
            <Link href="/" legacyBehavior>
              <a className="hover:text-gray-200">Home</a>
            </Link>
            <li>
              <a href="/about" className="hover:text-gray-200">
                About
              </a>
            </li>
            <li>
              <a href="/services" className="hover:text-gray-200">
                Services
              </a>
            </li>
            <li>
              <a href="/contact" className="hover:text-gray-200">
                Contact
              </a>
            </li>
            <li>
              <a href="/login" className="hover:text-gray-200">
                Login
              </a>
            </li>
            <li>
              <a href="/register" className="hover:text-gray-200">
                Register
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
