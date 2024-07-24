<script setup>
import { RouterLink, useRoute } from 'vue-router';
import { defineProps, ref } from 'vue';

const route = useRoute();

const props = defineProps({
    id: {
        type: String,
        default: '/div-ded/'
    },
    name: {
        type: String,
        default: 'Home',
    },
});

</script>

<template>
    <RouterLink :id="props.id" class="link text-center text-capitalize q-mx-md q-mt-md "
        :to="'/div-ded/' !== props.id ? `group/${props.id}` : '/div-ded/'"
        :active-class="route.path === props.id ? 'active' : ''">
        {{ props.name }}
    </RouterLink>
</template>

<style lang="scss">
.link {
    border: $dCoral solid 1px;
    color: $gSepia;
    border-radius: 10px;
    height: 3rem;
    display: flex;
    align-items: center;
    justify-content: space-around;
    font-weight: 500;
    text-decoration: none;
}

.link.active {
    background-color: $mBeige;
    border: none;
    color: #575757;
}

.link:hover {
    background-color: $mlCoral;
    border: none;
    color: #575757;
}

.active:hover {
    background-color: $mlCoral;
    border: none;
    color: #575757;
}
</style>