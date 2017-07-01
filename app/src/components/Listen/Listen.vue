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
                <div class="grid-zone"></div>
                <div class="grid-zone"></div>
                <div class="grid-zone"></div>
            </div>
            <div class="grid-3">
                <div class="grid-zone"></div>
                <div class="grid-zone"></div>
                <div class="grid-zone"></div>
            </div>
            <div class="grid-3">
                <div class="grid-zone"></div>
                <div class="grid-zone"></div>
                <div class="grid-zone"></div>
            </div>
        </div>
    </div>
</template>
<script src="./Listen.script.js"></script>
<style src="./Listen.style.css"></style>