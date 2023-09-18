import './SecondaryButton.css'
export function SecondaryButton({text,link, secondtext}) {
    return (
        <a href={link} target="_blank" className="secondaryButton">
            <div>
                <span>{text}</span>
                <span>{secondtext}</span>
            </div>
        </a>
    )
}
