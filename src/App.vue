<script setup>
import SideNav from './components/SideNav.vue';
import { RouterView } from 'vue-router';

</script>

<template>
  <q-layout>

    <SideNav />

    <q-page-container>
      <RouterView />
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
    min-height: 100vh;
    align-content: center;
  }
}

.q-card {
  border-radius: 16px;
}

.q-card__actions .q-btn--rectangle {
  padding: 0 16px;
}

p,
h1,
h2,
h3,
h4,
h5,
h6 {
  color: $gdSepia;
  font-family: Questrial;
}

.text-h2 {
  color: $dGreen;
  font-family: Montserrat;
  font-weight: bold;
  text-transform: uppercase;
}

.text-h3 {
  color: $dGreen;
  font-family: Montserrat;
  font-weight: bold;
  text-transform: uppercase;
}

.bottom-right {
  bottom: 0;
  position: absolute;
  right: 0;
}

.my-card {
  min-height: 31rem;
  margin-top: 2rem;
  margin-bottom: 2rem;

  @media screen and (min-width: 1800px) {
    min-height: 35rem;
  }

  .mt-2 {
    margin-top: 2rem;
  }

  .mb {
    margin-bottom: 5rem;
  }
}

.text-h3 {
  font-size: 2.5rem;
}
</style>