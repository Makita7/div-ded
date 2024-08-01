<script setup>
import ExpenseTimelineCard from '@/components/ExpenseTimelineComponents/ExpenseTimelineCard.vue';
import GroupMembersCard from '@/components/GroupComponents/GroupMembersCard.vue';

</script>

<template>
    <div class="container">
        <div class="row  justify-around q-mx-auto">
            <GroupMembersCard />
            <ExpenseTimelineCard />
        </div>
    </div>
</template>

<style lang="scss">
.container {
    height: 100%;
    align-content: center;
}
</style>