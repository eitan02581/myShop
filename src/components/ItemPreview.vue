<template>
  <div class="ItemPreview">
    <md-card>
      <md-card-header>
        <md-card-header-text>
          <div class="md-title">{{item.name}}</div>
          <div class="md-subhead">{{getPrice}} ₪</div>
        </md-card-header-text>

        <md-card-media>
          <img :src="item.img" :alt="item.name" />
        </md-card-media>
      </md-card-header>

      <md-card-actions class="bottom">
        <p>{{item.storeName}}</p>
        <div class="md-subhead">
          <p>est delivery</p>
          <p v-if="!item.status">{{item.estDeliver | time}}</p>
        </div>
        <md-button v-if="!item.isReceived" @click="onReceived" class="md-primary">Is item here ?</md-button>
        <md-button v-else @click="onReceived" class="md-accent">received</md-button>
      </md-card-actions>
    </md-card>
    <!-- <p>{{item.name}}</p>
    <p>{{getPrice}} ₪</p>
    <p v-if="!item.status">{{item.estDeliver | time}}</p>
    <p>{{item.storeName}}</p>
    <md-button v-if="!item.isReceived" @click="onReceived" class="md-primary">Item is here</md-button>
    <md-button v-else @click="onReceived" class="md-primary">you received the item</md-button>-->
  </div>
</template>

<script>
export default {
  name: "ItemPreview",
  props: { item: { type: Object, required: true } },
  mixins: [],
  components: {},
  data() {
    return {};
  },
  created() {},
  methods: {
    onReceived() {
      this.$emit("onReceived", this.item);
    }
  },
  computed: {
    shekelToDollarCurr() {
      return this.$store.state.ShekelToDollarCurrency;
    },
    getPrice() {
      return (this.item.price * this.shekelToDollarCurr).toFixed(2);
    }
  },
  watch: {}
};
</script>

<style lang="scss" scoped>
.ItemPreview {
  color: white;
  width: 100%;

  img {
    height: 80px;
    width: 80px;
    object-fit: cover;
  }
  .md-title,
  .md-subhead {
    text-align: left;
  }
  .bottom {
    display: flex;
    justify-content: space-around;
  }
}
</style>

