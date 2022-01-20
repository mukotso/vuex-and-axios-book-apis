import Vue from "vue";
require('./assets/scss/index.scss')
require('./assets/css/index.css')
require ('./src/assets/tailwind.css')
import './components'
import router from "./router/index";




new Vue({
    el: '#app',
    router
})