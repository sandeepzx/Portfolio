import React from 'react'

import aboutImg from "../images/about.png";
import { IoMdDownload } from 'react-icons/io';
import { FaCheck } from 'react-icons/fa';
import { PiStrategyFill } from 'react-icons/pi';

export default function About() {

    const myStyle = {
        backgroundImage: `url(${aboutImg})`,

    };
    
    return (
        <section className="px-10 py-20 md:py-32">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                <div className="relative order-2 md:order-1">
                    <div className="absolute top-4 left-4 w-full h-full border-2 border-home-green rounded-2xl -z-10"></div>
                    <div style={myStyle} className="w-full h-125 rounded-2xl bg-cover bg-center shadow-lg grayscale hover:grayscale-0 transition-all duration-500" data-alt="Team working together on code in a modern office" 
                        ></div>
                </div>
                <div className="flex flex-col gap-6 order-1 md:order-2">
                    <div className="flex items-center gap-2">
                        <span className=" text-home-green"><PiStrategyFill /></span>
                        <h3 className="text-sm font-bold uppercase tracking-widest text-home-green">About The Player</h3>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-black tracking-tight leading-tight">
                        Scalability &amp; Problem Solving.
                    </h2>
                    <p className="text-lg text-slate-600 ">
                        Just like a midfielder controls the game, I orchestrate code to build robust, scalable applications. I focus on clean architecture and efficient algorithms. My approach isn't just about writing code that works; it's about building systems that endure the extra time.
                    </p>
                    <div className="flex flex-col gap-4 mt-2">
                        <div className="flex items-start gap-4">
                        <div className="p-2 rounded-lg bg-emerald-100 text-emerald-600">
                            <span className=""><FaCheck /></span>
                        </div>
                        <div>
                            <h4 className="font-bold text-lg">Tactical Planning</h4>
                            <p className="text-slate-500">Detailed system design before the first commit.</p>
                        </div>
                        </div>
                        <div className="flex items-start gap-4">
                        <div className="p-2 rounded-lg bg-emerald-100 text-emerald-600">
                            <span className=""><FaCheck /></span>
                        </div>
                        <div>
                            <h4 className="font-bold text-lg">Performance Focused</h4>
                            <p className="text-slate-500">Optimizing for speed and efficiency at every layer.</p>
                        </div>
                        </div>
                    </div>
 
                </div>
            </div>
        </section>
    )
}
