<script setup>
import PrimaryBtn from './PrimaryBtn.vue';



</script>

<template>
    <q-card class="my-card">
        <div class="imgCont">
            <img class="q-mt-lg q-mb-none" src="../../assets/ProfileSara.png" />
        </div>
        <p class="text-h2 text-uppercase text-center q-mb-none">Sara</p>
        <p class="text-capitalized text-center text-h6">sara1lovely@gmail.com</p>

        <q-card-actions align="right" class="q-mx-md q-mb-md">
            <PrimaryBtn class="q-px-md" label="edit" />
        </q-card-actions>
    </q-card>
</template>

<style lang="scss" scoped>
.my-card {
    width: 100%;
    max-width: 30rem;

    .email {
        color: $gSepia;
        ;
    }

    .imgCont {
        width: 25rem !important;
        height: 25rem !important;
        margin-left: 10%;
        margin-top: auto;
        text-align: center;

        img {
            width: 22rem;
            height: 22rem;
            object-fit: cover;
        }
    }

}
</style>