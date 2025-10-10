<template>
    <div>
        <button @click="changeNames">Click Me</button>
        <p>{{ name1 }}</p> <p>{{ name2 }}</p>
    </div>
</template>

<script>
    import { ref } from 'vue';

    export default {
        name: "CompositionAPI",
        setup() {
            const name1 = ref("John");
            const name2 = "Robert";

            const changeNames = () => {
                name1.value = "Jane";
                name2.value = "Alice";
            };

            return {
                name1,
                name2,
                changeNames
            }
        }
    }

</script>