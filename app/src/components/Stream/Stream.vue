<template>
    <div>
        <div id="videos">
            <video autoplay="autoplay" id="callerVideo"></video>
            <video class="easyrtcMirror" autoplay="autoplay" id="selfVideo" muted="true" volume="0" ref="video"></video>
        </div>
      <button @click="capture()">Capture</button>
    </div>
</template>
<script src="./Stream.script.js"></script>
