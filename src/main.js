import Vue from 'vue'
import App from './App.vue'
Vue.config.productionTip = false
import router from "./router/index"
import store from "./store/index.js"
import "swiper/swiper-bundle.css";
import toast from "common/index.js"

Vue.use(toast)

Vue.prototype.$bus = new Vue()

new Vue({
    router,
    store,

    render: h => h(App),
}).$mount('#app')