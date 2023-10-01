<script lang="ts">
  export let contents: {
    img: string
    title: string
    description: string
    focused?: boolean
  }[]
  function focus(index: number) {
    contents[index].focused = true
    document.location.hash = `navbar-${index+1}`
  }
</script>

<div
  class="container mx-auto my-8 flex flex-col items-center gap-2 rounded-3xl bg-white p-8"
>
  <p class="text-2xl">Showcases</p>

  <div
    class="flex w-full flex-col items-center gap-2"
  >
   

    <div
      class="relative flex w-full snap-x snap-mandatory gap-6 overflow-auto scroll-smooth"
    >
      <div
        class="w-1/12 shrink-0 scale-100 snap-center rounded-lg"
      />
      {#each contents as content, i}
        <div
          id={`slides-${i + 1}`}
          class="w-4/5 shrink-0 scale-100 snap-center rounded-lg shadow-xl
          "
          >
          <img
            src={content.img}
            alt={content.title}
          />
        </div>
      {/each}
      <div
        class="w-1/12 shrink-0 scale-100 snap-center rounded-3xl"
      />
    </div>
    <div class="flex flex-wrap gap-8">
      {#each contents as _, i}
        <a
          id={`#slides-${i + 1}`}
          class="inline-flex h-8 w-8 items-center justify-center rounded-full bg-gray-400 text-center text-white target:bg-black"
          href={`#slides-${i + 1}`}
          on:click={() => focus(i)}
        >
          {i + 1}
        </a>
      {/each}
    </div>
  </div>
</div>
