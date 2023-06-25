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
                        v-model="page.pageTitle"
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
                        v-model="page.content"
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
                        v-model="page.link.text"
                        />
                </div>
                <div class="row mb-3">
                    <div class="form-check">
                        <input
                            type="checkbox"
                            class="form-check-input"
                            v-model="page.published">
                        <label for="gridCheck1" class="form-check-label">
                            Published
                        </label>
                    </div>
                </div>
            </div>
        </div>
    </form>
</template>

<script>

export default {
    props: ['page']
};
</script>