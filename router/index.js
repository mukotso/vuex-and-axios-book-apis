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

const router =  new Router({
    routes: [
        {
            path: '/',
            name: 'index',
            component: index,
        },
        {
            path: '/login',
            name: 'login',
            component: UserLogin,
            meta: {
                guest:true
            }
        },{
            path: '/register',
            name: 'register',
            component:UserRegistration,
            meta: {
                guest:true
            }
        },
        {
            path: 'book/:id/show',
            name: 'book-details',
            component:BookDetails, meta: {
                requiresAuth:true
            }
        },
        {
            path:'/user',
            component:Tasks,
                children:[
                    {
                        path: 'books',
                        name: 'books',
                        component:Books,
                        meta: {
                            requiresAuth:true
                        }
                    },
                    {
                        path: 'add/book',
                        name: 'addBook',
                        component:AddBook,
                        meta: {
                            requiresAuth:true
                        }
                    },

                    ]
            }



    ],
    mode: 'history'
});

// Meta Handling
router.beforeEach((to, from, next) => {
    const token = localStorage.getItem('jwToken');
    if (to.matched.some(record => record.meta.requiresAuth)) {
        if (!token){
            next({ name: 'login' });
        }
        else {
            next();
        }
    }
    else if (to.matched.some(record => record.meta.guest)) {
        if (localStorage.getItem('jwToken') == null) {
            next()
        } else {
            next({ name: 'books' })
        }
    } else {
        next()
    }
});

export default router;