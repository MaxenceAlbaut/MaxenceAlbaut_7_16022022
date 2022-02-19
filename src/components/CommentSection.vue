<template>

<div class="commentSection">
    <!-- v-for .... -->
    <div class="commentContainer">
        <div class="userName">userName</div>
        <div class="commentContent">commentContent</div>
    </div>
</div>

</template>

<script>

export default {
    name: 'CommentSection'
}

</script>

<style scoped>

.commentSection {
    display: flex;
    flex-direction: column;
    border: 1px solid black;
    width: 90%;
    margin-left: 5%;
}

.commentContainer {
    display: flex;

    justify-content: space-around;
    height: 40px;
    margin: 10px 0 10px 0;
}

.userName {
    display: flex;
    margin: auto;
    border: 1px solid black;
}

.commentContent {
    width: 80%;
    border: 1px solid black;
    text-align: left;
}

</style>