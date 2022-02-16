<template>

<form>
    <label for="email">Email:</label><br>
    <input type="text" id=email name="email"><br>
    <label for="password">Password:</label><br>
    <input type="text" id=password name="password"><br>
    <FormButton text="Se connecter"></FormButton>
</form>


</template>



<script>
import FormButton from '@/components/FormButton.vue'

export default {
    name: 'LoginForm',
    components: {FormButton}
}

</script>



<style scoped>
form {
    background-color: lightblue;
}
</style>