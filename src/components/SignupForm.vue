<template>

<form id="signupForm">
    <label for="prenom">Prenom:</label><br>   
    <input type="text" id="prenom" name="prenom" ref="userfirstname"><br>
    <div v-if="fieldserror.prenom" class="errormsg">Prenom incorrecte</div>
    <label for="nom">Nom:</label><br>
    <input type="text" id="nom" name="nom" ref="userlastname"><br>
    <div v-if="fieldserror.nom" class="errormsg">Nom incorrecte</div>
    <label for="email">Email:</label><br>
    <input type="text" id="email" name="email" ref="useremail"><br>
    <div v-if="fieldserror.email" class="errormsg">Email incorrecte</div>
    <label for="password">Password:</label><br>
    <input type="password" id="password" name="password" ref="userpassword"><br>
    <label for="confpw">Confirm password:</label><br>
    <input type="password" id="confpw" name="confpw" ref="userconfpw"><br>
    <div v-if="fieldserror.password" class="errormsg">Mot de passe different</div>
    <label for="file">Ajouter une photo</label><br>
    <input type="file" class="input-file" id="file" name="file" ref="userimg"><br>
    <div v-if="fieldserror.img" class="errormsg">Veuillez ajouter une image (png, jpg, jpeg)</div>
    <FormButton text="S'inscrire" @click="signup"></FormButton>
</form>

</template>


<script>
import FormButton from '@/components/FormButton.vue'

export default {
    name: 'SignupForm',
    components: {FormButton},
    data() {
        return {
            fieldserror: {
                prenom: false,
                nom: false,
                email: false,
                password: false,
                img: false
            }
        }
    },
    methods: {
        signup(event) {

            // Verification des champs
            let isValid = true;
            if (!/^[a-z ,.'-]+$/i.test(this.$refs.userfirstname.value)) {
                this.fieldserror.prenom = true;
                isValid = false;
            } else {this.fieldserror.prenom = false;}
            if (!/^[a-z ,.'-]+$/i.test(this.$refs.userlastname.value)) {
                this.fieldserror.nom = true;
                isValid = false;
            } else {this.fieldserror.nom = false;}
            if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(this.$refs.useremail.value)) {
                this.fieldserror.email = true;
                isValid = false;
            } else {this.fieldserror.email = false;}
            if (this.$refs.userpassword.value != this.$refs.userconfpw.value) {
                this.fieldserror.password = true;
                isValid = false;
            } else {this.fieldserror.password = false;}
            if (!/.(?:jpg|jpeg|png)$/.test(this.$refs.userimg.value)) {
                this.fieldserror.img = true;
                isValid = false;
            } else {this.fieldserror.img = false;}

            if (isValid) {
                
                var postFormData = new FormData(); // CREATION DU PAYLOAD A ENVOYER
                postFormData.append('prenom', this.$refs.userfirstname.value);
                postFormData.append('nom', this.$refs.userlastname.value);
                postFormData.append('email', this.$refs.useremail.value);
                postFormData.append('password', this.$refs.userpassword.value);
                postFormData.append('file', this.$refs.userimg.files[0]);

                fetch('http://localhost:4000/api/auth/signup', {     // CREATION DE LA REQUETTE A ENVOYER A L'API
                    method: 'POST',
                    body: postFormData
                })
                .then(response => response.json())
                    .then(data => {
                        if (data.message == 'Utilisateur cree') {
                                this.$router.push({
                                name: 'Login'
                            });
                        }
                    })
                .catch(error => {
                    console.error('Error :', error);
                });
            }
        }
    }
}
</script>