<script setup>
import { defineProps } from 'vue';

const props = defineProps({
    data: Array,
});

</script>

<template>
    <div class="item q-mx-lg row justify-between items-center q-my-md">
        <div class="row items-center">
            <img alt='user profile image' src='@/assets/ProfileDan.png' />
            <p class='text-h6 q-mb-none q-ml-sm name text-capitalize'>{{ data.name }}</p>
        </div>
        <div class="row">
            <div class="text-right detail q-pl-lg" v-for="owes in data.owes" :key="owes.name"
                v-if="data.owes.length > 0">
                <p class="whoOwes q-mb-none text-capitalize">Owes {{ owes.name }}:</p>
                <p class="amount q-mb-none">$ {{ owes.amount }}</p>
            </div>
            <div class="text-right detail q-pl-lg" v-for="owed in data.isOwed" :key="owed.name"
                v-if="data.isOwed.length > 0">
                <p class="whoOwes q-mb-none text-capitalize">Owed By {{ owed.name }}:</p>
                <p class="amount q-mb-none">$ {{ owed.amount }}</p>
            </div>
        </div>
    </div>
</template>


<style lang="scss" scoped>
.item {
    align-items: center;

    img {
        width: 5rem;
    }

    .name {
        font-weight: bold;
        color: $dGreen;
        font-size: 1.5rem;
        font-family: Montserrat;
    }

    .detail {
        color: $dRed;

        .whoOwes {
            font-size: 1.1rem;
        }

        .amount {
            font-size: 1.5rem;
            font-family: Montserrat;
            font-weight: bold;
        }
    }
}
</style>