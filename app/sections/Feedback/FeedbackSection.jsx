import './FeedbackSection.css'
import {FeedbackJumbo} from "@/app/sections/Feedback/components";
import {FeedbackCarousel} from "@/app/sections/Feedback/components/FeedbackCarousel/FeedbackCarousel";

export function FeedbackSection() {
    return (
        <section id="recensioni">
            <FeedbackJumbo />
            <p className="whyNext">Perchè non esssere <span className="text-enphasis">il prossimo?</span></p>
            <FeedbackCarousel />
        </section>
    )
}
