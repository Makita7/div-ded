<script setup>
import { ref } from 'vue';
import PrimaryBtn from '../PrimaryBtn.vue';
import GroupListItem from './GroupListItem.vue';

let groups = ref([
    {
        id: 1,
        name: 'Board Game',
        color: 'mYellow',
    },
    {
        id: 2,
        name: 'Relationship',
        color: 'mlCoral',
    },
    {
        id: 3,
        name: 'School Project',
        color: 'lGreen2',
    },
])


</script>

<template>
    <q-card class="my-card">
        <p class="text-h2 text-center mt-2">groups</p>
        <div class="mb">
            <GroupListItem v-for="g in groups" :id="g.id" :title="g.name" :color="g.color" />
        </div>

        <q-card-actions align="right" class="q-mx-md q-mb-md bottom-right">
            <PrimaryBtn class="q-px-md" label="add group" />
        </q-card-actions>
    </q-card>
</template>

<style lang="scss" scoped>
.my-card {
    width: 100%;
    max-width: 60%;
    min-height: 31rem;

    @media screen and (min-width: 1800px) {
        min-height: 35rem;
    }

    .mt-2 {
        margin-top: 4rem;
    }
}
</style>