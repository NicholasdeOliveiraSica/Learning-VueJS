
<template>

  <section class="flex flex-wrap justify-center gap-10">
    <div class="w-100 bg-neutral-400 p-5 text-start rounded-xl text-white shadow-lg my-7 min-h-[325px]">
      <h1 class="text-2xl font-bold">Completed Tasks</h1>
      <div class="h-[3px] bg-green-600 w-full shadow" aria-hidden="true"></div>
      <ul>
        <li v-for="task in okTasks" :key="task.id" class="myTask"><strong>{{ task.id }}</strong> - {{ task.title }}</li>
      </ul>
      <!-- [...] -->
    </div>

    
    <div class="w-100 bg-neutral-400 p-5 text-start rounded-xl text-white shadow-lg my-7 min-h-[325px]">
      <h1 class="text-2xl font-bold">Uncompleted Tasks</h1>
      <div class="h-[3px] bg-red-500 w-full shadow" aria-hidden="true"></div>
      <ul>
        <li v-for="task in notOkTasks" :key="task.id" class="myTask"><strong>{{ task.id }}</strong> - {{ task.title }}</li>
      </ul>
      <!-- [...] -->
    </div>
  </section>

  <div class="w-100 bg-neutral-200 p-5 text-start rounded-xl shadow-lg m-auto my-7">
    <h1 class="text-2xl font-bold">To Do List</h1>
    <ul>
      <li v-for="task in toDoList" :key="task.id">
        <input v-model="task.complete" type="checkbox" /> {{ task.title }}
      </li>
      <!-- [...] -->
    </ul>
  </div>

</template>



<script>

export default {

  name: 'App',

  data() {
    return {
      toDoList: [
        {
          "id": 1,
          "title": "Buy groceries",
          "complete": false
        },
        {
          "id": 2,
          "title": "Schedule a dentist appointment",
          "complete": true
        },
        {
          "id": 3,
          "title": "Finish the project report",
          "complete": false
        },
        {
          "id": 4,
          "title": "Go for a run",
          "complete": true
        },
        {
          "id": 5,
          "title": "Call the mechanic",
          "complete": false
        },
        {
          "id": 6,
          "title": "Read one chapter of a book",
          "complete": false
        },
        {
          "id": 7,
          "title": "Plan weekend getaway",
          "complete": false
        },
        {
          "id": 8,
          "title": "Water the plants",
          "complete": true
        },
        {
          "id": 9,
          "title": "Organize the office desk",
          "complete": false
        },
        {
          "id": 10,
          "title": "Pay the electricity bill",
          "complete": true
        }

                   ]
    }
  },

  computed: {
    okTasks() { /** CRIA UM ARRAY[] DE TAREFAS COMPLETAS A PARTIR DO ARRAY toDoList[] */
      return this.toDoList.filter(task => task.complete);
    },
    notOkTasks() { /** CRIA UM ARRAY[] DE TAREFAS INCOMPLETAS A PARTIR DO ARRAY toDoList[] */
      return this.toDoList.filter(task => !task.complete)
    }
  },

  methods: {

  }
}

</script>


<style>

.task {
  transition: all 0.3s ease;
}


</style>
