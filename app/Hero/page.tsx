'use client';

import Browse from "../components/Browse";
import Product from "../components/Products";
import Rooms from "../components/Rooms";
import FurnitureGallery from "../components/Furniture";

const Hero = () => {
  return (
    <div>
    <div
      id="hero"
      className="relative min-h-screen bg-cover bg-no-repeat"
      style={{
        backgroundImage: "url('/heroimg.jpg')", // Ensure the path to the image is correct
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >

      {/* Other Components */}
      
    </div>
    <Browse />
    <Product />
    <Rooms />
    <FurnitureGallery />
    </div>
  );
};

export default Hero;
