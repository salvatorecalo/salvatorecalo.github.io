import './SecondaryButton.css'
export function SecondaryButton({text,link}) {
    return (
        <button className="secondaryButton">
            <a href={link} target="_blank">
            {text}
        </a>
        </button>
    )
}
