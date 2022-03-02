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

.navBar {
    border-radius: 0 0 10px 10px;
    min-width: 330px;
    max-width: 900px;
    width: 40%;
    background-color: rgb(83, 134, 151);
}

.linkContainer {
    width: 45%;
    text-decoration: none;
}

.linkContainer:visited {
    color: black;
    text-decoration: none;
}

.navBar {
    display: flex;
    justify-content: space-around;
    align-items: center;
    box-sizing: border-box;
    border: 2px solid rgb(83, 134, 151);
    width: 40%;
    margin: auto;
    height: 50px;
    margin-bottom: 20px;
}


</style>