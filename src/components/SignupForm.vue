<template>

<form>
    <label for="nom">Nom:</label><br>
    <input type="text" id=nom name="nom"><br>
    <label for="prenom">Prenom:</label><br>   
    <input type="text" id=prenom name="prenom"><br>
    <label for="email">Email:</label><br>
    <input type="text" id=email name="email"><br>
    <label for="password">Password:</label><br>
    <input type="text" id=password name="password"><br>
    <label for="confpw">Confirm password:</label><br>
    <input type="text" id=confpw name="confpw"><br>
    <FormButton text="S'inscrire"></FormButton>
</form>


</template>



<script>
import FormButton from '@/components/FormButton.vue'

export default {
    name: 'SignupForm',
    components: {FormButton}
}

</script>



<style scoped>
form {
    background-color: lightblue;
}
</style>