import { createRouter, createWebHashHistory } from "vue-router";
import CreatePage from "./components/CreatePage.vue";
import PageViewer from "./components/PageViewer.vue";

const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        {path: '/', component: PageViewer},
        {path: '/create', component: CreatePage}
    ]

});

export default router;