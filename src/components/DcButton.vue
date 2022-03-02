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
            sessStorage.removeItem('userId');
            this.$router.push({name: 'Login'});
        }
    }
}

</script>

<style scoped>

button {
    background-color: #2c3e50;
    height: 30px;
    width: 120px;
    font-weight: bold;
    color: white;
    margin-right: 4px;
    border-radius: 15px;
    border: none;
}

button:hover {
    cursor: pointer;
    transform: scale(1.1);
    transition-duration: 0.1s;
}

</style>