import config from '../../config';
let socket = null;
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
      easyrtc.setVideoDims(320, 480);
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
    this.$nextTick(() => {
      easyrtc.setVideoDims(window.innerWidth, window.innerHeight);
    });
    socket = io(config.rest.url);
    socket.on('alert-children', (msg) => {

      if ('Notification' in window) {
        Notification.requestPermission(function (status) {
          switch (status) {
            case 'granted':
              var msg = new Notification('Alerte !!! ', {
                body: 'Un enfant est dans la zone dangereuse !!',
                icon: require('../../assets/img/logo.png')
              });
              // navigator.serviceWorker.ready.then(function(registration) {
              //   registration.showNotification('Notification with ServiceWorker');
              // });

              break;
            default:
              alert('Un enfant est dans la zone dangereuse !!')
          }

        });
        const show = window.speechSynthesis && SpeechSynthesisUtterance;
        if (show) {
          const msg = new SpeechSynthesisUtterance('Attention votre enfant est dans la zone dangereuse !!!');
          window.speechSynthesis.speak(msg);
        }

      }
    });
  },
  destroyed(){
    socket = null;
  }

}
