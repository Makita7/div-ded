<script setup>
import { ref } from 'vue';
import SideNavLink from './SideNavLink.vue';
import ButtonLarge from './ButtonLarge.vue';

let sideNavOpen = ref(true);



</script>

<template>
    <q-drawer show-if-above v-model="sideNavOpen" side="left" behavior="desktop" elevated>
        <div class="row q-mt-lg">
            <img class="q-mx-auto" src="../assets/logo.png" alt="logo" />
        </div>
        <side-nav-link />
        <hr class="q-mx-md q-mt-md" />
        <p class="text-h6 text-center text-uppercase q-ma-sm groups">Groups</p>
        <hr class="q-mx-md" />
        <side-nav-link />
        <ButtonLarge class="logout" />
    </q-drawer>
</template>

<style lang="scss" scoped>
.groups {
    color: $dCoral;
    font-weight: bold;
}

.logout {
    bottom: 1rem;
    position: absolute;
    width: 90%;
}
</style>