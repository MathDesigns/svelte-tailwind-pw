<script>
  import Layout from "../+layout.svelte";
</script>

<html lang="en" class="bg-[url('/animated-waves.svg')] bg-fixed bg-cover bg-[#151515]">
<h1 class="text-center text-5xl font-bold pt-20 text-blueish drop-shadow-md">
  Welcome<br />/home/math/about
</h1>
  <div class="flex items-center justify-center pt-10">
    <div class="rounded-md px-4 py-4 m-8 w-80 shadow-md bg-light-back hover:bg-white">
      <h2 class="drop-shadow-md text-blueish text-3xl">Where it started</h2>
      <p>
        As far as I can remember, I always tried to find the most lazy but still optimal way to do things.
        That's where software development kicked in: creating solutions for my very own problems
      </p>
    </div>
    <div class="rounded-md px-4 py-4 m-8 w-80 shadow-md bg-light-back hover:bg-white">
      <h2 class="drop-shadow-md text-blueish text-3xl">Now ATM</h2>
      <p>
        Okay, now that the desire to develop was there, I had to develop some skills in order to satisfy any of my needs.
        This led me to a software development studies, which im is still following as of today in HELMo Campus Guillemins, which is located in Liège, Belgium.
      </p>
    </div>
    <div class="rounded-md px-4 py-4 m-8 w-80 shadow-md bg-light-back hover:bg-white">
      <h2 class="drop-shadow-md text-blueish text-3xl">What's coming</h2>
      <p>
        So let's resume, lazy but in a good way, what does it even mean ? Developing solutions just to satisfy my laziness can't be a life goal right ?
        Yes, indeed, that's why i'm aiming to join ethical organizations to share my knowledge and provide solutions that can help people.
        That will be my contribution in the transition to make the world a better place to live.
      </p>
    </div>
  </div>

</html>

<style lang="postcss">
  :global(html) {
    background-color: theme(colors.light-back);
  }
</style>
