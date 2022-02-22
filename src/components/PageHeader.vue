<template>

<div class="pageHeader">
    <img alt="Logo Groupomania" src="@/assets/icon.png"/>
    <div class="headerMenu">
        <img alt="user photo" src="@/assets/icon.png" />
        <div class="userName" id="userName">
            Prenom Nom
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
    mounted(){
        let updatedUsername = document.getElementById('userName');
        let urlParams = window.location.href.split('forum/')[1];
        let jwt = window.sessionStorage.getItem('jwt');
        let fetchurl = "http://localhost:4000/api/auth/" + urlParams;
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
                    // UPDATE LE USERNAME DANS LE HEADER
                    if (data.response.prenom && data.response.nom) {
                        let fullname = `${data.response.prenom} ${data.response.nom}`;
                        updatedUsername.innerHTML = `${fullname}`;
                    }
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