<template>

<div class="navButton">
    {{text}}
</div>


</template>

<script>

export default {
    name: 'NavButton',
    props: {
        text: String
    }
}
</script>

<style>
.navButton {
    background-color: magenta;
    font-weight: bold;
    width: 100px;
    border: 2px solid red;
}
</style>