<template>
  <div>
    <header-section />
    <div class="container">
      <product-card-view :productCardData="showProduct" />
    </div>
    <footer-section />
  </div>
</template>

<script>
import HeaderSection from "@/components/Senk/HeaderSection";
import FooterSection from "@/components/Senk/FooterSection";
import ProductCardView from "@/components/Senk/ProductCardView";
import { mapGetters } from "vuex";

export default {
  name: "Card",
  components: {
    HeaderSection,
    FooterSection,
    ProductCardView,
  },
  computed: {
    ...mapGetters(["showProductList"]),
    showProduct() {
      return this.showProductList.find(
        (el) => el.id == this.$route.params.product_id
      );
    },
  },
};
</script>

<style lang="scss" scoped>
</style>