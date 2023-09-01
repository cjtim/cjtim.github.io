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

<nav class="flex justify-center fixed w-full">
  <div class="flex gap-2 bg-white rounded-3xl m-4">
    {#each navbars as i, idx}
      <button
        class={(idx === current
          ? "text-black"
          : "text-gray-300 hover:text-gray-800") +
          " rounded-full p-4 text-sm font-medium"}
        on:click={() => {
          current = idx
        }}
      >
        <a href={i.href}>{i.label}</a>
      </button>
    {/each}
    <!-- <ThemeSelector client:load /> -->
  </div>
</nav>
