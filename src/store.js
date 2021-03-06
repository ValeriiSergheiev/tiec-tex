import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    form: [{
      "name": "affiliate",
      "title": "Affiliate",
      "orderTypeDefault": "ASC",
      "priority": 0
    }, {
      "name": "balance",
      "title": "Balance",
      "orderTypeDefault": "DESC",
      "priority": 0
    }, {
      "name": "bonus_balance",
      "title": "Bonus balance",
      "orderTypeDefault": "DESC",
      "priority": 0
    }, {
      "name": "campaign",
      "title": "Campaign",
      "orderTypeDefault": "ASC",
      "priority": 0
    }, {
      "name": "cash_balance",
      "title": "Cash balance",
      "orderTypeDefault": "DESC",
      "priority": 0
    }, {
      "name": "country",
      "title": "Country",
      "orderTypeDefault": "ASC",
      "priority": 0
    }, {
      "name": "trader_points",
      "title": "Trader points",
      "orderTypeDefault": "DESC",
      "priority": 0
    }]
  },
  mutations: {

  },
  actions: {

  }
})
