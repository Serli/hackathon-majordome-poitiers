import config from '../../config'

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

      window.open(canvas.toDataURL());
    }
  },

  mounted() {
    this.connect()
  }
}
