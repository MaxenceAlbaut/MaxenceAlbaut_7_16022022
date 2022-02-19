<template>

<div class="userMiniProfile">
    <img alt="User Photo" src="@/assets/icon.png"/>
    <div>Prenom Nom</div>
</div>

</template>

<script>

export default {
    name: 'UserMiniProfile'
}

</script>

<style scoped>

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
</style>