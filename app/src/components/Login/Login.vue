<template>
    <div class="ptl">
        <div id="round-login" class="center mtl">
            <div id="round-login-camera"></div>
            <div id="round-login-baby"></div>
        </div>
        <div class="txtcenter">
            <button class="pas prm plm mtl">
                <router-link :to="'stream'">Démarrer une surveillance</router-link>
            </button>
        </div>
    </div>
</template>
<script src="./Login.script.js"></script>
<style src="./Login.style.css"></style>kill