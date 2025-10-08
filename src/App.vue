
<template>

  <div class="bg-neutral-200 flex flex-col items-start p-5 rounded-2xl w-160 m-auto my-10">
    <input type="text" v-model="name" :class="'rounded-lg p-1 mb-4 ' + (bgGray ? 'bg-blue-200' : 'bg-white')" placeholder="Digite seu nome" @focus="changeBG()" @blur="changeBG()"/>
    <p v-show="name" >Olá {{ name }} seu contador está em {{ count }}</p>
    <div class="flex">
      <button @click="count++" class="font-mono cursor-pointer bg-white rounded-lg p-1 m-1">[ + ]</button>
      <button @click="count--" class="font-mono cursor-pointer bg-white rounded-lg p-1 m-1">[ - ]</button>
    </div>
  </div>

  <div class="bg-neutral-200 flex flex-col items-start p-5 rounded-2xl w-160 m-auto my-10">
    
    <select v-model="doces" @mouseover="console.log('Hello World')">
      <option value=""> Escolha uma opção </option>
      <option value="Bala de Goma"> Bala de Goma</option>
      <option value="Bala Fini"> Bala Fini</option>
      <option value="Chocolate"> Chocolate</option>
      <option value="Milkshake"> Milkshake</option>
    </select>

    <p v-if="doces">Você escolheu {{ doces }}</p>

  </div>
  

  <div class="bg-neutral-200 items-start p-5 rounded-2xl w-160 m-auto my-10">
    

    <label name="cpfNota">Deseja incluir CPF na nota?</label> <br>
    <input type="radio" v-model="cpfNota" value="Sim"/> Sim
    <input type="radio" v-model="cpfNota" value="Não"/> Não <br>

    <p>{{ cpfNota }}</p>
  </div>

  <div class="bg-neutral-200 flex flex-col items-start p-5 rounded-2xl w-160 m-auto my-10 text-start">
    
    <div>
      
      <label>Quais suas cores favoritas?</label> <br>
      <input type="checkbox" v-model="colors" value="Vermelho"/>Vermelho
      <input type="checkbox" v-model="colors" value="Azul"/>Azul
      <input type="checkbox" v-model="colors" value="Verde"/>Verde
      <input type="checkbox" v-model="colors" value="Amarelo"/>Amarelo

      <p>Cores favoritas: {{ colors.join(', ') }}</p>
    </div>
  </div>

  <div class="bg-neutral-200 flex flex-col items-start p-5 rounded-2xl w-160 m-auto my-10 text-start">
    
    <div class="flex gap-2">
      
      <button @click.once="toggleShow()">Olá</button>
      <p v-show="onClickShow">Mundo!</p>

    </div>

  </div>
</template>



<script>
//  import VueButton from './components/VueButton.vue';
//  import UserCard from './components/UserCard.vue';

export default {
  name: 'App',
  data() {
    return {
      bgGray: false,
      onClickShow: false,
      show: true,
      name: '',
      count: 0,
      doces: "",
      cpfNota: "Não",
      colors: []
    }
  },
  methods: {
    toggleShow() {
      this.onClickShow = !this.onClickShow;
    },
    changeBG() {
      this.bgGray = !this.bgGray;
    }
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
  margin-top: 60px;
}
</style>