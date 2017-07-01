import config from '../../config';
let socket = null;
export default  {
    name: 'listen',

    data() {
        return {
            selfEasyrtcid: null,
            activeZone: null
        }
    },

    methods: {


        connect()
        {
            easyrtc.setSocketUrl(config.server.url);
            easyrtc.setVideoDims(320, 480);
            easyrtc.setAcceptChecker(function (caller, cb) {
                cb(true);
            })
            easyrtc.enableDebug(true);
            easyrtc.setRoomOccupantListener(this.convertListToButtons);
            easyrtc.easyApp("easyrtc.videoChatHd", "selfVideo", ["callerVideo"], this.loginSuccess, this.loginFailure);
        }
        ,


        clearConnectList()
        {
            // var otherClientDiv = document.getElementById('otherClients');
            // while (otherClientDiv.hasChildNodes()) {
            //     otherClientDiv.removeChild(otherClientDiv.lastChild);
            // }
        }
        ,

        convertListToButtons(roomName, data, isPrimary)
        {
            this.clearConnectList();
            // var otherClientDiv = document.getElementById('otherClients');
            for (var easyrtcid in data) {
                this.performCall(easyrtcid);
            }
        }
        ,


        performCall(otherEasyrtcid)
        {
            easyrtc.hangupAll();
            var successCB = function () {
            };
            var failureCB = function () {
            };
            easyrtc.call(otherEasyrtcid, successCB, failureCB, () => {

            });
        }
        ,

        loginSuccess(easyrtcid)
        {
            this.selfEasyrtcid = easyrtcid;
            // document.getElementById("iam").innerHTML = "I am " + easyrtc.cleanId(easyrtcid);
        }
        ,

        loginFailure(errorCode, message)
        {
            // easyrtc.showError(errorCode, message);
        }
        ,
        onClickZone(zoneId)
        {
            const active = document.querySelector('.grid-zone.active')
            if (active) {
                active.classList.remove('active')
            }
            let item = document.getElementById('grid-zone-' + zoneId)
            item.classList.toggle('active')
            this.capture(zoneId);
        }
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
        // TODO à décommenter pour livraison
        // socket = io.connect('https://www.christophe-genin.net', { path: '/rest/socket.io' });
        socket = io();
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
