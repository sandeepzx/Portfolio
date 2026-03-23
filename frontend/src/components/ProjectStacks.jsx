import React from 'react'
import { Link } from 'react-router-dom';

import { FaTerminal } from 'react-icons/fa'
import { IoIosInformationCircleOutline } from 'react-icons/io'
import { MdOutlineVisibility } from 'react-icons/md'

export default function ProjectStacks({ stacks, note, github, live }) {
    return (
        <div className="lg:col-span-4 flex flex-col gap-6">
            <div className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm sticky top-24">
                <div className="mb-8">
                    <h4 className="text-slate-400 text-xs font-bold uppercase tracking-widest mb-4">Equipment / Tech Stack</h4>
                    <div className="flex flex-wrap gap-3">
                        {stacks?.map((item)=>(
                            <div className="group flex items-center gap-2 px-3 py-2 bg-slate-50 rounded-lg border border-slate-100 hover:border-home-green transition-all cursor-default">
                            <span className="text-sm font-semibold text-slate-700">{item}</span>
                            </div>
                        ))}
                    </div>

                </div>
                {note && (

                    <div className="space-y-4">
                        <div className="p-4 rounded-md bg-home-green/5 border border-home-green/10">
                            <div className="flex items-center gap-3 mb-2">
                            <span className=" text-home-green"><IoIosInformationCircleOutline /></span>
                            <p className="text-slate-900 font-bold">Notes</p>
                            </div>
                            <p className="text-xs text-slate-600 leading-relaxed">"{note}"</p>
                        </div>
                    </div>
                )}
                <div className="mt-8 flex flex-col gap-3">
                    <Link to={github} target="_blank" 
                        className={`w-full flex items-center justify-center gap-2 px-6 py-4 
                        bg-home-green text-slate-900 font-bold rounded-xl 
                        shadow-[0_8px_20px_-4px_rgba(19,236,91,0.5)] hover:translate-y-0.5 
                        transition-all ${github === "" ? 'cursor-not-allowed' : ''}`}>
                        <span className=" text-lg"><FaTerminal /></span>
                        GitHub Repository
                    </Link>
                    <Link to={live} target="_blank" 
                        className={`w-full flex items-center justify-center gap-2 px-6 py-4 
                        bg-white border-2 border-slate-200 text-slate-700 font-bold rounded-xl 
                        hover:bg-slate-50 transition-all ${live === "" ? 'cursor-not-allowed' : ''}`}>
                        <span className=" text-lg"><MdOutlineVisibility /></span>
                        Live Demo
                    </Link>
                </div>
            </div>
        </div>
    )
}
