'use client';

import Image from "next/image";
import Link from "next/link";
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
          <ul className="flex space-x-8">
            <li className="menulink">
              <Link href="/Hero" className="text-gray-600 hover:text-black">
                Home
              </Link>
            </li>
            <li className="menulink">
              <Link href="/Shop" className="text-gray-600 hover:text-black">
                Shop
              </Link>
            </li>
            <li className="menulink">
              <Link href="/Blog" className="text-gray-600 hover:text-black">
                Blog
              </Link>
            </li>
            <li className="menulink">
              <Link href="/Contact" className="text-gray-600 hover:text-black">
                Contact
              </Link>
            </li>
          </ul>
        </nav>

        {/* Hamburger Menu (visible on smaller screens) */}
        <button
          className="md:hidden text-gray-600 text-2xl"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <IoIosMenu />
        </button>

        {/* Icons */}
        <div className="hidden md:flex items-center space-x-6">
          <CgProfile className="text-gray-600 text-xl cursor-pointer hover:text-black" />
          <IoSearchSharp className="text-gray-600 text-xl cursor-pointer hover:text-black" />
          <FaRegHeart className="text-gray-600 text-xl cursor-pointer hover:text-black" />
          <Link href="/Cart" className="text-gray-600 hover:text-black">
            <BsCart3 className="text-gray-600 text-xl cursor-pointer hover:text-black" />
          </Link>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t shadow-md">
          <nav className="flex flex-col space-y-4 p-4">
            <Link href="/Hero" className="text-gray-600 hover:text-black">
              Home
            </Link>
            <Link href="/Shop" className="text-gray-600 hover:text-black">
              Shop
            </Link>
            <Link href="/Blog" className="text-gray-600 hover:text-black">
              Blog
            </Link>
            <Link href="/Contact" className="text-gray-600 hover:text-black">
              Contact
            </Link>
          </nav>
        </div>
      )}

      {/* Mobile Icons */}
      <div className="md:hidden flex justify-evenly items-center py-2 border-t">
        <CgProfile className="text-gray-600 text-xl cursor-pointer hover:text-black" />
        <IoSearchSharp className="text-gray-600 text-xl cursor-pointer hover:text-black" />
        <FaRegHeart className="text-gray-600 text-xl cursor-pointer hover:text-black" />
        <Link href="/Cart" className="text-gray-600 hover:text-black">
          <BsCart3 className="text-gray-600 text-xl cursor-pointer hover:text-black" />
        </Link>
      </div>
    </header>
  );
};

export default Navbar;
