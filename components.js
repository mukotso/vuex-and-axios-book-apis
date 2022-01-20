
import Vue from 'vue';

require('./components/shared/TheFooter');
require('./components/shedules');
require('./components/UserLogin');
require('./components/welcome');


//global components
Vue.component('mainComponent', require('./components/index').default)

Vue.component('TheHeader', require('./components/shared/TheHeader').default)

Vue.component("async-component", (resolve, reject) => {
    setTimeout(() => {
        resolve({
            template: "<div class=\"max-w-md py-4 px-8 bg-white shadow-lg rounded-lg my-20\">\n" +
                "    <div class=\"flex justify-center md:justify-end -mt-16\">\n" +
                "       </div>\n" +
                "    <div>\n" +
                "      <h2 class=\"text-gray-800 text-3xl font-semibold\">WHY VIEW ARTICLE</h2>\n" +
                "      <p class=\"mt-2 text-gray-600\">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae dolores deserunt ea doloremque natus error, rerum quas odio quaerat nam ex commodi hic, suscipit in a veritatis pariatur minus consequuntur!</p>\n" +
                "    </div>\n" +
                "    <div class=\"flex justify-end mt-4\">\n" +
                "      <a href=\"#\" class=\"text-xl font-medium text-indigo-500\">Kelvin</a>\n" +
                "    </div>\n" +
                "  </div>"
        });
    }, 2000);
});
