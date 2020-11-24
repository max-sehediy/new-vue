  <template>
  <b-navbar>
    <template slot="brand">
      <b-navbar-item tag="router-link" :to="{ path: '/' }">
        <img
          src="https://raw.githubusercontent.com/buefy/buefy/dev/static/img/buefy-logo.png"
          alt="Lightweight UI components for Vue.js based on Bulma"
        />
      </b-navbar-item>
    </template>
    <template slot="start">
      <b-navbar-item> <router-link to="/">Home</router-link></b-navbar-item>
      <!-- ^ думаю це не зовсім правильно ^-->

      <b-navbar-item>
        <router-link to="/CreateProduct"> Створити новий продукт </router-link>
      </b-navbar-item>
      <b-navbar-item href="#"> Контакти </b-navbar-item>
    </template>
    <div class=""></div>

    <template slot="end">
      <b-navbar-item tag="div">
        <section class="search">
          <b-input
            type="text"
            v-model="searchTitleText"
            placeholder="Пошук по назві продукта"
            icon="search"
            icon-pack="fas"
          >
          </b-input>
          <b-button type="is-success" @click="serchTitle()">Пошук</b-button>
        </section>

        <div class="buttons">
          <a class="button is-primary">
            <strong>Sign up</strong>
          </a>
          <a class="button is-light"> Log in</a>
        </div>
      </b-navbar-item>
    </template>
  </b-navbar>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "HeaderSection",
  data() {
    return {
      searchTitleText: null,
    };
  },

  methods: {
    ...mapActions(["filterTitle"]),

    serchTitle() {
      this.filterTitle(this.searchTitleText);
    },
  },
};
</script>

<style lang="css" scoped>
.search {
  display: flex;
  margin: 10px;
}
.search > * {
  margin: auto 5px;
}
</style>