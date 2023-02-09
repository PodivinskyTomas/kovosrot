<template>
    <nav ref="nav">
        <a href="/" class="nav__title">
            <h3>Výkup kovového opadu Litovel</h3>
        </a>
        <input id="menu-toggle" type="checkbox" />
        <label class='menu-button-container' for="menu-toggle">
            <div class='menu-button'></div>
        </label>
        <div class="menu">
            <a href="/#aktuality" title="Aktuality" class="app-nav__link">Aktuality</a>
            <a href="/#oNás" title="O nás" class="app-nav__link">O nás</a>
            <a href="/#provozníDoba" title="Provozní doba" class="app-nav__link">Provozní doba</a>
            <a href="/#coVykupujeme" title="Co vykupujeme" class="app-nav__link">Co vykupujeme</a>
            <a href="/#kontakt" title="Kontakt" class="app-nav__link">Kontakt</a>
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
    flex-direction: row;
    background-color: var(--n8);
    padding-left: var(--content-padding);
    padding-right: var(--content-padding);
}

.nav__title {
    width: 50%;
    text-decoration: none;
    color: black;
}

.app-nav__link {
    float: left;
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

.menu>a {
    overflow: hidden;
}

.menu-button-container {
    display: none;
    height: 48px;
    width: 48px;
    cursor: pointer;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

#menu-toggle {
    display: none;
}

.menu-button,
.menu-button::before,
.menu-button::after {
    display: block;
    background-color: black;
    position: absolute;
    height: 4px;
    width: 30px;
    transition: transform 400ms cubic-bezier(0.23, 1, 0.32, 1);
    border-radius: 2px;
}

.menu-button::before {
    content: '';
    margin-top: -8px;
}

.menu-button::after {
    content: '';
    margin-top: 8px;
}

#menu-toggle:checked+.menu-button-container .menu-button::before {
    margin-top: 0px;
    transform: rotate(405deg);
}

#menu-toggle:checked+.menu-button-container .menu-button {
    background: rgba(255, 255, 255, 0);
}

#menu-toggle:checked+.menu-button-container .menu-button::after {
    margin-top: 0px;
    transform: rotate(-405deg);
}

@media (max-width: 1320px) {
    nav {
        padding: 0.28125rem 1rem 0.28125rem var(--content-padding);
    }

    .menu-button-container {
        display: flex;
    }

    .menu {
        position: absolute;
        top: 0;
        margin-top: calc(1.5625em + 2rem);
        left: 0;
        flex-direction: column;
        width: 100%;
        justify-content: center;
        align-items: center;
    }

    #menu-toggle~.menu a {
        height: 0;
        margin: 0;
        padding: 0;
        border: 0;
        transition: height 400ms cubic-bezier(0.23, 1, 0.32, 1);
    }

    #menu-toggle:checked~.menu a {
        border: 1px solid var(--n3);
        height: 2.5em;
        line-height: 2.5em;
        padding: 0.5em;
        transition: height 400ms cubic-bezier(0.23, 1, 0.32, 1);
    }

    .menu>a {
        display: flex;
        justify-content: center;
        margin: 0;
        padding: 0.5em 0;
        width: 100%;
        color: white;
        background-color: var(--n2);
    }

    .menu>a:not(:last-child) {
        border-bottom: 1px solid #444;
    }

    .nav__title {
        width: fit-content;
    }
}
</style>