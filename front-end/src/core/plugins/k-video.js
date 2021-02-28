import PropTypes from "./plugin-props";

export default {
  name: 'k-video',
  props: {
    videoImg: PropTypes.input({ defaultValue: 'name', label: 'name' }),
  },
  render(){
    return(
      <div class="videodiv">
        <video
          x5-video-player-type="h5"
          class="video"
          controls="controls"
          style='width:100%;height:100%;'
          src="http://domhttp.kksmg.com/2018/06/19/h264_450k_mp4_SHDongFangHD30000002018061928793150091_aac.mp4"
        ></video>
      </div>
    )
  }
}
