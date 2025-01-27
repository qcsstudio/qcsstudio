import React from 'react';
import { ArrowRight } from 'lucide-react';

const TechCard = ({ icon, title, description }) => {
  return (
    <div className="bg-white p-6 h-full transition-all hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:-translate-y-1">
      <div className="bg-blue-50 text-blue-600 mb-4 w-12 h-12 rounded-lg flex items-center justify-center">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-2 text-gray-800">{title}</h3>
      <p className="text-gray-600 mb-4 text-sm leading-relaxed">{description}</p>
      <button className="text-blue-600 flex items-center text-sm font-medium hover:text-blue-700 transition-colors group">
        EXPLORE 
        <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
      </button>
    </div>
  );
}

export default TechCard;