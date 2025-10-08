<template>
  <button 
    :class="['text-white px-4 py-2 rounded-lg hover:opacity-80 transition-colors cursor-pointer', tailwind]"
    @click="clicar">
    <slot></slot>
  </button>
</template>

<script>
export default {
  props: ['tailwind']
}
</script>