<template>
  <div>
    <header-section />
    <h1>Create Product</h1>
    <div class="form">
      <input type="text" placeholder="Name" v-model="title" />
      <input type="text" placeholder="Category" v-model="category" />
      <input type="text" placeholder="Price" v-model="price" />
      <input type="text" placeholder="Image" v-model="img" />
    </div>
    <button class="title" @click="addNewProduct">Save new Product</button>
    <div class="tile">
      <h2>Preview</h2>
      <div class="title">{{ title }}</div>
      <div class="title">{{ category }}</div>
      <div class="title">{{ price }}</div>
      <img :src="img" alt="enter the address of the picture" />
    </div>
    <div>{{ showProductList }}</div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import { mapGetters } from "vuex";
import HeaderSection from "../../components/Senk/HeaderSection";
export default {
  name: "NewProduct",
  components: {
    HeaderSection,
  },
  data() {
    return {
      title: null,
      category: null,
      price: null,
      img: null,
    };
  },
  computed: {
    ...mapGetters(["showProductList"]),
  },
  methods: {
    ...mapActions(["addProduct"]),
    addNewProduct() {
      let newId = Date.now();
      this.addProduct({
        id: newId,
        title: this.title,
        category: this.category,
        price: this.price,
        img: this.img,
      });
    },
  },
};
</script>

<style lang="css" scoped>
.form {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
input {
  width: 250px;
  margin-bottom: 15px;
}
button {
  margin: 20px;
}
.tile {
  display: flex;
  flex-direction: column;
}
img {
  width: 350px;
}
</style>