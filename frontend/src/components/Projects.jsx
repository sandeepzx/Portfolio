import React, { useEffect, useState } from 'react'

import project1 from "../images/project1.png"; 
import project2 from "../images/project2.png"; 
import project3 from "../images/project3.png"; 
import { IoMdArrowForward } from 'react-icons/io';
import { Link } from 'react-router-dom';
import api from "../api/axios"

export default function Projects() {

    const [projects, setProjects] = useState([]);
    const images = [project1, project2, project3];

    const fetchProjects = async () => {
        try {
            const res = await api.get(`/projects`)
            const sliceData = res.data.slice(-3);
            const addImg = sliceData.map((item, index) => ({
                ...item,
                style: { backgroundImage: `url(${images[index % images.length]})` }
            }));
            setProjects(addImg);

        } catch (error) {
            console.log(error)
        }
        
    }

    useEffect(() => {
      fetchProjects();
    }, [])
    
    return (

        <section className="px-10 py-20 bg-slate-50 ">
            <div className="text-center max-w-2xl mx-auto mb-16">
                <h2 className="text-4xl font-black mb-4">Featured Matches</h2>
                <p className="text-slate-600 text-lg">Highlights from recent deployments. A showcase of strategic development and tactical execution.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map((item)=>(
                    <div key={item.id} className="group bg-white  rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all hover:-translate-y-1 border border-slate-100 ">
                        <div className="h-56 bg-cover bg-center relative" data-alt="Dashboard showing financial analytics with charts" 
                        style={item.style}>
                            <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                <Link target='_blank' to={item.linkedinLink} className="px-4 py-2 bg-white rounded-full text-sm font-bold text-slate-900">View Live Demo</Link>
                            </div>
                        </div>
                        <div className="p-6">
                            <div className="flex justify-between items-start mb-2">
                                <h3 className="text-xl font-bold">{item.title}</h3>
                                <span className="px-2 py-1 text-xs font-bold bg-green-100 text-green-700 rounded uppercase">{item.techStack.slice(0,1)}</span>
                            </div>
                            <p className="text-slate-500 text-sm mb-4 line-clamp-2">{item.note}.</p>
                            <Link to={`/detail/${item.id}`} className="inline-flex items-center text-sm font-bold text-home-green hover:underline" href="#">
                                Match Details <span className=" text-sm ml-1"><IoMdArrowForward /></span>
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
            <div className="mt-16 text-center">
                <Link to='/achivements' className="inline-flex items-center justify-center h-14 px-10 rounded-full bg-slate-900  text-white  font-bold text-lg hover:shadow-2xl hover:scale-105 transition-all">
                    View Full Squad ⚽
                </Link>
            </div>
        </section>
    )
}
