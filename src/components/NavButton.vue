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

<style >
.navButton {
    background-color: rgb(174, 209, 255);
    font-weight: bold;
    width: 100%;
    height: 26px;
    border: 2px solid rgb(134, 183, 248);
    border-radius: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
}
.navButton:hover {
    cursor: pointer;
    transform: scale(1.02);
    transition-duration: 0.1s;
}
</style>