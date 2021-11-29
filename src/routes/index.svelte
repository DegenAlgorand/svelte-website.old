<script>
  import Banner from '../components/blocks/Banner.svelte';
  import Nav from '../components/blocks/Nav.svelte';
  import TokenDescription from '../components/blocks/TokenDescription.svelte';
  import Roadmap from '../components/blocks/Roadmap.svelte';
</script>

<style lang="scss">
  @import '../styles/variables';
  main :global(nav) {
    margin: 2em 0 0;
  }
</style>

<main>
  <Banner>
    <h1 class="banner-title">
      $DEGEN
    </h1>
    <p class="banner-subtitle">A Community Supported ASA on Algorand</p>
    <Nav />
  </Banner>

  <div class="content container">
    <TokenDescription />
    <Roadmap />  
  </div>
</main>