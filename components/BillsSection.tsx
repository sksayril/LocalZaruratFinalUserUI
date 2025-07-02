'use client';

const billsServices = [
  { name: 'Mobile', icon: 'https://img.icons8.com/color/96/000000/iphone-x.png' },
  { name: 'Electricity', icon: 'https://img.icons8.com/color/96/000000/light-on--v2.png' },
  { name: 'DTH', icon: 'https://img.icons8.com/color/96/000000/satellite-tv.png' },
  { name: 'Water', icon: 'https://img.icons8.com/color/96/000000/water.png' },
  { name: 'Gas', icon: 'https://img.icons8.com/color/96/000000/gas-cylinder.png' },
  { name: 'Insurance', icon: 'https://img.icons8.com/color/96/000000/insurance.png' }
];

export default function BillsSection() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-4">
      <div className="bg-white rounded-2xl border border-gray-300 border-b-2 p-0 shadow-sm">
        <div className="flex flex-col md:flex-row items-center md:items-stretch justify-between px-8 py-6">
          {/* Left column */}
          <div className="flex flex-col justify-center md:w-1/3">
            <h3 className="text-3xl font-extrabold text-gray-900 mb-2 flex items-center">Bills & Recharge <span className="ml-2 text-xs font-bold text-[#f26b1d] bg-white px-1 py-0.5 rounded align-middle flex items-center"><img src='https://assets.justdial.com/images/bharat-connect.svg' alt='Bharat Connect' className='h-4 w-auto inline-block mr-1'/>Bharat <span className="text-blue-700 ml-0.5">Connect</span></span></h3>
            <p className="text-gray-700 mb-3 text-base leading-snug">Pay your bills & recharge instantly with Justdial</p>
            <a className="text-blue-600 hover:underline font-semibold text-base cursor-pointer w-max" href="#">Explore More</a>
          </div>
          {/* Right column */}
          <div className="flex-1 flex items-center justify-end">
            <div className="grid grid-cols-6 gap-6 w-full md:w-auto">
              {billsServices.map((service, index) => (
                <div key={index} className="flex flex-col items-center justify-center bg-white rounded-2xl border border-gray-300 w-32 h-32">
                  <div className="w-14 h-14 flex items-center justify-center mb-2">
                    <img src={service.icon} alt={service.name} className="w-12 h-12 object-contain" />
                  </div>
                  <p className="text-base font-semibold text-gray-800 text-center mt-1">{service.name}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}