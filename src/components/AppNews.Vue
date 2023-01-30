<template>
    <div class="news-wrapper">
        <template v-for="file in files">
            <NewsCard
                :file="file"
            />
        </template>
    </div>
</template>
<script lang="ts">
import NewsCard from "./NewsCard.vue";

export default {
    name: "AppNews",
    components: {
        NewsCard
    },
    props: {
        files: {
            type: Array,
            required: true
        }
    }
}
</script>
<style scoped>
.news-wrapper {
    display: flex;
    margin: auto;
    justify-content: space-evenly;
}
</style>