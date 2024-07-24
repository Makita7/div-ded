<script setup>
import UserCard from '@/components/HomeComponents/UserCard.vue';
import GroupListCard from '@/components/HomeComponents/GroupListCard.vue';

</script>

<template>
    <div class="container">
        <div class="row justify-around q-mx-auto">
            <UserCard />
            <GroupListCard />
        </div>
    </div>
</template>

<style lang="scss" scoped>
.container {
    height: 100%;
    align-content: center;
}
</style>