//import vue and router
import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

//import you components
import UserLogin from "../components/UserLogin";
import Schedule from "../components/shedules";
import index from "../components/index";
import UserRegistration from "../components/UserRegistration";
import ScheduleDetails from "../components/ScheduleDetails";
import Tasks from "../components/Tasks";
import AddSchedule from "../components/AddSchedule";
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
            path: 'schedule/:id/show',
            name: 'schedule-details',
            component:ScheduleDetails
        },
        {
            path:'/user',
            component:Tasks,
                children:[
                    {
                        path: 'schedules',
                        name: 'schedules',
                        component:Schedule
                    },
                    {
                        path: 'add/schedules',
                        name: 'addSchedule',
                        component:AddSchedule
                    },

                    ]
            }



    ],
    mode: 'history'
})

