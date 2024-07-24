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
    <q-btn class="secondaryBtn" unelevated>{{ label }}</q-btn>
</template>

<style lang="scss" scoped>
.secondaryBtn {
    border: $lBeige solid 2px;
    background-color: white;
    color: $gdSepia;
    border-radius: 8px;

    svg {
        width: 24px;
    }
}
</style>