<template>
    <div class="mb-3">
        <formEdit
            :page="page"
        ></formEdit>
        <button 
            class="btn btn-primary me-2"
            :disabled="isFormInvalid"
            @click.prevent="submitForm">
            Create Page
        </button>
        <button 
            class="btn btn-secondary"
            @click.prevent="goToPagesList"
        >Cancel</button>
    </div>
</template>

<script setup>
import { computed, defineComponent, inject, reactive, watch } from 'vue';
import { useRouter } from 'vue-router';
import FormEdit from '../components/FormEdit.vue';

const pages = inject('$pages');
const bus = inject('$bus');
const router = useRouter(); 
const formEdit = defineComponent('formedit', FormEdit);


let page = reactive({
    pageTitle: '',
    content: '',
    link: {
            text: ''
        },
    published: false
});

function submitForm() {
    if(!page.pageTitle || !page.content || !page.linkText) {
        alert("Please fill the form");
        return;
    }

    let newPage = {
        pageTitle: page.pageTitle,
        content: page.content,
        link: {
            text: page.link.text
        },
        published: page.published
    };
    pages.addPage(newPage);

    bus.$emit('page-created',newPage);
    router.push({path: '/pages'});
}

function goToPagesList() {
    router.push({path:'/pages'})
}

const isFormInvalid = computed(() => (  !page.pageTitle || !page.content || !page.link.text));

</script>