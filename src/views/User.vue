<template>
    <div class="user">
        <h1>User</h1>
        <UserHeader> </UserHeader>
        <div class="userProfile">
            <img alt="user photo" :src="userImg" />
            <div class="username">{{ fullname }}</div>
        </div>
        <h1>Vos articles</h1>
        <UserArticles></UserArticles>
    </div>
</template>

<script>
import UserHeader from '@/components/UserHeader.vue';
import UserArticles from '@/components/UserArticles.vue';


export default {
    name: 'PageHeader',
    components: { UserHeader, UserArticles },
    data() {
        return {
            fullname: String,
            userImg: String,
            currentUserId: window.sessionStorage.getItem('userId')
        }
    },
    created(){
        let jwt = window.sessionStorage.getItem('jwt');
        let urlId = window.location.href.split('user/')[1];

        console.log(urlId);

        let fetchurl = "http://localhost:4000/api/auth/" + urlId;
       
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
                    console.log(data);
                    this.fullname = `${data.response.prenom} ${data.response.nom}`;
                    this.userImg = `../backend/${data.response.img}`;
                })
            .catch(error => {
                this.$router.push({name: 'Login'});
            });
    }
}



</script>

<style scoped>
</style>