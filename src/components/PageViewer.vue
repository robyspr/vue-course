<template>
    <div  class="container">
        <!-- <h1 class="emphasize"> {{page.pageTitle}} </h1> -->
        <h1 class="emphasize"> Page Title </h1>
        <!-- <p> {{page.content}} </p> -->
        <p> Content</p>
    </div>
</template>

<script>
export default {
    props: ['page']
}
</script>

<style scoped>
.emphasize {
    color: blue;
}
</style>