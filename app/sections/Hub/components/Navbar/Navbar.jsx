"use client"
import { useRef } from "react";
import './navbar.css'
import Image from "next/image";
import logo from "@/app/favicon.ico";
export function Navbar() {
    const navRef = useRef();

    const showNavbar = () => {
        navRef.current.classList.toggle(
            "responsive_nav"
        );
    };

    return (
        <header>
            <h3>
                <Image src={logo} alt="il logo di salvatorecalo.it" />
                <span>
                        salvatore<strong>calò</strong>
                </span>
            </h3>
            <nav ref={navRef}>
                <a href="/#">Home</a>
                <a href="/#">My work</a>
                <a href="/#">Blog</a>
                <a href="/#">About me</a>
                <button
                    className="nav-btn nav-close-btn"
                    onClick={showNavbar}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" id="x"><rect width="256" height="256" fill="none"></rect><line x1="200" x2="56" y1="56" y2="200" fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="24"></line><line x1="200" x2="56" y1="200" y2="56" fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="24"></line></svg>
                </button>
            </nav>
            <button
                className="nav-btn"
                onClick={showNavbar}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="bars"><path d="M3,8H21a1,1,0,0,0,0-2H3A1,1,0,0,0,3,8Zm18,8H3a1,1,0,0,0,0,2H21a1,1,0,0,0,0-2Zm0-5H3a1,1,0,0,0,0,2H21a1,1,0,0,0,0-2Z"></path></svg>
            </button>
        </header>
    );
}
