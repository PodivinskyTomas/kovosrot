<template>
    <div>
        <div class="news-wrapper">
            <NewsCard v-for="file in files" :file="file" />
        </div>
        <a class="show_all" title="Zobrazit všechny aktuality" href="/aktuality/">Zobrazit vše</a>
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

.show_all {
    margin-top: 2.5rem;
    display: inline-block;
    border-radius: 12px;
    color: var(--n1);
    border: 1px solid var(--p1);
    background-color: var(--white);
    text-decoration: none;
    font-weight: bold;
    padding: 10px 28px;
    height: 1.5rem;
    line-height: 1.5rem;
    transition: 0.4s ease;
}

.show_all:hover {
    color: var(--white);
    background-color: var(--p1);
}
</style>