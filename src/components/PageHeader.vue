<template>

<div class="pageHeader">
    <img alt="Logo Groupomania" src="@/assets/icon.png"/>
    <div class="headerMenu">
        <div class="userContainer" @click="toUser">
            <img alt="user photo" :src="userImg" />
            <div id="userName">{{ fullname }}</div>
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
            userImg: String,
            userId: window.sessionStorage.getItem('userId')
        }
    },
    created(){
        let jwt = window.sessionStorage.getItem('jwt');
        let fetchurl = "http://localhost:4000/api/auth/" + this.userId;
       
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
    },
    methods: {
        toUser (event){
            this.$router.push({
                path: `/user/${this.userId}`
            });
        }
    }
}

</script>

<style scoped>
.pageHeader {
    display: flex;
    justify-content: space-between;
    height: 70px;
    margin-bottom: 24px;
}
img {
    height: 80px;
    width: 80px;
}
.headerMenu {
    background-color: lightblue;
    width: 40%;
    min-width: 250px;
    border-radius: 0 0 0 10px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    box-shadow: 0 0 10px 1px #2c3e50;
}
.headerMenu img {
    height: 40px;
    width: 40px;
    border-radius: 50%;
    margin-right: 10px;
    border: 2px solid #2c3e50;
}

.userContainer {
    display: flex;
    align-items: center;
    height: 100%;
    margin: 0 10px 0 10px;
}

.userContainer:hover {
    cursor: pointer;
    transform: scale(1.1);
    transition-duration: 0.1s;
}
</style>