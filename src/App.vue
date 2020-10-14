<template>
  <div id="app">
    <!-- <h1>Hello new-vue</h1> -->
    <!-- <product-info /> -->
    <!-- <random-value :itemsList="wishes" /> -->
    <!-- <sum /> -->
    <!-- <bank-account /> -->
    <!-- <authorization :access="users" /> -->
    <!-- <example :example="myUserList" /> -->
    <shop />
  </div>
</template>

<script>
// import BankAccount from "./components/BankAccount";
// import Authorization from "./components/Authorization";
import Shop from "./components/Shop";

export default {
  name: "App",
  components: {
    // BankAccount,
    // Authorization,
    Shop,
  },
  data() {
    return {
      wishes: ["money", "love", "peace", "friend"],
      users: [
        { name: "max", password: "test" },
        { name: "bob", password: "555" },
      ],
    };
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* margin-top: 60px; */
}
body {
  background-color: darkgray;
}
</style>
