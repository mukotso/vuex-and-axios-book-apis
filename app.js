import Vue from "vue";
require('./assets/scss/index.scss')
require('./assets/css/index.css')
import store from './store/index'
import './components'
import router from "./router/index";

import loader from "vue-ui-preloader";

Vue.use(loader);


new Vue({
    el: '#app',
    router,
    store,
    components:{
        loader:loader
    }
})