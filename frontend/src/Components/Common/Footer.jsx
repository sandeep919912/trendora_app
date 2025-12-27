import React from "react";
import {
  Facebook,
  Instagram,
  Twitter,
  Youtube,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

        {/* Brand */}
        <div>
          <h2 className="text-3xl font-bold text-white mb-4"><img src="/logo2.1.png" alt="logo" className="text-white"/></h2>
          <p className="text-gray-400">
            Your go-to destination for stylish streetwear that defines the
            trend. Comfort meets fashion.
          </p>
          <div className="flex gap-4 mt-5">
            <Facebook className="cursor-pointer hover:text-blue-500 transition" />
            <Instagram className="cursor-pointer hover:text-pink-500 transition" />
            <Twitter className="cursor-pointer hover:text-blue-400 transition" />
            <Youtube className="cursor-pointer hover:text-red-500 transition" />
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li className="hover:text-white transition cursor-pointer">Home</li>
            <li className="hover:text-white transition cursor-pointer">Shop</li>
            <li className="hover:text-white transition cursor-pointer">New Arrivals</li>
            <li className="hover:text-white transition cursor-pointer">Best Sellers</li>
            <li className="hover:text-white transition cursor-pointer">Contact</li>
          </ul>
        </div>

        {/* Customer Support */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-4">
            Customer Support
          </h3>
          <ul className="space-y-2">
            <li className="hover:text-white transition cursor-pointer">
              FAQs
            </li>
            <li className="hover:text-white transition cursor-pointer">
              Returns & Exchanges
            </li>
            <li className="hover:text-white transition cursor-pointer">
              Shipping Info
            </li>
            <li className="hover:text-white transition cursor-pointer">
              Terms & Conditions
            </li>
            <li className="hover:text-white transition cursor-pointer">
              Privacy Policy
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-4">Get in Touch</h3>
          <ul className="space-y-3">
            <li className="flex items-center gap-3">
              <Mail size={18} />
              support@trendora.com
            </li>
            <li className="flex items-center gap-3">
              <Phone size={18} />
              +91 9199124294
            </li>
            <li className="flex items-center gap-3">
              <MapPin size={18} />
              Jharkhand, India
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="mt-12 border-t border-gray-700 pt-6 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} Trendora. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
