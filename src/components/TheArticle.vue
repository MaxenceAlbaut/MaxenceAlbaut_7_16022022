<template>

<div class="theArticleContainer">
    <UserMiniProfile></UserMiniProfile>
    <div class="theArticleContent">
        <div class="content">content</div>
        <CommentSection></CommentSection>
    </div>
</div>


</template>

<script>
import CommentSection from '@/components/CommentSection.vue'
import UserMiniProfile from '@/components/UserMiniProfile.vue'

export default {
    name: 'TheArticle',
    components: {CommentSection, UserMiniProfile}
}

</script>

<style scoped>

.theArticleContainer {
    display: flex;
    justify-content: space-between;
    border: 4px solid green;
    margin: 10px;
    height: 120px;
    padding: 10px;
}

.theArticleContent {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    border: 1px solid white;
    margin: 3px;
    width: 80%; 
}

.content {
    border: 1px solid black;
    width: 95%;
    margin-bottom: 10px;
}

</style>