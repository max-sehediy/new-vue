<template>
  <div class="container">
    <div class="columns" v-for="prod in getTestArr" :key="prod.id">
      <product-card
        :id="prod.id"
        :title="prod.title"
        :img="prod.img"
        :category="prod.category"
        :price="prod.price"
      />
    </div>
    <div>{{ whatSeeUser }}</div>
  </div>
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
    ...mapGetters(["showProductList", "getFilterProductList", "getTestArr"]),
    // *************************************************
    // whatSeeUser() {
    //   if (!this.getFilterProductList) {
    //     return this.showProductList;
    //   } else {
    //     return this.getFilterProductList;
    //   }
    // },
  },
};
</script>

<style lang="css" scoped>
.container {
  /* width: 800px; */
  padding: 5px;
  display: grid;
  grid-gap: 10px;
  grid-template-columns: repeat(4, 1fr);
}
@media only screen and (max-width: 1024px) {
  .container {
    width: 100%;
    padding: 3px;
    display: grid;
    grid-gap: 10px;
    justify-content: center;
    grid-template-columns: repeat(3, 1fr);
  }
  .columns {
    height: 100%;
  }
}
@media only screen and (max-width: 768px) {
  .container {
    width: 100%;
    padding: 3px;
    display: grid;
    justify-content: center;
    grid-template-columns: repeat(1, 630px);
  }
  .columns {
    height: 100%;
  }
}
</style>