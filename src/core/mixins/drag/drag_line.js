export default {
  name:'dragLine',
  props: {
    type: {
      required: true,
      type: String
    }
  },
  methods: {
    onMousedown(e){
      let startX = e.clientX
      let startY = e.clientY
      let move = moveEvent => {
        moveEvent.preventDefault()
        moveEvent.stopPropagation()
        const offsetX = startX - moveEvent.clientX
        const offsetY = moveEvent.clientY - startY
        if (this.$props.type==='ns') {
          this.$emit('lineMove', offsetY)
        } else {
          this.$emit('lineMove', offsetX)
        }
        startX -= offsetX
        startY += offsetY
      }

      let up = () => {
        document.removeEventListener('mousemove', move, true)
        document.removeEventListener('mouseup', up, true)
      }
      document.addEventListener('mousemove', move, true)
      document.addEventListener('mouseup', up, true)
    }
  },
  render() {
    return (
      <div class={this.$props.type==='ns'?'dragLine dragLine_ns':'dragLine dragLine_ew'} onMousedown={this.onMousedown}>
        <div class='dragLine_button'>
          <div class='dragLine_button_icon'></div>
        </div>
      </div>
    )
  }
}
