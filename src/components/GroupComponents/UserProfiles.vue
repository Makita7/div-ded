<script setup>
import { defineProps } from 'vue';
import img from '@/assets/ProfileDan.png'

const props = defineProps({
    name: {
        type: String,
        default: 'Guest'
    }
});

</script>

<template>
    <div class="userCard">
        <img :src="img" />
        <p class="text-center name text-h5">{{ $props.name }}</p>
    </div>

</template>

<style lang="scss" scoped>
.userCard {
    width: 30%;

    .name {
        color: $dGreen;
        font-weight: bold;
    }
}
</style>