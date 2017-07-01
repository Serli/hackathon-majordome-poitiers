import Vue from 'vue';
import config from '../../config';
import VueResource from 'vue-resource';
Vue.use(VueResource);


var start = false;
var zoneIdData;

export default  {
    name: 'rtc',
    methods: {
        connect()
        {
            var webrtc = new SimpleWebRTC({
                // the id/element dom element that will hold "our" video
                localVideoEl: 'localVideo',
                // the id/element dom element that will hold remote videos
                remoteVideosEl: 'remoteVideos',
                // immediately ask for camera access
                autoRequestMedia: true
            });

            webrtc.on('readyToCall', function () {
                // you can name it anything
                webrtc.joinRoom('default');
            });
        },
        capture(zoneId) {
          console.log(zoneId);
          const video = this.$refs.video;
          const canvas = document.createElement("canvas");
          canvas.width = video.videoWidth;
          canvas.height = video.videoHeight;
          canvas.getContext('2d').drawImage(video, 0, 0, canvas.width, canvas.height);

          // formData.append('image.png', );
          canvas.toBlob((blob) => {
            const formData = new FormData();
            formData.append('file', blob, 'test.png')
            formData.append('zoneId', zoneId)
            this.$http.post('http://localhost:3000/image', formData).then(response => {
              console.log('ok', response);
            }, response => {
              console.log('ko');
            });
          });
        },
        onClickZone(zoneId) {
          start = true;
          zoneIdData = zoneId;
          //this.capture(zoneId);
        },
        capture(zoneId) {
            console.log(zoneId);
            const video = this.$refs.video;
            const canvas = document.createElement("canvas");
            canvas.width = video.videoWidth;
            canvas.height = video.videoHeight;
            canvas.getContext('2d').drawImage(video, 0, 0, canvas.width, canvas.height);

            // formData.append('image.png', );
            canvas.toBlob((blob) => {
                const formData = new FormData();
                formData.append('file', blob, 'test.png')
                formData.append('zoneId', zoneId)
                this.$http.post(config.rest.url + '/image', formData).then(response => {
                    console.log('ok', response);
                }, response => {
                    console.log('ko');
                });
            });

            // console.log(canvas.toDataURL());

        }, notifyMe() {
            // Voyons si le navigateur supporte les notifications
            if (!("Notification" in window)) {
                alert("Ce navigateur ne supporte pas les notifications desktop");
            }

            // Voyons si l'utilisateur est OK pour recevoir des notifications
            else if (Notification.permission === "granted") {
                // Si c'est ok, créons une notification
                var notification = new Notification("Salut toi !");
            }

            // Sinon, nous avons besoin de la permission de l'utilisateur
            // Note : Chrome n'implémente pas la propriété statique permission
            // Donc, nous devons vérifier s'il n'y a pas 'denied' à la place de 'default'
            else if (Notification.permission !== 'denied') {
                Notification.requestPermission(function (permission) {

                    // Quelque soit la réponse de l'utilisateur, nous nous assurons de stocker cette information
                    if (!('permission' in Notification)) {
                        Notification.permission = permission;
                    }

                    // Si l'utilisateur est OK, on crée une notification
                    if (permission === "granted") {
                        var notification = new Notification("Salut toi !");
                    }
                });
            }

            // Comme ça, si l'utlisateur a refusé toute notification, et que vous respectez ce choix,
            // il n'y a pas besoin de l'ennuyer à nouveau.
        },

        autoCapture() {
            setInterval(() => {
                this.capture()
            }, 5000)
        },

        loginFailure() {
            console.log(arguments)
        }
    },

    mounted() {
        this.connect();
        setInterval(() => {
          if(start) {
            this.capture(zoneIdData);
          }
        }, 1000);
        easyrtc.setAcceptChecker(function (caller, cb) {
            cb(true);
        });
>>>>>>> 443a08c994b44782f44a005e3ab907c6becb63a5
    }
}
