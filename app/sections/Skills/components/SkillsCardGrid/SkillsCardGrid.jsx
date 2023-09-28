import {SkillCard} from "@/app/sections/Skills/components/SkillCard/SkillCard";
import './SkillsCardGrid.css'
import codeSvg from '@/app/assets/code_svg.svg'
import graphicSvg from '@/app/assets/pen_tool_anchor_point_design_icon_142354.svg'
export function SkillsCardGrid(){
    return (
        <main className="skillsCardGrid">
            <SkillCard
                title="Designer"
                description="Realizzo contenuti professionali per aziende (sia da condividere sui social sia da applicare a servizi e/o prodotti fisici)"
                svg={graphicSvg}
                alt="immagine di sviuppo contenuti per aziende/privati"
            />
            <SkillCard
                title="Developer"
                description="Realizzo siti web usando, sia attraverso la scrittura di codice, sia tramite l'uso di appositi CMS ad esempio WordPress, Shopify"
                svg={codeSvg}
                alt="immagine di sviluppo siti per aziende/privati"
            />
        </main>
    )
}
