<template>

<div class="pageHeader">
    <img alt="Logo Groupomania" src="@/assets/icon.png"/>
    <div class="headerMenu">
        <img alt="user photo" src="@/assets/icon.png" />
        <div class="userName">
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
    components: {DcButton}
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