import './PrimaryButton.css'
export function PrimaryButton({text,link}) {
    return (
        <button className="primaryButton">
            <a href={link} target="_blank">
            {text}
        </a>
        </button>
    )
}
