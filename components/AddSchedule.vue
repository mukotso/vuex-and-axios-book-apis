<template>
  <form >

    <!-- <text-field type="text" placeholder="Username" v-model="username"/> -->
    <input class="m-5 sm:w-1 md:w-1/2 text-black  border-gray-400  hover:bg-gray-200 border-black-200 rounded py-3 px-4 mb-5" type="date" placeholder="day" v-model="day"/>

    <input class="m-5 sm:w-1 md:w-1/2 text-black  border-gray-400  hover:bg-gray-200 border-black-200 rounded py-3 px-4 mb-5" type="text" placeholder="task name" v-model="task"/>
    <br>

    <input class="m-5 sm:w-1 md:w-1/2 text-black  border-gray-400  hover:bg-gray-200 border-black-200 rounded py-3 px-4 mb-5" type="text" placeholder="Number of Task" v-model="number_of_task"/>
    <br>
    <br>
    <button  class=" mr-20 bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
      <router-link :to="{name:'schedules'}">ADD</router-link>
    </button>




  </form>
</template>

<script>
export default {
data() {
return {
day:"",
task:"",
number_of_task:0,
};
},

};


</script>

<style scoped>

input{
  border: 1px solid #ccc;
}

</style>