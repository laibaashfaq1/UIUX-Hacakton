'use client';

import Image from "next/image";
import { GoTrophy } from "react-icons/go";
import { AiOutlineSafetyCertificate } from "react-icons/ai";
import { MdOutlineLocalShipping } from "react-icons/md";
import { RiCustomerService2Line } from "react-icons/ri";
import { IoIosArrowForward } from "react-icons/io";
import Link from "next/link";

export default function Shop() {
  const products = [
    {
      id: 1,
      image: "/1.png",
      name: "Syltherine",
      price: 2500000,
      originalPrice: 8600000,
      discount: 30,
      isNew: false,
    },
    {
      id: 2,
      image: "/2.png",
      name: "Leviosa",
      price: 2500000,
      originalPrice: 2500000,
      discount: null,
      isNew: false,
    },
    {
      id: 3,
      image: "/3.png",
      name: "Lolito",
      price: 7000000,
      originalPrice: 14000000,
      discount: 50,
      isNew: false,
    },
    {
      id: 4,
      image: "/4.png",
      name: "Respira",
      price: 500000,
      originalPrice: null,
      discount: null,
      isNew: true,
    },
    {
      id: 5,
      image: "/5.png",
      name: "Grifo",
      price: 1500000,
      originalPrice: null,
      discount: null,
      isNew: true,
    },
    {
      id: 6,
      image: "/6.png",
      name: "Muggo",
      price: 150000,
      originalPrice: null,
      discount: null,
      isNew: false,
    },
    {
      id: 7,
      image: "/7.png",
      name: "Pingky",
      price: 7000000,
      originalPrice: 14000000,
      discount: 50,
      isNew: true,
    },
    {
      id: 8,
      image: "/8.png",
      name: "Potty",
      price: 500000,
      originalPrice: null,
      discount: null,
      isNew: false,
    },
    {
      id: 9,
      image: "/1.png",
      name: "Syltherine",
      price: 2500000,
      originalPrice: 8600000,
      discount: 30,
      isNew: false,
    },
    {
      id: 10,
      image: "/2.png",
      name: "Leviosa",
      price: 2500000,
      originalPrice: 2500000,
      discount: null,
      isNew: false,
    },
    {
      id: 11,
      image: "/3.png",
      name: "Lolito",
      price: 7000000,
      originalPrice: 14000000,
      discount: 50,
      isNew: false,
    },
    {
      id: 12,
      image: "/4.png",
      name: "Respira",
      price: 500000,
      originalPrice: null,
      discount: null,
      isNew: true,
    },
    {
      id: 13,
      image: "/5.png",
      name: "Grifo",
      price: 1500000,
      originalPrice: null,
      discount: null,
      isNew: true,
    },
    {
      id: 14,
      image: "/6.png",
      name: "Muggo",
      price: 150000,
      originalPrice: null,
      discount: null,
      isNew: false,
    },
    {
      id: 15,
      image: "/7.png",
      name: "Pingky",
      price: 7000000,
      originalPrice: 14000000,
      discount: 50,
      isNew: true,
    },
    {
      id: 16,
      image: "/8.png",
      name: "Potty",
      price: 500000,
      originalPrice: null,
      discount: null,
      isNew: false,
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative">
        <Image
          src="/Rectangle 1.png"
          alt="Checkout background"
          width={1440}
          height={316}
          priority
          className="w-full object-cover"
        />

        {/* Text Content Over Image */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
          <h1 className="text-black text-4xl font-bold">Shop</h1>
          <p className="flex items-center text-gray-600">
            <span>Home</span>
            <IoIosArrowForward />
            <span>Shop</span>
          </p>
        </div>
      </section>

      {/* Additional Image Section */}
      <Image
        src="/Group 63.png"
        alt="Checkout background"
        width={1440}
        height={316}
        priority
        className="w-full object-cover"
      />

      {/* Product Grid */}
      <section className="p-6 bg-gray-50 mt-10">
        <div className="flex justify-center items-center flex-col mb-8">
          <h3 className="text-3xl font-extrabold text-gray-800 text-center">
            Our Products
          </h3>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="relative border rounded-lg bg-white shadow hover:shadow-lg transition transform hover:-translate-y-1 group overflow-hidden"
            >
              {/* NEW and Discount Labels */}
              {product.isNew && (
                <div className="absolute top-2 left-2 bg-green-500 text-white text-xs font-bold px-2 py-1 rounded">
                  NEW
                </div>
              )}
              {product.discount && (
                <div className="absolute top-2 right-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
                  -{product.discount}%
                </div>
              )}

              {/* Product Image */}
              <div className="relative">
                <Link href="/SingleProduct">
                  <Image
                    src={product.image}
                    alt={product.name}
                    width={200}
                    height={200}
                    className="w-full h-44 object-contain rounded-md"
                  />
                </Link>
              </div>

              {/* Product Details */}
              <div className="p-4">
                <h4 className="font-semibold text-gray-800">{product.name}</h4>
                <div className="flex items-center gap-2 mt-2">
                  {product.originalPrice && (
                    <p className="text-gray-400 line-through text-sm">
                      Rp {product.originalPrice.toLocaleString()}
                    </p>
                  )}
                  <p className="text-black font-bold">
                    Rp {product.price.toLocaleString()}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-pink-100 py-8">
        <div className="container mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div>
            <GoTrophy size={40} className="mx-auto text-gray-800" />
            <h4 className="font-bold text-gray-800">High Quality</h4>
            <p className="text-gray-600 text-sm">Crafted from top materials</p>
          </div>
          <div>
            <AiOutlineSafetyCertificate
              size={40}
              className="mx-auto text-gray-800"
            />
            <h4 className="font-bold text-gray-800">Warranty Protection</h4>
            <p className="text-gray-600 text-sm">Over 2 years</p>
          </div>
          <div>
            <MdOutlineLocalShipping
              size={40}
              className="mx-auto text-gray-800"
            />
            <h4 className="font-bold text-gray-800">Free Shipping</h4>
            <p className="text-gray-600 text-sm">Orders over $50</p>
          </div>
          <div>
            <RiCustomerService2Line
              size={40}
              className="mx-auto text-gray-800"
            />
            <h4 className="font-bold text-gray-800">24/7 Support</h4>
            <p className="text-gray-600 text-sm">Dedicated support</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
