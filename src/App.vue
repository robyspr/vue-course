<template>
    <!-- the navbar can load the pages itself -->
    <navbar></navbar>
    <router-view></router-view>
</template>

<script>
import Navbar from './components/Navbar.vue';
import PageViewer from './views/PageViewer.vue';
import CreatePage from './views/CreatePage.vue';

export default {
    // telling that aour app is going to use some components
    components: {
        Navbar,
        PageViewer,
        CreatePage
    },
    methods: {
        pageCreated(pageObj) {
            console.log(pageObj);
            this.pages.push(pageObj);
        }
    }
}
</script>