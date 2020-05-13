import shop from '../../api/shop'

// initial state
const state = () => ({
    all: [],
    errorMessages: [],
})

// getters
const getters = {
    getError: (state) => (id) => {
        return state.errorMessages.find(e => e.productId === id);
    }
}

// actions
const actions = {
    getAllProducts({ commit }) {
        shop.getAllProducts()
        .then(result => {
            commit('setProducts', result.data)
        })
    }
}

// mutations
const mutations = {
    setProducts(state, products) {
        state.all = products
    },

    decrementProductInventory(state, { id }) {
        const product = state.all.find(product => product.id === id)
        product.inventory--
    },

    setErrorMessage(state, { error, productId }) {
        let errorMsg = state.errorMessages.find(e => e.productId === productId);
        if (!errorMsg) {
            state.errorMessages.push({ error, productId });
        } else {
            errorMsg.error = error;
        }
    }
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}