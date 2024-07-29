<script setup>
import { ref } from 'vue';
import PrimaryBtn from '../PrimaryBtn.vue';
import UserProfiles from './UserProfiles.vue';
import ListMembersDetail from './ListMembersDetail.vue';
import BubbleGraph from './BubbleGraph.vue';

let users = ref([
    {
        id: 1,
        name: 'Dan',
        color: '',
    },
    {
        id: 2,
        name: 'Sara',
        color: '',
    },
    {
        id: 3,
        name: 'John',
        color: '',
    },
])

</script>

<template>
    <q-card class="my-card">
        <p class="text-h3 text-uppercase text-center q-mb-none mt-4">Group Members</p>
        <BubbleGraph />
        <div class="row justify-between q-mx-lg">
            <UserProfiles v-for="u in users" :id="u.id" :name="u.name" />
        </div>

        <div class="mb">
            <ListMembersDetail />
            <ListMembersDetail />
        </div>

        <q-card-actions align="right" class="q-mx-md q-mb-md bottom-right">
            <PrimaryBtn class="q-px-md" label="edit" />
        </q-card-actions>
    </q-card>
</template>

<style lang="scss" scoped>
.my-card {
    width: 100%;
    max-width: 45%;
}
</style>