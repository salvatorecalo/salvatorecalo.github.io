import {SecondaryButton} from "@/app/components/SecondaryButton/SecondaryButton";
import './KnowMore.css'
export function KnowMore() {
    return (
        <>
            <p className="knowMore-paragraph">Vuoi saperne di più a riguardo?</p>
            <SecondaryButton
                text={<>Effettua una chiamata <strong>gratuita</strong></>}
                link="to:+3441557187"
            />
        </>
    )
}
