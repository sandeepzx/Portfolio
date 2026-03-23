import React from 'react'

import { FaTerminal, FaRegCircleCheck, FaChevronRight } from "react-icons/fa6";
import { MdOutlineVisibility, MdInfoOutline } from "react-icons/md";
import { IoClose } from "react-icons/io5";
import { Link } from 'react-router-dom';

export default function ProjectTemplate({ isShow, data, onClose }) {
    // console.log("ProjectTemplate",isShow,data)
    if (!isShow) {
        return null
    }
    const position = {
        1: 'GOAL KEEPER',
        2: 'LEFT BACK',
        3: 'CENTER BACK',
        4: 'CENTER BACK',
        5: 'RIGHT BACK',
        6: 'DEFENSIVE MIDFIELDER',
        8: 'CENTRAL MIDFIELDER',
        10: 'CENTRAL MIDFIELDER',
        7: 'LEFT WING FORWARD',
        9: 'CENTER FORWARD',
        11: 'RIGHT WING FORWARD',
    }

    const handlePos = (id) => {
        return position[id];
    }
    
    return (

                <div className="w-full lg:w-[30%] lg:min-w-90 glass-panel flex flex-col border-t lg:border-t-0 border-slate-200 relative z-20 ">
                    <div className="absolute inset-0 scanlines opacity-30 pointer-events-none rounded-t-lg lg:rounded-none"></div>
                    <div className="relative z-10 flex flex-col h-full p-8 overflow-y-auto custom-scrollbar animate-in fade-in slide-in-from-right-4 duration-500 ">
                        <div className="flex justify-between items-start mb-6">
                            <div>
                                {data.isActive && (        
                                <div className="flex items-center gap-2 px-3 py-1 bg-primary/10 rounded-full border border-primary/20">
                                    <span className="w-2 h-2 bg-primary rounded-full animate-pulse"></span>
                                    <span className="text-[10px] font-bold text-primary uppercase tracking-widest">
                                    Active Project
                                    </span>
                                </div>
                                )}
                            </div>

                            <button onClick={onClose} className="text-slate-400 hover:text-slate-600 transition-colors">
                                <IoClose size={20} />
                            </button>
                        </div>
                        <div className="mb-6">
                            <h2 className="text-3xl font-bold text-slate-800 font-display mb-1 leading-tight">{data.title}</h2>
                            <p className="text-sm font-semibold text-primary/90 uppercase tracking-wide">{handlePos(data.jercy)} – {data.sub}</p>
                            <p className="text-sm font-semibold text-gray-400 uppercase tracking-wide">{data.from} – {data.to}</p>
                        </div>
                        <p className="text-slate-600 text-sm leading-relaxed mb-8 border-l-2 border-primary/30 pl-4">
                            {data.note}
                        </p>
                        <div className="mb-8">
                            <h3 className="text-xs font-bold text-slate-800 uppercase tracking-wider mb-4 flex items-center gap-2">
                                <span className=" text-sm text-emerald-400"><FaRegCircleCheck /></span>
                                Key Features
                            </h3>
                            <ul className="space-y-3">
                                {(data?.features || []).slice(0,4).map((item, index) => (
                                    <li key={index} className="flex items-start gap-3 text-sm text-slate-600 group">
                                        <span className="w-1.5 h-1.5 rounded-full bg-slate-300 mt-2 group-hover:bg-primary transition-colors"></span>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="mb-10">
                            <h3 className="text-xs font-bold text-slate-800 uppercase tracking-wider mb-3 flex items-center gap-2">
                                <span className=" text-sm text-slate-400"><FaTerminal /></span>
                                Tech Stack
                            </h3>
                            <div className="flex flex-wrap gap-2">
                                {(data?.techStack || []).slice(0,4).map((item,index) => {
                                    return(
                                        <span key={index} className="px-3 py-1 bg-white border border-slate-200 text-slate-600 text-xs font-medium rounded-md shadow-sm">{item}</span>
                                    )
                                })}
                            </div>
                        </div>
                        <div className=" grid grid-cols-2 gap-4">
                            <Link to={data.linkedinLink} target="_blank" 
                                className={`flex items-center justify-center gap-2 bg-primary hover:bg-sky-600 text-white 
                                py-3 px-4 rounded-xl font-bold shadow-lg shadow-primary/20 transition-all hover:-translate-y-0.5
                                ${data.linkedinLink === "" ? 'cursor-not-allowed': ''}`}>
                                <span className=" text-sm"><MdOutlineVisibility /></span>
                                View Live
                            </Link>
                            <Link to={data.githubLink} target="_blank" 
                                className={`flex items-center justify-center gap-2 bg-white hover:bg-slate-50 text-slate-700 
                                border border-slate-200 py-3 px-4 rounded-xl font-bold transition-all hover:border-slate-300 
                                hover:shadow-md ${data.githubLink === "" ? 'cursor-not-allowed': ''}`}>
                                <span className=" text-sm"><FaTerminal /></span>
                                View Code
                            </Link>
                            <Link to={`/detail/${data.id}`} 
                                className="col-span-2 flex items-center justify-center gap-2 bg-white hover:bg-slate-50 
                                text-slate-700 border border-slate-200 py-3 px-4 rounded-xl font-bold transition-all 
                                hover:border-slate-300 hover:shadow-md">
                                More Details
                                <span className=" text-sm"><FaChevronRight /></span>
                            </Link>
                        </div>
                    </div>
                </div>
    )
}
