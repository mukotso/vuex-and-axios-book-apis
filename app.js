import Vue from "vue";
require('./assets/scss/index.scss')
require('./assets/css/index.css')
import './components'
import router from "./router/index";




new Vue({
    el: '#app',
    router
})