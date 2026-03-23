import React from 'react'

import { SiReact, SiDjango, SiFastapi, SiGithub, SiMongodb, SiTailwindcss, SiPostgresql } from 'react-icons/si';

export default function Skills() {

    return (
        <section class="py-10 bg-slate-100  border-y border-slate-200 overflow-hidden">
            <div class="flex w-full whitespace-nowrap overflow-hidden">
                <div class="flex animate-marquee items-center gap-16 px-8">
                    <div class="flex items-center gap-3 text-slate-400 font-bold text-2xl hover:text-home-green transition-colors cursor-default">
                        <span class=" text-3xl">
                        <SiReact />
                        </span>
                        React
                    </div>
                    <div class="flex items-center gap-3 text-slate-400 font-bold text-2xl hover:text-home-green transition-colors cursor-default">
                        <span class=" text-3xl">
                        <SiFastapi />
                        </span>
                        FastAPI
                    </div>
                    <div class="flex items-center gap-3 text-slate-400 font-bold text-2xl hover:text-home-green transition-colors cursor-default">
                        <span class=" text-3xl">
                        <SiMongodb />
                        </span>
                        MongoDB
                    </div>
                    <div class="flex items-center gap-3 text-slate-400 font-bold text-2xl hover:text-home-green transition-colors cursor-default">
                        <span class=" text-3xl">
                        <SiTailwindcss />
                        </span>
                        Tailwind
                    </div>
                    <div class="flex items-center gap-3 text-slate-400 font-bold text-2xl hover:text-home-green transition-colors cursor-default">
                        <span class=" text-3xl">
                        <SiDjango />
                        </span>
                        Django
                    </div>
                    <div class="flex items-center gap-3 text-slate-400 font-bold text-2xl hover:text-home-green transition-colors cursor-default">
                        <span class=" text-3xl">
                        <SiGithub />
                        </span>
                        Git
                    </div>
                    <div class="flex items-center gap-3 text-slate-400 font-bold text-2xl hover:text-home-green transition-colors cursor-default">
                        <span class=" text-3xl">
                        <SiPostgresql />
                        </span>
                        PostgreSQL
                    </div>
                    <div className="flex items-center gap-3 text-slate-400 font-bold text-2xl hover:text-home-green transition-colors cursor-default">
                        <span class=" text-3xl">
                            <SiReact />
                        </span>
                        React
                    </div>
                </div>
                <div class="flex items-center gap-3 text-slate-400 font-bold text-2xl hover:text-home-green transition-colors cursor-default">
                    <span class=" text-3xl">
                        <SiFastapi />
                    </span>
                    FastAPI
                </div>
                <div class="flex items-center gap-3 text-slate-400 font-bold text-2xl hover:text-home-green transition-colors cursor-default">
                    <span class=" text-3xl">
                        <SiMongodb />
                    </span>
                    MongoDB
                </div>
                <div class="flex items-center gap-3 text-slate-400 font-bold text-2xl hover:text-home-green transition-colors cursor-default">
                    <span class=" text-3xl">
                        <SiTailwindcss />
                    </span>
                    Tailwind
                </div>
                <div class="flex items-center gap-3 text-slate-400 font-bold text-2xl hover:text-home-green transition-colors cursor-default">
                    <span class=" text-3xl">
                        <SiDjango />
                    </span>
                    Django
                </div>
                <div class="flex items-center gap-3 text-slate-400 font-bold text-2xl hover:text-home-green transition-colors cursor-default">
                    <span class=" text-3xl">
                        <SiGithub />
                    </span>
                    Git
                </div>
                <div class="flex items-center gap-3 text-slate-400 font-bold text-2xl hover:text-home-green transition-colors cursor-default">
                    <span class=" text-3xl">
                        <SiPostgresql />
                    </span>
                    PostgreSQL
                </div>
            </div>
        </section>
    )
}
