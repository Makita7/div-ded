<script setup>

</script>

<template>
    <div class="item q-mx-lg row justify-between items-center q-my-md">
        <div class="row items-center">
            <img alt='user profile image' src='@/assets/ProfileDan.png' />
            <p class='text-h6 q-mb-none q-ml-sm name'>Name</p>
        </div>
        <div class="text-right detail">
            <p class="whoOwes q-mb-none">Owes Sara:</p>
            <p class="amount q-mb-none">$45</p>
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