<template>
    <div class="information-table">
        <div v-for="row in information" class="information-table__row">
            <div v-for="col in row">
                {{ col }}
            </div>
        </div>
    </div>
</template>
<script lang="ts">
export default {
    name: "InformationTable",
    props: {
        information: {
            type: Array,
            required: true
        }
    }
}
</script>
<style>
.information-table {
    display: flex;
    flex-direction: column;
    margin: auto;
    max-width: 260px;
}

.information-table__row {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 0.3rem;
}
</style>