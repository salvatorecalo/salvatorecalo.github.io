import './Projects.css'
import {ProjectCarousel} from "@/app/sections/Progetti/components/ProjectCarousel/ProjectCarousel";
import {ProjectJumbo} from "@/app/sections/Progetti/components/ProjectJumbo/ProjectJumbo";

export function Projects() {
    return (
        <section  className="progetti" id="progetti">
            <ProjectJumbo />
            <ProjectCarousel />
        </section>
    )
}
