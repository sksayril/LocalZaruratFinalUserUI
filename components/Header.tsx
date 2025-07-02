'use client';

import Link from 'next/link';
import { Search, MapPin, Globe, Mail, Briefcase, Zap, List, Download, Bell, ChevronDown } from 'lucide-react';

export default function Header() {
  return (
    <header className="bg-white border-b">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="/" className="flex items-center select-none">
            <span className="text-2xl font-bold text-blue-600" style={{fontFamily: 'inherit'}}>Local</span>
            <span className="text-2xl font-bold text-orange-500 ml-1" style={{fontFamily: 'inherit'}}>Zarurat</span>
          </a>

          {/* Navigation */}
          <nav className="flex items-center space-x-6">
            {/* Language Dropdown */}
            <div className="flex items-center space-x-1 text-sm text-blue-600 cursor-pointer">
              <Globe className="w-4 h-4" />
              <span>EN</span>
              <ChevronDown className="w-4 h-4" />
            </div>
            <a href="#" className="text-sm font-medium hover:text-blue-600">We are Hiring</a>
            <a href="#" className="text-sm font-medium hover:text-blue-600">Investor Relations</a>
            {/* Leads with red dot */}
            <div className="flex items-center space-x-1 text-sm relative">
              <Mail className="w-4 h-4" />
              <span className="hover:text-blue-600">Leads</span>
              <span className="absolute -top-1 right-0 w-2 h-2 bg-red-500 rounded-full"></span>
            </div>
            <div className="flex items-center space-x-1 text-sm">
              <Briefcase className="w-4 h-4" />
              <a href="#" className="hover:text-blue-600">Advertise</a>
            </div>
            {/* Free Listing with BUSINESS badge */}
            <div className="flex items-center space-x-1 text-sm">
              <List className="w-4 h-4" />
              <a href="#" className="hover:text-blue-600">Free Listing</a>
              <span className="ml-1 px-1.5 py-0.5 bg-red-600 text-white text-[10px] font-bold rounded align-middle" style={{lineHeight: '1.1'}}>BUSINESS</span>
            </div>
            {/* Bell Icon */}
            <Bell className="w-5 h-5 text-gray-700" />
            {/* Login/Sign Up Button */}
            <button className="bg-blue-600 text-white px-5 py-2 rounded-lg text-sm font-semibold hover:bg-blue-700 ml-2">
              Login / Sign Up
            </button>
          </nav>
        </div>
      </div>
    </header>
  );
}