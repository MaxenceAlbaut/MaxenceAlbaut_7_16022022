<template>

<div class="userHeader">
    <img alt="Logo Groupomania" src="../assets/icon.png"/>
    <router-link to="/forum">Forum</router-link>
    <DcButton></DcButton>
    <DeleteUserButton></DeleteUserButton>
    
    
</div>

</template>

<script>

import DcButton from '@/components/DcButton.vue' 
import DeleteUserButton from '@/components/DeleteUserButton.vue'

export default {
    name: 'UserHeader',
    components: {DcButton, DeleteUserButton}
}

</script>

<style scoped>
.userHeader {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 80px;
    margin-bottom: 30px;
    border-bottom: 3px solid rgb(184, 184, 184);;
}
img {
    height: 80px;
    width: 80px;
    border-radius: 50%;
}
</style>