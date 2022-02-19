<template>
    <div class="forum">
        <h1>Forum</h1>
        <PageHeader></PageHeader>
        <PostArticle></PostArticle>
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
</style>