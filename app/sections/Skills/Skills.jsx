import Link from "next/link";
import './Skills.css'
import {KnowMore} from "@/app/components";
import {SkillsCardGrid} from "@/app/sections/Skills/components/SkillsCardGrid";
export function Skills() {
    return (
        <section className="skills" is="skills">
            <h2>Le mie skills</h2>
            <p className="slugline">
                Ecco a te i servizi che offro.
                <br/>
                Psss... Non dimenticarti di dare un’occhiata anche alle mie
                <Link href="#recensioni"> fantastiche recensioni</Link>
            </p>
            <SkillsCardGrid />
            <KnowMore />
        </section>
    )
}
