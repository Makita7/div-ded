<script setup>
import { ref, onMounted } from 'vue';
import PrimaryBtn from '../PrimaryBtn.vue';
import UserProfiles from './UserProfiles.vue';
import ListMembersDetail from './ListMembersDetail.vue';

let users = ref([
    {
        id: 1,
        name: 'dan',
        color: '',
        owes: [
            {
                name: 'sara',
                amount: 39,
            },
        ],
        isOwed: [
            {
                name: 'john',
                amount: 10,
            },
        ],
    },
    {
        id: 2,
        name: 'sara',
        color: '',
        owes: [],
        isOwed: [
            {
                name: 'john',
                amount: 74,
            },
            {
                name: 'dan',
                amount: 39,
            },
        ],
    },
    {
        id: 3,
        name: 'john',
        color: '',
        owes: [
            {
                name: 'sara',
                amount: 74,
            },
            {
                name: 'dan',
                amount: 10,
            },
        ],
        isOwed: [],
    },
]);

let debts = ref([]);

function organizeDebts() {
    users.value.map((user) => {
        const owes = user.owes.reduce((acc, u) => acc + u.amount, 0);
        const owed = user.isOwed.reduce((acc, u) => acc + u.amount, 0);
        debts.value.push({ name: user.name, id: user.id, owes, owed });
        debts.value.sort((a, b) => b.owes - a.owes);
    });
}

onMounted(() => {
    organizeDebts();
});

</script>

<template>
    <q-card class="my-card">
        <p class="text-h3 text-uppercase text-center q-mb-none mt-2">Group Members</p>
        <div class="row justify-between q-mx-lg q-mt-md">
            <UserProfiles v-for="u in debts" :id="u.id" :name="u.name" :owes="u.owes" :owed="u.owed" />
        </div>
        <hr class="q-my-lg" />
        <div class="mb">
            <ListMembersDetail v-for="user in users" :key="user.id" :data="user" />
        </div>

        <q-card-actions align="right" class="q-mx-md q-mb-md bottom-right">
            <PrimaryBtn class="q-px-md" label="edit" icon="edit" />
        </q-card-actions>
    </q-card>
</template>

<style lang="scss" scoped>
.my-card {
    width: 100%;
    max-width: 45%;
}
</style>