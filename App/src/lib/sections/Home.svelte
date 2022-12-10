<script>
  // import Navigation from "../ui/navigation/Navigation.svelte";

  // //import SectionContainer from "./SectionContainer.svelte";
  // import Title from "../ui/title/Title.svelte";
  import hero1 from "../../assets/images/hero-image.png";
  import arrow from "../../assets/arrow-small.svg";
  import logo from "../../assets/pixeline-logo.svg";
</script>

<!-- Home Section -->
<section class=" h-[100vh] justify-between">
  <!-- header -->
  <div class="mx-[5.25em] py-[2em] h-full flex flex-col justify-between">
    <header class="">
      <nav class="flex justify-center items-center">
        <a class="w-1/3" href="/">
          <img src={logo} alt="Pixeline Logo" />
        </a>
        <a class="w-1/3" href="/">
          <div class="flex gap-2 items-center justify-center">
            <div class="rounded-full bg-neon w-3 h-3" />
            <div class="uppercase text-[0.875em]">
              available for freelance work
            </div>
          </div>
        </a>
        <a class="w-1/3 text-right uppercase" href="/">let's talk?</a>
      </nav>
    </header>
    <!-- end header -->

    <!-- title -->
    <div class="relative mt-[8em]">
      <div class=" uppercase mx-[9em] font-ade">
        <p class="text-[13.5em]">ui/ux &</p>
        <p class="-mt-24 text-right  text-[13.5em]">branding</p>
      </div>
      <div class="absolute bottom-1/2 right-0">
        <img src={arrow} alt="arrow down" />
      </div>
      <div class="absolute inset-0 flex justify-center ">
        <div
          class=" w-[29.29em] h-[36em] -mt-[2em] overflow-hidden bg-no-repeat bg-cover -rotate-6 hover:rotate-12 hover:mix-blend-normal mix-blend-difference transition duration-500 ease-in-out"
        >
          <img
            src={hero1}
            class="hover:scale-125 transition duration-500 ease-in-out"
            alt="Hero "
          />
        </div>
      </div>
    </div>
    <!-- end title -->

    <!-- short desc -->
    <div class="flex justify-between items-end mt-[-4em]">
      <div class="w-[17em] uppercase flex flex-col gap-[6em]">
        <p class="text-[1.25em]">
          hi, i’m carolino villarta a visual designer from cebu, philippines
        </p>
        <a class=" underline" href="/">know me more</a>
      </div>
      <a class="text-right uppercase " href="/">
        let's talk?
        <span> (6) </span>
      </a>
    </div>
    <!-- end short desc -->
  </div>
</section>
