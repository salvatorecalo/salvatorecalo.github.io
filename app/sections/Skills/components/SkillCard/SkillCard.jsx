import './SkillCard.css'
import Image from "next/image";

export function SkillCard({title,description, svg, alt}) {
    return (
            <article className="skillCard">
                <Image src={svg} alt={alt} />
                <h3>{title}</h3>
                <p>{description}</p>
            </article>
    )
}
