<template>

<div class="navBar">
    <router-link class="linkContainer" to="/"><NavButton text="Connexion"></NavButton></router-link>
    <router-link class="linkContainer" to="/signup"><NavButton text="Inscription"></NavButton></router-link>
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

.linkContainer {
    width: 45%;
    text-decoration: none;
}

.linkContainer:visited {
    color: #2c3e50;
    text-decoration: none;
}

.navBar {
    display: flex;
    justify-content: space-around;
    align-items: flex-end;
    box-sizing: border-box;
    border: 2px solid lightblue;
    width: 40%;
    margin: auto;
    height: 40px;
}


</style>