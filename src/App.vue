<template>
  <div id="app">
    <!-- <h1>Shopping Cart Example</h1>
    <hr>
    <h2>Products</h2>
    <ProductList/>
    <hr>
    <ShoppingCart/> -->
    <todo-list/>
  </div>
</template>

<script>
import Vue from 'vue'
import Vuex from 'vuex'
// import ProductList from './components/ProductList.vue'
// import ShoppingCart from './components/ShoppingCart.vue'
import store from './store'
import { currency } from './currency'
import TodoList from './components/todo/TodoList.vue'
import { BootstrapVue } from 'bootstrap-vue'

Vue.use(Vuex)
Vue.filter('currency', currency);
Vue.use(BootstrapVue);

export default {
  name: 'App',
  store,
  components: {
    // ProductList,
    // ShoppingCart,
    TodoList,
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
