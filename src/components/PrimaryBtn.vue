<script setup>
import { PencilIcon, PlusIcon } from '@heroicons/vue/24/outline';
import { defineProps } from 'vue';

const props = defineProps({
    label: {
        type: String,
        default: 'Label'
    },
    type: {
        type: String,
        default: 'primary-btn',
    },
    icon: String,
});


</script>

<template>
    <q-btn :class="type" unelevated>
        <PencilIcon v-if="icon === 'edit'" class="q-mr-sm" />
        <PlusIcon v-if="icon === 'add'" class="q-mr-sm" />
        <img v-if="icon === 'transfer'" src="../assets/transfer-icon.svg" class="img-icon q-mr-sm" />
        {{ label }}
    </q-btn>
</template>

<style lang="scss" scoped>
.primary-btn {
    background-color: $lBeige;
    color: $gdSepia;
    border-radius: 8px;
    text-transform: capitalize;

    svg {
        width: 24px;
    }
}

.secondary-btn {
    border: $lBeige solid 2px;
    background-color: white;
    color: $gdSepia;
    border: 1px solid $lBeige;
    border-radius: 8px;
    text-transform: capitalize;

    svg {
        width: 24px;
    }
}

.img-icon {
    width: 24px;
}
</style>