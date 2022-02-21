<template>

<form>
    <label for="prenom">Prenom:</label><br>   
    <input type="text" id=prenom name="prenom" ref="userfirstname"><br>
    <label for="nom">Nom:</label><br>
    <input type="text" id=nom name="nom" ref="userlastname"><br>
    <label for="email">Email:</label><br>
    <input type="text" id=email name="email" ref="useremail"><br>
    <label for="password">Password:</label><br>
    <input type="password" id=password name="password" ref="userpassword"><br>
    <label for="confpw">Confirm password:</label><br>
    <input type="password" id=confpw name="confpw" ref="userconfpw"><br>
    <FormButton text="S'inscrire" @click="signup"></FormButton>
</form>


</template>



<script>
import FormButton from '@/components/FormButton.vue'

export default {
    name: 'SignupForm',
    components: {FormButton},
    methods: {
        signup(event) {
            // Verification de la concordance des mots de passe
            if (this.$refs.userpassword.value === this.$refs.userconfpw.value) {
                var post = {    // CREATION DU PAYLOAD A ENVOYER
                prenom: this.$refs.userfirstname.value,
                nom: this.$refs.userlastname.value,
                email: this.$refs.useremail.value,
                password: this.$refs.userpassword.value
                };
                console.log("payload:" + JSON.stringify(post));
                fetch('http://localhost:4000/api/auth/signup', {     // CREATION DE LA REQUETTE A ENVOYER A L'API
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
                    })
                .catch(error => {
                    console.error('Error :', error);
                });
            }
            else {
                window.alert("passwords dont match !");
            }

        }
    }
}

</script>



<style scoped>
form {
    background-color: lightblue;
    border-radius: 10px 10px 0 0;
    width: 40%;
    margin: auto;
}

label {
    display: inline-block;
    margin-top: 20px;
    font-weight: bold;
}
</style>