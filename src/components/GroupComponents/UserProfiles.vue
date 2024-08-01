<script setup>
import { defineProps } from 'vue';
import img from '@/assets/ProfileDan.png'

const props = defineProps({
    name: {
        type: String,
        default: 'Guest',
    },
    owes: Number,
    owed: Number,
});

</script>

<template>
    <div class="userCard text-center">
        <img :src="img" alt='user profile image' />
        <p class="text-center name text-h5 text-capitalize">{{ $props.name }}</p>
        <q-chip v-if="owes" class="owes" square>
            Total Debt: $ -{{ owes }}
        </q-chip>
        <q-chip v-else-if="owed" class="owed" square>
            Total Owed: $ {{ owed }}
        </q-chip>
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
        margin-bottom: 0.2rem;
    }

    .owes {
        color: $gdSepia;
        background-color: $mCoral;
        font-weight: bold;
    }

    .owed {
        color: $gdSepia;
        background-color: $mYellow;
        font-weight: bold;
    }

}
</style>