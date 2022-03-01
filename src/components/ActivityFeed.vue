<template>

<div class="activityFeedContainer">


    <div v-for="article in articles" class="theArticleContainer">


        <div class="userMiniProfile">
            <img alt="User Photo" :src="`../backend/${article.u_img_path}`">
            <div>{{ article.prenom }} {{ article.nom }}</div>
        </div>


        <div class="theArticleContent">
            <div class="content">{{ article.a_text_content }}</div>

            <template v-for="comment in comments">
                <div v-if="article.a_id == comment.c_article_id" class="commentContainer">
                    <div class="userName">{{ comment.prenom }} {{ comment.nom }}</div>
                    <div class="commentContent">{{ comment.c_text_content }}</div>
                </div>
            </template>

            <div class="postComment">
                <input type="text" class="PostCommentContent" placeholder="Redigez votre commentaire ici..." ref="commentcontent">
                <PostCommmentButton @click="postComment" ref="cbtn"></PostCommmentButton>
                <div class="invisible">{{article.a_id}}</div>
            </div>

        </div>

        <div class="deleteArticle" v-if="(article.u_id == userId) || (userId == 1)" @click="deleteArticle">x</div>
        <div class="invisible">{{article.a_id}}</div>

    </div>


</div>


</template>

<script>
import PostCommmentButton from "./PostCommmentButton.vue";

export default {
    name: "ActivityFeed",
    components: { PostCommmentButton },
    data() {
        return {
            articles: [],
            comments: [],
            userId: window.sessionStorage.getItem('userId'),
            jwt: window.sessionStorage.getItem('jwt')
        };
    },
    methods: {
        postComment(event) {

            var post = {    // CREATION DU PAYLOAD A ENVOYER
                user_id: this.userId,
                text_content: event.path[0].previousSibling.value,
                article_id: event.path[0].nextSibling.innerHTML
            };

            fetch('http://localhost:4000/api/comment/', {     // CREATION DE LA REQUETTE A ENVOYER A L'API
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${this.jwt}`
                },
                body: JSON.stringify(post),
            })
                .then(response => response.json())
                    this.$router.go()
        },
        deleteArticle (event) {
            var post = {    // CREATION DU PAYLOAD A ENVOYER
                user_id: this.userId,
                article_id: event.path[0].nextSibling.innerHTML
            };

            let url = `http://localhost:4000/api/article/${event.path[0].nextSibling.innerHTML}`;

            fetch(url, {     // CREATION DE LA REQUETTE A ENVOYER A L'API
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${this.jwt}`
                },
                body: JSON.stringify(post),
            })
                .then(response => response.json())
                    this.$router.go()
        }
    },
    created() {
        let jwt = window.sessionStorage.getItem("jwt");
        let fetchArticles = "http://localhost:4000/api/article/";
        let fetchComments = "http://localhost:4000/api/comment/";
        fetch(fetchArticles, {
            method: "GET",
            mode: "cors",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${jwt}`
            }
        })
            .then(response => response.json())
            .then(articles => {
            // Met a jour la data de facon reactive
            //articles.forEach((article) => this.articles.push(article));
            for (let i = 0; i < articles.result.length; i++) {
                this.articles.push(articles.result[i]);
            }
        })
            .catch(error => {
            console.log(error);
        });
        fetch(fetchComments, {
            method: "GET",
            mode: "cors",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${jwt}`
            }
        })
            .then(response => response.json())
            .then(comments => {
            // Met a jour la data de facon reactive
            for (let i = 0; i < comments.result.length; i++) {
                this.comments.push(comments.result[i]);
            }
        })
            .catch(error => {
            console.log(error);
        });
    }
}





</script>

<style scoped>

.activityFeedContainer {
    width: 90%;
    border: 2px solid red;
    margin: 30px auto 30px auto;
}

.theArticleContainer {
    display: flex;
    justify-content: space-between;
    border: 4px solid green;
    margin: 10px;
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

.userMiniProfile {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border: 2px solid purple;
    height: 80px;
    margin: auto 10px auto 10px;
}

.userMiniProfile img {
    height: 40px;
    width: 40px;
    border-radius: 50%;
    margin-bottom: 10px;
}

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
    margin: 10px 0 10px 0;
    border: 1px solid red;
    width: 90%;
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

.invisible {
    display: none;
}

.deleteArticle {
    width: 15px;
    height: 15px;
    border-radius: 3px;
    background-color: rgb(153, 69, 69);
    color: black;
    text-align: center;
    line-height: 15px;
}

.deleteArticle:hover {
    cursor: pointer;
}
</style>