<template>
  <div class="column">
    <div class="title is-parent " @click="getToCard()">
      <div class="title is-child notification">
        <figure class="image is-4by3">
          <img :src="img" alt="Oops" />
        </figure>
        <div class="title notification is-child is-primary">
          <p class="title">{{ title }}</p>
          <p class="subtitle">{{ category }}</p>
          <p class="subtitle">{{ price }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProductCard",
  props: {
    title: {
      type: String,
      default: "",
    },
    id: {
      type: Number,
      default: null,
    },
    img: {
      type: String,
      default: "",
    },
    category: {
      type: String,
      default: "",
    },
    price: {
      type: [Number, String],
      default: "not available",
    },
  },
  methods: {
    getToCard() {
      this.$router.push({
        name: "card",
        params: { product_id: this.id },
      });
    },
  },
};
</script>

<style lang="css" scoped>
.column {
  height: 100%;
}
</style>