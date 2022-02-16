<template>

<div class="navBar">
    <router-link to="/login"><NavButton text="Connexion"></NavButton></router-link>
    <router-link to="/signup"><NavButton text="Inscription"></NavButton></router-link>
</div>


</template>

<script>
import NavButton from '@/components/NavButton.vue'

export default {
    name: 'NavBar',
    components: {NavButton}
}
</script>

<style scoped>
.navBar {
    display: flex;
    justify-content: space-around;
    border: 2px solid green;
}


</style>