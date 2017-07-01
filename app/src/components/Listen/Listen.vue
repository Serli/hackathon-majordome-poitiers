<template>
    <div>
        <div id="connectControls" style="display: none;">
            <div id="iam">Not yet connected...</div>
            <br/>
            <strong>Connected users:</strong>
            <div id="otherClients"></div>
        </div>
        <div id="actions">
            <a href="#" id="record">

            </a>
            <a href="#" id="share-icon">

            </a>
            <a href="#" id="close-icon"></a>
        </div>
        <video autoplay="autoplay" id="callerVideo" style="display: none;"></video>
        <video class="easyrtcMirror" autoplay="autoplay" id="selfVideo" muted="true" volume="0"></video>
        <div id="grid-listen">
            <div class="grid-3">
                <div class="grid-zone" @click="onClickZone(1)" id="grid-zone-1"></div>
                <div class="grid-zone" @click="onClickZone(2)" id="grid-zone-2"></div>
                <div class="grid-zone" @click="onClickZone(3)" id="grid-zone-3"></div>
            </div>
            <div class="grid-3">
                <div class="grid-zone" @click="onClickZone(4)" id="grid-zone-4"></div>
                <div class="grid-zone" @click="onClickZone(5)" id="grid-zone-5"></div>
                <div class="grid-zone" @click="onClickZone(6)" id="grid-zone-6"></div>
            </div>
            <div class="grid-3">
                <div class="grid-zone" @click="onClickZone(7)" id="grid-zone-7"></div>
                <div class="grid-zone" @click="onClickZone(8)" id="grid-zone-8"></div>
                <div class="grid-zone" @click="onClickZone(9)" id="grid-zone-9"></div>
            </div>
            <div class="grid-3">
                <div class="grid-zone" @click="onClickZone(10)" id="grid-zone-10"></div>
                <div class="grid-zone" @click="onClickZone(11)" id="grid-zone-11"></div>
                <div class="grid-zone" @click="onClickZone(12)" id="grid-zone-12"></div>
            </div>
            <div class="grid-3">
                <div class="grid-zone" @click="onClickZone(13)" id="grid-zone-13"></div>
                <div class="grid-zone" @click="onClickZone(14)" id="grid-zone-14"></div>
                <div class="grid-zone" @click="onClickZone(15)" id="grid-zone-15"></div>
            </div>
        </div>
    </div>
</template>
<script src="./Listen.script.js"></script>
<style src="./Listen.style.css"></style>