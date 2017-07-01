<template>
    <div>
        <video id="localVideo"></video>
        <div id="remoteVideos"></div>
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