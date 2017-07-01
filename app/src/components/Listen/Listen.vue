<template>
    <div>
        <div id="connectControls">
            <div id="iam">Pas encore connecté...</div>
            <br />
            <strong>Utilisateurs connectés:</strong>
            <div id="otherClients"></div>
        </div>
        <div id="videos">

            <div style="position:relative;float:left;" width="1282" height="722">
                <video autoplay="autoplay" id="callerVideo"></video>
                <video  class="easyrtcMirror" autoplay="autoplay" id="selfVideo" muted="true" volume="0" ></video>
            </div>
        </div>
        <div id="grid">
            <div class="grid-3">
                <div class="grid-zone" @click="onClickZone(1)"></div>
                <div class="grid-zone" @click="onClickZone(2)"></div>
                <div class="grid-zone" @click="onClickZone(3)"></div>
            </div>
            <div class="grid-3">
                <div class="grid-zone" @click="onClickZone(4)"></div>
                <div class="grid-zone" @click="onClickZone(5)"></div>
                <div class="grid-zone" @click="onClickZone(6)"></div>
            </div>
            <div class="grid-3">
                <div class="grid-zone" @click="onClickZone(7)"></div>
                <div class="grid-zone" @click="onClickZone(8)"></div>
                <div class="grid-zone" @click="onClickZone(9)"></div>
            </div>
            <div class="grid-3">
                <div class="grid-zone" @click="onClickZone(10)"></div>
                <div class="grid-zone" @click="onClickZone(11)"></div>
                <div class="grid-zone" @click="onClickZone(12)"></div>
            </div>
            <div class="grid-3">
                <div class="grid-zone" @click="onClickZone(13)"></div>
                <div class="grid-zone" @click="onClickZone(14)"></div>
                <div class="grid-zone" @click="onClickZone(15)"></div>
            </div>
        </div>
    </div>
</template>
<script src="./Listen.script.js"></script>
<style src="./Listen.style.css"></style>