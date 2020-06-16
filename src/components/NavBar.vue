<template>
  <div class="NavBar">
    <router-link to="/">
      <md-button class="option">bougth items</md-button>
    </router-link>
    <router-link to="/ReceivedList">
      <md-button class="option">received items</md-button>
    </router-link>
  </div>
</template>

<script>
export default {
  name: "NavBar",
  props: {},
  mixins: [],
  components: {},
  data() {
    return {};
  },
  created() {},
  methods: {},
  computed: {},
  watch: {}
};
</script>

<style lang="scss" scoped>
.NavBar {
  background-color: #3f51b5;
  position: sticky;
  top: 0;
  width: 100%;
  z-index: 11;
  .option {
    color: white;
  }
  .router-link-exact-active {
    button {
      color: #2196f3;
    }
  }
}
</style>
