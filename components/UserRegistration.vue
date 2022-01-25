<template>
  <div>
    {{formInfo}}
<h1>USER REGISTRATION FORM</h1>
    <form >

      <!-- <text-field type="text" placeholder="Username" v-model="username"/> -->
      <input class="m-5 sm:w-1 md:w-1/2 text-black  border-gray-400  hover:bg-gray-200 border-black-200 rounded py-3 px-4 mb-5" type="text" id="name" placeholder="Full names" v-model="name"/>
      <span class="usernameError"></span><br>
      <input class="m-5 sm:w-1 md:w-1/2 text-black  border-gray-400  hover:bg-gray-200 border-black-200 rounded py-3 px-4 mb-5" type="password" id="password" placeholder="Password" v-model="password"/>
      <br>

      <input class="m-5 sm:w-1 md:w-1/2 text-black  border-gray-400  hover:bg-gray-200 border-black-200 rounded py-3 px-4 mb-5" type="username" id="username" placeholder="Username" v-model="username"/>
      <br>
      <input class="m-5 sm:w-1 md:w-1/2 text-black  border-gray-400  hover:bg-gray-200 border-black-200 rounded py-3 px-4 mb-5" type="text" id="address" placeholder="address" v-model="address"/>
      <br>
      <input class="m-5 sm:w-1 md:w-1/2 text-black  border-gray-400  hover:bg-gray-200 border-black-200 rounded py-3 px-4 mb-5" type="number"id="id_number" placeholder="id Number" v-model="id_number"/>
      <br>
      <button id="btnLogin" class=" mr-20 bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
        <router-link :to="{name:'login'}">Login</router-link>
      </button>
      <button id="registerBtn" @click.prevent="register" class="mb-10  ml-30 bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
        Register
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
      name:"",
      password:"",
      username:"",
      address:"",
      id_number:""
    };
  },
  methods: {
    changeTitle() {
      this.$emit('changeTitle')
    },

    register() {

      if(this.name==""){
        alert('Name Field is Required');
        return;
      }else if(this.password==""){
        alert("password is required");
        return
      }else if(this.username==""){
        alert("email is required");
        return
      }else if(this.address==""){
        alert("Address is required");
        return
      }else if(this.id_number==""){
        alert("Id Number is required");
        return
      }
      else{
        {
          const data = {
            name: this.name,
            password: this.password,
            username: this.username,
            address: this.address,
            id_number: this.id_number,
          }
          console.log(data);
          axios.post('http://localhost:3000/api/v1/register',data)
              .then(function(response) {
                console.log(response.data)
              })
              .catch(function(error) {
                console.log(error)
              })

          this.$router.push('/login')
        }
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