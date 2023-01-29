<template>
    <header>
        <div class="header-wrapper__text-wrapper">
            <h1>Výkup kovového odpadu Litovel</h1>
            <h2>Vladimír Podivínský</h2>
        </div>
    </header>
</template>
<script lang="ts">
export default {
    name: "AppHeader",
}
</script>
<style scoped>
@keyframes textFade {
    0% {
        opacity: 0;
    }

    100% {
        opacity: 1;
    }
}

header {
    background-image: url("../../public/header-photo.jpeg");
    background-repeat: no-repeat;
    background-position: center;
    background-size: 100% 100%;
    height: 93vh;
    display: flex;
    justify-content: center;
    align-content: center;
    flex-direction: column;
}

.header-wrapper__text-wrapper {
    text-align: center;
    color: var(--white);
    animation: 1s ease-in 0s 1 textFade;
}

h1 {
    font-size: 3rem;
    font-weight: 800;
}

h2 {
    font-weight: 800;
}
</style>