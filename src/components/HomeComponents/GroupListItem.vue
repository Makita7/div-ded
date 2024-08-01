<script setup>
import { defineProps } from 'vue';
import { UserIcon } from '@heroicons/vue/24/outline';
import SmallListBtn from '../SmallListBtn.vue';

const props = defineProps({
    id: Number,
    title: String,
    color: String,
})

</script>

<template>
    <div class="row q-mx-lg q-my-sm">
        <div class="icon q-mr-md q-mt-sm" :class="props.color">
            <UserIcon />
        </div>
        <div>
            <p class="title q-mb-none">{{ title }}</p>
            <p class="detail">You Are Owed <b class="q-ml-sm"> -$113</b></p>
        </div>
        <div class="btns row self-center">
            <SmallListBtn icon="delete" secondary="true" class="q-mr-sm" />
            <SmallListBtn />
        </div>
    </div>
</template>

<style lang="scss" scoped>
.icon {
    text-align: center;
    width: 3.5rem;
    height: 3.5rem;
    border-radius: 6rem;
    align-content: center;
    color: $gdSepia;
    padding-top: 0.2rem;
}

.title {
    font-size: 1.5rem;
    color: $dGreen;
    font-family: Montserrat;
    font-weight: bold;
}

.detail {
    color: $dRed;
    font-family: Questrial;
    font-size: 1.2rem;

    b {
        font-family: Montserrat;
    }
}

.btns {
    right: 2rem;
    left: auto;
    position: absolute;
}

.mYellow {
    background-color: $mYellow;
}

.mlCoral {
    background-color: $mlCoral;
}

.lGreen2 {
    background-color: $lGreen2;
}

.lBeige {
    background-color: $lBeige;
}
</style>