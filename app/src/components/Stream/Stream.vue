<template>
    <div>
        <button style="position: absolute; z-index: 9000;" @click="capture()">Capture</button>
        <video class="easyrtcMirror" autoplay="autoplay" id="stream" muted="true" volume="0" ref="video"></video>
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
<script src="./Stream.script.js"></script>
<style src="./Stream.style.css"></style>
