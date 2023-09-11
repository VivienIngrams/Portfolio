"use client"

import React, { useState } from "react"
import { Link } from "react-scroll"
import { useTheme } from "next-themes"
import { riMoonFill, riSunLine } from "react-icons/ri"
import { IoMdMenu, IoMdClose } from "react-icons/io"

const NAV_ITEMS = [
  {
    label: "Home",
    page: "home",
  },
  {
    label: "About",
    page: "about",
  },
  {
    label: "Projects",
    page: "projects",
  },
]

const NavBar = () => {
  const { systemTheme, theme, setTheme } = useTheme()
  const currentTheme = theme === "system" ? systemTheme : theme
  const [navBar, setNavBar] = useState(false)

  return (
    <header className="w-full mx-auto px-4 sm:px-20 fixed top-0 z-50 shadow bg-white dark:bg-stone-900 dark:border-b dark:border-stone-600">
      <div className="flex items-center justify-between py-3 md:py-5">
        <div className="container flex items-center space-x-2">
          <h2 className="text-2xl font-bold">Vivien Ingrams</h2>
        </div>
        <div className="flex-1 justify-self-end">
          <div className="items-center justify-center space-x-6 md:flex md:space-x-6 md:space-y-0">
            {NAV_ITEMS.map((item, idx) => {
              return <a key={idx}>{item.label}</a>
            })}
          </div>
        </div>
      </div>
    </header>
  )
}

export default NavBar
