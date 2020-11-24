<template>
  <div class="page">
    <header-section />
    <div class="container">
      <div class="columns p-4">
        <!-- input field************************************** -->
        <div class="column is-one-quarter mx-6">
          <div class="field mt-4">
            <label class="label">Name :</label>
            <input
              class="input is-success"
              :class="[title ? 'is-success' : 'is-danger']"
              type="text"
              placeholder="name "
              v-model="title"
              autocomplete="off"
            />
            <div class="control">
              <p class="help" :class="[title ? 'is-hidden ' : 'is-danger']">
                This name is invalid
              </p>
            </div>
          </div>
          <!-- subtitle -->
          <div class="field mt-4">
            <label class="label">Subtitle (короткий опис):</label>
          </div>
          <input
            class="input is-success"
            :class="[subtitle ? 'is-success' : 'is-danger']"
            type="text"
            placeholder="Subtitle (короткий опис)"
            v-model="subtitle"
          />
          <div class="control">
            <p class="help" :class="[subtitle ? 'is-hidden ' : 'is-danger']">
              This subtitle is invalid
            </p>
          </div>
          <!-- category************************************************************ -->
          <div class="field mt-4">
            <label class="label">Category:</label>
          </div>
          <input
            class="input is-success"
            :class="[category ? 'is-success' : 'is-danger']"
            type="text"
            placeholder="category"
            v-model="category"
          />
          <div class="control">
            <p class="help" :class="[category ? 'is-hidden ' : 'is-danger']">
              This category is invalid
            </p>
          </div>

          <!-- price************************************************************** -->
          <div class="field mt-4">
            <label class="label">Price:</label>
          </div>
          <input
            class="input is-success"
            :class="[price ? 'is-success' : 'is-danger']"
            type="text"
            placeholder="price"
            v-model="price"
          />
          <div class="control">
            <p class="help" :class="[price ? 'is-hidden ' : 'is-danger']">
              This price is invalid
            </p>
          </div>
          <!-- img*************************** -->
          <div class="field mt-4">
            <label class="label">Image:</label>
          </div>
          <input
            class="input"
            :class="[img ? 'is-success' : 'is-danger']"
            type="text"
            placeholder="Image URL - 'http...'"
            v-model="img"
          />
          <!-- description ********************************* -->
          <div class="control">
            <textarea
              class="textarea mt-3"
              placeholder="Description (повний опис продукції)"
              v-model="description"
            ></textarea>
          </div>
          <!-- features*********************** -->
          <div class="field mt-4">
            <label class="label">Технічні характеристики:</label>
          </div>
          <input class="input is-info mt-2" type="text" v-model="features[0]" />
          <input class="input is-info mt-2" type="text" v-model="features[1]" />
          <input class="input is-info mt-2" type="text" v-model="features[2]" />
          <input class="input is-info mt-2" type="text" v-model="features[3]" />
          <!-- button ********************************** -->
          <div class="field mt-3 p-2">
            <a
              class="button is-success has-text-weight-medium"
              @click="addNewProduct()"
              >Save</a
            >
          </div>
        </div>
        <!-- card field******************************************************* -->
        <div class="column is-one-quarter mx-6 card">
          <div class="tile is-child notification">
            <figure class="img">
              <img :src="img" alt="Oops" />
            </figure>
            <div class="tile notification is-child is-warning">
              <p class="title is-5 notification is-success">
                {{ title }}
              </p>
              <p class="content">{{ subtitle }}</p>
              <strong class="subtitle is-4">Категорія:</strong>
              <p class="subtitle is-6">{{ category }}</p>
              <p class="subtitle is-6">Ціна: {{ showPrice }}</p>
            </div>
          </div>
          <button @click="test()" class="button p-4 is-success">go</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import HeaderSection from "../../components/Senk/HeaderSection";
export default {
  name: "NewProduct",
  components: {
    HeaderSection,
  },
  data() {
    return {
      title: null,
      subtitle: null,
      category: null,
      price: null,
      img: null,
      description: null,
      features: [],
    };
  },
  computed: {
    ...mapGetters(["showProductList"]),
    showPrice() {
      if (!this.price) return "You must enter a price";
      let showPrice = this.price.toString();
      if (showPrice.length > 3) {
        return showPrice[0] + " " + showPrice.slice(1);
      } else {
        return showPrice;
      }
    },
  },
  methods: {
    ...mapActions(["addProduct", "testTest", "addTest"]),
    addNewProduct() {
      const {
        features,
        title,
        description,
        price,
        img,
        category,
        subtitle,
      } = this;
      this.addProduct({
        self: this,
        productData: {
          title,
          price,
          img,
          category,
          subtitle,
          description,
          features,
        },
      });
    },
    test() {
      this.addTest();
    },
  },
};
</script>

<style lang="css" scoped>
.card {
  width: 450px;
  padding: 30px;
}
@media only screen and (max-width: 1020px) {
  .page > * {
    max-width: 768px;
  }
  .left {
    margin: 10px 30px;
  }
}
</style>