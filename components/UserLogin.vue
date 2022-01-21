<template>
  <div>
    {{formInfo}}
<!--    <button @click='changeTitle()'>Change Title</button>-->
    <form  >

      <!-- <text-field type="text" placeholder="Username" v-model="username"/> -->
      <input class="m-5 sm:w-1 md:w-1/2 text-black  border-gray-400  hover:bg-gray-200 border-black-200 rounded py-3 px-4 mb-5" type="text" placeholder="Username" v-model="username"/>
      <span class="usernameError"></span><br>
      <input class="m-5 sm:w-1 md:w-1/2 text-black  border-gray-400  hover:bg-gray-200 border-black-200 rounded py-3 px-4 mb-5" type="password" placeholder="Password" v-model="password"/>
      <br>


      <button @click.prevent="login" class=" mr-20 bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
        LOGIN
      </button>

      <button  class="mb-10  ml-30 bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
        <router-link :to="{name:'register'}">Register</router-link>
      </button>

    </form>

  </div>
</template>

<script>
import axios from "axios";
import { mapMutations } from "vuex";
export default {
  //import map mutation

  props:{
    formInfo:String
  },

  data() {
    return {
      username:"",
      password:"",
    };
  },
  methods: {
    ...mapMutations(["setUser", "setToken"]),

    changeTitle() {
      this.$emit('changeTitle')
    },
    login() {

      if(this.username==""){
        alert('Username Field is Required');
        return;
      }else if(this.password==""){
        alert("password is required");
        return
      }
      else{
        const data = {
          username: this.username,
          password: this.password,
        }
        axios.post('http://localhost:3000/api/v1/login',data)
            .then(function(response) {
              this.setUser(response.user);
              this.setToken(response.token);
              // localStorage.setItem('token', JSON.parse(response.data.token))
            })
            .catch(function(error) {
              console.log(error)
            })

        //Show Loader
        this.loading = true;

        //Waste 5 seconds
        setTimeout(() => {
          this.loading = false;
        }, 2000)

        this.$router.push('/user/books')
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