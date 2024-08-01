<script setup>
import { defineProps } from 'vue';
import SmallListBtn from '../SmallListBtn.vue';
import CategoryIcon from './CategoryIcon.vue'

const props = defineProps({
    category: String,
    categoryID: String,
    id: Number,
    name: String,
    amount: Number,
    who: String,
    date: String,
});


</script>


<template>
    <div class="row q-mx-lg q-my-md items-center">
        <div class="row fifty fix">
            <CategoryIcon :categoryID="categoryID" />
            <div class="expense">
                <p class="name">{{ name }}</p>
                <p class="who">{{ who }} - {{ category }}</p>
            </div>
        </div>
        <div class="row fifty text-right items-center end">
            <div class="detail q-mr-lg">
                <p class="amount">$ {{ amount }}</p>
                <p class="date">{{ date }}</p>
            </div>
            <div class="row">
                <SmallListBtn icon="delete" :secondary="true" class="q-mr-sm" />
                <SmallListBtn />
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
p {
    margin: 0;
}

.fifty {
    width: 50%;
}

.fix {
    flex-wrap: nowrap;
    align-items: center;
}

.end {
    justify-content: flex-end;
}

.expense {
    .name {
        font-size: 1.5rem;
        font-family: Montserrat;
        font-weight: bold;
        color: $dGreen;
    }

    .who {
        font-size: 1.2rem;
    }
}

.detail {
    text-align: right;
    color: $dRed;

    .amount {
        font-size: 1.5rem;
        font-family: Montserrat;
        font-weight: bold;
    }

    .date {
        font-size: 1.2rem;
    }
}
</style>