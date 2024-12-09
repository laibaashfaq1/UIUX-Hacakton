import { IoMdSend } from "react-icons/io";

export default function Footer() {
  return (
    <footer className="bg-gray-50 text-black py-10">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-5 gap-8">
        {/* Exclusive - Address Section */}
        <div>
          <h3 className="text-lg font-bold mb-4">Furniro</h3>
          <p className="mb-2 text-gray-600">
            400 University Drive Suite 200 Coral Gables,
          </p>
          <p className="mb-2 text-gray-600">FL 33134 USA</p>
        </div>

        {/* Links Section */}
        <div>
          <h3 className="mb-4 text-gray-400">Links</h3>
          <ul>
            <li className="mb-2">
              <a href="#hero">Home</a>
            </li>
            <li className="mb-2">
              <a href="#shop">Shop</a>
            </li>
            <li className="mb-2">
              <a href="#about">About</a>
            </li>
            <li className="mb-2">
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>

        {/* Help Section */}
        <div>
          <h3 className="mb-4 text-gray-400">Help</h3>
          <ul>
            <li className="mb-2">
              <a href="#">Payment Options</a>
            </li>
            <li className="mb-2">
              <a href="#">Returns</a>
            </li>
            <li className="mb-2">
              <a href="#">Privacy Policies</a>
            </li>
          </ul>
        </div>

        {/* Newsletter Section */}
        <div>
          <h3 className="mb-4 text-gray-400">Newsletter</h3>
          <form className="flex items-center space-x-2">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-gray-400"
            />
            <button
              type="submit"
              className="bg-gray-800 text-white p-2 rounded hover:bg-gray-700 transition"
            >
              <IoMdSend size={20} />
            </button>
          </form>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="text-center border-t border-gray-700 mt-10 pt-4 text-sm text-gray-500">
        © 2023 Furniro. All rights reserved
      </div>
    </footer>
  );
}
