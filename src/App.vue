
<template>

  <button @click="show = !show">{{ show ? 'Ocultar lista de usuários' : 'Mostrar lista de usuários' }}</button>

  <section v-show="show" class="flex flex-wrap justify-center">
    <UserCard v-for="user in userArray"
              :key="user.email"
              :name="user.name"
              :age="user.age"
              :email="user.email"
              class="font-serif" />
  </section>

</template>



<script>
// import VueButton from './components/VueButton.vue';
import UserCard from './components/UserCard.vue';

export default {
  data() {
    return {
      show: true,
      userArray: [
        { name: "John Doe", age: 30, email: "john.doe@example.com" },
        { name: "Jane Smith", age: 25, email: "jane.smith@example.com" },
        { name: "Alice Johnson", age: 28, email: "alice.johnson@example.com" },
        { name: "Robert Brown", age: 32, email: "robert.brown@example.com" },
        { name: "Emily Davis", age: 27, email: "emily.davis@example.com" },
        { name: "Michael Wilson", age: 35, email: "michael.wilson@example.com" },
        { name: "Sarah Miller", age: 24, email: "sarah.miller@example.com" },
        { name: "David Anderson", age: 29, email: "david.anderson@example.com" },
        { name: "Laura Thompson", age: 31, email: "laura.thompson@example.com" },
        { name: "Daniel Martinez", age: 26, email: "daniel.martinez@example.com" }
      ] 
    }
  },
  name: 'App',
  components: { UserCard }
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
