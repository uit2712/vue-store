<template>
  <ul>
    <ProductItem
      v-for="product in products"
      :product="product"
      :key="product.id"
    />
  </ul>
</template>

<script>
import { mapState } from 'vuex'
import Vue from 'vue'
import ProductItem from './ProductItem';

export default Vue.extend({
    name: 'ProductList',
    components: {
      ProductItem,
    },
    computed: mapState({
        products: state => state.products.all,
    }),
    created () {
        this.$store.dispatch('products/getAllProducts')
    }
})
</script>