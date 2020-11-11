<template>
  <div class="page">
    <header-section />
    <div class="container">
      <div class="columns">
        <filter-section class="culumn is-one-quarter" />
        <products class="culumn" />
      </div>
    </div>
    <footer-section />
  </div>
</template>

<script>
import HeaderSection from "@/components/Senk/HeaderSection";
import FooterSection from "@/components/Senk/FooterSection";
import Products from "@/components/Senk/Products";
import FilterSection from "@/components/Senk/FilterSection";
export default {
  name: "Home",
  components: {
    HeaderSection,
    FooterSection,
    Products,
    FilterSection,
  },
};
</script>

<style lang="css" scoped>
.container{
  width: 100%;
  padding-top: 15px;
}
</style>