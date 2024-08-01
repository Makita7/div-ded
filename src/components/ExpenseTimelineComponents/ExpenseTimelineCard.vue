<script setup>
import { ref } from 'vue';
import PrimaryBtn from '../PrimaryBtn.vue';
import SecondaryBtn from '../SecondaryBtn.vue';
import ExpenseItem from './ExpenseItem.vue';
import DoughnutChart from './DoughnutChart.vue';
import BubbleChartTest from '../GroupComponents/BubbleChartTest.vue';

let expenses = ref([
    {
        category: 'eating out',
        categoryID: 'food',
        id: 1,
        name: 'Burgers',
        amount: 124,
        who: 'John',
        date: 'Jun 25, 2024',
    },
    {
        category: 'entertainment',
        categoryID: 'entertainment',
        id: 2,
        name: 'New Games',
        amount: 93,
        who: 'Sara',
        date: 'Jun 25, 2024',
    },
    {
        category: 'transportation',
        categoryID: 'transportation',
        id: 3,
        name: 'Taxi',
        amount: 25,
        who: 'Sara',
        date: 'Jun 25, 2024',
    },
]);


</script>

<template>
    <q-card class="my-card">
        <p class="text-h3 text-uppercase text-center q-mb-none mt-2">Expense Timeline</p>
        <div class="row justify-center">
            <DoughnutChart />
        </div>

        <ExpenseItem v-for="e in expenses" :key="e.id" :id="e.id" :category="e.category" :name="e.name"
            :amount="e.amount" :who="e.who" :date="e.date" :categoryID="e.categoryID" />
        <div class="row justify-end q-ma-md total q-pa-sm mb">
            <p class="q-ma-none title q-pr-sm">total:</p>
            <p class="q-ma-none">$ 542</p>
        </div>

        <q-card-actions align="right" class="q-mx-md q-mb-md bottom-right">
            <SecondaryBtn class="q-px-md" label="Transfer" />
            <PrimaryBtn class="q-px-md" label="add expense" />
        </q-card-actions>
    </q-card>
</template>

<style lang="scss" scoped>
.my-card {
    width: 100%;
    max-width: 45%;
    text-transform: capitalize;

}

.total {
    background-color: $lYellow;
    border-radius: 16px;
    font-family: Montserrat;
    font-size: 1.5rem;
    font-weight: bold;
    text-transform: capitalize;

    .title {
        color: $dGreen;
    }
}
</style>