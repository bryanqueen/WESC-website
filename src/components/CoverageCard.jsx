import { useState } from "react"

export function CoverageCard({country, path, img}) {
    
    return (
        <div className="block bg-white rounded-xl border border-primary">
            <div className="p-4">
            <img
                alt=""
                src={img}
                className="h-56 w-full object-cover md:h-64 lg:h-72 rounded-lg "
                loading='lazy'
            />

            <h3 className="mt-4 text-xl font-bold text-gray-700 md:text-xl lg:text-2xl ">{country}</h3>
            <a href={path} title="" class="inline-flex items-center justify-center pb-0.5 mt-5 text-base font-semibold text-primary transition-all duration-200 border-b-2 border-transparent hover:border-blue-600 focus:border-blue-600">
                Explore
                <svg class="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" />
                </svg>
            </a>
          </div>
</div>
    )
}