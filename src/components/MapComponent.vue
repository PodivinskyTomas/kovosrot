<template>
  <iframe
      src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d2581.040151591059!2d17.0712388!3d49.6912167!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471241dadd90dcef%3A0x72b3bbfc516c8c64!2sV%C3%BDkup%20kovov%C3%A9ho%20odpadu%20Litovel!5e0!3m2!1scs!2scz!4v1725611508704!5m2!1scs!2scz"
      width="600"
      height="450"
      style="border:0;"
      allowfullscreen=""
      loading="lazy"
      title="Mapa, kde můžete najít náš podnik"
      referrerpolicy="no-referrer-when-downgrade"
  ></iframe>
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