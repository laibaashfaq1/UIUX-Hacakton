'use client'

import Image from "next/image";
import Link from "next/link"; // Import Link
import { FaRegHeart } from "react-icons/fa";
import { IoSearchSharp } from "react-icons/io5";
import { BsCart3 } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";
import { useState } from "react";
import { IoIosMenu } from "react-icons/io";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white border-b shadow-sm">
      <div className="container mx-auto px-4 lg:px-8 flex justify-between items-center h-16">
        {/* Logo */}
        <div className="flex items-center">
          <Image
            src="/logo.png" // Replace with your logo path
            alt="Furniro Logo"
            width={140}
            height={80}
          />
        </div>

        {/* Navigation Links (hidden on smaller screens) */}
        <nav className="hidden md:flex space-x-8">
          <li className="menulink">
            <Link href="#hero" className="text-gray-600 hover:text-black">
              Home
            </Link>
          </li>
          <li className="menulink">
            <Link href="#shop" className="text-gray-600 hover:text-black">
              Shop
            </Link>
          </li>
          <li className="menulink">
            <Link href="/blog" className="text-gray-600 hover:text-black">
              Blog
            </Link>
          </li>
          <li className="menulink">
            <Link href="/contact" className="text-gray-600 hover:text-black">
              Contact
            </Link>
          </li>
        </nav>

        {/* Hamburger Menu (visible on smaller screens) */}
        <button
          className="md:hidden text-gray-600 text-xl"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <IoIosMenu />
        </button>

        {/* Icons */}
        <div className="flex items-center space-x-6">
          <CgProfile className="text-gray-600 text-xl cursor-pointer hover:text-black" />
          <IoSearchSharp className="text-gray-600 text-xl cursor-pointer hover:text-black" />
          <FaRegHeart className="text-gray-600 text-xl cursor-pointer hover:text-black" />
          <BsCart3 className="text-gray-600 text-xl cursor-pointer hover:text-black" />
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t shadow-md">
          <nav className="flex flex-col space-y-4 p-4">
            <Link href="/" className="text-gray-600 hover:text-black">
              Home
            </Link>
            <Link href="/shop" className="text-gray-600 hover:text-black">
              Shop
            </Link>
            <Link href="/blog" className="text-gray-600 hover:text-black">
              Blog
            </Link>
            <Link href="/contact" className="text-gray-600 hover:text-black">
              Contact
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
