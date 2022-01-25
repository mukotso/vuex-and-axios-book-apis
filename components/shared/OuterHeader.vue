<template>
  <div class="navigation">
    <div v-if="!authState.loggedIn">
          <router-link to="/">Home</router-link>
          <router-link :to="{name:'login'}">Login</router-link>
          <router-link :to="{name:'register'}">Register</router-link>
    </div>
    <div v-if="authState.loggedIn">
      <router-link :to="{name:'books'}">Books</router-link>
      <button @click="logOutUser">Logout</button>
      <h3 class="ml-auto">User:{{user.name}}</h3>
    </div>
        </div>

      </template>

      <script>
      import {mapGetters} from "vuex";
      export default {
        data() {
          return {
            username: "",
            password: "",
          };
        },
        computed: {
          ...mapGetters('auth', {
            authState: 'authState',
            user: 'user'
          })
        },
        methods:{
          logOutUser(){
            this.$router.push('/');
            this.$store.dispatch('auth/logout');
          }
        }
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