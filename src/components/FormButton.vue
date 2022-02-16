<template>

<button type="button">{{text}}</button>

</template>



<script>

export default {
    name: 'FormButton',
    props: {
        text: String
    }
}

</script>



<style scoped>
button {
    background-color: darkblue;
    height: 30px;
    width: 120px;
    font-weight: bold;
    color: white;

}
</style>