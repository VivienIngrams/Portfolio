'use client'
import React, { useState } from "react"
import { Link } from "react-scroll"
import { useTheme } from "next-themes"
import { riMoonFill, riSunLine } from "react-icons/ri"
import { IoMdMenu, IoMdClose } from "react-icons/io"

const NAV_ITEMS  = [
    {
        label: "Home",
        page: "home"
    },
    {
        label: "About",
        page: "about"
    },
    {
        label: "Projects",
        page: "projects"
    },
]


const NavBar = () => {
    const {systemTheme, theme, setTheme } = useTheme()
    const currentTheme = theme === "system" ? systemTheme : theme
    const [navBar, setNavBar] = useState(false)


    return (
        <header>
            <div>
                <div>
                    <h2>Vivien</h2>
                </div>
            </div>
            <div>
                {NAV_ITEMS.map((item, idx) => {
                    return <a key={idx}>{item.label}</a>
                })}
            </div>
        </header>
    )
}

export default NavBar