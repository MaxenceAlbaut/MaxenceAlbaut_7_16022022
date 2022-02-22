<template>
    <button type="button" @click="disconnect">Deconexion</button>
</template>

<script>

export default {
    name: 'DcButton',
    methods: {
        disconnect(){
            let sessStorage = window.sessionStorage;
            sessStorage.removeItem('jwt');
            this.$router.push({name: 'Login'});
        }
    }
}

</script>

<style scoped>

button {
    border-radius: 20%;
}

</style>