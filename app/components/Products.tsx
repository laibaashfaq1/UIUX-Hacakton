import Image from 'next/image';
import Link from 'next/link'; // Import Link from next.js

export default function Product() {
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
  ];

  return (
    <section className="p-6 bg-gray-50 mt-20">
      {/* Centered Header */}
      <div className="flex justify-center items-center flex-col mb-8">
        <h3 className="text-3xl font-extrabold text-gray-800 text-center">
          Our Products
        </h3>
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="relative border rounded-lg bg-white shadow hover:shadow-lg transition transform hover:-translate-y-1 group overflow-hidden"
          >
            {/* Labels */}
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
            <Image
              src={product.image}
              alt={product.name}
              className="w-full h-44 object-contain rounded-md"
              height={44}
              width={100}
            />

            {/* Product Name */}
            <h4 className="mt-4 font-semibold text-gray-800 ml-4">{product.name}</h4>

            {/* Price */}
            <div className="flex items-center gap-2 mt-2 ml-4 mb-4">
              {product.originalPrice && (
                <p className="text-gray-400 line-through text-sm">
                  Rp {product.originalPrice.toLocaleString()}
                </p>
              )}
              <p className="text-black font-bold">Rp {product.price.toLocaleString()}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Show More Button */}
      <div className="text-center mt-8">
  <Link 
    href="/Shop" 
    className="px-6 py-3 font-bold rounded border-2 border-yellow-600 text-yellow-600 hover:bg-yellow-600 hover:text-white transition"
  >
    Show More
  </Link>
</div>
    </section>
  );
}