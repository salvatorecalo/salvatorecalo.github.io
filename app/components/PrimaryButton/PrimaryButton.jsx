import './PrimaryButton.css'
export function PrimaryButton({text,link}) {
    return (
            <a href={link} target="_blank" className="btn btn-anim primaryButton">
                {text}
            </a>
    )
}
