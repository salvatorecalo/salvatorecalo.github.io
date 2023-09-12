import {SecondaryButton} from "@/app/components/SecondaryButton/SecondaryButton";

export function KnowMore() {
    return (
        <>
            <p className="mb-4 text-xl">Vuoi saperne di più a riguardo?</p>
            <SecondaryButton
                text={<>Effettua una chiamata <strong>gratuita</strong></>}
                link="to:+3441557187"
            />
        </>
    )
}
