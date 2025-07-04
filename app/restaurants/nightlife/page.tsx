import React from 'react';
import { restaurantsMockData, Restaurant } from '../mockData';
import Link from 'next/link';

function slugify(name: string) {
  return name.toLowerCase().replace(/ /g, '-');
}

export default function NightlifePage() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto py-6 px-2 md:px-4">
        {/* Breadcrumb and Title */}
        <div className="text-sm text-gray-600 mb-2">
          Mumbai &gt; Pan Asian Restaurants in Mumbai &gt; 1002+ Listings
        </div>
        <h1 className="text-2xl md:text-3xl font-bold mb-4">Best Pan Asian Restaurants in Mumbai - Order Food Online</h1>
        {/* Filter Bar */}
        <div className="flex flex-wrap gap-2 mb-6 items-center">
          <button className="px-4 py-2 bg-white border rounded font-medium flex items-center gap-1">Sort by <span>▼</span></button>
          <button className="px-4 py-2 bg-white border rounded font-medium flex items-center gap-1">Price <span>▼</span></button>
          <button className="px-4 py-2 bg-blue-100 border border-blue-500 text-blue-700 rounded font-medium flex items-center gap-1">Pan Asian <span>▼</span></button>
          <button className="px-4 py-2 bg-white border rounded font-medium flex items-center gap-1">Amenities <span>▼</span></button>
          <button className="px-4 py-2 bg-white border rounded font-medium flex items-center gap-1">Ratings <span>▼</span></button>
          <button className="px-4 py-2 bg-white border rounded font-medium">Book a Table</button>
          <button className="px-4 py-2 bg-white border rounded font-medium">Online Ordering</button>
          <button className="px-4 py-2 bg-white border rounded font-medium">Open Now</button>
          <button className="px-4 py-2 bg-white border rounded font-medium flex items-center gap-1">🔥 Trending</button>
          <button className="px-4 py-2 bg-white border rounded font-medium flex items-center gap-1">★ Top Rated</button>
          <button className="px-4 py-2 bg-white border-2 border-blue-500 text-blue-700 rounded font-medium flex items-center gap-1 ml-auto">≡ All Filters</button>
        </div>
        {/* Main Content + Sidebar */}
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Main List */}
          <div className="flex-1">
            {restaurantsMockData.map((r: Restaurant, i: number) => (
              <Link key={i} href={`/restaurants/${slugify(r.name)}`} className="block hover:shadow-lg transition-shadow duration-200">
                <div className="bg-white rounded-xl shadow p-6 mb-8 flex flex-col md:flex-row gap-6 items-center md:items-start">
                  <img src={r.image} alt={r.name} className="w-48 h-36 object-cover rounded-lg" />
                  <div className="flex-1 w-full">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between w-full">
                      <div>
                        <h2 className="text-2xl font-semibold mb-1">{r.name}</h2>
                        <div className="flex items-center gap-2 mb-2">
                          <span className="bg-green-600 text-white px-2 py-1 rounded text-base font-bold">{r.rating}★</span>
                          <span className="text-gray-700 text-base">{r.ratingsCount.toLocaleString()} Ratings</span>
                          {r.tags && r.tags.map((tag: string, idx: number) => (
                            <span key={idx} className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs font-semibold ml-2">{tag}</span>
                          ))}
                        </div>
                        <div className="text-gray-600 text-base mb-1 flex items-center gap-2">
                          <span className="material-icons text-lg align-middle">location_on</span>{r.address}
                        </div>
                        <div className="text-green-700 text-base font-semibold mb-1">{r.openTime}</div>
                        <div className="text-gray-700 text-base mb-1">₹ {r.price} Price for two</div>
                      </div>
                    </div>
                    <div className="flex gap-3 mt-4">
                      <button className="bg-green-600 text-white px-4 py-2 rounded font-semibold flex items-center gap-2"><span className="material-icons text-lg">call</span>Show Number</button>
                      <button className="bg-blue-600 text-white px-4 py-2 rounded font-semibold">Order online</button>
                      {r.actions.includes('Book a table') && (
                        <button className="bg-blue-600 text-white px-4 py-2 rounded font-semibold">Book a table</button>
                      )}
                      {r.actions.includes('Menu') && (
                        <button className="bg-blue-600 text-white px-4 py-2 rounded font-semibold">Menu</button>
                      )}
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
          {/* Sidebar */}
          <div className="w-full lg:w-96 flex flex-col gap-6">
            <div className="bg-white rounded-xl shadow p-4 flex items-center justify-center min-h-[220px]">
              <img src="https://www.cathaypacific.com/content/dam/focal-point/cx/in/en/campaigns/2023/11/Family-Travel/FP-EN-Desktop-640x360.jpg" alt="Ad 1" className="rounded-lg object-cover w-full h-full" />
            </div>
            <div className="bg-white rounded-xl shadow p-4 flex items-center justify-center min-h-[220px]">
              <img src="https://www.justdial.com/jdimg/jd-ads/19-1-crore-buyers-640x360.jpg" alt="Ad 2" className="rounded-lg object-cover w-full h-full" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 