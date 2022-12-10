<script>
  import Status from "./Status.svelte";
  import logo from "../../../assets/pixeline-logo.svg";
  import Contact from "./Contact.svelte";
</script>

<header>
  <nav class="flex justify-between items-center">
    <a class="w-1/3" href="/"><img src={logo} alt="Pixeline Logo" /></a>
    <a class="w-1/3 text-center" href="/"><Status /></a>
    <a class="w-1/3 text-right" href="/"><Contact /></a>
  </nav>
</header>
