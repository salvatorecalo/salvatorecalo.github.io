'use client'
import {PrimaryButton} from "@/app/components/PrimaryButton/PrimaryButton";
import './HubJumbo.css'
import {MyImg, Socials, Typer} from "@/app/components";
import Typewriter from 'typewriter-effect';

export function HubJumbo() {
    return  (
        <section className="hubjumbo">
                <hgroup>
                    <h1>Salvatore Calò</h1>
                        <Typewriter
                            options={{
                                strings: ['Web Developer...', 'Web Designer...', "Graphic Designer...", "UI/UX designer..."],
                                autoStart: true,
                                loop: true,
                            }}
                        />
                    <Socials />
                    <PrimaryButton text="Contattami" link="tel:+393441557187" />
                </hgroup>
                <MyImg />
            <div className="scrollDown">
                <p>Scopri di più su di me!</p>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                    <polygon fill="var(--ci-primary-color, currentColor)"
                             points="367.997 338.75 271.999 434.747 271.999 17.503 239.999 17.503 239.999 434.745 144.003 338.75 121.376 361.377 256 496 390.624 361.377 367.997 338.75"
                             className="ci-primary"
                    />
                </svg>
            </div>
        </section>
    )
}
