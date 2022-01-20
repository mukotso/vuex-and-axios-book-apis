<template>
  <div class="navigation">

<!--    <ul >-->
<!--      <li class=" mr-2">-->
<!--        <a class="block text-white-800 bg- py-2 px-4" href="#">-->
<!--          <slot></slot>-->
<!--        </a>-->
<!--      </li>-->
<!--    </ul>-->
    <a class="block text-white-800 bg- py-2 px-4" href="#">
             {{title}}
            </a>

          <router-link to="/">Home</router-link>
          <router-link :to="{name:'login'}">Login</router-link>
          <router-link :to="{name:'schedules'}">Schedules</router-link>

        </div>

      </template>

      <script>
      export default {
        data() {
          return {
            username: "",
            password: "",
            notLoggedIn: true,
            registerMessage: "Please sign up to register your details",
            isUserRegisteredDisabled: false,
            title:"VUE SAMPLE APP"
          };
        },
      }
      </script>


      <style scoped>

      .navigation{
        background: linear-gradient(0deg, rgba(34,195,34,1) 0%, rgba(199,253,45,1) 100%);
        color:white;
        font-size:18px;
        width:100%  !important;
        padding: 40px;
        font-size:30px;
      }


      </style>