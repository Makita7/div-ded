<script setup>
import PrimaryBtn from './PrimaryBtn.vue';



</script>

<template>
    <q-card class="my-card">
        <q-img class="q-mt-lg" src="../../assets/ProfileSara.png" />
        <p class="text-h2 text-uppercase text-center neg-mt q-mb-none">Sara</p>
        <p class="text-capitalized text-center text-h6">sara1lovely@gmail.com</p>

        <q-card-actions align="right" class="q-mx-md q-mb-md">
            <PrimaryBtn class="q-px-md" label="edit" />
        </q-card-actions>
    </q-card>
</template>

<style lang="scss">
.my-card {
    width: 100%;
    max-width: 25rem;

    .email {
        color: $gSepia;
        ;
    }

    img {
        width: 80%;
        height: 80%;
        margin-left: 10%;
        margin-top: auto;
    }

    .neg-mt {
        margin-top: -4rem;
    }
}
</style>