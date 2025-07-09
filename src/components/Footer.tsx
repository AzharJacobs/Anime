import React from 'react';
import { BookOpen, Mail, Phone, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gradient-to-r from-indigo-900 via-purple-900 to-pink-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <BookOpen className="h-8 w-8 text-yellow-400" />
              <span className="text-xl font-bold">Manga Buddy</span>
            </div>
            <p className="text-purple-200 mb-4">
              Your trusted companion for discovering and collecting the best manga. 
              We bring you the latest releases and classic favorites from Japan.
            </p>
            <div className="flex space-x-4">
              <div className="flex items-center space-x-2 text-purple-200">
                <Mail className="h-4 w-4" />
                <span>info@mangabuddy.com</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="/about" className="text-purple-200 hover:text-yellow-300 transition-colors">About Us</a></li>
              <li><a href="/products" className="text-purple-200 hover:text-yellow-300 transition-colors">Products</a></li>
              <li><a href="/contact" className="text-purple-200 hover:text-yellow-300 transition-colors">Contact</a></li>
              <li><a href="#" className="text-purple-200 hover:text-yellow-300 transition-colors">FAQ</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <div className="space-y-2">
              <div className="flex items-center space-x-2 text-purple-200">
                <Phone className="h-4 w-4" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-2 text-purple-200">
                <MapPin className="h-4 w-4" />
                <span>123 Manga Street, Tokyo, Japan</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-purple-700 mt-8 pt-8 text-center text-purple-300">
          <p>&copy; 2024 Manga Buddy. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;