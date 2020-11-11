<template>
  <div class="section">
    <b-field label="Фільтр по ціні">
      <b-slider
        v-model="numbers"
        :min="minPrice"
        :max="maxPrice"
        :step="10"
        ticks
      >
      </b-slider>
    </b-field>
    <b-field label="Фільтр по категорії"> </b-field>
    <b-field>
      <b-select placeholder="Default" class="is-large">
        <option
          v-for="category in categoryFilter"
          :key="category"
          :value="category"
        >
          {{ category.toUpperCase() }}
        </option>
      </b-select>
    </b-field>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  data() {
    return {
      numbers: [],
      min: null,
    };
  },
  watch: {
    numbers(newValue) {
      console.log(newValue);
      this.filterPriceSet(newValue);
    },
  },
  computed: {
    ...mapGetters(["showProductList"]),

    minPrice() {
      let arrMin = this.showProductList.map(function (e) {
        if (isNaN(e.price)) {
          return 0;
        } else {
          return e.price;
        }
      });

      return Math.min(...arrMin.filter((e) => e > 0));
    },
    maxPrice() {
      let arrMin = this.showProductList.map(function (e) {
        if (isNaN(e.price)) {
          return 0;
        } else {
          return e.price;
        }
      });
      return Math.max(...arrMin.filter((e) => e > 0));
    },
    // minMax() {
    //   let a = this.minPrice + 20;
    //   let b = this.maxPrice - 20;
    //   console.log(a, b);
    //   return this.numbers[(a, b)];
    // не працює
    // },
    categoryFilter() {
      let catArr = this.showProductList.map((el) => el.category);
      let categoryData = new Set(catArr);
      return Array.from(categoryData);
      //  маю сумніви що так правильно...
    },
  },
  methods: {
    ...mapActions(["filterPrice"]),
    filterPriceSet(arr) {
      this.filterPrice(arr);
    },
  },
};
</script>

<style lang="css" scoped>
@media only screen and (max-width: 768px) {
  .section {
    margin: 10px;
    padding: 10px;
  }
}
</style>