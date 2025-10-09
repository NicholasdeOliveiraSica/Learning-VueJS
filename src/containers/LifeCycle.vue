<template>
    <div></div>
</template>

<script>
    export default {
        name: 'LifeCycle',
        data() {
            return {
                message: 'Hello, Vue.js!'
            }
        },
        created() {
            console.log('Component created. Message is: ' + this.message);
        },
        mounted() {
            console.log('Component mounted to the DOM.');
        },
        updated() {
            console.log('Component updated. Message is now: ' + this.message);
        },
        beforeUnmount() {
            console.log('Component is about to be unmounted.');
        }
    }
</script>