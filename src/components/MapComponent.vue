<template>
    <iframe title="Mapa s lokací výkupu kovového odpadu Litovel"
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d5149.69347102899!2d17.071419541739505!3d49.690585620897615!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x72b3bbfc516c8c64!2sV%C3%BDkup%20kovov%C3%A9ho%20odpadu%20Litovel!5e0!3m2!1sen!2scz!4v1675617123235!5m2!1sen!2scz"
        width="400" height="300" allowfullscreen="true" loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"></iframe>
</template>
<script lang="ts">
export default {
    name: "MapComponent"
}
</script>
<style>
iframe {
    border: none;
    height: 100%;
    width: 100%;
    max-width: 400px;
    max-height: 300px;
}
</style>