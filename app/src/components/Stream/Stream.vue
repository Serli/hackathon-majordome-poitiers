<template>
    <div>
        <!--<button style="position: absolute; z-index: 9000;" @click="capture()">Capture</button>-->
        <video class="easyrtcMirror" autoplay="autoplay" id="stream" muted="true" volume="0" ref="video"></video>
        <div id="grid">
            <div class="grid-5">
                <div class="grid-zone" @click="onClickZone(1)"></div>
                <div class="grid-zone" @click="onClickZone(2)"></div>
                <div class="grid-zone" @click="onClickZone(3)"></div>
                <div class="grid-zone" @click="onClickZone(4)"></div>
                <div class="grid-zone" @click="onClickZone(5)"></div>
            </div>
            <div class="grid-5">
                <div class="grid-zone" @click="onClickZone(6)"></div>
                <div class="grid-zone" @click="onClickZone(7)"></div>
                <div class="grid-zone" @click="onClickZone(8)"></div>
                <div class="grid-zone" @click="onClickZone(9)"></div>
                <div class="grid-zone" @click="onClickZone(10)"></div>
            </div>
            <div class="grid-5">
                <div class="grid-zone" @click="onClickZone(11)"></div>
                <div class="grid-zone" @click="onClickZone(12)"></div>
                <div class="grid-zone" @click="onClickZone(13)"></div>
                <div class="grid-zone" @click="onClickZone(14)"></div>
                <div class="grid-zone" @click="onClickZone(15)"></div>
            </div>
            <div class="grid-5">
                <div class="grid-zone" @click="onClickZone(16)"></div>
                <div class="grid-zone" @click="onClickZone(17)"></div>
                <div class="grid-zone" @click="onClickZone(18)"></div>
                <div class="grid-zone" @click="onClickZone(19)"></div>
                <div class="grid-zone" @click="onClickZone(20)"></div>
            </div>
            <div class="grid-5">
                <div class="grid-zone" @click="onClickZone(21)"></div>
                <div class="grid-zone" @click="onClickZone(22)"></div>
                <div class="grid-zone" @click="onClickZone(23)"></div>
                <div class="grid-zone" @click="onClickZone(24)"></div>
                <div class="grid-zone" @click="onClickZone(25)"></div>
            </div>
        </div>
    </div>
</template>
<script src="./Stream.script.js"></script>
<style src="./Stream.style.css"></style>
