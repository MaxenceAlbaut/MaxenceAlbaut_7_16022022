<template>
    <button type="button" v-if="userId == 1 || userId == profileId" @click="deleteUser">Supprimer le compte</button>
</template>

<script>

export default {
    name: 'DcButton',
    data() {
        return {
            userId: window.sessionStorage.getItem('userId'),
            jwt: window.sessionStorage.getItem('jwt'),
            profileId: window.location.href.split('user/')[1]
        }
    },
    methods: {
        deleteUser(){
            let url = `http://localhost:4000/api/auth/${this.profileId}`;
            fetch(url,  {     // CREATION DE LA REQUETTE A ENVOYER A L'API
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${this.jwt}`
                }
            })
                .then(res => {
                    if (this.userId == 1) {
                        this.$router.push({
                            name: 'Forum'
                        });
                    }
                    else {
                        let sessStorage = window.sessionStorage;
                        sessStorage.removeItem('jwt');
                        this.$router.push({
                            name: 'Login'
                        });
                    }
                })
                .catch(error => {
                    console.log(error);
                });
        }
    }
}

</script>

<style scoped>

button {
    border-radius: 20%;
}

</style>