<template>
    <h4>Edir {{ page.pageTitle }}</h4>
    <formEdit
        :page="page"
    ></formEdit>
    <div class="mb-3">
        <button 
            class="btn btn-primary me-2"
            @click.prevent="submit">
            Edit</button>
        <button 
            class="btn btn-secondary me-2"
            @click.prevent="goToPagesList"
            >Cancel</button>
        <button 
            class="btn btn-danger"
            @click.prevent="deletePage"
            >Delete</button>
    </div>
</template>

<script setup>
import FormEdit from "../components/FormEdit.vue";
import { defineComponent, inject } from "vue";
import { useRouter } from "vue-router";

// essentially the $route in Options API
const router = useRouter();
const pages = inject('$pages');
const bus = inject('$bus');

const {index} = defineProps(['index']);

const formEdit = defineComponent('formedit',FormEdit);

let page = pages.getSinglePage(index);

function submit() {
    pages.editPage(index,page);

    bus.$emit('page-updated', {
        index,
        page
    });

    goToPagesList();
}

function goToPagesList() {
    router.push({path:'/pages'})
}

function deletePage() {
    pages.removePage(index);
    bus.$emit('page-deleted', {index});
    goToPagesList();
}

</script>