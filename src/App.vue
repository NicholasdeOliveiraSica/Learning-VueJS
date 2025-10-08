
<template>

  <div class="bg-neutral-200 flex flex-col items-start p-5 rounded-2xl w-160 m-auto my-10">
    <input type="text" v-model="name" class="bg-white rounded-lg p-1 mb-4" placeholder="Digite seu nome"/>
    <p v-show="name" >Olá {{ name }} seu contador está em {{ count }}</p>
    <div class="flex">
      <button @click="count++" class="font-mono cursor-pointer bg-white rounded-lg p-1 m-1">[ + ]</button>
      <button @click="count--" class="font-mono cursor-pointer bg-white rounded-lg p-1 m-1">[ - ]</button>
    </div>
  </div>

  <div class="bg-neutral-200 flex flex-col items-start p-5 rounded-2xl w-160 m-auto my-10">
    
    <select v-model="doces">
      <option value=""> Escolha uma opção </option>
      <option value="Bala de Goma"> Bala de Goma</option>
      <option value="Bala Fini"> Bala Fini</option>
      <option value="Chocolate"> Chocolate</option>
      <option value="Milkshake"> Milkshake</option>
    </select>

    <p v-if="doces">Você escolheu {{ doces }}</p>

  </div>
  

  <div class="bg-neutral-200 items-start p-5 rounded-2xl w-160 m-auto my-10">
    

    <label for="cpfNota">Deseja incluir CPF na nota?</label> <br>
    <input type="radio" v-model="cpfNota" value="Sim"/> Sim
    <input type="radio" v-model="cpfNota" value="Não"/> Não <br>

    <p>{{ cpfNota }}</p>
  </div>

  <div class="bg-neutral-200 flex flex-col items-start p-5 rounded-2xl w-160 m-auto my-10 text-start">
    
    <div>
      
      <label>Quais suas cores favoritas?</label> <br>
      <input type="checkbox" v-model="colors" value="Vermelho">Vermelho</input>
      <input type="checkbox" v-model="colors" value="Azul">Azul</input>
      <input type="checkbox" v-model="colors" value="Verde">Verde</input>
      <input type="checkbox" v-model="colors" value="Amarelo">Amarelo</input>

      <p>Cores favoritas: {{ colors.join(', ') }}</p>
    </div>
  </div>
</template>



<script>
//  import VueButton from './components/VueButton.vue';
//  import UserCard from './components/UserCard.vue';

export default {
  data() {
    return {
      show: true,
//      userArray: [
//        { name: "John Doe", age: 30, email: "john.doe@example.com" },
//        { name: "Jane Smith", age: 25, email: "jane.smith@example.com" },
//        { name: "Alice Johnson", age: 28, email: "alice.johnson@example.com" },
//        { name: "Robert Brown", age: 32, email: "robert.brown@example.com" },
//        { name: "Emily Davis", age: 27, email: "emily.davis@example.com" },
//        { name: "Michael Wilson", age: 35, email: "michael.wilson@example.com" },
//       { name: "Sarah Miller", age: 24, email: "sarah.miller@example.com" },
//        { name: "David Anderson", age: 29, email: "david.anderson@example.com" },
//        { name: "Laura Thompson", age: 31, email: "laura.thompson@example.com" },
//        { name: "Daniel Martinez", age: 26, email: "daniel.martinez@example.com" }
//      ], 
      name: '',
      count: 0,
      doces: "",
      cpfNota: "Não",
      colors: []
    }
  },
  name: 'App',
  components: {  }
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
