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
            easyrtc.setVideoDims(1280, 720);
            easyrtc.enableDebug(false);
            easyrtc.setRoomOccupantListener(this.convertListToButtons);
            easyrtc.easyApp("easyrtc.videoChatHd", "selfVideo", ["callerVideo"], this.loginSuccess, this.loginFailure);
        },


        clearConnectList() {
            var otherClientDiv = document.getElementById('otherClients');
            while (otherClientDiv.hasChildNodes()) {
                otherClientDiv.removeChild(otherClientDiv.lastChild);
            }
        },

        convertListToButtons (roomName, data, isPrimary) {
            this.clearConnectList();
            var otherClientDiv = document.getElementById('otherClients');
            for (var easyrtcid in data) {
                var button = document.createElement('button');
                button.onclick = function (easyrtcid) {
                    return function () {
                        performCall(easyrtcid);
                    };
                }(easyrtcid);

                var label = document.createTextNode(easyrtc.idToName(easyrtcid));
                button.appendChild(label);
                button.className = "callbutton";
                otherClientDiv.appendChild(button);
            }
        },


        performCall(otherEasyrtcid)
        {
            easyrtc.hangupAll();
            var acceptedCB = function (accepted, caller) {
                if (!accepted) {
                    easyrtc.showError("CALL-REJECTED", "Sorry, your call to " + easyrtc.idToName(caller) + " was rejected");
                }
            };
            var successCB = function () {
            };
            var failureCB = function () {
            };
            easyrtc.call(otherEasyrtcid, successCB, failureCB, acceptedCB);
        },


        loginSuccess(easyrtcid)
        {
            this.selfEasyrtcid = easyrtcid;
            document.getElementById("iam").innerHTML = "Je suis " + easyrtc.cleanId(easyrtcid);
        },


        loginFailure(errorCode, message)
        {
            easyrtc.showError(errorCode, message);
        }
    },

    mounted()
    {
        this.connect()
        easyrtc.setAcceptChecker(function (caller, cb) {
            cb(true);
        });
    }
}
