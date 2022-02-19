<template>

<div class="activityFeedContainer">
    <!-- v-for .... -->
    <TheArticle></TheArticle>
    <TheArticle></TheArticle>
</div>


</template>

<script>
import TheArticle from '@/components/TheArticle.vue'

export default {
    name: 'ActivityFeed',
    components: {TheArticle}
}
</script>

<style scoped>

.activityFeedContainer {
    width: 90%;
    border: 2px solid red;
    margin: 30px auto 30px auto;
}

</style>