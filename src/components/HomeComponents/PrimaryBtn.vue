<script setup>
import { PencilIcon } from '@heroicons/vue/24/outline';
import { defineProps } from 'vue';

const props = defineProps({
    label: {
        type: String,
        default: 'Label'
    }
});


</script>

<template>
    <q-btn class="primaryBtn" unelevated>
        <PencilIcon class="q-mr-sm" v-if="label === 'edit'" /> {{ label }}
    </q-btn>
</template>

<style lang="scss" scoped>
.primaryBtn {
    background-color: $lBeige;
    color: $gdSepia;
    border-radius: 8px;
    text-transform: capitalize;

    svg {
        width: 24px;
    }
}
</style>