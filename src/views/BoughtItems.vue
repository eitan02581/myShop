<template>
  <div class="BoughtItems-container">
    <div class="tabs">
      <md-tabs class="md-primary" md-alignment="centered">
        <md-tab @click="onTab('bougthItems')" id="tab-list" md-icon="list"></md-tab>
        <md-tab @click="onTab('store')" id="tab-store" md-icon="store"></md-tab>
      </md-tabs>
      <md-field class="curr-selection">
        <label for="movie">Currency</label>
        <md-select v-model="selectedCurrency">
          <md-option value="ILS">ILS</md-option>
          <md-option value="USD">USD</md-option>
        </md-select>
      </md-field>
    </div>

    <div class="main">
      <template v-if="selectedTab === 'bougthItems'">
        <template v-if="bougthItems && bougthItems.length">
          <div :key="idx" class="item-holder" v-for="(item,idx) in bougthItems">
            <ItemPreview @onReceived="onReceived" :item="item"></ItemPreview>
          </div>
        </template>

        <template v-else>
          <p class="empty">you've got all of your items :)</p>
        </template>
      </template>
      <template v-else>
        <div :key="idx" class="store-holder" v-for="(store,idx) in stores">
          <StorePreview :store="store"></StorePreview>
        </div>
      </template>
    </div>
  </div>
</template>

<script>
import ItemPreview from "@/components/ItemPreview";
import StorePreview from "@/components/StorePreview";
export default {
  name: "BoughtItems",
  props: {},
  mixins: [],
  components: { ItemPreview, StorePreview },
  data() {
    return {
      selectedTab: "bougthItems",
      bougthItems: null,
      selectedCurrency: "ILS"
    };
  },
  async created() {
    this.bougthItems = await this.$store.dispatch({ type: "getBoughtItems" });
    this.bougthItems = this.bougthItems.sort((a, b) => {
      if (!b.estDeliver) return -1;
      if (a.estDeliver > b.estDeliver) return 1;
      if (a.estDeliver < b.estDeliver) return -1;
      return 0;
    });
    console.log(this.$store.state.selectedCurrency);

    if (this.$store.state.selectedCurrency) {
      this.selectedCurrency = this.$store.state.selectedCurrency;
      console.log("this.selectedCurrency", this.selectedCurrency);
    }
    this.$store.dispatch({ type: "getStores" });
  },
  methods: {
    onReceived(item) {
      this.bougthItems = this.bougthItems.filter(bItem => bItem.id !== item.id);
      this.$store.dispatch({ type: "onReceivedItem", item });
    },
    onTab(tabName) {
      this.selectedTab = tabName;
    }
  },
  computed: {
    stores() {
      return this.$store.getters.stores;
    }
  },
  watch: {
    selectedCurrency: async function(currency) {
      await this.$store.dispatch({ type: "getCurrency", currency });
    }
  }
};
</script>

<style lang="scss" scoped>
.BoughtItems-container {
  .tabs {
    margin-bottom: 20px;
    position: sticky;
    width: 100%;
    top: 0;
    z-index: 11;
    position: relative;
    .curr-selection {
      display: inline-block;
      width: 67px;
      background-color: white;
      position: absolute;
      top: -3px;
      right: 0px;
      label {
        padding: 0 5px;
      }
    }
    .md-select {
      width: 67px;
      padding: 0 5px;
    }
  }
  .main {
    padding: 0 20px;
    display: flex;
    flex-wrap: wrap;
    .empty {
      margin: 0 auto;
    }
    .item-holder {
      margin-bottom: 20px;
      width: 100%;
      max-width: 400px;
    }
    .store-holder {
      margin-bottom: 20px;
      width: 100%;
      max-width: 400px;
    }
  }
  .md-tabs + .md-tabs {
    margin-top: 24px;
  }
}
@media only screen and (min-width: 600px) {
  .BoughtItems-container {
    .main {
      .item-holder {
        margin-right: 20px;
        margin-left: 0;
      }
      .store-holder {
        margin-right: 20px;
        margin-left: 0;
      }
    }
  }
}
</style>
