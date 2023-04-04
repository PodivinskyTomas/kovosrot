<template>
    <a rel="prefetch"
        :href="'/aktualita/' + file.file.substring(file.file.lastIndexOf('/') + 1, file.file.length - '.md'.length)"
        class="news-card">
        <div class="news-card__date_box">
            <h3>{{ day }}</h3>
            <h3>{{ month }}, {{ year }}</h3>
        </div>
        <div class="news-card__content">
            <h3>{{ file.frontmatter.title }}</h3>
            <p>{{ fileContent }}</p>
        </div>
    </a>
</template>
<script lang="ts">
export default {
    name: "NewsCard",
    computed: {
        fileContent(): string {
            return this.file.rawContent.call(this);
        }
    },
    props: {
        file: {
            type: Object,
            required: true
        }
    },
    created() {
        let date: string = this.file.frontmatter.creation_date;
        date = date.substring(0, date.indexOf("T")).replaceAll("-", ".");
        const dateParts = date.split(".");
        this.day = dateParts[2];
        this.month = dateParts[1];
        this.year = dateParts[0];
    },
    data() {
        return {
            day: "",
            month: "",
            year: ""
        }
    }
}
</script>
<style scoped>
.news-card {
    background-color: var(--white);
    border-radius: 12px;
    padding: 1.5rem;
    display: flex;
    justify-content: center;
    box-sizing: border-box;
    word-wrap: break-word;
    transition: 0.4s ease;
    text-decoration: none;
    color: black;
}

.news-card:hover {
    box-shadow: 0px 0px 10px 0px grey;
}

.news-card__date_box {
    display: flex;
    flex-direction: column;
    justify-content: center;
    background-color: var(--p1);
    color: var(--white);
    padding: 0.5rem;
    border-radius: 12px;
    text-align: center;
    width: 4.6875rem;
    height: 4.6875rem;
}

.news-card__content {
    padding: 0.5rem 0 0.5rem 1.5rem;
    text-align: left;
    max-width: 12.5rem;
    max-height: 4.6875rem;
}

.news-card__content h3 {
    margin-bottom: 0.5rem;
}

.news-card__content p {
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
}

@media screen and (max-width: 400px) {
    .news-card {
        width: 100%;
    }

    .news-card__date_box {
        display: none;
    }

    .news-card__content {
        padding: 0;
        max-width: 100%;
        max-height: 100%;
        text-align: center;
    }
}
</style>