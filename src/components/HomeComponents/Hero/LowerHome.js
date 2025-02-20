"use client";
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { techCategories } from '@/Data/techCategories';
import Image from 'next/image';
import Link from 'next/link';

// bg-white/10 backdrop-blur-lg border border-white/20 shadow-lg transition-all z-50

function renderTechCard(icon, title, description, url) {
    return (
        <div className=" p-6 h-auto  hover:shadow-lg hover:-translate-y-2  flex flex-col justify-between rounded-lg bg-white/10 backdrop-blur-lg border border-white/20 shadow-lg transition-all z-50">
            <div className="text-blue-600 mb-4 w-12 h-12 rounded-lg flex items-center justify-center">
                <Image className='bg-[#1d447e85]' src={icon} alt={title} width={48} height={48} />
            </div>
            <h3 className="text-lg sm:text-xl font-semibold mb-2 text-white">{title}</h3>
            <p className="text-sm text-gray-300 mb-4 flex-grow">{description}</p>
            <div className='flex justify-end'>
                <Link className="text-blue-400 flex items-center text-sm font-medium hover:text-blue-500 transition-colors group px-4 py-2 rounded-md bg-[#0d2a56]/50 w-full sm:w-auto text-center" href={url}>
                    EXPLORE
                    <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>
            </div>
        </div>
    );
}

function LowerHome() {
    return (
        <div className="LowerHome w-full py-16 px-6 sm:px-10 lg:px-24">
            <div className="max-w-[90rem] mx-auto">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 justify-center">
                    {techCategories.map((category) => (
                        <div key={category.id} className="flex justify-center">
                            {renderTechCard(category.icon, category.title, category.description, category.url)}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default LowerHome;
