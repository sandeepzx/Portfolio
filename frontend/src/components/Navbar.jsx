import React from 'react'
import { Link } from 'react-router-dom';
import { MdMenu, MdOutlineSportsSoccer } from 'react-icons/md';


export default function Navbar() {
    return (
        <header className="sticky top-0 z-50 w-full glass-card border-b border-slate-200 ">
            <div className="px-4 md:px-10 py-4 mx-auto max-w-7xl flex items-center justify-between">
                <div className="flex items-center gap-3">
                    <div className="flex items-center justify-center w-10 h-10 rounded-full bg-home-green/10 text-home-green">
                        <span className=""><MdOutlineSportsSoccer /></span>
                    </div>
                    <h2 className="text-xl font-bold tracking-tight">Sandeep <span className="text-home-green">| Dev</span></h2>
                </div>
                <nav className="hidden md:flex items-center gap-8">
                    <Link className="text-sm font-medium hover:text-home-green transition-colors" to='/' >Home</Link>
                    <Link className="text-sm font-medium hover:text-home-green transition-colors" to='/achivements' >Achivements</Link>
                </nav>
                <div className="flex items-center gap-4">
                    <Link 
                        to="mailto:sandeepshine865@gmail.com?subject=Hiring Inquiry&body=Hi, I would like to discuss a project..."
                        className="contents"
                    >
                        <button className="hidden sm:flex items-center justify-center h-10 px-6 rounded-lg bg-home-green text-slate-900 font-bold text-sm hover:bg-home-green/90 transition-colors shadow-lg shadow-home-green/20">
                            Hire Me
                        </button>
                    </Link>

                    <button className="md:hidden p-2 text-slate-900">
                        <span className=""><MdMenu /></span>
                    </button>
                </div>

            </div>
        </header>
    )
}
