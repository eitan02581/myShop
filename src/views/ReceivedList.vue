<template>
  <div class="ReceivedList-container">
    <template v-if="receivedItems && receivedItems.length">
      <div :key="idx" class="item-holder" v-for="(item,idx) in receivedItems">
        <ItemPreview :item="item"></ItemPreview>
      </div>
    </template>
    <template v-else>
      <p class="empty">Items Are on their way</p>
    </template>
  </div>
</template>

<script>
import ItemPreview from "@/components/ItemPreview";

export default {
  name: "ReceivedList",
  props: {},
  mixins: [],
  components: { ItemPreview },
  data() {
    return {
      receivedItems: null
    };
  },
  async created() {
    this.receivedItems = await this.$store.dispatch({
      type: "getReceivedItems"
    });
  },
  methods: {},
  computed: {},
  watch: {}
};
</script>

<style lang="scss" scoped>
.ReceivedList-container {
  margin-top: 20px;
  display: flex;
  flex-wrap: wrap;
  padding: 0 20px;
  .item-holder {
    margin-bottom: 20px;
    width: 100%;
    max-width: 400px;
  }
  .empty {
    margin: 0 auto;
  }
}

@media only screen and (min-width: 600px) {
  .ReceivedList-container {
    .item-holder {
      margin-right: 20px;
      margin-left: 0;
    }
  }
}
</style>

