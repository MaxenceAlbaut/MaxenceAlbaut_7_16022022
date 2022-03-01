<template>

<div class="userHeader">
    <img alt="Logo Groupomania" src="@/assets/icon.png"/>
    <router-link to="/forum">Forum</router-link>
    <DeleteUserButton></DeleteUserButton>
    <DcButton></DcButton>
    
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
    height: 80px;
    border: 2px solid darkgreen;
    margin-bottom: 30px;
}
img {
    height: 80px;
    width: 80px;
    border-radius: 50%;
}
</style>