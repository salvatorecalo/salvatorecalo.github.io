'use client'
import {PrimaryButton} from "@/app/components/PrimaryButton/PrimaryButton";
import './HubJumbo.css'
import {MyImg, Socials} from "@/app/components";
import Typewriter from 'typewriter-effect';
import arrowDown from '@/app/assets/arrow_down.svg'
import Image from "next/image";
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
                <Image src={arrowDown} alt="freccia che punta verso il basso"/>
            </div>
        </section>
    )
}
