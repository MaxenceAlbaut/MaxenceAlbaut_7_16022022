<template>

<div class="postArticle">
    <textarea class="PostArticleContent" placeholder="Redigez votre article ici..." ref="content"></textarea>
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
            if (this.$refs.content.value) {
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
}
</script>

<style scoped>

.postArticle {
    width: 96%;
    border: 1px solid rgb(184, 184, 184);
    margin-bottom: 30px;
    margin: auto;
    border-radius: 6px;
    box-shadow: 0 2px 10px -6px rgb(105, 105, 105);
    background-color: rgb(241, 251, 255);
    display: flex;
    flex-direction: column;
    align-items: center;
}


.PostArticleContent {
    margin-top: 16px;
    border-radius: 10px;
    border: 1px solid rgb(184, 184, 184);
    background-color: rgb(255, 255, 255);
    height: 60px;
    width: 80%;
    min-width: 340px;
    text-overflow: wrap;
    padding: 6px 4px 4px 6px;
}

.addImg {
    border-radius: 30%;
    height: 80px;
    width: 60px;
    background-color: white;
    padding-top: 20px;
}

@media (max-device-width: 660px) {

    .postArticle {
        width: 100%;
        border-left: none;
        border-right: none;
        border-radius: 0;
    }
}

</style>