'use client';

import { Search, MapPin, Download, Mic, ChevronDown } from 'lucide-react';
import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel';

export default function HeroSection() {
  return (
    <div className="bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4">
        {/* Search Header */}
        <div className="mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 text-left leading-tight">
            Search across <span className="text-blue-600">'4.7 Crore+'</span> <span className="text-blue-600">Businesses</span>
          </h1>
          <div className="flex items-center w-full">
            <div className="flex-1 flex items-center gap-4">
              {/* Search Bar */}
              <div className="flex flex-1 items-center bg-white border border-gray-300 rounded-lg overflow-hidden shadow-sm">
                {/* Location Input */}
                <div className="flex items-center px-4 py-3 border-r border-gray-200 min-w-[180px]">
                  <MapPin className="w-5 h-5 text-gray-400 mr-2" />
                  <input
                    type="text"
                    placeholder="Mumbai"
                    className="bg-transparent outline-none text-gray-700 w-full placeholder-gray-500 font-medium text-base"
                  />
                </div>
                {/* Search Input */}
                <div className="flex items-center flex-1 px-4 py-3">
                  <input
                    type="text"
                    placeholder="Search for Packers and Movers"
                    className="bg-transparent outline-none text-gray-700 w-full placeholder-gray-500 font-medium text-base"
                  />
                  {/* Mic Icon */}
                  <Mic className="w-5 h-5 text-blue-500 mr-2" style={{stroke: '#2196f3', fill: '#fff', background: 'linear-gradient(180deg, #2196f3 60%, #ff9800 100%)', borderRadius: '50%'}} />
                  {/* Search Button */}
                  <button className="bg-orange-500 hover:bg-orange-600 text-white w-10 h-10 flex items-center justify-center rounded ml-1">
                    <Search className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
            {/* Download App Button */}
            <button className="flex items-center border border-gray-300 px-4 py-3 rounded-lg bg-white hover:bg-gray-100 min-w-[160px] justify-between ml-4">
              <span className="font-semibold text-gray-800 text-base">Download App</span>
              <Download className="w-5 h-5 text-blue-600 ml-2" />
              <ChevronDown className="w-4 h-4 text-gray-500 ml-1" />
            </button>
          </div>
        </div>

        {/* Carousel and Service Categories */}
        <div className="flex gap-4 mt-2 overflow-x-hidden">
          {/* Left Banner */}
          <div className="flex-shrink-0 bg-[#2563eb] rounded-2xl flex flex-col justify-between p-8 min-h-[260px] w-[460px] text-white relative" style={{background: 'linear-gradient(90deg, #2563eb 60%, #2563eb 100%)'}}>
            <div>
              <div className="text-3xl md:text-4xl font-extrabold mb-2 leading-tight">Grow your business<br/>on LocalZarurat</div>
              <ul className="mb-6 mt-4 space-y-2">
                <li className="flex items-center gap-2 text-base font-medium"><span className="w-2 h-2 bg-yellow-400 rounded-full inline-block"></span>Get noticed</li>
                <li className="flex items-center gap-2 text-base font-medium"><span className="w-2 h-2 bg-yellow-400 rounded-full inline-block"></span>Boost sales</li>
                <li className="flex items-center gap-2 text-base font-medium"><span className="w-2 h-2 bg-yellow-400 rounded-full inline-block"></span>Increase revenue</li>
              </ul>
              <button className="bg-green-400 hover:bg-green-500 text-black font-bold px-8 py-3 rounded-lg text-lg shadow w-max">Start Now</button>
            </div>
            <img src="https://assets.jdmagicbox.com/comp/jd_new_cms/jd_homepage/banner-man.png" alt="Business Man" className="absolute right-4 bottom-0 h-48 w-auto object-contain" />
            {/* Dots */}
            <div className="absolute left-1/2 bottom-4 -translate-x-1/2 flex gap-2">
              {[...Array(8)].map((_, i) => (
                <span key={i} className={`w-2 h-2 rounded-full ${i === 0 ? 'bg-white' : 'bg-blue-300'} inline-block`}></span>
              ))}
            </div>
          </div>
          {/* Service Cards */}
          <div className="flex flex-row gap-4">
            {/* B2B */}
            <div className="bg-[#1e7ed6] rounded-2xl p-6 text-white flex flex-col justify-between min-h-[260px] w-[240px] relative overflow-hidden">
              <div className="font-extrabold text-2xl mb-1">B2B</div>
              <div className="text-base font-medium mb-2">Quick Quotes</div>
              <img src="https://assets.jdmagicbox.com/comp/jd_new_cms/jd_homepage/b2b-man.png" alt="B2B" className="absolute bottom-2 right-2 h-28 w-28 object-contain" />
              <span className="absolute right-4 top-1/2 -translate-y-1/2 text-3xl font-bold opacity-80">›</span>
            </div>
            {/* Repairs & Services */}
            <div className="bg-[#2b4fa2] rounded-2xl p-6 text-white flex flex-col justify-between min-h-[260px] w-[240px] relative overflow-hidden">
              <div className="font-extrabold text-xl mb-1">REPAIRS & SERVICES</div>
              <div className="text-base font-medium mb-2">Get Nearest Vendor</div>
              <img src="https://assets.jdmagicbox.com/comp/jd_new_cms/jd_homepage/repairs-man.png" alt="Repairs" className="absolute bottom-2 right-2 h-28 w-28 object-contain" />
              <span className="absolute right-4 top-1/2 -translate-y-1/2 text-3xl font-bold opacity-80">›</span>
            </div>
            {/* Real Estate */}
            <div className="bg-[#5a6ee0] rounded-2xl p-6 text-white flex flex-col justify-between min-h-[260px] w-[240px] relative overflow-hidden">
              <div className="font-extrabold text-xl mb-1">REAL ESTATE</div>
              <div className="text-base font-medium mb-2">Finest Agents</div>
              <img src="https://assets.jdmagicbox.com/comp/jd_new_cms/jd_homepage/realestate-building.png" alt="Real Estate" className="absolute bottom-2 right-2 h-28 w-28 object-contain" />
              <span className="absolute right-4 top-1/2 -translate-y-1/2 text-3xl font-bold opacity-80">›</span>
            </div>
            {/* Doctors */}
            {/* <div className="bg-[#1bb18a] rounded-2xl p-6 text-white flex flex-col justify-between min-h-[260px] w-[240px] relative overflow-hidden">
              <div className="font-extrabold text-xl mb-1">DOCTORS</div>
              <div className="text-base font-medium mb-2">Book Now</div>
              <img src="https://assets.jdmagicbox.com/comp/jd_new_cms/jd_homepage/doctor-woman.png" alt="Doctors" className="absolute bottom-2 right-2 h-28 w-28 object-contain" />
              <span className="absolute right-4 top-1/2 -translate-y-1/2 text-3xl font-bold opacity-80">›</span>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}