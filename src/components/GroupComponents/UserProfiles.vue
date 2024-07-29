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
    <div class="userCard text-center">
        <img :src="img" alt='user profile image' />
        <p class="text-center name text-h5">{{ $props.name }}</p>
    </div>

</template>

<style lang="scss" scoped>
.userCard {
    width: 30%;

    img {
        width: 8rem;
    }

    .name {
        font-size: 1.6rem;
        color: $dGreen;
        font-weight: bold;
    }
}
</style>