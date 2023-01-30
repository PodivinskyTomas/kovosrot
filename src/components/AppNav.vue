<template>
    <nav ref="nav">
        <div style="width: 50%;">
            <h3>Výkup kovového opadu Litovel</h3>
        </div>
        <div>
            <a href="#contact" class="app-nav__link">Kontakt</a>
            <a href="#where-to-find-us" class="app-nav__link">Kde nás najít?</a>
            <a href="#opening-hours" class="app-nav__link">Provozní doba</a>
            <a href="#news" class="app-nav__link">Aktuality</a>
        </div>
    </nav>
</template>
<script lang="ts">
export default {
    name: "AppNav",
}
</script>
<style scoped>
nav {
    position: sticky;
    top: 0;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: var(--n8);
    padding-left: var(--content-padding);
    padding-right: var(--content-padding);
}

.app-nav__link {
    float: right;
    color: var(--n1);
    text-decoration: none;
    font-weight: bold;
    padding: 1rem;
    transition: 0.4s ease;
}

.app-nav__link:hover {
    background-color: var(--p1);
    color: var(--white);
}
</style>