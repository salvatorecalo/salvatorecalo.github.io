'use client'
import {useFeedbackCarousel} from "@/app/sections/Feedback/components/FeedbackCarousel/hooks/useFeedbackCarousel";
import {Splide, SplideSlide} from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import Card from "@/app/sections/Feedback/components/FeedbackCard/FeedbackCard";
import './FeedbackCarousel.css'
import {AutoScroll} from "@splidejs/splide-extension-auto-scroll";
export function FeedbackCarousel(){
    const {feedbacks} = useFeedbackCarousel()

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
                feedbacks?.map(feed => {
                    return (
                        <SplideSlide>
                            <Card
                                key={feed.id}
                                author={feed.author}
                                description={feed.description}
                                company={feed.company}
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