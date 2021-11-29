<style lang="scss">
  @import '../../styles/variables';
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


<section>
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