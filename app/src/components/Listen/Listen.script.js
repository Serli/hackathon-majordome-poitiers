import config from '../../config';

export default  {
    name: 'listen',

    data() {
        return {
            selfEasyrtcid: null
        }
    },

    methods: {

        connect() {
            easyrtc.setSocketUrl(config.server.url);
            easyrtc.enableDebug(false);
            easyrtc.setVideoDims(window.innerWidth, window.innerHeight);
            easyrtc.easyApp("easyrtc.videoChatHd", "selfVideo", ["callerVideo"], this.loginSuccess, this.loginFailure);
        },

        loginSuccess(easyrtcid)
        {
        },

        loginFailure(errorCode, message)
        {
        },
    },

    mounted()
    {
        this.connect()
        easyrtc.setAcceptChecker(function (caller, cb) {
            cb(true);
        })
    }
}
