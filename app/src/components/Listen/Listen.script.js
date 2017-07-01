import config from '../../config';
let socket = null;
export default  {
    name: 'listen',

    methods: {

        connect()
        {
            var webrtc = new SimpleWebRTC({
                // the id/element dom element that will hold "our" video
                localVideoEl: 'stream',
                // the id/element dom element that will hold remote videos
                remoteVideosEl: 'remoteVideos',
                // immediately ask for camera access
                autoRequestMedia: true
            });

            webrtc.on('readyToCall', function () {
                // you can name it anything
                webrtc.joinRoom('default');
            });
        }
        ,

        onClickZone(zoneId)
        {
            this.capture(zoneId);
        }
    },

    mounted()
    {
        this.connect()
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
    }
    ,
    destroyed()
    {
        socket = null;
    }

}
