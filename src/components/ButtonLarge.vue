<script setup>
import { ArrowLeftEndOnRectangleIcon } from '@heroicons/vue/24/outline';
</script>

<template>
    <div class="btn text-center text-capitalize q-mx-md q-mt-md ">
        <ArrowLeftEndOnRectangleIcon class="q-mr-sm" />

        wide Btn
    </div>
</template>

<style lang="scss">
.btn {
    border: solid 1px;
    border-radius: 10px;
    height: 3rem;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: white;
    border: none;
    color: $gdSepia;
    font-weight: 500;
    font-size: 16px;
}

.btn:hover {
    background-color: $mBeige;
    border: none;
    font-weight: 500;
}

svg {
    width: 40px;
}
</style>