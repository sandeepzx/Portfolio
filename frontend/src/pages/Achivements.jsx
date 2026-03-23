import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import { FaGithub, FaLinkedin, FaTerminal, FaRegCircleCheck } from "react-icons/fa6";
import { MdWork, MdAlternateEmail, MdOutlineVisibility } from "react-icons/md";
import { IoClose } from "react-icons/io5";

import api from "../api/axios"

import ProjectTemplate from '../components/ProjectTemplate';
import SeasonTemplate from '../components/SeasonTemplate';
import Ground from '../components/Ground';


export default function Achivements() {
    
    const [projectShow, setProjectShow] = useState(false);
    const [sId, setSId] = useState(1);
    const [institute, setInstitute] = useState({});
    const [project, setProject] = useState({})

    const handleShowSeason = async (item_id,id) => {
        console.log("handleShowSeason id",item_id,id);
        try {
            const res = await api.get(`/institution/${item_id}`)
            setInstitute(res.data);
            setSId(id);
            setProjectShow(false);
        } catch (error) {
            console.log(error)
        }
    }

    const handleShowProject = async (item_id) => {
        console.log("handleShowProject data",item_id);
        try {
            const res = await api.get(`/project/${item_id}`)
            setProject(res.data);
            setProjectShow(true);
        } catch (error) {
            console.log(error)
        }
        
    }


    return (
        <div className=''>
           <Navbar />

            <section className="flex-1 flex flex-col lg:flex-row overflow-hidden relative">
                <Ground 
                    onSeason={handleShowSeason}
                    onProject={handleShowProject}
                />

                <SeasonTemplate 
                    isShow={!projectShow}
                    onShow={handleShowProject}
                    data={institute}
                    seasonID={sId}
                />

                <ProjectTemplate 
                    isShow={projectShow}
                    data={project}
                    onClose={()=>setProjectShow(false)}
                />

            </section>
            {projectShow}
        </div>
    )
}

