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
    background-color: #2c3e50;
    height: 30px;
    width: 120px;
    font-weight: bold;
    color: white;
    margin: 20px 0 20px 0;
    border-radius: 15px;
    border: none;
}

button:hover {
    cursor: pointer;
    transform: scale(1.1);
    transition-duration: 0.1s;
}

</style>