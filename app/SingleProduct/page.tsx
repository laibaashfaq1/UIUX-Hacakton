'use client';

import Image from "next/image";
import Link from "next/link";
import Product from "../components/Products"; // Import related products component
import { FaFacebook } from "react-icons/fa6";
import { AiFillTwitterCircle } from "react-icons/ai";
import { FaLinkedin } from "react-icons/fa6";

const SingleProduct = () => {
  return (
    <div className="bg-gray-50">
      <div className="container mx-auto px-4 lg:px-8 py-8">
        {/* Breadcrumb */}
        <nav className="text-sm text-gray-600 mb-6">
          <Link href="/Hero" className="hover:underline">Home</Link> / 
          <Link href="/Shop" className="hover:underline"> Shop</Link> / 
          <span className="text-gray-900"> Asgaard Sofa</span>
        </nav>

        {/* Product Section */}
        <div className="lg:flex lg:space-x-8">
          {/* Left: Product Images */}
          <div className="lg:w-1/2 space-y-4">
            <Image
              src="/Group 102.png"
              alt="Asgaard Sofa"
              width={600}
              height={400}
              className="rounded-lg w-full"
            />
          </div>

          {/* Right: Product Details */}
          <div className="lg:w-1/2 mt-8 lg:mt-0">
            <h1 className="text-2xl font-bold text-gray-900">Asgaard Sofa</h1>
            <p className="text-xl text-gray-700 mt-2">₹24,299.00</p>
            <p className="text-sm text-gray-600 mt-2">
              Stylish and comfortable sofa, perfect for modern living rooms.
            </p>

            {/* Size Options */}
            <div className="mt-6">
              <span className="text-gray-700 font-medium">Size:</span>
              <div className="flex space-x-4 mt-2">
                <button className="px-4 py-2 border rounded hover:bg-black hover:text-white">
                  L
                </button>
                <button className="px-4 py-2 border rounded hover:bg-black hover:text-white">
                  XL
                </button>
                <button className="px-4 py-2 border rounded hover:bg-black hover:text-white">
                  XS
                </button>
              </div>
            </div>

            {/* Color Options */}
            <div className="mt-4">
              <span className="text-gray-700 font-medium">Color:</span>
              <div className="flex space-x-4 mt-2">
                <div className="w-8 h-8 rounded-full bg-gray-800 border"></div>
                <div className="w-8 h-8 rounded-full bg-blue-400 border"></div>
                <div className="w-8 h-8 rounded-full bg-yellow-500 border"></div>
              </div>
            </div>

            {/* Add to Cart */}
            <div className="mt-6">
              <label className="block text-gray-700 mb-2">Quantity:</label>
              <div className="flex items-center space-x-4">
                <input
                  type="number"
                  className="w-16 border rounded p-2 text-center"
                  defaultValue="1"
                />

                {/* Link Button To Add to Cart Page */}
                <Link href="/Cart">
                  <button className="bg-pink-200 text-black px-6 py-2 border rounded hover:bg-black hover:text-white">
                    Add to Cart
                  </button>
                </Link>

                {/* Link Compare to Compare Page */}
                <Link href="/PCompare">
                  <button className="border-black text-black px-6 py-2 border rounded hover:bg-black hover:text-white">
                    Compare
                  </button>
                </Link>
              </div>
            </div>

            {/* Additional Info */}
            <div className="mt-6 text-gray-600 space-y-4">
              <p>
                <span className="font-medium">SKU:</span> SS001
              </p>
              <p>
                <span className="font-medium">Category:</span> Sofas
              </p>
              <p>
                <span className="font-medium">Tags:</span> Sofa, Chair, Home, Shop
              </p>
            </div>

            {/* Share Icon */}
            <div className="flex items-center space-x-4 mt-6">
              <span className="font-medium text-gray-700">Share:</span>
              <FaFacebook size={24} className="cursor-pointer" />
              <AiFillTwitterCircle size={28} className="cursor-pointer" />
              <FaLinkedin size={26} className="cursor-pointer" />
            </div>
          </div>
        </div>

        {/* Tabs Section */}
        <div className="mt-12">
          <div className="border-b">
            <button className="px-4 py-2 text-gray-900 border-b-2 border-black font-medium">
              Description
            </button>
            <button className="px-4 py-2 text-gray-600">Additional Information</button>
            <button className="px-4 py-2 text-gray-600">Reviews[5]</button>
          </div>
          <div className="mt-4">
            <p className="text-gray-700">
              Embodying the raw, wayward spirit of rock and roll, the Kilburn portable active stereo speaker takes the 
              unmistakable look and sound of Marshall, unplugs the chords, and takes the show on the road.
            </p><br></br>
            <p className="text-gray-700">
              Weighing in under 7 pounds, the Kilburn is a lightweight piece of vintage styled engineering. 
              Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted 
              hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound that is 
              both articulate and pronounced. The analogue knobs allow you to fine tune the controls to your personal 
              preferences while the guitar-influenced leather strap enables easy and stylish travel.
            </p><br></br>
          </div>
          {/* Image */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Image
              src="/Group 107.png"
              alt="sofa"
              width={500}
              height={300}
              className="w-full"
            />
            <Image
              src="/Group 106.png"
              alt="sofa"
              width={500}
              height={300}
              className="w-full"
            />
          </div>
        </div>

        {/* Related Products */}
        <div className="mt-12">
          <h2 className="text-xl font-bold mb-6">Related Products</h2>
          <Product />
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
