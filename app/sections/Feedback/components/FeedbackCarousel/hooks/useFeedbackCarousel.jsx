'use client'
import {supabase} from "@/app/supabase/supabase";
import {useEffect, useState} from "react";

export function useFeedbackCarousel(){
    const [feedbacks, setFeedbacks] = useState([])
    async function getFeedback(){
        let { data: feedback, error } = await supabase
            .from('feedback')
            .select()
        setFeedbacks(feedback)

        if(error){
            console.log(error)
        }
    }
    useEffect(() => {
        getFeedback()
    }, []);

    return {
        feedbacks
    }
}