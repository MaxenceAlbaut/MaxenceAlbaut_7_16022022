<template>

<div class="pageHeader">
    <img alt="Logo Groupomania" src="@/assets/icon.png"/>
    <div class="headerMenu">
        <img alt="user photo" :src="userImg" />
        <div id="userName">
            {{ fullname }}
        </div>
        <DcButton></DcButton>
    </div>
</div>

</template>

<script>

import DcButton from '@/components/DcButton.vue'


export default {
    name: 'PageHeader',
    components: {DcButton},
    data() {
        return {
            fullname: String,
            userImg: String
        }
    },
    created(){
        let userId = window.sessionStorage.getItem('userId');
        let jwt = window.sessionStorage.getItem('jwt');
        let fetchurl = "http://localhost:4000/api/auth/" + userId;
        console.log("fetching : " + fetchurl);

       
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
                console.log("debug2");
                this.$router.push({name: 'Login'});
            });
    }
}

</script>

<style scoped>
.pageHeader {
    display: flex;
    justify-content: space-between;
    height: 80px;
    border: 2px solid darkgreen;
    margin-bottom: 30px;
}
img {
    height: 80px;
    width: 80px;
}
.headerMenu {
    background-color: lightgreen;
    width: 30%;
    min-width: 250px;
    display: flex;
    justify-content: space-around;
    align-items: center;

}
.headerMenu img {
    height: 60px;
    width: 60px;
    border-radius: 50%;
}
</style>