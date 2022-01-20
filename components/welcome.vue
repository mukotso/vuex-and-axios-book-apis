<template>
  <div>
    <div class="welcome main-content">
      <h2 class="font-bold text-sky-400/100">{{ msg }}</h2>
      <!-- <h2 v=once>{{title}}</h2> -->
<!--      <user-login :formInfo="formInfo"-->
<!--                  @changeTitle="formInfo= 'TITLE CHANGED'"-->
<!--      />-->
    </div>



  </div>
</template>

<script>
import UserLogin from './UserLogin.vue'
export default {
  name: 'welcome',

  data() {
    return {
      formInfo:"LOGIN BELOW",
      msg:"WELCOME TO MY FIRST VUE APP AND LETS GET STARTED",
    };
  },
  components:{
    UserLogin
  }
};


</script>

<style>

</style>