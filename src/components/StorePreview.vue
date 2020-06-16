<template>
  <div class="StorePreview">
    <md-card>
      <md-card-header>
        <md-card-header-text>
          <div class="md-title">{{store.storeName}}</div>
        </md-card-header-text>

        <md-card-media>
          <img :src="store.img" :alt="store.storeName" />
        </md-card-media>
      </md-card-header>

      <md-card-actions class="bottom">
        <p>orders: {{store.orderdItems}}</p>
      </md-card-actions>
    </md-card>
  </div>
</template>

<script>
export default {
  name: "StorePreview",
  props: {
    store: {
      tpye: Object,
      required: true
    }
  },
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
.StorePreview {
  width: 100%;
  .md-title,
  .md-subhead {
    text-align: left;
  }
  .bottom {
    p {
      position: relative;
      right: 15px;
    }
  }
}
</style>