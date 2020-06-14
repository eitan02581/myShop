<template>
  <div id="app">
    <NavBar></NavBar>
    <router-view />
  </div>
</template>



<script>
import NavBar from "@/components/NavBar";
export default {
  name: "app",
  props: {},
  mixins: [],
  components: { NavBar },
  data() {
    return {
      currencyInterval: null
    };
  },
  created() {
    this.$store.dispatch({ type: "initAppData" });
    this.$store.dispatch({ type: "getCurrency" });

    this.currencyInterval = setInterval(() => {
      this.$store.dispatch({ type: "getCurrency" });
    }, window.myConfig.fetchCurrencyInterval);
  },
  beforeDestroy() {
    clearInterval(this.currencyInterval);
  },
  methods: {},
  computed: {},
  watch: {}
};
</script>
<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
