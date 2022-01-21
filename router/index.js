//import vue and router
import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

//import you components
import UserLogin from "../components/UserLogin";
import Books from "../components/Books";
import index from "../components/index";
import UserRegistration from "../components/UserRegistration";
import Tasks from "../components/Tasks";
import AddBook from "../components/AddBook";
import BookDetails from "../components/BookDetails";
export default new Router({
    routes: [
        {
            path: '/',
            name: 'index',
            component: index
        },
        {
            path: '/login',
            name: 'login',
            component: UserLogin
        },{
            path: '/register',
            name: 'register',
            component:UserRegistration
        },
        {
            path: 'book/:id/show',
            name: 'book-details',
            component:BookDetails
        },
        {
            path:'/user',
            component:Tasks,
                children:[
                    {
                        path: 'books',
                        name: 'books',
                        component:Books
                    },
                    {
                        path: 'add/book',
                        name: 'addBook',
                        component:AddBook
                    },

                    ]
            }



    ],
    mode: 'history'
})

