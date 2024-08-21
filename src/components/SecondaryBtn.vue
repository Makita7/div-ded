<script setup>
import { defineProps } from 'vue';

const props = defineProps({
    label: {
        type: String,
        default: 'Label'
    }
})

</script>

<template>
    <q-btn class="secondary-btn" unelevated>{{ label }}</q-btn>
</template>

<style lang="scss" scoped>
.secondary-btn {
    border: $lBeige solid 2px;
    background-color: white;
    color: $gdSepia;
    border-radius: 8px;
    text-transform: capitalize;

    svg {
        width: 24px;
    }
}
</style>