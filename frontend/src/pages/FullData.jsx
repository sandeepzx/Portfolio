import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

import api from "../api/axios"

// const res = await api.get("/destinations/")
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import ProjectDescription from '../components/ProjectDescription'
import ProjectFeatures from '../components/ProjectFeatures'
import ProjectStacks from '../components/ProjectStacks'
import { FaChevronRight } from 'react-icons/fa'
import { Link } from 'react-router-dom'


export default function FullData() {
    const { id } = useParams();

    const [project, setProject] = useState({})

    const fetchProject = async (item_id) => {
        try {
            const res = await api.get(`/project/${item_id}`)
            console.log("dat",res.data)
            setProject(res.data);
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        fetchProject(id);
    }, [id])
  
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

    const posHead = position[id];

    
    return (
        <div>
            <div className="bg-background-light font-display text-slate-900 antialiased min-h-screen">
                <div className="relative flex h-auto min-h-screen w-full flex-col group/design-root overflow-x-hidden pitch-lines">
                    <div className="layout-container flex h-full grow flex-col">
                    <Navbar/>

                    <main className="max-w-300 mx-auto w-full px-6 py-8">

                    <nav className="flex items-center gap-2 mb-6">
                    <Link className="text-slate-500 hover:text-home-green text-sm font-medium" to="/achivements">Squad</Link>
                    <span className=" text-slate-400 text-sm"><FaChevronRight /></span>
                    <span className="text-slate-900 text-sm font-semibold">Project Details</span>
                    </nav>

                    <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
                        <div className="flex flex-col gap-2">
                        <h1 className="text-slate-900 text-5xl font-black leading-tight tracking-tight">{project?.title}</h1>
                        <div className="flex items-center gap-3">
                        <span className="px-3 py-1 bg-home-green/10 text-home-green border border-home-green/20 rounded-full text-xs font-bold uppercase tracking-wider">
                            {posHead} – {project.sub}
                        </span>
                        <span className="text-slate-400 text-sm">•</span>
                        <span className="text-slate-500 text-sm font-medium italic">{project?.from} – {project?.to}</span>
                        </div>
                        </div>

                        
                        <div className="flex gap-3">
                            <div className="flex flex-col items-end">
                                <span className="text-slate-400 text-[10px] font-bold uppercase tracking-widest">Match Status</span>
                                {project.isActive ? (
                                    <div className="flex items-center gap-2 px-4 py-2 bg-slate-100 rounded-lg">
                                        <span className="size-2 rounded-full bg-home-green animate-pulse"></span>
                                        <span className="text-slate-900 text-sm font-bold">In Progress</span>
                                    </div>
                                ):(
                                    <div className="flex items-center gap-2 px-4 py-2 bg-slate-100 rounded-lg">
                                        <span className="size-2 rounded-full bg-home-green"></span>
                                        <span className="text-slate-900 text-sm font-bold">Completed</span>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                    
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                        <div className="lg:col-span-8 flex flex-col gap-8">

                            <ProjectDescription 
                                data ={project?.description}
                            />

                            <ProjectFeatures 
                                features={project?.features}
                            />
                        </div>
                        <ProjectStacks 
                            stacks={project?.techStack}
                            note={project?.note}
                            github={project?.githubLink}
                            live={project?.linkedinLink}
                        />

                    </div>
                    </main>
                    <Footer />

                    </div>
                </div>
            </div>
        </div>
    )
}
