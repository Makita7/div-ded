<script setup>
import { MinusCircleIcon, PencilIcon } from '@heroicons/vue/24/outline';
import { defineProps } from 'vue';

const props = defineProps({
    delete: Boolean
})

</script>

<template>
    <q-btn outline class="btn" :class="props.delete ? 'green' : 'beige'">
        <MinusCircleIcon v-if="delete" />
        <PencilIcon v-else />
    </q-btn>
</template>

<style lang="scss" scoped>
.btns {
    border-radius: 18px;

    svg {
        width: 24px;
    }

    .green {
        color: $lGreen2;

        svg {
            color: $gSepia;
        }

        :hover {
            background-color: cadetblue;
        }
    }

    .beige {
        color: $lBeige;

        svg {
            color: $gSepia;
        }
    }
}
</style>