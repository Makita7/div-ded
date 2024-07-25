<script setup>
import PrimaryBtn from '../PrimaryBtn.vue';



</script>

<template>
    <q-card class="my-card">
        <p class="text-h3 text-uppercase text-center q-mb-none mt-4">Expense Timeline</p>

        <q-card-actions align="right" class="q-mx-md q-mb-md bottom-right">
            <PrimaryBtn class="q-px-md" label="edit" />
        </q-card-actions>
    </q-card>
</template>

<style lang="scss" scoped>
.my-card {
    width: 100%;
    max-width: 45%;

}
</style>