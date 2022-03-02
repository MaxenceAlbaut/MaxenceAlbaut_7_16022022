<template>
    <div class="login">
        <img alt="Groupomania logo" src="../assets/icon-above-font.png" />
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

<style scoped>

img {
    width: 350px;
    height: 350px;
}

</style>