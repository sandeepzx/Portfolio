import React, { useEffect, useState } from 'react'

import { FaGithub, FaLinkedin } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import api from "../api/axios"

export default function SeasonTemplate({ isShow, onShow, data, seasonID }) {
    if (!isShow) {
        return null
    }
    const [projects, setProjects] = useState([])
    const college = data;


    const fetchProjects = async () => {
        if(seasonID) {
            try {
                const res = await api.get(`/projects/season/${seasonID}/`)
                setProjects(res.data);
                console.log("subs:",res.data)
            } catch (error) {
                console.log(error);
            }
        }
    };

    useEffect(() => {
        fetchProjects();
    }, [seasonID]);

    const filteredById = projects.slice(11);

    const getMetricLabel = () => {
        if (data.type === "education") return "Academic Performance";
        if (data.type === "work") return "Employment Status";
        return "Focus Area";
    };

    const getMetricValue = () => {
        if (data.type === "education") return data.metrics;
        return data.role; 
    };



    return (
        <div className="w-full lg:w-[30%] lg:min-w-90 glass-panel flex grow flex-col border-t lg:border-t-0 border-slate-200 relative z-20">
            <div className="absolute inset-0 scanlines opacity-30 pointer-events-none rounded-t-lg lg:rounded-none"></div>
            <div className="relative z-10 flex flex-col h-full p-8 overflow-y-auto">
                <div className="">
                    <div className="flex items-center gap-3 mb-2">
                        <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                        <h2 className="text-xs font-bold tracking-[0.2em] text-home-green uppercase">Tactical Overview</h2>
                    </div>
                    <h3 className="text-3xl font-bold text-slate-800 font-display mb-2">{college.institution}</h3>
                    <p className="text-xl text-slate-500 mb-3 uppercase tracking-wider">
                        {college.from} - {college.to !== '' ? college.to : 'Present'}
                    </p>
                    <p className="text-slate-600 text-sm leading-relaxed mb-8 border-l-2 border-home-green/30 pl-4">
                        {college.description}
                    </p>
                </div>

                <div className="mb-4">
                    <p className="text-xs text-slate-500 mb-1 uppercase tracking-wider">
                        {getMetricLabel()}
                    </p>

                    <div className="flex items-end gap-2">
                        <span className="text-2xl font-bold text-slate-800">
                            {getMetricValue()}
                        </span>
                    </div>

                    {college.type === "education" && (
                        <div className="w-full bg-slate-200 h-1 mt-3 rounded-full overflow-hidden">
                            <div className="bg-home-green h-full" style={{ width: "60%" }}></div>
                        </div>
                    )}
                </div>

                <div className="flex flex-wrap gap-2 mb-6">
                    {college.skills?.map((skill, i) => (
                        <span key={i} className="px-3 py-1 bg-slate-100 text-slate-600 text-[10px] uppercase font-bold tracking-widest rounded-sm border border-slate-200">
                            {skill}
                        </span>
                    ))}
                </div>

                <div className="flex-1">
                    <div className="flex justify-between items-center mb-6">
                        <h4 className="text-sm font-bold text-slate-800 uppercase tracking-wider">Reserves / Bench</h4>
                        <span className="text-xs text-slate-500">Available for loan</span>
                    </div>
                    <div className="space-y-4 max-h-[60vh] overflow-y-auto">
                        {filteredById.length > 0 ? 
                        (
                            filteredById.map((item) => (
                                <div key={item.id} onClick={()=>onShow(item.id)} className="flex items-center gap-4 group cursor-pointer p-3 rounded-lg hover:bg-slate-50 transition-colors border border-transparent hover:border-slate-200">
                                    <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center border border-slate-200 group-hover:border-primary group-hover:text-primary text-slate-400 transition-colors" data-alt="Reserve Project 1 Icon">
                                        <span className="text-sm">{item.jercy}</span>
                                    </div>
                                    <div className="flex-1">
                                        <p className="text-sm font-bold text-slate-800 group-hover:text-primary transition-colors">{item.sub}</p>
                                        <p className="text-xs text-slate-500">{item.title}</p>
                                    </div>
                                    <span className="text-xs font-bold text-slate-500 bg-slate-100 px-2 py-1 rounded">SUB</span>
                                </div>
                            ))
                        ):(
                            <div className="flex items-center gap-4 group cursor-pointer p-3 rounded-lg hover:bg-slate-50 transition-colors border border-transparent hover:border-slate-200">
                                    
                                    <div className="flex-1">
                                        <p className="text-sm text-center font-bold text-slate-800 group-hover:text-primary transition-colors">No Subs Available</p>
                                    </div>
                                    
                                </div>
                        )}

                    </div>
                </div>
                <div className="mt-10 pt-6 border-t border-slate-200">
                    <p className="text-xs text-slate-400 mb-4 uppercase tracking-wider text-center">Official Partners</p>
                    
                    <div className="flex justify-center gap-6 opacity-60 hover:opacity-100 transition-opacity">
                        <Link to='https://github.com/sandeepzx' target="_blank" className="text-slate-500 hover:text-home-green transition-colors flex flex-col items-center gap-1 group" href="#">
                            <span className=" text-2xl"><FaGithub /></span>
                        </Link>
                        <Link to='https://www.linkedin.com/in/sandeep-a-s-b940712a1/' target="_blank" className="text-slate-500 hover:text-home-green transition-colors flex flex-col items-center gap-1 group" href="#">
                            <span className=" text-2xl"><FaLinkedin /></span>
                        </Link>

                    </div>
                </div>
            </div>
        </div>
    )
}
