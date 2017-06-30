import config from '../../config'

export default  {
    name: 'rtc',

    methods: {
        connect()
        {
            easyrtc.setSocketUrl(config.server.url)
            easyrtc.enableDebug(config.server.debug)
            easyrtc.easyApp("easyrtc.videoChatHd", "selfVideo", ["callerVideo"], this.loginSuccess, this.loginFailure)
        },
    },

    mounted() {
        this.connect()
    }
}