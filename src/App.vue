<template>
  <p v-if="show">Texto 1</p>
  <VueButton tailwind="bg-red-500" @click="show = !show">Clique para alterar o texto</VueButton>
  <p v-if="!show">Texto 2</p>
  <img alt="Vue logo" src="./assets/logo.png">
  <HelloWorld msg="Welcome to Your Vue.js App"/>
</template>



<script>
import VueButton from './components/VueButton.vue';
import HelloWorld from './components/HelloWorld.vue'

export default {
  data() {
    return {
      show: false
    }
  },
  name: 'App',
  components: {
    HelloWorld, 
    VueButton,
  }
}
</script>



<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
