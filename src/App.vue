<template id="app">

  <ToDoList v-if="page === 'page-1'" />
  <ShipmentCalc v-if="page === 'page-2'" />
  <LifeCycle v-if="page === 'page-3'" />

</template>



<script>
import ToDoList from './containers/ToDoList.vue'
import ShipmentCalc from './containers/ShipmentCalc.vue'
import LifeCycle from './containers/LifeCycle.vue';

export default {
  name: 'App',
  data() {
    return {
      page: 'page-3' /** 'page-1', 'page-2', 'page-3' */
    }
  },
  components: {
    ToDoList, ShipmentCalc, LifeCycle
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