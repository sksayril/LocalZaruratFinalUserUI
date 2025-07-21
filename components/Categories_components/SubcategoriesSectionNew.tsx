'use client';

import React from 'react';
import Link from 'next/link';
import { useSubcategories } from '@/hooks/useSubcategories';
import { ArrowLeft, Users, Star, MapPin, Search, Filter, Phone } from 'lucide-react';

interface SubcategoriesSectionNewProps {
  mainCategoryId: string;
  mainCategoryName?: string;
}

export default function SubcategoriesSectionNew({ mainCategoryId, mainCategoryName }: SubcategoriesSectionNewProps) {
  const { subcategories, loading, error } = useSubcategories(mainCategoryId);

  // Get the main category icon from the first subcategory if available
  const mainCategoryIcon = subcategories.length > 0 ? subcategories[0].mainCategory.icon : null;

  // Fallback subcategories for demonstration when API returns empty
  const fallbackSubcategories = [
    {
      _id: '1',
      name: 'Basic Service',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=300&fit=crop&auto=format&q=80',
      thumbnail: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=300&fit=crop&auto=format&q=80',
      description: 'Essential services for your needs',
      vendorCount: 15,
      slug: 'basic-service',
      mainCategory: {
        _id: mainCategoryId,
        name: mainCategoryName || 'Category',
        icon: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=300&fit=crop&auto=format&q=80'
      }
    },
    {
      _id: '2',
      name: 'Premium Service',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=300&fit=crop&auto=format&q=80',
      thumbnail: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=300&fit=crop&auto=format&q=80',
      description: 'High-quality premium services',
      vendorCount: 8,
      slug: 'premium-service',
      mainCategory: {
        _id: mainCategoryId,
        name: mainCategoryName || 'Category',
        icon: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=300&fit=crop&auto=format&q=80'
      }
    },
    {
      _id: '3',
      name: 'Specialized Service',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=300&fit=crop&auto=format&q=80',
      thumbnail: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=300&fit=crop&auto=format&q=80',
      description: 'Specialized and expert services',
      vendorCount: 12,
      slug: 'specialized-service',
      mainCategory: {
        _id: mainCategoryId,
        name: mainCategoryName || 'Category',
        icon: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=300&fit=crop&auto=format&q=80'
      }
    }
  ];

  // Use fallback data if API returns empty
  const displaySubcategories = subcategories.length > 0 ? subcategories : fallbackSubcategories;

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50">
        {/* Hero Skeleton */}
        <div className="relative h-[500px] bg-gradient-to-r from-gray-300 to-gray-400 animate-pulse">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="h-16 w-96 bg-gray-500 rounded-lg animate-pulse"></div>
          </div>
        </div>

        {/* Action Cards Skeleton */}
        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 -mt-20 relative z-10">
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-white rounded-lg p-8 shadow-lg">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gray-300 rounded animate-pulse"></div>
                  <div className="flex-1">
                    <div className="h-6 bg-gray-300 rounded mb-2 animate-pulse w-32"></div>
                    <div className="h-4 bg-gray-200 rounded animate-pulse w-24"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Feature Cards Skeleton */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            {[1, 2, 3].map((i) => (
              <div key={i} className="relative h-[300px] rounded-lg overflow-hidden">
                <div className="w-full h-full bg-gradient-to-r from-gray-300 to-gray-400 animate-pulse"></div>
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                  <div className="h-8 w-48 bg-gray-500 rounded animate-pulse"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="max-w-7xl mx-auto py-8 px-4 md:px-6">
          <div className="text-center py-16">
            <div className="bg-red-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <span className="text-red-600 text-2xl">⚠️</span>
            </div>
            <h2 className="text-2xl font-bold text-gray-800 mb-2">Failed to Load Subcategories</h2>
            <p className="text-gray-600 mb-4">{error}</p>
            <Link 
              href="/"
              className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Home
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 flex flex-col items-center">
      {/* Hero Section */}
      <div className="relative h-[600px] w-full bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 overflow-hidden">
        <img 
          src={mainCategoryIcon || (displaySubcategories.length > 0 && subcategories.length > 0 ? displaySubcategories[0].thumbnail : "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1200&h=500&fit=crop&auto=format&q=80")}
          alt={`${mainCategoryName || 'Services'} and Solutions`}
          className="w-full h-full object-cover opacity-40"
          loading="eager"
          decoding="async"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-black/40"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-7xl md:text-8xl font-black text-white tracking-tight mb-4 drop-shadow-2xl">
              {mainCategoryName?.toUpperCase() || 'SERVICES'}
            </h1>
            <p className="text-xl text-blue-100 font-medium max-w-2xl mx-auto">
              Discover premium {mainCategoryName?.toLowerCase()} services tailored to your needs
            </p>
          </div>
        </div>
        {/* Floating elements */}
        <div className="absolute top-20 left-20 w-32 h-32 bg-blue-500/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-purple-500/20 rounded-full blur-3xl"></div>
      </div>

      {/* Main Content Container */}
      <div className="w-full max-w-7xl px-6 py-12 flex flex-col items-center">
        {/* Action Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 -mt-32 relative z-10 w-full">
          <Link href={`/subcategories/${mainCategoryId}/search`} className="group bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-2 border border-white/20">
            <div className="flex items-center gap-6">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300">
                <Search className="w-8 h-8 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-2 text-gray-800">Search Services</h3>
                <p className="text-gray-600 font-medium">Find What You Need →</p>
              </div>
            </div>
            <div className="mt-6 h-1 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
          </Link>

          <Link href={`/subcategories/${mainCategoryId}/trending`} className="group bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-2 border border-white/20">
            <div className="flex items-center gap-6">
              <div className="w-16 h-16 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300">
                <Star className="w-8 h-8 text-white fill-current" />
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-2 text-gray-800">TRENDING SERVICES</h3>
                <p className="text-gray-600 font-medium">Most Popular →</p>
              </div>
            </div>
            <div className="mt-6 h-1 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
          </Link>

          <Link href={`/subcategories/${mainCategoryId}/contact`} className="group bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-2 border border-white/20">
            <div className="flex items-center gap-6">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300">
                <Phone className="w-8 h-8 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-2 text-gray-800">CONTACT VENDORS</h3>
                <p className="text-gray-600 font-medium">{displaySubcategories.length} Services →</p>
              </div>
            </div>
            <div className="mt-6 h-1 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
          </Link>
        </div>

        {/* Subcategories Grid */}
        {displaySubcategories.length > 0 ? (
          <>
            {subcategories.length === 0 && displaySubcategories.length > 0 && (
              <div className="text-center mb-12">
                <div className="bg-gradient-to-r from-yellow-50 to-orange-50 border border-yellow-200 text-yellow-800 px-6 py-4 rounded-2xl shadow-lg max-w-2xl mx-auto">
                  <strong>Note:</strong> Showing demo subcategories. API returned no data for this category.
                </div>
              </div>
            )}
            
                    {/* Section Header */}
        <div className="text-center mb-16 w-full">
          <h2 className="text-4xl md:text-5xl font-black text-gray-800 mb-4">
            Available Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore our curated selection of premium {mainCategoryName?.toLowerCase()} services
          </p>
        </div>
            
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
              {displaySubcategories.slice(0, 6).map((subcategory, index) => (
              <Link
                key={subcategory._id}
                href={`/subcategories/${mainCategoryId}/${subcategory.slug}`}
                className="group relative h-[400px] rounded-3xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-4"
              >
                <img 
                  src={subcategory.thumbnail} 
                  alt={subcategory.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  loading="lazy"
                  decoding="async"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent group-hover:from-black/70 transition-all duration-500"></div>
                
                {/* Floating badge */}
                <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 border border-white/30">
                  <div className="flex items-center gap-2 text-white text-sm font-semibold">
                    <Star className="w-4 h-4 fill-current text-yellow-400" />
                    <span>4.8</span>
                  </div>
                </div>
                
                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <div className="text-center">
                    <h2 className="text-3xl font-black text-white mb-4 drop-shadow-lg">{subcategory.name}</h2>
                    <p className="text-blue-100 mb-4 font-medium">{subcategory.description}</p>
                    <div className="flex items-center justify-center gap-6 text-white text-sm">
                      <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2">
                        <Users className="w-4 h-4" />
                        <span className="font-semibold">{subcategory.vendorCount} vendors</span>
                      </div>
                      <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2">
                        <MapPin className="w-4 h-4" />
                        <span className="font-semibold">Available</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Hover overlay */}
                <div className="absolute inset-0 border-2 border-white/30 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </Link>
            ))}
          </div>
          </>
        ) : (
          <div className="text-center py-16">
            <div className="bg-gray-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <span className="text-gray-400 text-2xl">📂</span>
            </div>
            <h2 className="text-2xl font-bold text-gray-800 mb-2">No Subcategories Found</h2>
            <p className="text-gray-600 mb-4">
              There are no subcategories available for this category at the moment.
            </p>
            <Link 
              href="/"
              className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Home
            </Link>
          </div>
        )}

        {/* View All Button */}
        {displaySubcategories.length > 6 && (
          <div className="text-center mt-16">
            <Link 
              href={`/subcategories/${mainCategoryId}/all`}
              className="group inline-flex items-center gap-4 bg-gradient-to-r from-blue-600 to-indigo-700 text-white px-10 py-5 rounded-2xl font-bold text-lg hover:from-blue-700 hover:to-indigo-800 transition-all duration-300 shadow-2xl hover:shadow-3xl transform hover:-translate-y-1"
            >
              <span>View All {displaySubcategories.length} Services</span>
              <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center group-hover:bg-white/30 transition-all duration-300">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </Link>
          </div>
        )}
        
        {/* Premium Footer */}
        <div className="mt-20 text-center w-full">
          <div className="bg-gradient-to-r from-slate-100 to-blue-100 rounded-3xl p-8 shadow-xl w-full">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              Why Choose Our Services?
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <Star className="w-8 h-8 text-white fill-current" />
                </div>
                <h4 className="text-lg font-semibold text-gray-800 mb-2">Premium Quality</h4>
                <p className="text-gray-600">Hand-picked vendors with proven track records</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-lg font-semibold text-gray-800 mb-2">Verified Vendors</h4>
                <p className="text-gray-600">All vendors are thoroughly vetted and certified</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <Phone className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-lg font-semibold text-gray-800 mb-2">24/7 Support</h4>
                <p className="text-gray-600">Round-the-clock customer support available</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 