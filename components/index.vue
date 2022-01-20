<template>
  <div  class="flex flex-col min-h-screen">

<!--    <the-header>{{title}}</the-header>-->
    <div class="flex-grow">
      <div class="hero container max-w-screen-lg mx-auto pb-10 flex justify-center">
<!--        <img class="" alt="Vue logo" src="../assets/images/vueschool.jpeg">-->
      </div>

      <welcome msg="Welcome to My first Vue App"/>


      <h2>Waiting for Async Component........</h2>

      <async-component></async-component>

    </div>
    <the-footer/>


  </div>
</template>

<script>
import welcome from './welcome.vue'
import schedule from './shedules.vue'
import TheFooter from './shared/TheFooter.vue'
import TheHeader from './shared/TheHeader.vue'
export default{
  components: {
    welcome,
    schedule,
    TheFooter,
    TheHeader

  },
  data(){
    return {
      title:"VUE JS SAMPLE APPLICATION"
    };
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
h2{
  font-size:40px;
}
</style>