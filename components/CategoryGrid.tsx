'use client';

const categories = [
  { name: 'Restaurants', icon: 'https://cdn-icons-png.flaticon.com/512/3075/3075977.png' },
  { name: 'Hotels', icon: 'https://cdn-icons-png.flaticon.com/512/235/235861.png' },
  { name: 'Beauty Spa', icon: 'https://cdn-icons-png.flaticon.com/512/2965/2965567.png' },
  { name: 'Home Decor', icon: 'https://cdn-icons-png.flaticon.com/512/1046/1046857.png' },
  { name: 'Wedding Planning', icon: 'https://cdn-icons-png.flaticon.com/512/3176/3176297.png', special: true },
  { name: 'Education', icon: 'https://cdn-icons-png.flaticon.com/512/3135/3135755.png' },
  { name: 'Rent & Hire', icon: 'https://cdn-icons-png.flaticon.com/512/1256/1256650.png' },
  { name: 'Hospitals', icon: 'https://cdn-icons-png.flaticon.com/512/2965/2965567.png' },
  { name: 'Contractors', icon: 'https://cdn-icons-png.flaticon.com/512/1995/1995574.png' },
  { name: 'Pet Shops', icon: 'https://cdn-icons-png.flaticon.com/512/616/616408.png' },
  { name: 'PG/Hostels', icon: 'https://cdn-icons-png.flaticon.com/512/1046/1046857.png' },
  { name: 'Estate Agent', icon: 'https://cdn-icons-png.flaticon.com/512/1995/1995574.png' },
  { name: 'Dentists', icon: 'https://cdn-icons-png.flaticon.com/512/3062/3062634.png' },
  { name: 'Gym', icon: 'https://cdn-icons-png.flaticon.com/512/1046/1046865.png' },
  { name: 'Loans', icon: 'https://cdn-icons-png.flaticon.com/512/3135/3135715.png' },
  { name: 'Event Organisers', icon: 'https://cdn-icons-png.flaticon.com/512/1995/1995574.png' },
  { name: 'Driving Schools', icon: 'https://cdn-icons-png.flaticon.com/512/1046/1046861.png' },
  { name: 'Packers & Movers', icon: 'https://cdn-icons-png.flaticon.com/512/1046/1046863.png' },
  { name: 'Courier Service', icon: 'https://cdn-icons-png.flaticon.com/512/1046/1046862.png' },
  { name: 'Popular Categories', icon: 'https://cdn-icons-png.flaticon.com/512/1828/1828859.png', popular: true },
];

export default function CategoryGrid() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="grid grid-cols-2 md:grid-cols-6 lg:grid-cols-10 gap-6">
        {categories.map((category, index) => (
          <div
            key={index}
            className={`flex flex-col items-center p-4 rounded-2xl border bg-white shadow-sm cursor-pointer transition-all duration-200 ${category.special ? 'border-pink-300 relative' : ''} ${category.popular ? 'border-2 border-blue-600' : ''}`}
          >
            {/* Icon */}
            {category.popular ? (
              <div className="w-16 h-16 flex items-center justify-center mb-3">
                <span className="w-14 h-14 rounded-full bg-blue-600 flex items-center justify-center">
                  <img src={category.icon} alt={category.name} className="w-7 h-7" />
                </span>
              </div>
            ) : (
              <div className="w-16 h-16 flex items-center justify-center mb-3">
                <img src={category.icon} alt={category.name} className="w-14 h-14 object-contain" />
              </div>
            )}
            {/* Wedding label */}
            {category.special && (
              <span className="absolute top-2 left-1/2 -translate-x-1/2 bg-pink-100 text-pink-700 text-xs font-bold px-3 py-0.5 rounded-full border border-pink-300" style={{letterSpacing: 1}}>WEDDING</span>
            )}
            <span className="text-base text-center font-semibold text-gray-800 mt-1">
              {category.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}