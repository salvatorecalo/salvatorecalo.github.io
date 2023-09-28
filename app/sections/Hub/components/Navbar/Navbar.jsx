"use client"
import './navbar.css'
import Image from "next/image";
import logo from "@/app/favicon.ico";
import Link from "next/link";
export function Navbar() {
    return (
        <nav className="nav">
            <input type="checkbox" id="nav__checkbox" className="nav__checkbox" />
                <label htmlFor="nav__checkbox" className="nav__toggle">
                    <svg className="menu" viewBox="0 0 448 512" width="100">
                        <path d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z" />
                    </svg>
                    <svg className="close" viewBox="0 0 384 512" width="100">
                        <path d="M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z" />
                    </svg>
                </label>
                <ul className="nav__menu">
                    <li>
                        <Link href="/">
                            <Image src={logo} alt="il logo di salvatorecalo.it" />
                        </Link>
                    </li>
                    <li>
                        <Link href="/about">
                            Chi sono
                        </Link>
                    </li>
                    <li>
                        <Link href="#skills">
                            Skills
                        </Link>
                    </li>
                    <li>
                        <Link href="#progetti">
                            Progetti
                        </Link>
                    </li>
                    <li>
                        <Link href="#recensioni">
                            Recensioni
                        </Link>
                    </li>
                </ul>
        </nav>
    )
}
