import Image from "next/image";
import logo from '@/app/favicon.ico'
import {Socials} from "@/app/components";
import './Footer.css'
export function Footer() {
    return (
        <footer>
            <div>
                <h3>
                    <Image src={logo} alt="il logo di saqlvatorecalo.it" />
                    <span>
                        salvatore<strong>calò</strong>
                    </span>
                </h3>
            </div>
            <hr/>
            <div>
                <p>{new Date().getFullYear()} salvatorecalo.</p>
                <Socials />
            </div>
        </footer>
    )
}
