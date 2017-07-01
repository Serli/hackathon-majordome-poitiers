import config from '../../config';

export default  {
    name: 'listen',

    methods: {
        connect() {
            easyrtc.setSocketUrl(config.server.url);
            easyrtc.enableDebug(false);
            easyrtc.setVideoDims(window.innerWidth, window.innerHeight);
            easyrtc.easyApp('easyrtc.videoChatHd', null, ['caller-video'], this.loginSuccess, this.loginFailure);
        }
    },

    mounted() {
        setTimeout(() => {
            this.connect()
        }, 1000)
    }
}
