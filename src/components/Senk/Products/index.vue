<template>
  <section class="section">
    <div class="container">
      <div class="columns is-multilane">
        <div
          class="column is-3-desktop is-4-tablet"
          v-for="prod in getFilterProductList"
          :key="prod.id"
        >
          <product-card
            :id="prod.id"
            :title="prod.title"
            :subtitle="prod.subtitle"
            :img="prod.img"
            :category="prod.category"
            :price="prod.price"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import ProductCard from "./ProductCard";
import { mapGetters } from "vuex";

export default {
  name: "Products",
  components: {
    ProductCard,
  },
  data() {
    return {};
  },
  computed: {
    ...mapGetters([
      "showProductList",
      "getFilterProductList",
      "getFilterProductList",
    ]),
    // *************************************************
    whatSeeUser() {
      if (!this.getFilterProductList.length) {
        return this.showProductList;
      } else {
        return this.getFilterProductList;
      }
    },
  },
};
</script>

<style lang="css" scoped>
</style>