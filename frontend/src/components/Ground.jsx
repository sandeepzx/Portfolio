import React, { useEffect, useState } from 'react'

import { RiNumber0,RiNumber1,RiNumber2,RiNumber3,RiNumber4,RiNumber5,RiNumber6,RiNumber7,RiNumber8,RiNumber9 } from "react-icons/ri";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

import api from "../api/axios"

export default function Ground({ onSeason, onProject }) {

    const [currentIndex, setCurrentIndex] = useState(1);
    const [projects, setProjects] = useState([]);
    const [seasons, setSeasons] = useState([]);
    const [currentSeason, setCurrentSeason] = useState({});
    
    const fetchSeasons = async () => {
      try {
        const res = await api.get(`/seasons`)
        const filterd = res.data.find((item)=>item.id===currentIndex)
        setSeasons(res.data);
        setCurrentSeason(filterd);
        onSeason(filterd?.under);

      } catch (error) {
        console.log(error)
      }
    }

    useEffect(() => {
        fetchSeasons();
    }, [])
    
    const fetchProjects = async () => {
      try {
        const res = await api.get(`/projects/season/${currentIndex}`)
        console.log("projects: ",currentIndex,res.data)

        setProjects(res.data)
      } catch (error) {
        console.log(error)
      }
    }

    useEffect(() => {
        fetchProjects();
    }, [currentSeason])

    const startingEleven = projects.map(project => project.jercy).slice(0, 11);

    useEffect(() => {
        if(currentSeason?.id){
            onSeason(currentSeason.under,currentSeason?.id);
        }
        
    }, [currentSeason,seasons]);

    const nextSeason = () => {
        if (currentIndex < seasons.length ) {
            setCurrentIndex(currentIndex + 1);
            setCurrentSeason(seasons.find((item)=>item.id===(currentIndex + 1)))
        }
    };

    const prevSeason = () => {
        if (currentIndex > 1) {
            setCurrentIndex(currentIndex - 1);
            setCurrentSeason(seasons.find((item)=>item.id===(currentIndex - 1)))
        }
    };

    const handleCheckAvailable = (id) => {
        const isActive = startingEleven.includes(id);
        return isActive;
    }


    const handleClick = (id) => {
        console.log("sss:",id)
        const selProject = projects.find((project) => 
            project.jercy === id && project.under === currentSeason.id
        );

        onProject(selProject.id);
    }

    return (

        <div className="relative flex-1 lg:basis-[70%] bg-grass-pattern flex flex-col justify-center items-center overflow-y-auto lg:overflow-hidden p-6 lg:p-10 group">
            <div className="absolute top-0 left-0 right-0 h-100 bg-linear-to-b from-white/60 to-transparent pointer-events-none z-0"></div>
            
            <div className="relative w-full max-w-3xl aspect-3/4 lg:aspect-3/3.5 border-4 border-white rounded-xl overflow-hidden shadow-2xl shadow-green-900/10 bg-[#22c55e] z-10">
                <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/black-felt.png')] mix-blend-overlay"></div>
                <div className="absolute inset-0 bg-[linear-gradient(0deg,rgba(0,0,0,0.03)_50%,transparent_50%)] bg-size-[100%_10%]"></div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 lg:w-48 lg:h-48 border-2 border-white/60 rounded-full"></div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-white rounded-full"></div>
                <div className="absolute top-1/2 left-0 right-0 h-px bg-white/60"></div>
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-[15%] border-b-2 border-x-2 border-white/60 rounded-b-lg"></div>
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1/2 h-[15%] border-t-2 border-x-2 border-white/60 rounded-t-lg"></div>
                
                <div className="absolute inset-0 flex flex-col py-8 px-4 lg:py-12 lg:px-12 justify-between">

                    {/* Attack */}
                    <div className="flex justify-around items-center h-1/4">
                        <div className={`relative group/player ${!handleCheckAvailable(7) ? 'opacity-80' : ''}`}>
                            <div 
                                onClick={() => handleCheckAvailable(7) && handleClick(7)} 
                                className={` w-14 h-14 lg:w-16 lg:h-16 rounded-full flex items-center justify-center relative z-10 transition-all backdrop-blur-sm border-2
                                    ${handleCheckAvailable(7) 
                                        ? "player-marker bg-white/90 border-white/50 cursor-pointer text-slate-700 hover:bg-primary hover:text-white" 
                                        : "bg-red-500/80 border-red-200 cursor-not-allowed text-white"
                                    }`} 
                                data-alt="Left Mid Project Icon"
                            >
                                <span className={`text-xl lg:text-2xl transition-colors 
                                    ${handleCheckAvailable(7) ? "text-slate-500 group-hover/player:text-white" : "text-white"}`}>
                                    <RiNumber7 />
                                </span>
                            </div>
                            
                            <div className="mt-2 text-center">
                                <p className={`text-[10px] font-bold drop-shadow-md uppercase tracking-wider 
                                    ${handleCheckAvailable(7) ? "text-white" : "text-red-200"}`}>
                                    LW
                                </p>
                            </div>
                        </div>

                        <div className={`relative group/player mb-20 ${!handleCheckAvailable(9) ? 'opacity-80' : ''}`}>
                            <div 
                                onClick={() => handleCheckAvailable(9) && handleClick(9)} 
                                className={` w-14 h-14 lg:w-16 lg:h-16 rounded-full flex items-center justify-center relative z-10 transition-all backdrop-blur-sm border-2
                                    ${handleCheckAvailable(9) 
                                        ? "player-marker bg-white/90 border-white/50 cursor-pointer text-slate-700 hover:bg-primary hover:text-white" 
                                        : "bg-red-500/80 border-red-200 cursor-not-allowed text-white"
                                    }`} 
                                data-alt="Center Mid Project Icon">
                                <span className={`text-xl lg:text-2xl transition-colors 
                                    ${handleCheckAvailable(9) ? "text-slate-500 group-hover/player:text-white" : "text-white"}`}>
                                    <RiNumber9 />
                                </span>
                            </div>
                            <div className="mt-2 text-center">
                                <p  className={`text-[10px] font-bold drop-shadow-md uppercase tracking-wider 
                                    ${handleCheckAvailable(9) ? "text-white" : "text-red-200"}`}>CF</p>
                            </div>
                        </div>
                        <div className={`relative group/player ${!handleCheckAvailable(11) ? 'opacity-80' : ''}`}>
                            <div onClick={() => handleCheckAvailable(11) && handleClick(11)}  
                                className={` w-14 h-14 lg:w-16 lg:h-16 rounded-full flex items-center justify-center relative z-10 transition-all backdrop-blur-sm border-2
                                ${handleCheckAvailable(11) 
                                    ? "player-marker bg-white/90 border-white/50 cursor-pointer text-slate-700 hover:bg-primary hover:text-white" 
                                    : "bg-red-500/80 border-red-200 cursor-not-allowed text-white"
                                }`}                             
                                data-alt="Right Mid Project Icon">
                                <span className={`text-xl lg:text-2xl transition-colors flex
                                    ${handleCheckAvailable(11) ? "text-slate-500 group-hover/player:text-white" : "text-white"}`}>
                                    <RiNumber1 /> <RiNumber1 />
                                </span>
                                <span className=" text-xl lg:text-2xl text-slate-500 group-hover/player:text-white transition-colors flex"></span>
                            </div>
                            <div className="mt-2 text-center">
                                <p className={`text-[10px] font-bold drop-shadow-md uppercase tracking-wider 
                                    ${handleCheckAvailable(11) ? "text-white" : "text-red-200"}`}>
                                    RW</p>
                            </div>
                        </div>
                    </div>

                    {/* Midfield */}
                    <div className="flex justify-around items-center h-1/4 px-8">
                        <div className={`relative group/player ${!handleCheckAvailable(10) ? 'opacity-80' : ''}`}>
                            <div 
                                onClick={() => handleCheckAvailable(10) && handleClick(10)}  
                                className={` w-14 h-14 lg:w-16 lg:h-16 rounded-full flex items-center justify-center relative z-10 transition-all backdrop-blur-sm border-2
                                ${handleCheckAvailable(10) 
                                    ? "player-marker bg-white/90 border-white/50 cursor-pointer text-slate-700 hover:bg-primary transition-colors hover:text-white" 
                                    : "bg-red-500/80 border-red-200 cursor-not-allowed text-white"
                                }`} 
                                data-alt="Left Mid Project Icon">
                                <span className={`text-xl lg:text-2xl transition-colors flex
                                    ${handleCheckAvailable(10) ? "text-slate-500 group-hover/player:text-white" : "text-white"}`}>
                                    <RiNumber1 /><RiNumber0 />
                                </span>
                                <span className=" text-xl lg:text-2xl text-slate-500 group-hover/player:text-white transition-colors flex"></span>
                            </div>
                            <div className="mt-2 text-center">
                                <p className={`text-[10px] font-bold drop-shadow-md uppercase tracking-wider 
                                    ${handleCheckAvailable(10) ? "text-white" : "text-red-200"}`}>CM</p>
                            </div>
                        </div>
                        <div className={`relative group/player mt-20 ${!handleCheckAvailable(6) ? 'opacity-80' : ''}`}>
                            <div 
                                onClick={() => handleCheckAvailable(6) && handleClick(6)}  
                                className={` w-14 h-14 lg:w-16 lg:h-16 rounded-full flex items-center justify-center relative z-10 transition-all backdrop-blur-sm border-2
                                ${handleCheckAvailable(6) 
                                    ? "player-marker bg-white/90 border-white/50 cursor-pointer text-slate-700 hover:bg-primary transition-colors hover:text-white" 
                                    : "bg-red-500/80 border-red-200 cursor-not-allowed text-white"
                                }`} 
                                data-alt="Center Mid Project Icon">
                                <span className={`text-xl lg:text-2xl transition-colors 
                                    ${handleCheckAvailable(6) ? "text-slate-500 group-hover/player:text-white" : "text-white"}`}>
                                    <RiNumber6 />
                                </span>
                            </div>
                            <div className="mt-2 text-center">
                                <p className={`text-[10px] font-bold drop-shadow-md uppercase tracking-wider 
                                    ${handleCheckAvailable(6) ? "text-white" : "text-red-200"}`}>DM</p>
                            </div>
                        </div>
                        <div className={`relative group/player ${!handleCheckAvailable(8) ? 'opacity-80' : ''}`}>
                            <div 
                                onClick={() => handleCheckAvailable(8) && handleClick(8)}  
                                className={` w-14 h-14 lg:w-16 lg:h-16 rounded-full flex items-center justify-center relative z-10 transition-all backdrop-blur-sm border-2
                                ${handleCheckAvailable(8) 
                                    ? "player-marker bg-white/90 border-white/50 cursor-pointer text-slate-700 hover:bg-primary transition-colors hover:text-white" 
                                    : "bg-red-500/80 border-red-200 cursor-not-allowed text-white"
                                }`} 
                                data-alt="Right Mid Project Icon">
                                <span className={`text-xl lg:text-2xl transition-colors 
                                    ${handleCheckAvailable(8) ? "text-slate-500 group-hover/player:text-white" : "text-white"}`}>
                                    <RiNumber8 />
                                </span>
                            </div>
                            <div className="mt-2 text-center">
                                <p className={`text-[10px] font-bold drop-shadow-md uppercase tracking-wider 
                                    ${handleCheckAvailable(8) ? "text-white" : "text-red-200"}`}>CM</p>
                            </div>
                        </div>
                    </div>

                    {/* Defence */}
                    <div className="flex justify-between items-center h-1/4 px-2 lg:px-6">
                        <div className={`relative group/player ${!handleCheckAvailable(2) ? 'opacity-80' : ''}`}>
                            <div 
                                onClick={() => handleCheckAvailable(2) && handleClick(2)} 
                                className={` w-12 h-12 lg:w-14 lg:h-14 rounded-full flex items-center justify-center relative z-10 transition-all backdrop-blur-sm border-2
                                ${handleCheckAvailable(2) 
                                    ? "player-marker bg-white/80 border-white/30 cursor-pointer text-slate-700 hover:bg-primary transition-colors hover:text-white" 
                                    : "bg-red-500/80 border-red-200 cursor-not-allowed text-white"
                                }`} 
                                data-alt="Left Back Project Icon">
                                <span className={`text-lg lg:text-xl transition-colors 
                                    ${handleCheckAvailable(2) ? "text-slate-500 group-hover/player:text-white" : "text-white"}`}>
                                    <RiNumber2 />
                                </span>
                            </div>
                            <div className="mt-2 text-center">
                                <p className={`text-[10px] font-bold drop-shadow-md uppercase tracking-wider 
                                    ${handleCheckAvailable(2) ? "text-white" : "text-red-200"}`}>LB</p>
                            </div>
                        </div>
                        <div className={`relative group/player mt-20 ${!handleCheckAvailable(3) ? 'opacity-80' : ''}`}>
                            <div 
                                onClick={() => handleCheckAvailable(3) && handleClick(3)} 
                                className={` w-12 h-12 lg:w-14 lg:h-14 rounded-full flex items-center justify-center relative z-10 transition-all backdrop-blur-sm border-2
                                ${handleCheckAvailable(3) 
                                    ? "player-marker bg-white/80 border-white/30 cursor-pointer text-slate-700 hover:bg-primary transition-colors hover:text-white" 
                                    : "bg-red-500/80 border-red-200 cursor-not-allowed text-white"
                                }`}  
                                data-alt="Left Center Back Project Icon">
                                <span className={`text-lg lg:text-xl transition-colors 
                                    ${handleCheckAvailable(3) ? "text-slate-500 group-hover/player:text-white" : "text-white"}`}>
                                    <RiNumber3 />
                                </span>
                            </div>
                            <div className="mt-2 text-center">
                                <p className={`text-[10px] font-bold drop-shadow-md uppercase tracking-wider 
                                    ${handleCheckAvailable(3) ? "text-white" : "text-red-200"}`}>CB</p>
                            </div>
                        </div>
                        <div className={`relative group/player mt-20 ${!handleCheckAvailable(4) ? 'opacity-80' : ''}`}>
                            <div 
                                onClick={() => handleCheckAvailable(4) && handleClick(4)}  
                                className={` w-12 h-12 lg:w-14 lg:h-14 rounded-full flex items-center justify-center relative z-10 transition-all backdrop-blur-sm border-2
                                ${handleCheckAvailable(4) 
                                    ? "player-marker bg-white/80 border-white/30 cursor-pointer text-slate-700 hover:bg-primary transition-colors hover:text-white" 
                                    : "bg-red-500/80 border-red-200 cursor-not-allowed text-white"
                                }`}  
                                data-alt="Right Center Back Project Icon">
                                <span className={`text-lg lg:text-xl transition-colors 
                                    ${handleCheckAvailable(4) ? "text-slate-500 group-hover/player:text-white" : "text-white"}`}>
                                    <RiNumber4 />
                                </span>
                            </div>
                            <div className="mt-2 text-center">
                                <p className={`text-[10px] font-bold drop-shadow-md uppercase tracking-wider 
                                    ${handleCheckAvailable(4) ? "text-white" : "text-red-200"}`}>CB</p>
                            </div>
                        </div>
                        <div className={`relative group/player ${!handleCheckAvailable(5) ? 'opacity-80' : ''}`}>
                            <div 
                                onClick={() => handleCheckAvailable(5) && handleClick(5)}  
                                className={` w-12 h-12 lg:w-14 lg:h-14 rounded-full flex items-center justify-center relative z-10 transition-all backdrop-blur-sm border-2
                                ${handleCheckAvailable(5) 
                                    ? "player-marker bg-white/80 border-white/30 cursor-pointer text-slate-700 hover:bg-primary transition-colors hover:text-white" 
                                    : "bg-red-500/80 border-red-200 cursor-not-allowed text-white"
                                }`} 
                                data-alt="Right Back Project Icon">
                                <span className={`text-lg lg:text-xl transition-colors 
                                    ${handleCheckAvailable(5) ? "text-slate-500 group-hover/player:text-white" : "text-white"}`}>
                                    <RiNumber5 />
                                </span>
                            </div>
                            <div className="mt-2 text-center">
                                <p className={`text-[10px] font-bold drop-shadow-md uppercase tracking-wider 
                                    ${handleCheckAvailable(5) ? "text-white" : "text-red-200"}`}>RB</p>
                            </div>
                        </div>
                    </div>

                    <div className="flex justify-center items-end h-[10%]">
                        <div className={`relative group/player ${!handleCheckAvailable(1) ? 'opacity-80' : ''}`}>
                            <div 
                                onClick={() => handleCheckAvailable(1) && handleClick(1)}  
                                className={` w-12 h-12 lg:w-14 lg:h-14 rounded-full flex items-center justify-center relative z-10 transition-all backdrop-blur-sm border-2 shadow-lg
                                ${handleCheckAvailable(1) 
                                    ? "player-marker bg-white/80 border-white/40 cursor-pointer text-slate-700 hover:bg-primary transition-colors hover:text-white" 
                                    : "bg-red-500/80 border-red-200 cursor-not-allowed text-white"
                                }`}  
                                data-alt="Goalkeeper Project Icon">
                                <span className={`text-lg lg:text-xl transition-colors 
                                    ${handleCheckAvailable(1) ? "text-slate-500 group-hover/player:text-white" : "text-white"}`}>
                                    <RiNumber1 />
                                </span>
                            </div>
                            <div className="mt-2 text-center">
                                <p className={`text-[10px] font-bold drop-shadow-md uppercase tracking-wider 
                                    ${handleCheckAvailable(1) ? "text-white" : "text-red-200"}`}>GK</p>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
            
            <div className="mt-6 flex justify-between gap-6 items-center">
                <FaAngleLeft 
                    onClick={prevSeason} 
                    className={`cursor-pointer ${currentIndex === 1 ? 'opacity-20' : ''}`} 
                />
                
                <p className="text-slate-400 uppercase tracking-widest font-medium">
                    {currentSeason?.from} - {currentSeason?.to} season
                </p>
                
                <FaAngleRight 
                    onClick={nextSeason} 
                    className={`cursor-pointer ${currentIndex === seasons.length ? 'opacity-20' : ''}`} 
                />
            </div>

        </div>
    )
}
