<template>
    <div class="login">
        <h1>Login</h1>
        <br>
        <img style="width: 330px; height: 330px" alt="Groupomania logo" src="../assets/icon-above-font.png" />
        <LoginForm></LoginForm>
        <NavBar></NavBar>
    </div>
</template>

<script>
import LoginForm from '@/components/LoginForm.vue'
import NavBar from '@/components/NavBar.vue'

export default {
    name: 'Login',
    components: {LoginForm, NavBar}
}
</script>

<style>

img {
    width: 330px;
    height: 330px
}

</style>