import './SkillCard.css'

export function SkillCard({title,description, svg, alt}) {
    return (
            <article className="skillCard">
                <img src={svg} alt={alt} />
                <h3>{title}</h3>
                <p>{description}</p>
            </article>
    )
}
