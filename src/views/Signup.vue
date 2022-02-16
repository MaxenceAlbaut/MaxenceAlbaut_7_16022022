<template>
    <div class="signup">
        <h1>Signup</h1>
        <br>
        <img alt="Groupomania logo" src="../assets/icon-above-font.png" />
        <SignupForm></SignupForm>
        <NavBar></NavBar>
    </div>
</template>

<script>
import SignupForm from '@/components/SignupForm.vue'
import NavBar from '@/components/NavBar.vue'

export default {
    name: 'Login',
    components: {SignupForm, NavBar}
}
</script>

<style>

img {
    width: 330px;
    height: 330px
}

</style>
