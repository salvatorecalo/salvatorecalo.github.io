'use client'
import {Splide, SplideSlide} from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import Card from "@/app/sections/Feedback/components/FeedbackCard/FeedbackCard";
import './ProjectCarousel.css'
import {AutoScroll} from "@splidejs/splide-extension-auto-scroll";
import {useProjectCarousel} from "@/app/sections/Progetti/components/ProjectCarousel/hooks/useProjectCarousel";
import ProjectCard from "@/app/sections/Progetti/components/ProjectCard/ProjectCard";

export function ProjectCarousel(){
    const {projects} = useProjectCarousel()

    return (
        <Splide
            options={{
                width: "100%",
                rewind: true,
                autoplay: "true",
                perPage: 2,
                perMove: "1",
                gap: "2rem",
                height: "15rem",
                type: "loop",
                rewindSpeed: "3000",
                arrows: "true",
                pagination: "false",
                extensions: { AutoScroll },
                autoScroll: {
                    speed: 3,
                    pauseOnHover: true,
                    pauseOnFocus: false,
                },
                breakpoints: {
                    1000: {
                        perPage: 1,
                    },
                },
            }}
        >
            {
                projects?.map(feed => {
                    console.log(feed.imgSrc)
                    return (
                        <SplideSlide key={feed.id}>
                            <ProjectCard
                                name={feed.name}
                                description={feed.description}
                                githubLink={feed.githubLink}
                                alt={feed.alt}
                                imgSrc={feed.imgSrc}
                            />
                        </SplideSlide>
                    )
                })
            }
        </Splide>
    )
}