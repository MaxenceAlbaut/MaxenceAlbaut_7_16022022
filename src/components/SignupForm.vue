<template>

<form id="signupForm">
    <label for="prenom">Prenom:</label><br>   
    <input type="text" id="prenom" name="prenom" ref="userfirstname"><br>
    <label for="nom">Nom:</label><br>
    <input type="text" id="nom" name="nom" ref="userlastname"><br>
    <label for="email">Email:</label><br>
    <input type="text" id="email" name="email" ref="useremail"><br>
    <label for="password">Password:</label><br>
    <input type="password" id="password" name="password" ref="userpassword"><br>
    <label for="confpw">Confirm password:</label><br>
    <input type="password" id="confpw" name="confpw" ref="userconfpw"><br>
    <label for="file">Ajouter une photo</label><br>
    <input type="file" class="input-file" id="file" name="file" ref="userimg"><br>
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
                

                console.log(this.$refs.userfirstname.value);

                var postFormData = new FormData(); // CREATION DU PAYLOAD A ENVOYER
                postFormData.append('prenom', this.$refs.userfirstname.value);
                postFormData.append('nom', this.$refs.userlastname.value);
                postFormData.append('email', this.$refs.useremail.value);
                postFormData.append('password', this.$refs.userpassword.value);
                postFormData.append('file', this.$refs.userimg.files[0]);

                
                console.log("payload:" + postFormData);
                fetch('http://localhost:4000/api/auth/signup', {     // CREATION DE LA REQUETTE A ENVOYER A L'API
                    method: 'POST',
                    body: postFormData
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

.input-file{
    margin: auto;
}

</style>