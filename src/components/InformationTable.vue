<template>
  <div>
    <div class="information-table">
      <div v-for="row in information" class="information-table__row">
        <div v-for="col in row">
          {{ col }}
        </div>
      </div>
    </div>
    <i>Nutný příjezd nejpozději 10 minut, před koncem otevírací doby.</i>
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
    max-width: 250px;
    border-left: 0.25rem solid var(--p1);
    padding-top: 0.25rem;
    padding-bottom: 0.25rem;
    padding-left: 0.5rem;
}

.information-table__row {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 0.3rem;
}

.information-table__row :first-child {
    font-weight: bold;
}
</style>