import React from 'react';
import { useParams } from 'next/navigation';
import { restaurantsMockData, Restaurant } from '../mockData';
import Image from 'next/image';
import Link from 'next/link';

function slugify(name: string) {
  return name.toLowerCase().replace(/ /g, '-');
}

function getRestaurantBySlug(slug: string): Restaurant | undefined {
  return restaurantsMockData.find(r => slugify(r.name) === slug);
}

const tabs = [
  { label: 'Overview', value: 'overview' },
  { label: 'Quick Info', value: 'quick-info' },
  { label: 'Services', value: 'services' },
  { label: 'Photos', value: 'photos' },
  { label: 'Reviews', value: 'reviews' },
];

export default function RestaurantDetailPage({ params }: { params: { restaurant: string } }) {
  const { restaurant } = params;
  const data = getRestaurantBySlug(restaurant);

  if (!data) {
    return <div className="max-w-3xl mx-auto py-12 text-center text-2xl font-bold">Restaurant Not Found</div>;
  }

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="max-w-6xl mx-auto py-6 px-2 md:px-4">
        {/* Breadcrumb */}
        <div className="text-sm text-gray-600 mb-2">
          Mumbai &gt; North Indian Restaurants In Mumbai &gt; North Indian Restaurants in Juhu &gt; {data.name}
        </div>
        {/* Image Gallery */}
        <div className="grid grid-cols-4 gap-2 mb-4">
          <div className="col-span-2 row-span-2">
            <img src={data.image} alt={data.name} className="w-full h-64 object-cover rounded-lg" />
          </div>
          <img src={data.image} alt={data.name} className="w-full h-32 object-cover rounded-lg" />
          <img src={data.image} alt={data.name} className="w-full h-32 object-cover rounded-lg" />
          <img src={data.image} alt={data.name} className="w-full h-32 object-cover rounded-lg" />
          <div className="w-full h-32 bg-gray-200 rounded-lg flex items-center justify-center text-lg font-bold">+65 More</div>
          <div className="w-full h-32 bg-gray-100 rounded-lg flex items-center justify-center text-lg font-bold">Add More Photo</div>
        </div>
        {/* Main Info */}
        <div className="flex items-center gap-4 mb-2">
          <img src="https://img.freepik.com/free-icon/restaurant_318-164514.jpg" alt="logo" className="w-14 h-14 rounded bg-white border p-1" />
          <h1 className="text-2xl font-bold">{data.name}</h1>
        </div>
        <div className="flex flex-wrap items-center gap-4 mb-4">
          <span className="bg-green-600 text-white px-2 py-1 rounded text-base font-bold">{data.rating}★</span>
          <span className="text-gray-700 text-base">{data.ratingsCount.toLocaleString()} Rating</span>
          <span className="text-gray-700 text-base flex items-center gap-1"><span className="material-icons text-lg align-middle">location_on</span>Juhu, Mumbai</span>
          <span className="text-green-700 text-base font-semibold">Open until 3:30 pm</span>
          <span className="text-gray-700 text-base">16 Years in Business</span>
          <span className="text-gray-700 text-base">Price for two ₹ {data.price}</span>
        </div>
        <div className="flex flex-wrap gap-3 mb-4">
          <button className="bg-green-600 text-white px-4 py-2 rounded font-semibold flex items-center gap-2"><span className="material-icons text-lg">call</span>Show Number</button>
          <button className="bg-blue-600 text-white px-4 py-2 rounded font-semibold">Order Online</button>
          <button className="bg-blue-600 text-white px-4 py-2 rounded font-semibold">Book a Table</button>
          <button className="bg-green-100 text-green-700 px-4 py-2 rounded font-semibold flex items-center gap-2"><span className="material-icons text-lg">whatsapp</span>WhatsApp</button>
          <button className="bg-white border px-3 py-2 rounded"><span className="material-icons">share</span></button>
          <button className="bg-white border px-3 py-2 rounded"><span className="material-icons">edit</span></button>
        </div>
        <div className="flex flex-wrap gap-2 mb-4">
          <span className="bg-gray-100 px-3 py-1 rounded-full text-gray-700">North Indian Restaurants</span>
          <span className="bg-gray-100 px-3 py-1 rounded-full text-gray-700">Restaurants</span>
          <button className="bg-white border p-2 rounded"><span className="material-icons">bookmark_border</span></button>
        </div>
        {/* Tabs */}
        <div className="flex gap-8 border-b mb-4">
          {tabs.map(tab => (
            <button
              key={tab.value}
              className={`pb-2 font-semibold ${tab.value === 'overview' ? 'border-b-2 border-blue-600 text-black' : 'text-gray-600'}`}
            >
              {tab.label}
            </button>
          ))}
        </div>
        {/* Product Section (only for Overview) */}
        <div className="py-8">
          <h2 className="text-xl font-bold mb-4">Product</h2>
          <div className="bg-white rounded shadow p-6">
            <p className="text-gray-700">This is the Product section. Add your product details here.</p>
          </div>
        </div>
        {/* Overview Content */}
        <div className="flex flex-col md:flex-row gap-8">
          <div className="flex-1">
            <div className="bg-white rounded-xl shadow p-6 mb-8">
              <h2 className="text-lg font-bold mb-2">Contact</h2>
              <button className="bg-green-600 text-white px-4 py-2 rounded font-semibold flex items-center gap-2 mb-2"><span className="material-icons text-lg">call</span>Show Number</button>
            </div>
          </div>
          <div className="w-full md:w-96 flex flex-col gap-6">
            <div className="bg-white rounded-xl shadow p-4 flex items-center justify-center min-h-[120px]">
              <img src="https://www.justdial.com/jdimg/jd-ads/19-1-crore-buyers-640x360.jpg" alt="Ad 2" className="rounded-lg object-cover w-full h-full" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export async function generateStaticParams() {
  function slugify(name: string) {
    return name.toLowerCase().replace(/ /g, '-');
  }
  return restaurantsMockData.map(r => ({ restaurant: slugify(r.name) }));
} 