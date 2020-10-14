<template>
  <div>
    <div class="page">
      <header>
        <header-shop />
      </header>
      <section class="filter-tab">filter</section>
      <main class="product-list">products</main>
    </div>
    <headerShop />
  </div>
</template>

<script>
import HeaderShop from "./HeaderShop";

export default {
  name: "Shop",
  components:{ "HeaderShop"},
};
</script>

<style lang="css" scoped>
.page {
  display: grid;
  grid-template-areas:
    "header header header"
    "filter product product";
  background-color: tomato;
  min-height: 100vh;
}
header {
  grid-area: header;
}
.filter-tab {
  grid-area: filter;
}
.product-list {
  grid-area: product;
}
</style>