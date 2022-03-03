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
                        sessStorage.removeItem('userId');
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
    background-color: #6b0000;
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