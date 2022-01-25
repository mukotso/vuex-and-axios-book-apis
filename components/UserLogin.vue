<template>
  <div>
    {{formInfo}}
<!--    <button @click='changeTitle()'>Change Title</button>-->
    <h1>LOGIN FORM</h1>
    <form  >

      <!-- <text-field type="text" placeholder="Username" v-model="username"/> -->
      <input class="m-5 sm:w-1 md:w-1/2 text-black  border-gray-400  hover:bg-gray-200 border-black-200 rounded py-3 px-4 mb-5" type="text" id="username" placeholder="Username" v-model="username"/>
      <span class="usernameError"></span><br>
      <input class="m-5 sm:w-1 md:w-1/2 text-black  border-gray-400  hover:bg-gray-200 border-black-200 rounded py-3 px-4 mb-5" type="password" id="password" placeholder="Password" v-model="password"/>
      <br>


      <button @click.prevent="login"  id="loginBtn" class=" mr-20 bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
        LOGIN
      </button>

      <button  id="registerBtn" class="mb-10  ml-30 bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
        <router-link :to="{name:'register'}">Register</router-link>
      </button>

    </form>

  </div>
</template>

<script>
import axios from "axios";
export default {

  props:{
    formInfo:String
  },

  data() {
    return {
      username:"",
      password:"",
      isUsernameSet:false,
      isPasswordSet:false
    };
  },
  methods: {

    changeTitle() {
      this.$emit('changeTitle')
    },
    login() {

      if(this.username=="" || this.password==""){
      if(this.username==""){
        this.isUsernameSet=false;
        return;
      }else{
        this.isUsernameSet=true;
      }

      if(this.password==""){
        // alert("password is required");
        this.isPasswordSet=false;
        return
      }else{
        this.isPasswordSet=true;
      }
      }
      else{
        const data = {
          username: this.username,
          password: this.password,
        }
        this.isPasswordSet=true;
        this.isUsernameSet=true;
        axios.post('http://localhost:3000/api/v1/login',data)
            .then( (response) => {
              this.$store.dispatch('auth/login',response.data);
              this.$router.push('/user/books');
            })
            .catch(function(error) {

            })

        //Show Loader
        // this.loading = true;
        //
        // //Waste 5 seconds
        // setTimeout(() => {
        //   this.loading = false;
        // }, 2000)

      }
    }


  }
};


</script>

<style scoped>

input{
  border: 1px solid #ccc;
}

</style>