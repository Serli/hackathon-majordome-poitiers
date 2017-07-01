<template>
    <div>
        <!--<button style="position: absolute; z-index: 9000;" @click="capture()">Capture</button>-->
        <video class="easyrtcMirror" autoplay="autoplay" id="stream" muted="true" volume="0" ref="video"></video>
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

        </div>
    </div>
</template>
<script src="./Stream.script.js"></script>
<style src="./Stream.style.css"></style>
