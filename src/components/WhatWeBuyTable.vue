<template>
    <table>
        <tbody>
            <tr v-for="row in rows">
                <td>{{ row }}</td>
            </tr>
        </tbody>
    </table>
</template>
<script lang="ts">
export default {
    name: "WhatWeBuyTable",
    props: {
        rows: {
            type: Array,
            required: true
        }
    },
}
</script>
<style scoped>
table {
    border: 1px solid var(--n4);
    border-collapse: collapse;
    margin: auto;
    padding: 0rem;
}

table td {
    padding: 0.25rem 3rem;
}

tbody tr:nth-child(odd) {
    background-color: var(--n6);
}

tbody tr:nth-child(even) {
    background-color: var(--n5);
}
</style>