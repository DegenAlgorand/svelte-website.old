<script>
  
</script>

<style lang="scss">
  @import '../../styles/variables';
  .wrapper {
    padding: 2rem;
    // background: $bg-light;
    min-height: 50vh;
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    justify-content: center;
  }
</style>


<header class="wrapper">
  <div class="container">
    <slot></slot>
  </div>
</header>