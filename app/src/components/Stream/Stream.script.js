import Vue from 'vue';
import config from '../../config';
import VueResource from 'vue-resource';
Vue.use(VueResource);

export default  {
  name: 'rtc',

  methods: {
    connect() {
      easyrtc.setSocketUrl(config.server.url);
      easyrtc.easyApp("easyrtc.videoChatHd", "selfVideo", ["callerVideo"], this.loginSuccess, this.loginFailure);
    },
    capture() {
      const video = this.$refs.video;
      const canvas = document.createElement("canvas");
      canvas.width = video.videoWidth;
      canvas.height = video.videoHeight;
      canvas.getContext('2d').drawImage(video, 0, 0, canvas.width, canvas.height);

      // formData.append('image.png', );
      canvas.toBlob((blob) => {
        const formData = new FormData();
        formData.append('file', blob, 'test.png')
        this.$http.post('http://localhost:3000/image', formData).then(response => {
          console.log('ok', response);
        }, response => {
          console.log('ko');
        });
      });


      // console.log(canvas.toDataURL());
    }
  },

  mounted() {
    this.connect()
  }
}
