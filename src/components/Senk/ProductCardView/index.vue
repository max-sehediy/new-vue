<template>
  <div class="columns">
    <div class="column is-one-quarter">
      <img :src="productCardData.img" alt="Oops" />
    </div>
    <div class="column is-parent data-content">
      <div class="title is-child">
        <span>Name:</span> {{ productCardData.title }}
      </div>
      <h4 class="subtitle is-child">
        <span>Category:</span> {{ productCardData.category }}
      </h4>
      <div class="subtitle is-child">
        <span>Price:</span> {{ productCardData.price }}
      </div>
      <div class="subtitle is-child Descriptiod">
        <span> Description:</span>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
          doloremque consequatur, beatae cumque at rem ipsa ratione corporis
          repudiandae veniam ad quaerat dolorem aliquam facilis fuga ullam omnis
          dolor atque.Dolorum commodi illo blanditiis sed laudantium odit
          explicabo, dolor cumque a sint quam quo expedita provident facere
          molestiae culpa totam porro repudiandae, deleniti beatae. Sapiente
          odit quisquam dolorem ab repellat.
        </p>
      </div>
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
.columns {
  padding: 15px;
}
.data-content {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
}
span {
  font-style: italic;
  font-weight: bold;
}
</style>