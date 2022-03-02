<template>

<form>
    <label for="email">Email:</label><br>
    <input type="text" id="email" name="email" ref="useremail"><br>
    <div v-if="emailerror" class="errormsg">Email incorrecte</div>
    <label for="password">Password:</label><br>
    <input type="password" id="password" name="password" ref="userpassword"><br>
    <div v-if="pwerror" class="errormsg">Mot de passe incorrecte</div>
    <FormButton text="Se connecter" @click="login"></FormButton>
</form>

</template>


<script>
import FormButton from '@/components/FormButton.vue';


export default {
    name: 'LoginForm',
    components: {FormButton},
    data() {
        return {
            emailerror: false,
            pwerror: false
        }
    },
    methods: {
        login(event) {
            var post = {    // CREATION DU PAYLOAD A ENVOYER
                email: this.$refs.useremail.value,
                password: this.$refs.userpassword.value
            };
            console.log("payload:" + JSON.stringify(post));
            fetch('http://localhost:4000/api/auth/login', {     // CREATION DE LA REQUETTE A ENVOYER A L'API
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(post),
            })
            .then(response => response.json())
                .then(data => {
                    console.log("Response : ", data);
                    // REDIRIGER L'UTILISATEUR VERS LA PAGE FORUM + UTILISER LE TOKEN ?
                    let sessStorage = window.sessionStorage;
                    sessStorage.setItem('jwt', `${data.token}`);
                    sessStorage.setItem('userId', `${data.userId}`);
                    if (!data.message) { // SI L'utilisateur est bien authentifie : Redirige vers la page forum
                        this.$router.push({
                            name: 'Forum'
                        });
                    }
                    // Affiche les erreurs pour l'utilisateur
                    else if (data.message == 'User not found') { 
                        this.emailerror = true;
                        this.pwerror = false;
                    }
                    else if (data.message == 'Incorrect password') {
                        this.emailerror = false;
                        this.pwerror = true;
                    }
                })
            .catch(error => {
                console.error('Error :', error);
            });
        }
    }
}

</script>



<style>
form {
    background-color: lightblue;
    border-radius: 10px 10px 0 0;
    min-width: 330px;
    max-width: 900px;
    width: 40%;
    margin: auto;
}

label {
    display: inline-block;
    margin-top: 20px;
    font-weight: bold;
}

.errormsg {
    color: black;
    margin: 10px auto 0 auto;
    width: 40%;
    background-color: rgb(255, 184, 184);
    border: 2px solid rgb(90, 0, 0)
}
</style>