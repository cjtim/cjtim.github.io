<script>
  // import ThemeSelector from "./ThemeSelector"
  const navbars = [
    {
      label: "Tim Jinna",
      href: "/#",
    },
    {
      label: "Exp",
      href: "/#exp",
    },
    {
      label: "Tech",
      href: "/tech",
    },
    {
      label: "Skills",
      href: "#skills",
    },
  ]
  let current = 0
  // const { pathname } = Astro.url
</script>

<nav
  class="fixed flex w-full justify-center border-b-2 border-gray-100 bg-white"
>
  <div class="m-4 flex gap-2">
    {#each navbars as i, idx}
      <a href={i.href}>
        <button
          class={(idx === current
            ? "text-black"
            : "text-gray-300 hover:text-gray-800") +
            " rounded-full p-4 text-sm font-medium"}
          on:click={() => {
            current = idx
          }}
        >
          {i.label}
        </button>
      </a>
    {/each}
    <!-- <ThemeSelector client:load /> -->
  </div>
</nav>
