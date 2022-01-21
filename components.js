
import Vue from 'vue';

require('./components/shared/TheFooter');
require('./components/Books');
require('./components/UserLogin');


//global components
Vue.component('mainComponent', require('./components/index').default)

Vue.component('TheHeader', require('./components/shared/OuterHeader').default)
Vue.component('TheFooter', require('./components/shared/TheFooter').default)

