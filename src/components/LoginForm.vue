<template>

<form>
    <label for="email">Email:</label><br>
    <input type="text" id=email name="email" ref="useremail"><br> 
    <label for="password">Password:</label><br>
    <input type="password" id=password name="password" ref="userpassword"><br>
    <FormButton text="Se connecter" @click="login"></FormButton>
</form>

</template>


<script>
import FormButton from '@/components/FormButton.vue';

export default {
    name: 'LoginForm',
    components: {FormButton},
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
                })
            .catch(error => {
                console.error('Error :', error);
            });
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