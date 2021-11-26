<script>
  import Banner from '../components/blocks/Banner.svelte';
  import Nav from '../components/blocks/Nav.svelte';
</script>

<style lang="scss">
  @import '../styles/variables';
  main :global(nav) {
    margin: 2em 0 0;
  }
  dl {
    margin: 2em 0;
    padding: 1em 0;
    border-top: 1px solid $border-color;
    border-bottom: 1px solid $border-color;
    dt {
      margin-top: 0.5em;
      &:first-child {
        margin-top: 0;
      }
    }
    dd {
      margin: 0;
    }
  }
  ol {
    list-style: none;
    margin: 0;
    padding: 0;
    li {
      display: block;
      margin: 0.5em 0;
      padding: 0 0 0 2em;
      position: relative;
      &:before {
        content: '';
        position: absolute;
        top: 0.5em;
        left: 0.25em;
        background: $red;
        border-radius: 0.5em;
        width: 0.5em;
        height: 0.5em;
      }
    }
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

  <section class="content container">
    <h2 class="section-title">
      DEGEN is a governance token.
    </h2>
    <dl>
      <dt>Total Supply:</dt>
        <dd>420,000,069 DEGEN, 100% in circulation, no preallocation</dd>
      <dt>Asset ID:</dt>
        <dd>417708610</dd>
    </dl>
    <p>
      100% of Degen initially went into the Tinyman liquidity pool and no Degen was withheld for the team.
      In fact, there is no predetermined 'team', all Degen token holders will have a say in determining the direction of Degen. 
      We are bootstrapping a community, Degen Token is our governance.
    </p>


    <h2 class="section-title">
      Roadmap
    </h2>
    <ol>
      <li>
        <strike>Token Launch</strike> We're Live on Tinyman.org
      </li>
      <li>
        Artist Collab / NFT drop to Liquidity Providers
      </li>
      <li>
        On chain voting
      </li>
      <li>
        DAO proposal
      </li>
    </ol>
  </section>
</main>