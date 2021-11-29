<script>
  import Banner from '../components/blocks/Banner.svelte';
  import Nav from '../components/blocks/Nav.svelte';
  import TokenDescription from '../components/blocks/TokenDescription.svelte';
  import MissionStatement from '../components/blocks/MissionStatement.svelte';
  import Roadmap from '../components/blocks/Roadmap.svelte';
</script>

<style lang="scss">
  @import '../styles/variables';
  .logo-wrapper {
    text-align: center;
  }
  .logo {
    width: 33%;
    max-width: 8rem;
    margin: 0 auto 1.5em;
  }
  main :global(nav) {
    margin: 2em 0 0;
  }
</style>

<main>
  <Banner>
    <div class="logo-wrapper">
      <img class="logo" src="/images/degen-token-white.svg" alt="DEGEN Token Logo">
    </div>
    <h1 class="banner-title">
      DEGEN
    </h1>
    <p class="banner-subtitle">A Community Supported ASA on Algorand</p>
    <Nav />
  </Banner>

  <div class="content container">
    <MissionStatement />
    <TokenDescription />
    <Roadmap />  
  </div>
</main>