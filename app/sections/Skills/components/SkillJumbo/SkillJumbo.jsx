"use client"
import Typewriter from "typewriter-effect";
import Link from "next/link";
import './SkillJumbo.css'
export function SkillJumbo() {
    return (
        <div className="skillJumbo">
            <h2>Le mie skills</h2>
            <div className="slugline">
                Ecco a te i servizi che offro.
                <br/>
                <Typewriter
                    options={{
                        strings: ['Psss...'],
                        autoStart: true,
                        loop: true,
                    }}
                />
                Non dimenticarti di dare un’occhiata anche alle mie
                <Link href="#recensioni" className="text-enphasis"> fantastiche recensioni</Link>
            </div>
        </div>
    )
}
