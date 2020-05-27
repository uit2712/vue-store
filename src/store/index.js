import Vue from 'vue'
import Vuex from 'vuex'
import cart from './modules/cart'
import products from './modules/products'
import todo from './modules/todo';

Vue.use(Vuex)

const store = new Vuex.Store({
    modules: {
        cart,
        products,
        todo,
    },
})

export default store;