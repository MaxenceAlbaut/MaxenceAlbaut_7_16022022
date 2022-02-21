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
    background-color: rgb(174, 209, 255);
    font-weight: bold;
    width: 100%;
    height: 26px;
    border: 2px solid rgb(134, 183, 248);
    border-radius: 10px 10px 0 0;
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>