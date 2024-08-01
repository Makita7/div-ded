<script setup>
import { MinusCircleIcon, PencilIcon } from '@heroicons/vue/24/outline';
import { defineProps } from 'vue';

const props = defineProps({
    secondary: Boolean,
    icon: String,
})

</script>

<template>
    <q-btn outline class="btn" :class="secondary ? 'green' : 'beige'">
        <MinusCircleIcon v-if="icon === 'delete'" />
        <PencilIcon v-else />
    </q-btn>
</template>

<style lang="scss" scoped>
.btns {
    border-radius: 18px;

    svg {
        width: 24px;
    }

}

.green {
    color: $lGreen2 !important;

    svg {
        color: $gSepia !important;
    }
}

.beige {
    color: $lBeige !important;

    svg {
        color: $gSepia !important;
    }
}

.btn {
    width: 3rem;

    svg {
        width: 24px;
    }
}
</style>