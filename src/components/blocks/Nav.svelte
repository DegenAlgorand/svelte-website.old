<script>
</script>

<style lang="scss">
  @import '../../styles/variables';
  ul {
    display: block;
    text-align: center;
  }
  li {
    display: inline-block;
    margin: 0.125em;
  }
  .secondary {
    margin: 0.5em 0;
    li {
      margin: 0.25em;
    }
  }
  .text-link {
    color: #daa7a7;
    &:hover {
      color: $white;
    }
  }
</style>

<nav>

  <ul class="primary">
    <li>
      <a class="btn" target="_blank" href="https://discord.gg/wDy6eW6Gbj">
        <i class="fab fa-discord"></i>
        Discord
      </a>
    </li>
    <li>
      <a class="btn" target="_blank" href="https://tinychart.org/asset/417708610">
        <i class="fas fa-chart-line"></i>
        TinyChart
      </a>
    </li>
    <li>
      <a class="btn" target="_blank" href="https://app.tinyman.org/#/swap?asset_in=0&asset_out=417708610">
        <i class="fas fa-dollar-sign"></i>
        Buy on Tinyman
      </a>
    </li>
  </ul>

  <ul class="secondary">
    <li>
      <a class="text-link" target="_blank" href="https://algoexplorer.io/asset/417708610">
        Algoexplorer.io
      </a>
    </li>
    <li>
      <a class="text-link" target="_blank" href="https://algoexplorer.io/address/HPSDZOIBAPREKKIKWDLKRKLQKFOFU3KH6NGVS3YGVZD3E7ZIK2ZPKYSRNU">
        Tinyman Liquidity Pool
      </a>
    </li>
  </ul>

</nav>