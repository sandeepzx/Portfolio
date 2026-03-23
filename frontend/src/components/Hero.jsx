import React, { useRef } from 'react'

import heroImg from "../images/hero.png"; 
import { Link } from 'react-router-dom';

export default function Hero() {

    const heroRef = useRef();
    const ballRef = useRef();

    const myStyle = {
        backgroundImage: `url(${heroImg})`,

    };
    return (
        <section class="relative px-10 py-12 md:py-20 lg:py-24">
            <div class="absolute top-0 right-0 -z-10 w-96 h-96 bg-home-green/20 rounded-full blur-[100px] opacity-50"></div>
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div class="flex flex-col gap-6 lg:max-w-xl">
                    <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100  w-fit border border-slate-200 ">
                        <span class="relative flex h-2 w-2">
                        <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-home-green opacity-75"></span>
                        <span class="relative inline-flex rounded-full h-2 w-2 bg-home-green"></span>
                        </span>
                        <span class="text-xs font-semibold text-slate-600  uppercase tracking-wide">Open to opportunities</span>
                    </div>
                    <h1 class="text-5xl md:text-6xl lg:text-7xl font-black tracking-tight leading-[1.1]">
                        Hi, I'm Sandeep. <br/>
                        <span class="text-transparent bg-clip-text bg-linear-to-r from-home-green to-emerald-600">Full Stack Tactician.</span>
                    </h1>
                    <p class="text-lg text-slate-600 font-normal leading-relaxed max-w-lg">
                        Building scalable solutions with precision and strategy. I treat every line of code like a pass on the field—calculated and impactful.
                    </p>
                    <div class="flex flex-wrap gap-4 pt-4">
                        <Link to='/achivements' class="flex items-center justify-center h-12 px-8 rounded-lg bg-home-green text-slate-900 font-bold text-base hover:bg-home-green/90 transition-transform active:scale-95 shadow-xl shadow-home-green/25">
                            Enter the Ground
                        </Link>
                        <Link to='/achivements' class="flex items-center justify-center h-12 px-8 rounded-lg bg-white  border border-slate-200  text-slate-900  font-bold text-base hover:bg-slate-50  transition-colors">
                            View Projects
                        </Link>
                    </div>
                    <div class="grid grid-cols-3 gap-4 mt-8 pt-8 border-t border-slate-200 ">
                        <div class="flex flex-col">
                        <span class="text-3xl font-bold text-slate-900 ">4+</span>
                        <span class="text-sm font-medium text-slate-500">Years Exp</span>
                        </div>
                        <div class="flex flex-col">
                        <span class="text-3xl font-bold text-slate-900 ">20+</span>
                        <span class="text-sm font-medium text-slate-500">Projects</span>
                        </div>
                        <div class="flex flex-col">
                        <span class="text-3xl font-bold text-slate-900 ">15+</span>
                        <span class="text-sm font-medium text-slate-500">Tech Stack</span>
                        </div>
                    </div>
                </div>
                <div class="relative flex justify-center lg:justify-end">
                    <div class="relative w-72 h-72 md:w-96 md:h-96 rounded-full border-4 border-white  shadow-2xl overflow-hidden z-10">
                        <div class="w-full h-full bg-slate-200 flex items-center justify-center bg-cover bg-center" data-alt="Portrait of Sandeep smiling professionally" 
                        style={myStyle}
                        ></div>
                    </div>
                </div>
            </div>
        </section>

    )
}
