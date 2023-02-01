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
    flex-wrap: wrap;
    margin: auto;
    justify-content: space-evenly;
}
.news-wrapper > .news-card {
    margin-left: 0.5rem;
    margin-right: 0.5rem;
    margin-bottom: 1rem;
}
</style>