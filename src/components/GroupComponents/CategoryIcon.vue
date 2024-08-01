<script setup>
import { defineProps } from 'vue';
import { HomeIcon, HeartIcon, PaperAirplaneIcon, AcademicCapIcon, BoltIcon, BanknotesIcon, GifIcon } from '@heroicons/vue/24/outline';

const props = defineProps({
    categoryID: String,
})


</script>

<template>
    <div class="icon q-mr-md row justify-center items-center" :class="categoryID">
        <HomeIcon v-if="categoryID === 'housing'" />
        <BoltIcon v-if="categoryID === 'utilities'" />
        <HeartIcon v-if="categoryID === 'health'" />
        <AcademicCapIcon v-if="categoryID === 'education'" />
        <BanknotesIcon v-if="categoryID === 'savings'" />
        <PaperAirplaneIcon v-if="categoryID === 'travel'" />
        <GifIcon v-if="categoryID === 'gifts'" />
        <img v-if="categoryID === 'food'" src="@/assets/hamburger-icon.svg" />
        <img v-if="categoryID === 'transportation'" src="@/assets/car-icon.svg" />
        <img v-if="categoryID === 'entertainment'" src="@/assets/joystick-icon.svg" />
        <img v-if="categoryID === 'petcare'" src="@/assets/pet-Icon.svg" />
    </div>
</template>


<style lang="scss" scoped>
.icon {
    text-align: center;
    border-radius: 18px;
    height: 3.3rem;
    width: 3.3rem;
    color: $gdSepia;

    svg {
        color: $gdSepia;
        width: 60%;
    }
}

img {
    width: 2.2rem;
}

.housing {
    background-color: #FFDCA9;
}

.utilities {
    background-color: #FFD2B5;
}

.transportation {
    background-color: #CCD6A6;
}

.food {
    background-color: #E2EFAF !important;
}

.health {
    background-color: #FFDCA9;
}

.entertainment {
    background-color: #FFD2B5;
}

.education {
    background-color: #F4EAD5;
}

.savings {
    background-color: #FCF9BE;
}

.gifts {
    background-color: #DFCDA7;
}

.travel {
    background-color: #FCF9BE;
}

.petcare {
    background-color: #DAE2B6;
}
</style>