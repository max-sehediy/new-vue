<template>
  <div>
    <h1>Authorization form</h1>
    <div>
      <label for="username">Username</label>
      <input type="text" name="username" id="username" v-model="user" />
      <br />
      <label for="pass">password</label>
      <input type="password" name="pass" id="pass" v-model="pass" />
      <br />
      <button @click="go()">go</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Authorization",
  props: {
    access: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      user: null,
      pass: null,
      // users: [
      //   { name: "max", password: "test" },
      //   { name: "bob", password: "555" },
      // ],
    };
  },
  methods: {
    go() {
      if (
        this.access.find((user) => user.name === this.user) &&
        this.access.find((passw) => passw.password === this.pass)
      ) {
        return alert("ok");
      } else {
        return alert("nok");
      }
    },
  },
};
</script>

<style lang="css" scoped>
* {
  margin: 10px;
}
label {
  text-transform: capitalize;
}
</style>