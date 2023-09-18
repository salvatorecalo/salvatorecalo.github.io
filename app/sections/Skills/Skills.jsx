import Link from "next/link";
import './Skills.css'
import {KnowMore} from "@/app/components";
import {SkillsCardGrid} from "@/app/sections/Skills/components/SkillsCardGrid/SkillsCardGrid";
import {SkillJumbo} from "@/app/sections/Skills/components/SkillJumbo/SkillJumbo";
export function Skills() {
    return (
        <section className="skills" id="skills">
            <SkillJumbo />
            <SkillsCardGrid />
            <KnowMore />
        </section>
    )
}
