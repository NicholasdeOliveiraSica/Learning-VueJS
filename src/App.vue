<template id="app">

  <ToDoList v-if="page === 'page-1'" />
  <TestingCodes v-if="page === 'page-2'" />

</template>



<script>
import ToDoList from './containers/ToDoList.vue'
import TestingCodes from './containers/TestingCodes.vue'

export default {
  name: 'App',
  data() {
    return {
      page: 'page-1' /** 'page-1', 'page-2', 'page-3' */
    }
  },
  components: {
    ToDoList, TestingCodes
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