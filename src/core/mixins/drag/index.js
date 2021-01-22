import { mapActions } from 'vuex'

export default {
  methods:{
    ...mapActions('editor', ['addElement']),
    handleDragStartFromMixin(plugin, e){
      const dragDom = e.currentTarget.cloneNode(true)
      document.body.appendChild(dragDom)

      dragDom.classList.add('drag_plugin_button')
      dragDom.style.left = e.clientX - e.layerX + 'px'
      dragDom.style.top = e.clientY - e.layerY + 'px'

      let move = (event) => {
        dragDom.style.left = event.clientX - e.layerX + 'px'
        dragDom.style.top = event.clientY - e.layerY + 'px'
      }

      let up = (event) => {
        document.body.removeChild(dragDom)
        document.removeEventListener('mousemove', move, true)
        document.removeEventListener('mouseup', up, true)
        const position = document.querySelector('.canvas_wrapper_view').getBoundingClientRect()
        this.addElement({
          ...plugin,
          dragStyle: {
            left: event.clientX - e.layerX - position.left,
            top: event.clientY - e.layerY - position.top
          }
        })
      }

      document.addEventListener('mousemove', move, true)
      document.addEventListener('mouseup', up, true)
    }
  }
}
