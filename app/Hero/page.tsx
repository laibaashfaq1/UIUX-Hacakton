'use client';

import Browse from "../components/Browse";
import Product from "../components/Products";
import Rooms from "../components/Rooms";
import FurnitureGallery from "../components/Furniture";
import Image from "next/image";

const Hero = () => {
  return (
    <div>
      <Image
              src="/heroimg.jpg"
              alt="Checkout background"
              width={1440}
              height={316}
              priority
              className="w-full object-cover"/>

      {/* Other Components */}
    <Browse />
    <Product />
    <Rooms />
    <FurnitureGallery />
    </div>
  );
};

export default Hero;
