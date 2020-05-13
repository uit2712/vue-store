/**
 * Mocking client-server processing
 */
import Api from './index';

export default {
    getAllProducts() {
        return Api().get('/products');
    },
    
    getProductById(id) {
        return Api().get(`/products/${id}`);
    },

    buyProducts(products, cb, errorCb) {
        setTimeout(() => {
            // simulate random checkout failure.
            (Math.random() > 0.5 || navigator.webdriver)
                ? cb()
                : errorCb()
        }, 100)
    }
}