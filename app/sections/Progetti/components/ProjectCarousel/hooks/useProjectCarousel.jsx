'use client'
import {supabase} from "@/app/supabase/supabase";
import {useEffect, useState} from "react";

export function useProjectCarousel(){
    const [projects, setProjects] = useState([])
    async function getProjects(){
        let { data: projects, error } = await supabase
            .from('projects')
            .select()
        setProjects(projects)
        if(error){
            console.log(error)
        }
    }
    useEffect(() => {
        getProjects()
        console.log(projects)
    }, []);

    return {
        projects
    }
}