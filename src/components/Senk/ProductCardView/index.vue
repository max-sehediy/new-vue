<template>
  <div class="tile is-parent">
    <div class="tile is-child">
      <img :src="productCardData.img" alt="Oops" />
    </div>
    <div class="tile is-child box">
      <p class="title is-4">Name: {{ productCardData.title }}</p>
      <p class="content is-5">{{ productCardData.description }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProductCardView",
  props: {
    productCardData: {
      type: Object,
    },
  },
};
</script>

<style lang="css" scoped>
</style>