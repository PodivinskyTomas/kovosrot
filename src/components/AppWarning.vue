<template>
    <div class="warning">
        <i class="fa fa-warning"></i>
        <span>pozor: </span>{{ text }}
    </div>
</template>
<script lang="ts">
export default {
    name: "AppWarning",
    props: {
        text: {
            type: String,
            required: true
        }
    }
}
</script>
<style scoped>
@import url('//maxcdn.bootstrapcdn.com/font-awesome/4.2.0/css/font-awesome.min.css');

.warning {
    color: hsl(36, 100%, 20%);
    border-radius: 10px;
    font-family: Tahoma, Geneva, Arial, sans-serif;
    font-size: 12px;
    padding: 10px;
    margin: 10px;
    background-color: var(--s3);
    border: 1px solid #9F6000;
}

span {
    margin-left: 0.3rem;
    font-weight: bold;
    text-transform: uppercase;
}
</style>