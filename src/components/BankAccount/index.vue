<template>
  <div>
    <h1>BankAcount</h1>
    <div class="row">
      <h2>Cума на рахунку:</h2>
      <p class="sum" v-bind:class="[addMoney ? 'plus' : 'minus']">{{ sum }}</p>
      <h2>грн</h2>
    </div>
    <div class="row">
      <h3>Зарахувати на рахунок:</h3>
      <input type="number" v-model="addAcount" />
      <button @click="add()">зарахувати</button>
    </div>
    <div class="row">
      <h3>Зняти з рахунку:</h3>
      <input type="number" v-model="removeAccount" />
      <button @click="rem()">зняти</button>
    </div>
    <div class="row">
      <h3>Відсоток за обслуговування:</h3>
      <p>{{ percentage }}</p>
    </div>
    <hr />
    <div class="dolarEuro">
      <div class="row">
        <h3>Сума у доларах:</h3>
        $
        <p :class="[minimumDollar ? 'minus' : '']">{{ dollar }}</p>
      </div>
      <div class="row">
        <h3>Сума у євро:</h3>
        €
        <p :class="[minimumEuro ? 'minus' : '']">{{ euro }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "BankAcount",
  data() {
    return {
      accountSum: [0],
      addAcount: Number,
      removeAccount: null,
      result: Number,
      addMoney: false,
      minimumEuro: true,
      minimumDollar:true,
    };
  },
  computed: {
    sum() {
      return this.accountSum.reduce((a, b) => a + b);
    },
    dollar() {
      return parseInt(this.sum / 28);
    },
    euro() {
      return parseInt(this.sum / 33);
    },
    percentage() {
      return (this.removeAccount * 3) / 100;
    },
  },
  methods: {
    add() {
      this.addMoney = true;
      this.accountSum.push(parseFloat(this.addAcount));
      this.debetEuro();
      this.debetDollar();
    },
    rem() {
      if (this.sum < this.removeAccount) {
        alert("недостатньо коштів");
      } else {
        this.addMoney = false;
        this.accountSum.push(parseFloat(this.removeAccount) * -1);
        this.debetEuro();
        this.debetDollar();
      }
    },
    debetEuro() {
      if (this.euro < 100) {
        this.minimumEuro = true;
      } else {
        this.minimumEuro = false;
      }
    },

    debetDollar() {
      if (this.dollar < 100) {
        this.minimumDollar= true;
      } else {
        this.minimumDollar = false;
      }
    },
  },
};
</script>

<style lang="css" scoped>
* {
  margin: 10px;
}
.row {
  display: flex;
  justify-content: flex-start;
  align-items: center;
}
button {
  text-transform: capitalize;
}
hr {
  border: 3px solid black;
}
.plus {
  color: green;
}
.minus {
  color: red;
}
</style>