import { Metadata } from 'next';
import { fetchSubcategories } from '@/lib/api';
import { ArrowLeft, Users, Star, MapPin, Phone, Mail } from 'lucide-react';
import Link from 'next/link';

interface SubcategoryDetailPageProps {
  params: { 
    mainCategoryId: string;
    subcategorySlug: string;
  };
}

export async function generateMetadata({ params }: SubcategoryDetailPageProps): Promise<Metadata> {
  const { mainCategoryId, subcategorySlug } = params;
  
  try {
    const subcategories = await fetchSubcategories(mainCategoryId);
    const subcategory = subcategories.find(sub => sub.slug === subcategorySlug);
    
    return {
      title: `${subcategory?.name || 'Service'} | Local Zarurat`,
      description: subcategory?.description || 'Find the best local vendors and services.',
    };
  } catch (error) {
    return {
      title: 'Service Details | Local Zarurat',
      description: 'Find the best local vendors and services.',
    };
  }
}

export default async function SubcategoryDetailPage({ params }: SubcategoryDetailPageProps) {
  const { mainCategoryId, subcategorySlug } = params;
  
  let subcategory = null;
  try {
    const subcategories = await fetchSubcategories(mainCategoryId);
    subcategory = subcategories.find(sub => sub.slug === subcategorySlug);
  } catch (error) {
    console.error('Error fetching subcategory:', error);
  }

  if (!subcategory) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="max-w-7xl mx-auto py-8 px-4 md:px-6">
          <div className="text-center py-16">
            <div className="bg-red-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <span className="text-red-600 text-2xl">⚠️</span>
            </div>
            <h1 className="text-3xl font-bold text-gray-800 mb-4">Service Not Found</h1>
            <p className="text-gray-600 mb-6">The service you're looking for doesn't exist or has been removed.</p>
            <Link 
              href={`/subcategories/${mainCategoryId}`}
              className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Subcategories
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="max-w-7xl mx-auto py-8 px-4 md:px-6">
        {/* Breadcrumb */}
        <div className="text-sm text-gray-600 mb-6 flex items-center space-x-2">
          <Link href="/" className="hover:text-blue-600 cursor-pointer font-medium">Home</Link>
          <span className="text-gray-400">›</span>
          <Link href={`/subcategories/${mainCategoryId}`} className="hover:text-blue-600 cursor-pointer font-medium">Subcategories</Link>
          <span className="text-gray-400">›</span>
          <span className="text-gray-800 font-semibold">{subcategory.name}</span>
        </div>

        {/* Hero Section */}
        <div className="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden mb-8">
          <div className="relative h-64 md:h-80">
            <img 
              src={subcategory.image} 
              alt={subcategory.name}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
            <div className="absolute bottom-6 left-6 text-white">
              <h1 className="text-4xl md:text-5xl font-bold mb-2">{subcategory.name}</h1>
              <p className="text-xl opacity-90">{subcategory.description}</p>
            </div>
          </div>
        </div>

        {/* Stats and Actions */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                <Users className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900">Available Vendors</h3>
                <p className="text-2xl font-bold text-blue-600">{subcategory.vendorCount}</p>
              </div>
            </div>
            <p className="text-gray-600 text-sm">Verified and trusted service providers</p>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                <Star className="w-6 h-6 text-green-600 fill-current" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900">Average Rating</h3>
                <p className="text-2xl font-bold text-green-600">4.5</p>
              </div>
            </div>
            <p className="text-gray-600 text-sm">Based on customer reviews</p>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center">
                <MapPin className="w-6 h-6 text-purple-600" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900">Service Area</h3>
                <p className="text-2xl font-bold text-purple-600">Mumbai</p>
              </div>
            </div>
            <p className="text-gray-600 text-sm">Available in your area</p>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap gap-4 mb-8">
          <button className="bg-gradient-to-r from-blue-600 to-indigo-700 hover:from-blue-700 hover:to-indigo-800 text-white px-8 py-4 rounded-2xl font-bold flex items-center gap-3 transition-all duration-300 hover:shadow-xl transform hover:scale-105">
            <Phone className="w-5 h-5" />
            Find Vendors
          </button>
          
          <button className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white px-8 py-4 rounded-2xl font-bold flex items-center gap-3 transition-all duration-300 hover:shadow-xl transform hover:scale-105">
            <Mail className="w-5 h-5" />
            Get Quotes
          </button>
          
          <button className="bg-white border-2 border-gray-200 hover:border-gray-300 text-gray-700 px-8 py-4 rounded-2xl font-bold flex items-center gap-3 transition-all duration-300 hover:shadow-lg transform hover:scale-105">
            <Star className="w-5 h-5" />
            Read Reviews
          </button>
        </div>

        {/* Back Button */}
        <div className="text-center">
          <Link 
            href={`/subcategories/${mainCategoryId}`}
            className="inline-flex items-center gap-2 bg-gray-100 hover:bg-gray-200 text-gray-700 px-6 py-3 rounded-xl font-semibold transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Subcategories
          </Link>
        </div>
      </div>
    </div>
  );
}

// Generate static params for known subcategories
export async function generateStaticParams() {
  try {
    const categories = await fetchSubcategories(''); // This would need to be updated based on your actual categories
    return categories.map((subcategory) => ({
      mainCategoryId: subcategory.mainCategory._id,
      subcategorySlug: subcategory.slug,
    }));
  } catch (error) {
    console.error('Error generating static params for subcategories:', error);
    return [];
  }
} 