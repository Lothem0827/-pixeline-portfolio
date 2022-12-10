<script>
  import arrow from "../../../assets/arrow.svg";
  import hero1 from "../../../assets/images/hero-image.png";
  import ShortDescription from "./ShortDescription.svelte";
</script>

<div class=" relative uppercase">
  <div class="mx-36 ">
    <div class="font-ade text-size216">ui/ux &</div>
    <div class=" -mt-32 text-right font-ade text-size216">branding</div>
    <ShortDescription />
  </div>
  <div class="absolute bottom-1/2 right-0">
    <img src={arrow} alt="arrow down" />
  </div>
  <div class="absolute  inset-0 flex justify-center  ">
    <img
      src={hero1}
      alt="Hero"
      class="-rotate-6 transition duration-150 hover:rotate-12 ease-in-out hover:mix-blend-normal mix-blend-difference bg-cover"
    />
  </div>
</div>
