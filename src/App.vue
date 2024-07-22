<script setup>
import SideNav from './components/SideNav.vue';

</script>

<template>
  <q-layout>

    <SideNav />

    <q-page-container>
      <!-- <router-view /> -->
      page content
    </q-page-container>

  </q-layout>
</template>

<style scoped lang="scss"></style>

<style lang="scss">
.icon {
  width: 24px;

  .big {
    width: 32px;
  }
}

hr {
  color: $nGrey;
}

@media screen and (min-width: 600px) {
  .q-page-container {
    background-image: url('./assets/bg-desktop.png');
    background-size: cover;
    background-repeat: no-repeat;
    height: 100vh;
  }
}
</style>