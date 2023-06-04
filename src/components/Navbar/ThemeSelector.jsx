import { useEffect, useState } from "react"
import { isDark } from "@utils/theme"
import { MdDarkMode } from "react-icons/md"

export default () => {
  const [showThemeDropdown, setShowThemeDropdown] = useState(false)
  // const switchTheme = () => {
  //   console.log(isDark())
  //   if (isDark()) {
  //     const theme = "light"
  //     document.documentElement.classList.remove("dark")
  //     document.getElementById("btn-theme").innerHTML = theme
  //     localStorage.setItem("theme", theme)
  //   } else {
  //     const theme = "dark"
  //     document.documentElement.classList.add("dark")
  //     document.getElementById("btn-theme").innerHTML = theme
  //     localStorage.setItem("theme", theme)
  //   }
  // }

  const onClick = () => setShowThemeDropdown(!showThemeDropdown)

  useEffect(() => {
    const isThemeDark = isDark()
    isThemeDark
      ? document.documentElement.classList.add("dark")
      : document.documentElement.classList.remove("dark")
  }, [])

  return (
    <div className="flex items-center border-l border-slate-200 ml-6 pl-6 dark:border-slate-800">
      <div className="relative inline-block text-left">
        <div>
          <button
            type="button"
            className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
            aria-expanded="true"
            aria-haspopup="true"
            onClick={onClick}
            onBlur={onClick}
          >
            <MdDarkMode />
          </button>
        </div>
        <div
          hidden={!showThemeDropdown}
          className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="menu-button"
          tabIndex="0"
        >
          <div className="py-1" role="none">
            {/* <!-- Active: "bg-gray-100 text-gray-900", Not Active: "text-gray-700" --> */}
            <a
              href="#"
              className="text-gray-700 block px-4 py-2 text-sm"
              role="menuitem"
              tabindex="-1"
              id="menu-item-0"
            >
              Light
            </a>
            <a
              href="#"
              className="text-gray-700 block px-4 py-2 text-sm"
              role="menuitem"
              tabindex="-1"
              id="menu-item-1"
            >
              Dark
            </a>
            <a
              href="#"
              className="text-gray-700 block px-4 py-2 text-sm"
              role="menuitem"
              tabindex="-1"
              id="menu-item-2"
            >
              System
            </a>
          </div>
        </div>
      </div>
      <a
        href="https://github.com/cjtim"
        className="ml-6 block text-slate-400 hover:text-slate-500 dark:hover:text-slate-300"
      >
        <span className="sr-only">cjtim on GitHub</span>
        <svg
          viewBox="0 0 16 16"
          className="w-5 h-5"
          fill="currentColor"
          aria-hidden="true"
        >
          <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path>
        </svg>
      </a>
    </div>
  )
}
