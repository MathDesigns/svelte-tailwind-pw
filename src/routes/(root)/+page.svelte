<script>
  import Layout from "../+layout.svelte";
</script>

<html lang="en" class="bg-[url('/animated-waves.svg')] bg-fixed bg-cover bg-[#151515]">
  <h1 class="text-center text-5xl font-bold pt-20 text-white drop-shadow-md">
    Welcome<br />/home/math
  </h1>
  <div
    class="mx-auto mt-10 rounded-md px-4 py-4 w-1/5 drop-shadow-md bg-light-back hover:bg-white hover:text-black"
  >
    <h2 class="drop-shadow-md text-3xl text-purpleish">whoami</h2>
    <p>
      Hello there! I'm a 20-year-old computer science enthusiast with a
      boundless passion for technology and all things related to the digital
      world.
    </p>
  </div>
</html>

<style lang="postcss">
  :global(html) {
    background-color: theme(colors.light-back);
  }
</style>
