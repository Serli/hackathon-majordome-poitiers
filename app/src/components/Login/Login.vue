<template>
    <div class="ptm">
        <div id="round-login" class="center mtm">
            <div id="round-login-camera"></div>
            <div id="round-login-baby"></div>
        </div>
        <div class="txtcenter">
            <button class="pas prm plm mtm w90 center">
                <router-link :to="'stream'">Démarrer</router-link>
            </button>
            <!--<br/>Connectez-vous à une surveillance existante<br/>-->
            <hr id="login-sep" class="mtm mbs"/>
            <!--<form method="post" id="login-form" class="w90 center mtm" @submit.prevent="catchSubmit">-->
                <!--Rejoindre une surveillance-->
                <!--<input type="text" name="user_id" class="pas plm prm mbm mtm txtcenter" placeholder="Identifiant"/>-->
                <!--<button class="pas prm plm w100" type="submit">-->
                    <!--Se connecter-->
                <!--</button>-->
            <!--</form>-->
            <button class="pas prm plm mts w90 center">
                <router-link :to="{
                    name: 'listen',
                    params: {
                        room: 'default'
                    }
                }">Surveiller
                </router-link>
            </button>
        </div>
    </div>
</template>
<script src="./Login.script.js"></script>
<style src="./Login.style.css"></style>kill
