<template>
  <div class="card">
    <div class="card-header">
      <img
        :src="img"
        class="image"
        @click="getToCard()"
      />
    </div>
    <div class="card-content">
      <div class="content">
        <h3 class="is-size-4 p-2 title has-background-warning">{{ title }}</h3>
        <p
          class="is-size-6 subtitle has-text-left mt-2 is-italic has-text-danger"
        >
          {{ subtitle }}
        </p>
      </div>
    </div>
    <div class="card-footer">
      <a
        @click="getToCard()"
        class="card-footer-item button is-primary is-outlined"
        >Preview</a
      >
      <a class="card-footer-item button is-success"
        ><p class="is-bolt">Add to card</p>
        <span class="icon">
          <i class="fas fa-cart-plus"></i>
        </span>
      </a>
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
    subtitle: {
      type: String,
      default: "",
    },
    id: {
      type: [Number, String],
      default: null,
    },
    img: {
      type: String,
      default: require("@/assets/images/404.jpg"),
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
  computed: {
    showPrice() {
      let showPrice = this.price.toString();
      return showPrice[0] + " " + showPrice.slice(1);
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
.image:hover,
.title:hover {
  cursor: pointer;
}
</style>