export default {
  name: 'PreviewDialog',
  props: ['visible'],
  render(){
    return(
      <div class="k_dialog" v-show={this.visible}>
        <div class="k_dialog__bg" />
        <div class="k_dialog__wrap">
          <div class="k_dialog__wrap__main">
            <em class="k_dialog__wrap__close el-icon-circle-close" onClick={() => {this.$emit('update:visible', false)}}/>
            <div class="iphone">
              <div class="iphone__top"></div>
              <img src={require('@/assets/img/iphone.png')} alt="iphone" class="iphone__bg"/>
              <div class="iphone__main"></div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
