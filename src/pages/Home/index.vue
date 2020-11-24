<template>
  <div>
    <header-section />
    <div class="container">
      <div class="columns">
        <filter-section class="culumn is-one-quarter" />
        <products class="culumn" />
      </div>
    </div>
    <section class="section">
      <div class="container">
        <div class="columns is-multiline">
          <div class="column is-one-quarter">
            <div class="card">
              <div class="card-header">
                <img src="https://i.infocar.ua/i/12/5713/700x350.jpg" alt="" />
              </div>
              <div class="card-content">
                <div class="content">
                  <h3 class="is-3 title">Lorem ipsum dolor sit.</h3>
                  <p class="is-5 subtitle">Lorem ipsum dolor sit.</p>
                </div>
              </div>
              <div class="card-footer">
                <a class="card-footer-item button is-primary is-outlined"
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
          </div>
          <div class="column is-one-quarter">
            <div class="card">
              <div class="card-header">
                <img src="https://i.infocar.ua/i/12/5713/700x350.jpg" alt="" />
              </div>
              <div class="card-content">
                <div class="content">
                  <h3 class="is-3 title">Lorem ipsum dolor sit.</h3>
                  <p class="is-5 subtitle">Lorem ipsum dolor sit.</p>
                </div>
              </div>
              <div class="card-footer">
                <a class="card-footer-item button is-primary is-outlined"
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
          </div>
          <div class="column is-one-quarter">
            <div class="card">
              <div class="card-header">
                <img src="https://i.infocar.ua/i/12/5713/700x350.jpg" alt="" />
              </div>
              <div class="card-content">
                <div class="content">
                  <h3 class="is-3 title">Lorem ipsum dolor sit.</h3>
                  <p class="is-5 subtitle">Lorem ipsum dolor sit.</p>
                </div>
              </div>
              <div class="card-footer">
                <a class="card-footer-item button is-primary is-outlined"
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
          </div>
          <div class="column is-one-quarter">
            <div class="card">
              <div class="card-header">
                <img src="https://i.infocar.ua/i/12/5713/700x350.jpg" alt="" />
              </div>
              <div class="card-content">
                <div class="content">
                  <h3 class="is-3 title">Lorem ipsum dolor sit.</h3>
                  <p class="is-5 subtitle">Lorem ipsum dolor sit.</p>
                </div>
              </div>
              <div class="card-footer">
                <a class="card-footer-item button is-primary is-outlined"
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
          </div>
          <div class="column is-one-quarter">
            <div class="card">
              <div class="card-header">
                <img src="@/assets/images/404.jpg" alt="" />
              </div>
              <div class="card-content">
                <div class="content">
                  <h3 class="is-3 title">Lorem ipsum dolor sit.</h3>
                  <p class="is-5 subtitle">Lorem ipsum dolor sit.</p>
                </div>
              </div>
              <div class="card-footer">
                <a class="card-footer-item button is-primary is-outlined"
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
          </div>
        </div>
      </div>
    </section>
    <footer-section />
  </div>
</template>

<script>
import HeaderSection from "@/components/Senk/HeaderSection";
import FooterSection from "@/components/Senk/FooterSection";
import Products from "@/components/Senk/Products";
import FilterSection from "@/components/Senk/FilterSection";
import { mapActions } from "vuex";
export default {
  name: "Home",
  components: {
    HeaderSection,
    FooterSection,
    Products,
    FilterSection,
  },
  data() {
    return {
      products: [],
      testArr: null,
    };
  },
  methods: {
    ...mapActions(["loadDate"]),
  },
  mounted() {
    this.loadDate(this);
  },
};
</script>

<style lang="css" scoped>
.container {
  width: 100%;
  padding-top: 15px;
}
</style>