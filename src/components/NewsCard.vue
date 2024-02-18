<template>
    <a rel="prefetch"
        :href="`/aktualita/${file.file.substring(file.file.lastIndexOf('/') + 1, file.file.length - '.md'.length)}/`"
        :title="`Odkaz na aktualitu - ${file.frontmatter.title}`" class="news-card">
        <div class="news-card__date_box">
            <b>{{ day }}</b>
            <b>{{ month }}, {{ year }}</b>
        </div>
        <div class="news-card__content" :class="{ 'rem-60': isAllList, 'rem-12-5': !isAllList }">
            <h3>{{ file.frontmatter.title }}</h3>
            <p :class="{ 'one-line': isAllList, 'two-line': !isAllList }">{{ fileContent }}</p>
        </div>
    </a>
</template>
<script lang="ts">
import {ZonedDateTime} from "@js-joda/core";

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
        },
        isAllList: {
            type: Boolean,
            default: false
        }
    },
    created() {
        let date = ZonedDateTime.parse(this.file.frontmatter.creation_date);
        this.day = this.padStr(date.dayOfMonth());
        this.month = this.padStr(date.monthValue());
        this.year = date.year();
    },
    methods: {
      padStr(d: number) {
        if (d < 10) {
          return `0${d}`;
        }
        return d;
      },
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
    max-height: 4.6875rem;
}

.rem-60 {
    max-width: 80%;
}

.rem-12-5 {
    max-width: 12.5rem;
}

.news-card__content h3 {
    margin-bottom: 0.5rem;
}

.one-line {
    -webkit-line-clamp: 1;
}

.two-line {
    -webkit-line-clamp: 2;
}

.news-card__content p {
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
}

b {
    font-size: large;
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