<template>

<div class="activityFeedContainer">


    <div v-for="article in articles" class="theArticleContainer">


        <div class="userMiniProfile">
            <img alt="User Photo" src="@/assets/icon.png"/>
            <div>{{ article.a_user_id }}</div>
        </div>


        <div class="theArticleContent">
            <div class="content">{{ article.a_text_content }}</div>

            <template v-for="comment in comments">
                <div v-if="article.a_id == comment.c_article_id" class="commentContainer">
                    <div class="userName">{{ comment.c_user_id }}</div>
                    <div class="commentContent">{{ comment.c_text_content }}</div>
                </div>
            </template>

        </div>

    </div>


</div>


</template>

<script>

export default {
    name: 'ActivityFeed',
    data() {
        return {
            articles: [],
            comments: []
        }
    },
    mounted() {
        let jwt = window.sessionStorage.getItem('jwt');
        let fetchArticles = "http://localhost:4000/api/article/";
        let fetchComments = "http://localhost:4000/api/comment/";

        fetch(fetchArticles, {     // RECUPERATION DES ARTICLES
                method: 'GET',
                mode: 'cors',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${jwt}`
                }
            })
            .then(response => response.json())
                .then(articles => {
                    // Met a jour la data de facon reactive

                    //articles.forEach((article) => this.articles.push(article));

                    for (let i = 0 ; i < articles.result.length ; i++) {
                        this.articles.push(articles.result[i]);
                    }
                    console.log(this.articles[0]);
                })
            .catch(error => {
                console.log(error);
            });
        fetch(fetchComments, {     // RECUPERATION DES COMMENTAIRES
                method: 'GET',
                mode: 'cors',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${jwt}`
                }
            })
            .then(response => response.json())
                .then(comments => {
                    // Met a jour la data de facon reactive

                    for (let i = 0 ; i < comments.result.length ; i++) {
                        this.comments.push(comments.result[i]);
                    }
                    console.log(this.comments[0]);
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

</style>