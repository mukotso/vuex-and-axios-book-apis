<template>
  <div class="navigation">
          <router-link to="/">Home</router-link>
          <router-link :to="{name:'login'}">Login</router-link>
          <router-link :to="{name:'register'}">Register</router-link>
         <router-link :to="{name:'books'}">Books</router-link>
        </div>

      </template>

      <script>
      export default {
        data() {
          return {
            username: "",
            password: "",
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