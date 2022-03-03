<template>

<div class="activityFeedContainer">


    <div v-for="article in articles" class="theArticleContainer">


        <div class="userMiniProfile" @click="toUser">
            <div class="invisible">{{article.a_user_id}}</div>
            <img class="userMiniImg" alt="User Photo" :src="`../backend/${article.u_img_path}`">
            <div class="userMiniName">{{ article.prenom }} {{ article.nom }}</div>
        </div>


        <div class="theArticleContent">
            <div class="content">{{ article.a_text_content }}</div>


            <div class="comments">
                <template v-for="comment in comments">
                    <div v-if="article.a_id == comment.c_article_id" class="commentContainer">
                        <div class="userName">{{ comment.prenom }} {{ comment.nom }}</div>
                        <div class="commentContent">{{ comment.c_text_content }}</div>
                        <div class="delete" v-if="(comment.c_user_id == userId) || (userId == 1)" @click="deleteComment">x</div>
                        <div class="invisible">{{comment.c_id}}</div>
                    </div>
                </template>
            </div>

            

            <div class="postComment">
                <textarea class="postCommentContent" placeholder="Redigez votre commentaire ici..." ref="commentcontent"></textarea>
                <PostCommmentButton @click="postComment" ref="cbtn"></PostCommmentButton>
                <div class="invisible">{{article.a_id}}</div>
            </div>

        </div>

        <div class="delete" v-if="(article.u_id == userId) || (userId == 1)" @click="deleteArticle">x</div>
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
            if (event.path[0].previousSibling.value) {
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
                }
        },
        deleteArticle (event) {
            let url = `http://localhost:4000/api/article/${event.path[0].nextSibling.innerHTML}`;

            fetch(url, {     // CREATION DE LA REQUETTE A ENVOYER A L'API
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${this.jwt}`
                }
            })
                .then(response => response.json())
                    this.$router.go()
        },
        deleteComment (event) { 
            let url = `http://localhost:4000/api/comment/${event.path[0].nextSibling.innerHTML}`;

            fetch(url, {     // CREATION DE LA REQUETTE A ENVOYER A L'API
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${this.jwt}`
                }
            })
                .then(response => response.json())
                    this.$router.go()
        },
        toUser (event){
            
                let id = event.path[0].firstChild.innerHTML;
                this.$router.push({
                    path: `/user/${id}`
                });
            
            
        }
    },
    created() {
        let fetchArticles = "http://localhost:4000/api/article/";
        let fetchComments = "http://localhost:4000/api/comment/";
        fetch(fetchArticles, {
            method: "GET",
            mode: "cors",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${this.jwt}`
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
                "Authorization": `Bearer ${this.jwt}`
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
    width: 96%;
    border: 1px solid rgb(184, 184, 184);
    margin: 20px auto auto auto;
    border-radius: 6px;
    box-shadow: 0 2px 10px -6px rgb(105, 105, 105);
    background-color: rgb(241, 251, 255);
}

.theArticleContainer {
    display: flex;
    justify-content: space-between;
    border: 1px solid rgb(184, 184, 184);
    box-shadow: 0 2px 10px -6px rgb(105, 105, 105);
    background-color: rgb(246, 246, 246);
    margin: 20px;
    padding: 10px;
}

.theArticleContent {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    border-left: 2px solid white;
    margin: 3px;
    width: 80%; 
    text-overflow: wrap;
    overflow-wrap: break-word;
}

.content {
    background-color: white;
    width: 96%;
    margin-bottom: 10px;
    text-align: left;
    border-radius: 10px;
    padding: 6px 4px 4px 6px;
    box-shadow: inset 0 0 4px grey;
}

.userMiniProfile {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: white;
    box-shadow: inset 0 0 4px grey;
    height: 100px;
    width: 15%;
    margin: auto 10px auto 10px;
    font-size: 18px;
    padding: 10px;
}

.userMiniProfile:hover {
    cursor: pointer;
    transform: scale(1.05);
    transition-duration: 0.1s;

}
.userMiniImg, .userMiniName {
    pointer-events: none;
}

.userMiniProfile img {
    height: 40px;
    width: 40px;
    border-radius: 50%;
    margin-bottom: 10px;
    border: 1px solid rgb(184, 184, 184);
}

.comments {
    display: flex;
    flex-direction: column;
    width: 96%;
}

.commentContainer {
    display: flex;
    box-shadow: 0 0 10px 1px grey;
    padding: 4px;
    border-radius: 5px;
    justify-content: space-around;
    align-items: center;
    margin: 10px 0 10px 0;
    width: 96%;
}

.userName {
    display: flex;
    margin: auto;
    width: 20%;
    margin-right: 10px;
}

.commentContent {
    width: 80%;
    text-align: left;
    border-radius: 10px;
    padding: 6px 4px 4px 6px;
    text-overflow: wrap;
    overflow-wrap: break-word;
    box-shadow: inset 0 0 4px grey;
}

.postComment {
    display: flex;
    width: 96%;
    justify-content: space-between;
    align-items: center;
}

.postCommentContent {
    margin: 10px 10px 0 0;
    border-radius: 10px;
    border: 1px solid rgb(184, 184, 184);
    background-color: rgb(255, 255, 255);
    height: 60px;
    width: 80%;
    text-overflow: wrap;
    overflow-wrap: break-word;
    padding: 6px 4px 4px 6px;
}

.invisible {
    display: none;
}

.delete {
    width: 15px;
    height: 15px;
    border-radius: 3px;
    background-color: rgb(209, 209, 209);
    border: 1px solid black;
    color: black;
    text-align: center;
    line-height: 15px;
    margin-left: 4px
}

.delete:hover {
    cursor: pointer;
    background-color: rgb(153, 69, 69);;
}

@media (max-device-width: 660px) {

    .activityFeedContainer {
        width: 100%;
        border-left: none;
        border-right: none;
        border-radius: 0;
    }
    .commentContainer {
        flex-direction: column;
        justify-content: center;
        align-items: center;
        position: relative;
        margin-left: 6px;
    }
    .userName {
        width: 100%;
        margin-bottom: 4px;
    }

    .postComment {
        display: flex;
        flex-direction: column;
    }

    .postCommentContent {
        width: 96%;
        margin: 10px 10px 0 5%;
    }
    
    .commentContainer .delete {
        margin-top: 6px;
        align-self: flex-end;
    }
}

</style>