<script>
  import Layout from "../+layout.svelte";
</script>

<html lang="en" class="bg-[url('/blob.svg')] bg-fixed bg-cover font-custom">
  <h1 class="text-center text-5xl font-bold pt-20 text-blueish drop-shadow-md">
    Welcome<br />/home/math
  </h1>
  <div
    class="mx-auto mt-10 rounded-md px-4 py-4 w-2/5 shadow-md bg-light-back hover:bg-white hover:text-black"
  >
    <h2 class="drop-shadow-md text-3xl text-purpleish">whoami</h2>
    <p>
      Hello there! I'm a 19-year-old computer science enthusiast with a
      boundless passion for technology and all things related to the digital
      world. I'm currently a student, eagerly immersing myself in the
      fascinating realm of computer science, always on the lookout for new
      challenges and opportunities to expand my knowledge. I thrive on
      problem-solving, whether it's coding complex algorithms or designing
      user-friendly interfaces. When I'm not buried in lines of code or
      debugging, you can find me exploring the latest tech trends or gaming with
      friends. I'm excited to connect with like-minded individuals and learn
      from the ever-evolving field of computer science. Let's embark on this
      digital journey together!
    </p>
  </div>
  <div class="flex items-center justify-center pt-10">
    <div
      class="rounded-md px-4 py-4 m-10 hover:shadow-md bg-purpleish text-white hover:bg-white hover:text-black"
    >
      <h2 class="drop-shadow-md text-3xl">Where it started</h2>
      <p>
        My journey into the world of computer science began when I was just a
        curious kid. I was always fascinated by the magic that happened behind
        the screens of our household computers, and I couldn't resist the urge
        to take them apart to see how they worked. As I grew older, my interests
        evolved from hardware to software, and I started dabbling in coding. It
        was like unlocking a whole new world of possibilities. The sense of
        empowerment that came from writing my first lines of code was addictive,
        and I was hooked. Over the years, I immersed myself in various
        programming languages, tinkering with personal projects, and taking on
        coding challenges that allowed me to combine my love for problem-solving
        with my passion for technology.
      </p>
    </div>
    <div
      class="rounded-md px-4 py-4 m-10 shadow-md bg-light-back hover:bg-white"
    >
      <h2 class="drop-shadow-md text-blueish text-3xl">Now ATM</h2>
      <p>
        This unquenchable thirst for knowledge and the desire to create and
        innovate ultimately led me to pursue a formal education in computer
        science and solidify my commitment to this incredible field. I'm now
        learning all sorts of computer-related technologies and languages,
        allowing me to develop various full-stack applications.
      </p>
    </div>
    <div
      class="rounded-md px-4 py-4 m-10 hover:shadow-md bg-purpleish text-white hover:bg-white hover:text-black"
    >
      <h2 class="drop-shadow-md text-3xl">What's coming</h2>
      <p>
        In the coming years, I'd love contributing to the development of
        cutting-edge software, I want to be on the frontlines of technological
        advancement. I envision myself working for a forward-thinking tech
        company or possibly as an independent developer, collaborating with
        teams that are pushing the boundaries of what is possible. Solving
        complex problems, creating user-friendly solutions, and continuously
        learning and adapting to the ever-evolving tech landscape will be
        integral to my career. Ultimately, my future career in computer science
        is not just about professional success but also about making a positive
        contribution to the world through technology, fostering innovation, and
        being a part of the exciting developments that shape our future.
      </p>
    </div>
  </div>
  <footer class="flex justify-center w-full">Matheo Simeoni - 2023</footer>
</html>

<style lang="postcss">
  :global(html) {
    background-color: theme(colors.light-back);
  }
</style>
