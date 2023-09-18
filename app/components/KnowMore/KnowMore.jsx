import {SecondaryButton} from "@/app/components/SecondaryButton/SecondaryButton";
import './KnowMore.css'
export function KnowMore() {
    return (
        <>
            <p className="knowMore-paragraph">Vuoi saperne di più a riguardo?</p>
            <SecondaryButton
                text={<strong>gratuitamente</strong>}
                secondtext={<>Chiama ora</>}
                link="tel:+3441557187"
            />
        </>
    )
}
