<template>

<div class="postArticle">
    <div class="PostContentContainer">
        <input type="text" class="PostArticleContent" placeholder="Redigez votre article ici...">
        <div class="addImg">Ajouter une image</div>
    </div>
    <PostArticleButton></PostArticleButton>
</div>

</template>

<script>
import PostArticleButton from '@/components/PostArticleButton.vue'

export default {
    name: 'PostArticle',
    components: {PostArticleButton}
}
</script>

<style scoped>

.postArticle {
    width: 90%;
    border: 2px solid red;
    margin-bottom: 30px;
    margin: auto;
}

.PostContentContainer {
    display: flex;
    justify-content: space-around;
}

.PostArticleContent {
    height: 100px;
    width: 300px;
}

.addImg {
    border-radius: 30%;
    height: 80px;
    width: 60px;
    background-color: white;
    padding-top: 20px;
}

</style>