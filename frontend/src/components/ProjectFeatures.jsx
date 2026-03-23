import React from 'react'
import { IoAnalytics } from 'react-icons/io5'

export default function ProjectFeatures({ features }) {
    return (
        <div className="bg-white rounded-2xl p-8 border border-slate-100 shadow-sm">
            <h3 className="text-slate-900 text-xl font-bold mb-8 flex items-center gap-3">
                <span className="p-2 bg-home-green/10 rounded-lg text-home-green text-2xl">
                <IoAnalytics />
                </span>
                Match Stats - Key Features
            </h3>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
                {features?.map((item, index) => (
                    <li 
                        key={index} 
                        className="group flex items-center gap-3 p-3 rounded-xl transition-all duration-200  border border-transparent "
                    >
                        <div className="shrink-0 w-6 h-6 rounded-full bg-home-green/10 text-home-green flex items-center justify-center group-hover:bg-home-green group-hover:text-white transition-colors">
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                        </div>
                        
                        <span className="text-slate-600 font-medium group-hover:text-slate-900 transition-colors">
                        {item}
                        </span>
                    </li>
                ))}
            </ul>
        </div>
    )
}
