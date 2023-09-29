'use client'
import {useFeedbackCarousel} from "@/app/sections/Feedback/components/FeedbackCarousel/hooks/useFeedbackCarousel";
import Card from "@/app/sections/Feedback/components/FeedbackCard/FeedbackCard";
import Carousel from "nuka-carousel";
import './FeedbackCarousel.css'
export function FeedbackCarousel(){
    const {feedbacks} = useFeedbackCarousel()
    return (
        <Carousel
            autoplay
            adaptiveHeight={true}
            autoplayInterval={3000}
            slidesToShow={3}>
            {
                feedbacks?.map(feedback => {
                    return <Card
                        key={feedback.id}
                        author={feedback.author}
                        description={feedback.description}
                        imageSrc={feedback.imageSrc}
                        alt={feedback.alt}
                        company={feedback.company}
                    />
                })
            }
        </Carousel>
    )
}