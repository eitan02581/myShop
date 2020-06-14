import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

import { bougthItems, stores } from '@/stub/stub'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    bougthItems: [],
    receivedItems: [],
    store: null,
    stores: [],
    ShekelToDollarCurrency: null
  },
  mutations: {
    setStores(state) {
      state.stores = stores
    },
    setBoughItems(state) {
      state.bougthItems = bougthItems
    },
    updateBoughtItemStatus(state, { itemId }) {
      state.bougthItems.forEach(item => {
        if (item.id === itemId) item.isReceived = true
      });
    },
    moveBoughtItemToReceivedItem(state, { item }) {
      state.bougthItems = state.bougthItems.filter(bItem => bItem.id !== item.id)
      state.receivedItems.push(item)
    },
    setShekelToDollarCurrency(state, { curr }) {
      state.ShekelToDollarCurrency = curr
    },
  },
  actions: {
    initAppData({ commit }) {
      commit({ type: 'setBoughItems', bougthItems: bougthItems })
    },
    async getCurrency({ commit }) {
      try {
        const currData = await axios.get(`https://api.exchangeratesapi.io/latest?base=USD&symbols=ILS`)
        const curr = currData.data.rates.ILS
        commit({ type: 'setShekelToDollarCurrency', curr })
        return curr
      } catch (error) {
        this._vm.$swal({
          type: "error",
          title: "Unable to get currecny"
        });
      }
    },
    getBoughtItems({ state }) {
      return state.bougthItems
    },
    onReceivedItem({ commit }, { item }) {
      commit({ type: 'updateBoughtItemStatus', itemId: item.id })
      commit({ type: 'moveBoughtItemToReceivedItem', item })
    },
    getReceivedItems({ state }) {
      return state.receivedItems
    },
    getStores({ commit }) {
      commit({ type: 'setStores', stores: stores })
      return stores
    }
  },
  getters: {
    stores(state) {
      state.stores.forEach(store => {
        store.orderdItems = 0
        state.receivedItems.forEach(item => {
          if (item.storeName === store.storeName)
            store.orderdItems++
        })
        state.bougthItems.forEach(item => {
          if (item.storeName === store.storeName)
            store.orderdItems++
        })
      })
      return state.stores
    }
  },
  modules: {
  }
})
