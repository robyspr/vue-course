<template>
    <form action="" class="container mb-3">
        <div class="row">
            <div class="col-md-8">
                <div class="mb-3">
                    <label for="" class="form-label">
                        Page Title
                    </label>
                    <input 
                        type="text"
                        class="form-control"
                        v-model="pageTitle"
                    />
                </div>
                <div class="mb-3">
                    <label for="" class="form-label">
                        Content
                    </label>
                    <textarea 
                        type="text"
                        rows="5"
                        class="form-control"
                        v-model="content"
                    ></textarea>
                </div>
            </div>
            <div class="col">
                <div class="mb-3">
                    <label for="" class="form-label">
                        Link Text
                    </label>
                    <input
                        type="text" 
                        class="form-control"
                        v-model="linkText"
                        />
                </div>
                <div class="row mb-3">
                    <div class="form-check">
                        <input
                            type="checkbox"
                            class="form-check-input"
                            v-model="published">
                        <label for="gridCheck1" class="form-check-label">
                            Published
                        </label>
                    </div>
                </div>
            </div>
            <div class="mb-3">
                <button 
                    class="btn btn-primary"
                    :disabled="isFormInvalid"
                    @click.prevent="submitForm">
                    Create Page
                </button>
            </div>
        </div>
    </form>
</template>

<script setup>
import { computed, inject, reactive, ref, watch } from 'vue';
import { useRouter } from 'vue-router';

const pages = inject('$pages');
const bus = inject('$bus');
const router = useRouter(); 

let pageTitle = ref('');
let content = ref('');
let linkText = ref('');
let linkUrl = ref('');
let published = ref(false);

function submitForm() {
    if(!pageTitle || !content || !linkText) {
        alert("Please fill the form");
        return;
    }

    let newPage = {
        pageTitle: pageTitle.value,
        content: content.value,
        link: {
            text: linkText.value
        },
        published: published.value
    };
    pages.addPage(newPage);

    bus.$emit('page-created',newPage);
    router.push({path: '/pages'});
}

const isFormInvalid = computed(() => (  !pageTitle || !content || !linkText));

watch(pageTitle, (newTitle, oldTitle) => {
    if(linkText.value == oldTitle) {
        linkText.value = newTitle
    }
});

</script>