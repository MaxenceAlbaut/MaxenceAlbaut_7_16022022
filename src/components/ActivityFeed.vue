<template>

<div class="activityFeedContainer">

    <TheArticle v-for="article in articleArray" :articleId="article.id"> {{ article }}</TheArticle>

</div>


</template>

<script>
import TheArticle from '@/components/TheArticle.vue'

export default {
    name: 'ActivityFeed',
    components: {TheArticle},
    data() {
        return {
            articleArray: []
        }
    },
    mounted() {
        let jwt = window.sessionStorage.getItem('jwt');
        let fetchurl = "http://localhost:4000/api/article/";

        fetch(fetchurl, {     // CREATION DE LA REQUETTE A ENVOYER A L'API
                method: 'GET',
                mode: 'cors',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${jwt}`
                }
            })
            .then(response => response.json())
                .then(data => {
                    // Met a jour la data de l'objet de facon reactive

                    for (let i = 0 ; i < data.result.length ; i++) {
                        console.log(data.result[i]);
                        this.articleArray.push(data.result[i]);
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

</style>