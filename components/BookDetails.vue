<template>

  <div>
    <div class="w-auto py-4 px-8 bg-white shadow-lg rounded-lg my-20">
      <div class="flex justify-center md:justify-end -mt-16">
        </div>
      <div>
        <h2 class="text-gray-800 text-3xl font-semibold">schedule id= {{paramsId}}</h2>
        <p class="mt-2 text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae dolores deserunt ea doloremque natus error, rerum quas odio quaerat nam ex commodi hic, suscipit in a veritatis pariatur minus consequuntur!</p>
      </div>
      <div class="flex justify-end mt-4">
        <a href="#" class="text-xl font-medium text-indigo-500">Schedule Details</a>
      </div>
    </div>


  </div>

</template>

<script>
export default {
  name: "ScheduleDetails",
  data(){
    return{
      paramsId:this.$route.params.id,
    }
  }
}
</script>

<style scoped>

</style>