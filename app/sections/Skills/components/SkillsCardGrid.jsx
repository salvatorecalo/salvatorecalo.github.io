import {SkillCard} from "@/app/sections/Skills/components/components/SkillCard";
import './SkillsCardGrid.css'
export function SkillsCardGrid(){
    return (
        <main className="skillsCardGrid">
            <SkillCard
                title="Designer"
                description="Realizzo contenuti professionali per aziende (sia da condividere sui social sia da applicare a servizi e/o prodotti fisici"
                svg="@/app/assets/code_svg.svg'"
            />
            <SkillCard
                title="Developer"
                description="Realizzo siti web usando, sia attraverso la scrittura di codice, sia tramite l'uso di appositi CMS ad esempio WordPress, Shopify"
                svg="@/app/assets/code_svg.svg'"
            />
        </main>
    )
}
