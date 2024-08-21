<script setup>
import { defineProps } from 'vue';
import { ArrowLeftEndOnRectangleIcon, ArrowLeftStartOnRectangleIcon, UserIcon } from '@heroicons/vue/24/outline';

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
    <div class="btn text-center text-capitalize q-mx-md q-mt-md" :class="type">
        <ArrowLeftStartOnRectangleIcon class="q-mr-sm" v-if="icon === 'log_out'" />
        <ArrowLeftEndOnRectangleIcon class="q-mr-sm" v-if="icon === 'log_in'" />
        <UserIcon v-if="icon === 'register'" class="q-mr-sm size" />
        <img v-if="icon === 'google'" src="../assets/icon-simple-google.png" class="q-mr-sm" />

        {{ label }}
    </div>
</template>

<style lang="scss">
.btn {
    border: solid 1px;
    border-radius: 8px;
    height: 3rem;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 500;
    font-size: 16px;
    text-decoration: none;
    text-transform: capitalize;
}


svg {
    width: 32px;
}

.primary-btn {
    color: $gdSepia;
    background-color: $mBeige;
    border: none;
}

.btn:hover {
    background-color: #fff2df;
    border: none;
    font-weight: 500;
}

.secondary-btn {
    border: $lBeige solid 2px;
    background-color: white;
    color: $gSepia;

}

.secondary-btn:hover {
    background-color: #fff8ee;
}

.dark-btn {
    color: white;
    background-color: #69696970;
    border: none;
    text-shadow: gray 4px 4px 6px;
    background-blend-mode: multiply;
}

.dark-btn:hover {
    background-color: #6464647c;
}
</style>