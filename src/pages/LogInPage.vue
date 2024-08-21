<script setup>
import ButtonLarge from '@/components/ButtonLarge.vue';

// import { getAuth, signInWithRedirect, GoogleAuthProvider } from 'firebase/auth';
// import { useCurrentUser } from 'vuefire';

// const auth = getAuth();
// const user = useCurrentUser();

</script>


<template>
    <div class="row">
        <div class="login q-mx-auto ">
            <img src="../assets/login-logo.png" class="logo row q-mx-auto q-mb-2" />
            <ButtonLarge label="Log In" icon="log_in" />
            <ButtonLarge label="Log In with Google" type="secondary-btn" icon="google" />
            <ButtonLarge label="Register" type="secondary-btn" icon="register" />
            <div class="line" />
            <ButtonLarge label="Invite as Guest?" type="dark-btn" />
            <!-- <div class="row">
        <q-btn>Log In</q-btn>
        <q-btn>Log Out</q-btn>
        </div>
        <q-btn @click="signInWithRedirect(auth, GoogleAuthProvider())">Sign in with Google</q-btn>
        {{ user }} -->
        </div>
    </div>
</template>


<style scoped lang="scss">
.login {
    width: 30rem;

    img {
        width: 100%;
    }
}

.line {
    border-bottom: 2px solid white;
    margin-top: 1rem;
    width: 92%;
    margin-left: 3.5%;
    min-height: 0.2rem;
}
</style>