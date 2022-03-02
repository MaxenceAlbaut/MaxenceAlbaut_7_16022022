<template>
    <div class="signup">
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

<style scoped>

img {
    width: 350px;
    height: 350px;
}

</style>
