import React from 'react'
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaLocationDot } from 'react-icons/fa6';
import { MdOutlineSportsSoccer } from 'react-icons/md';
import { Link } from 'react-router-dom';

export default function Footer() {
    return (

        <footer className="bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800">
            <div className="max-w-7xl mx-auto px-4 py-12 md:flex md:items-center md:justify-between">
                <div className="flex flex-col gap-2 mb-8 md:mb-0">
                    <div className="flex items-center gap-2 text-slate-900 dark:text-white font-bold text-xl">
                        <span className=" text-home-green">
                        <MdOutlineSportsSoccer />
                        </span>
                        Sandeep | Dev
                    </div>
                    <p className="text-slate-500 text-sm">© 2024 Sandeep. All rights reserved.</p>
                    <p className="text-slate-500 text-sm flex items-center gap-1">
                        <span className=" text-base">
                        <FaLocationDot />
                        </span>
                        Thrissur, India
                    </p>
                </div>
                <div className="flex gap-6">
                    <Link to='https://github.com/sandeepzx' target="_blank" className="text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors" href="#">
                        <span className="sr-only">GitHub</span>
                        <FaGithub />
                    </Link>
                    <Link to='https://www.linkedin.com/in/sandeep-a-s-b940712a1/' target="_blank"  className="text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors" href="#">
                        <FaLinkedin />
                    </Link>
  
                </div>
            </div>
        </footer>

    )
}
