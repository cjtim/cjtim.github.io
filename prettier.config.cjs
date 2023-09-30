/** @type {import("prettier").Options} */
module.exports = {
  "tabWidth": 2,
  "useTabs": false,
  "semi": false,
  "printWidth": 40,
  "plugins": ["prettier-plugin-svelte", "prettier-plugin-astro", "prettier-plugin-tailwindcss"],
  "overrides": [
    {
      "files": "*.astro",
      "options": {
        "parser": "astro"
      }
    }
  ]
}

