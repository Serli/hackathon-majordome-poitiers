import Vue from 'vue';
import config from '../../config';

export default  {
    name: 'rtc',
    methods: {
        connect() {
            easyrtc.setSocketUrl(config.server.url);
            easyrtc.enableDebug(false);
            easyrtc.setVideoDims(window.innerWidth, window.innerHeight);
            easyrtc.easyApp("easyrtc.videoChatHd", "stream", [], this.loginSuccess, this.loginFailure);
        }
    },

    mounted() {
        this.connect()
    }
}
