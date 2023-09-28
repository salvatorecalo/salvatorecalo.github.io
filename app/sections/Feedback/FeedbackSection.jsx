import './FeedbackSection.css'
import {FeedbackJumbo} from "@/app/sections/Feedback/components";
export function FeedbackSection() {
    return (
        <section id="recensioni">
            <FeedbackJumbo />
            <p className="whyNext">Perchè non esssere <span className="text-enphasis">il prossimo?</span></p>
        </section>
    )
}
