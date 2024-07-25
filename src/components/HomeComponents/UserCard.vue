<script setup>
import PrimaryBtn from '../PrimaryBtn.vue';



</script>

<template>
    <q-card class="my-card">
        <div class="imgCont">
            <img class="q-mt-lg q-mb-none" src="../../assets/ProfileSara.png" />
        </div>
        <p class="text-h2 text-uppercase text-center q-mb-none">Sara</p>
        <p class="text-capitalized text-center text-h6">sara1lovely@gmail.com</p>

        <q-card-actions align="right" class="q-mx-md q-mb-md bottom-right">
            <PrimaryBtn class="q-px-md" label="edit" />
        </q-card-actions>
    </q-card>
</template>

<style lang="scss" scoped>
.my-card {
    width: 100%;
    max-width: 30%;

    .email {
        color: $gSepia;
        ;
    }

    .imgCont {
        min-height: 20rem !important;
        margin-top: auto;
        text-align: center;
        align-content: center;

        img {
            width: 70%;
            height: 70%;
            object-fit: cover;
        }
    }

}
</style>