import React from "react";
import {
  FaWhatsapp,
  FaInstagram,
  FaTwitter,
  FaFacebookF,
  FaTelegramPlane,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-blue-950 text-gray-200 pt-16 pb-8 px-6 sm:px-12 md:px-24">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
        {/* Information Section */}
        <div>
          <h4 className="text-xl font-bold mb-4">Information</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:underline">About Us</a></li>
            <li><a href="#" className="hover:underline">More Search</a></li>
            <li><a href="#" className="hover:underline">Blog</a></li>
            <li><a href="#" className="hover:underline">Testimonials</a></li>
            <li><a href="#" className="hover:underline">Events</a></li>
          </ul>
        </div>

        {/* Links Section */}
        <div>
          <h4 className="text-xl font-bold mb-4">Links</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:underline">Services</a></li>
            <li><a href="#" className="hover:underline">Support</a></li>
            <li><a href="#" className="hover:underline">Terms & Conditions</a></li>
            <li><a href="#" className="hover:underline">Privacy Policy</a></li>
          </ul>
        </div>

        {/* Our Services Section */}
        <div>
          <h4 className="text-xl font-bold mb-4">Our Services</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:underline">Fish Types</a></li>
            <li><a href="#" className="hover:underline">Order</a></li>
            <li><a href="#" className="hover:underline">Return & Exchange</a></li>
            <li><a href="#" className="hover:underline">Fish List</a></li>
          </ul>
        </div>

        {/* Aquamart Section */}
        <div className="md:text-right text-center">
          <h1 className="text-4xl font-extrabold mb-4">AQUAMART</h1>
          <p className="text-sm mb-6 leading-relaxed max-w-xs md:ml-auto md:mr-0 mx-auto">
            Discover a world of aquatic treasures at our store—where every creature has a story to tell!
          </p>
          <div className="flex justify-center md:justify-end space-x-4 text-2xl">
            <a
              href="#"
              aria-label="Whatsapp"
              className="w-9 h-9 flex items-center justify-center rounded-full bg-gray-700 hover:bg-gray-600 transition text-white"
            >
              <FaWhatsapp />
            </a>
            <a
              href="#"
              aria-label="Instagram"
              className="w-9 h-9 flex items-center justify-center rounded-full bg-gray-700 hover:bg-gray-600 transition text-white"
            >
              <FaInstagram />
            </a>
            <a
              href="#"
              aria-label="Twitter"
              className="w-9 h-9 flex items-center justify-center rounded-full bg-gray-700 hover:bg-gray-600 transition text-white"
            >
              <FaTwitter />
            </a>
            <a
              href="#"
              aria-label="Facebook"
              className="w-9 h-9 flex items-center justify-center rounded-full bg-gray-700 hover:bg-gray-600 transition text-white"
            >
              <FaFacebookF />
            </a>
            <a
              href="#"
              aria-label="Telegram"
              className="w-9 h-9 flex items-center justify-center rounded-full bg-gray-700 hover:bg-gray-600 transition ttext-white"
            >
              <FaTelegramPlane />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700 mt-12 pt-6 text-center text-xs text-gray-400">
        © {new Date().getFullYear()} Aquamart. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
