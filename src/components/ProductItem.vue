<template>
    <li>
      {{ product.title }} - {{ product.price | currency }}
      <br>
      <button
        :disabled="errorMsg && errorMsg.error !== ''"
        @click="() => {
            addProductToCart(product.id);
            errorMsg = getError(product.id);
        }">
        Add to cart
      </button><br/>
      <span v-if="errorMsg && errorMsg.error !== ''">{{ errorMsg.error }}</span>
    </li>
</template>

<script>
import Vue from 'vue'
import { mapGetters, mapActions } from 'vuex'

export default Vue.extend({
    name: 'ProductItem',
    data() {
        return {
            errorMsg: null,
        }
    },
    computed: mapGetters('products', [
        'getError'
    ]),
    methods: {
      ...mapActions('cart', [
          'addProductToCart'
      ]),
    },
    props: {
        'product': {
            required: true,
        }
    },
    watch: {
        'product': {
            immediate: true,
            deep: true,
            handler: function() {
                this.errorMsg = this.getError(this.product.id);
            }
        }
    }
})
</script>

<style lang="scss" scoped>

</style>