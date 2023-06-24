<template>
    <!-- the navbar can load the pages itself -->
    <navbar></navbar>

    <router-view></router-view>

    <!-- <page-viewer 
        v-if="pages.length > 0"
        :page="pages[activePage]"
    ></page-viewer>

    <create-page
        @page-created="pageCreated"
    ></create-page>         -->
</template>

<script>
import Navbar from './components/Navbar.vue';
import PageViewer from './components/PageViewer.vue';
import CreatePage from './components/CreatePage.vue';

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