export const isDark = (): boolean =>
  localStorage?.theme === "dark" ??
  window?.matchMedia("(prefers-color-scheme: dark)").matches ??
  false

// export const getTheme = (): "light" | "dark" => (isDark() ? "dark" : "light")
