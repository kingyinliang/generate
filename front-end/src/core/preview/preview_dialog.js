export default {
  name: 'PreviewDialog',
  props: ['visible', 'work'],
  computed:{
    releaseUrl () {
      return `http://localhost:3000/v1/work/preview?id=${this.work.id}&view_mode=preview`
    }
  },
  render(){
    return(
      <div class="k_dialog" vShow={this.visible}>
        <div class="k_dialog__bg" />
        <div class="k_dialog__wrap">
          <div class="k_dialog__wrap__main">
            <em class="k_dialog__wrap__close el-icon-circle-close" onClick={() => {this.$emit('update:visible', false)}}/>
            <div class="iphone">
              <div class="iphone__top"></div>
              <div class="iphone__main">
                {this.visible && <iframe id="iframe-for-preview" src={this.releaseUrl} frameBorder="0" style="height: 100%;width: 100%;"/>}
              </div>
              <img src={require('@/assets/img/iphone.png')} alt="iphone" class="iphone__bg"/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
