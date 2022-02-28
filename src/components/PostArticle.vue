<template>

<div class="postArticle">
    <div class="PostContentContainer">
        <input type="text" class="PostArticleContent" placeholder="Redigez votre article ici..." ref="content">
    </div>
    <PostArticleButton @click="postArticle"></PostArticleButton>
</div>

</template>

<script>
import PostArticleButton from '@/components/PostArticleButton.vue'

export default {
    name: 'PostArticle',
    components: {PostArticleButton},
    methods: {
        postArticle(event) {
            let jwt = window.sessionStorage.getItem('jwt');
            let userId = window.sessionStorage.getItem('userId');

            var post = {    // CREATION DU PAYLOAD A ENVOYER
                user_id: userId,
                text_content: this.$refs.content.value
            };

            fetch('http://localhost:4000/api/article/', {     // CREATION DE LA REQUETTE A ENVOYER A L'API
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${jwt}`
                },
                body: JSON.stringify(post),
            })
            .then(response => response.json())
                .then(data => {
                    console.log("Response : ", data);
                    this.$router.go() // rafraichi la page

                })
            .catch(error => {
                console.error('Error :', error);
            });


        }
    }
    
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