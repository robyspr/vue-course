<template>
    <p>{{ data.counter }}</p>
    <button
        @click.prevent="click"
    >click</button>
</template>

<!-- the setup attribute mean we are using the composition api -->
<script setup>
//importing hooks to make the varialbe reactive
import {ref, reactive} from 'vue';

// const counter = ref(0); //value->0
//reactive is used for Object, not premetive data
const data = reactive({counter: 0});

function click() {
    data.counter++;
}


// export default {
//     data(){
//         return {
//             counter: 0
//         }
//     },
//     methods: {
//         click() {
//             this.counter++;
//         }
//     }
// }
</script>
