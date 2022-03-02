<template>
    <div class="forum">
        <PageHeader></PageHeader>
        <h2>Poster un article</h2>
        <PostArticle></PostArticle>
        <h2>Dernieres publications</h2>
        <ActivityFeed></ActivityFeed>
    </div>
</template>

<script>
import PageHeader from '@/components/PageHeader.vue'
import PostArticle from '@/components/PostArticle.vue'
import ActivityFeed from '@/components/ActivityFeed.vue'

export default {
    name: 'Forum',
    components: {PageHeader, PostArticle, ActivityFeed}
}

</script>

<style scoped>

h2 {
    color: rgb(100, 100, 100);
}
</style>