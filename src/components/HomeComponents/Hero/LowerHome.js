"use client"
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { techCategories } from '@/Data/techCategories';

function renderTechCard(icon, title, description) {

    return (
        <div className="bg-[#1d447e85] p-6 h-[270px] transition-all hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:-translate-y-1 hover:h-[300px] border-l-[1px] border-r-[1px] border-[#4073BF] relative left-[110px]">
            <div className=" text-blue-600 mb-4 w-12 h-12 rounded-lg flex items-center justify-center">
                <img className='bg-[#1d447e85]' src={icon.src} />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-white w-[290px]">{title}</h3>
            <div className='flex items-end justify-end min-h-[50%]'>
                <button className="  text-blue-600 flex items-center text-sm font-medium hover:text-blue-700 transition-colors group">
                    EXPLORE
                    <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                </button>
            </div>
        </div>
    );
}

function App() {
    return (
        <div className="LowerHome w-[90%] py-16 px-4">
            <div className="max-w-[90rem] mx-auto ">
                <div className="flex scrollbar-hide ">
                    {techCategories.map((category) => (
                        <div key={category.id} className="w-[300px]">

            {renderTechCard(category.icon, category.title, category.description)}

                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default App;