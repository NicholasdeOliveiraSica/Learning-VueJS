<template>

  <div :class="containerStyles">

    <img :src="imgURL"
         :alt="name + ' avatar'"
          class="w-35 rounded-2xl"
    />


    <div :class="textStyles">

      <h1>{{ name }}</h1>
      <p>{{ age }} anos</p>
      <p>{{ email }}</p>
      <p v-if="isOld">This bro is old</p>

    </div>


  </div>

</template>

<script>

export default {
  data() {
    return {
      isOld: this.age > 28,
      containerStyles: "w-110 bg-[#fdfdfd] rounded-2xl shadow-lg m-2 flex gap-5 border border-neutral-200",
      textStyles: "text-left h-full flex flex-col justify-center p-6 font-bold",
      imgURL: 'https://testingbot.com/free-online-tools/random-avatar/200?u=' + this.age + this.name + this.email
    }
  },
  name: 'UserCard',
  props: ['name', 'age', 'email']
}

</script>