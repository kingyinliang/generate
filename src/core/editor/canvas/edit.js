import {mapActions, mapState} from 'vuex'
import Shape from './shape'
import ContextMenu from './context_menu'

export default {
  name: 'edit',
  data: () => ({
    contextmenu: []
  }),
  computed: {
    ...mapState('editor', {
      elements: state => state.editingPage.elements,
      editingElement: state => state.editingElement,
    })
  },
  methods: {
    ...mapActions('editor', ['setEditingElement']),
    handleClickCanvas(e) {
      if (!e.target.classList.contains('shape_active')) {
        this.setEditingElement(null)
      }
      this.contextmenu = []
    },
    bindContextMenu(e) {
      e.preventDefault();
      e.stopPropagation();
      const {x, y} = this.$el.getBoundingClientRect()
      this.contextmenu = [e.clientX - x, e.clientY - y]
    },
    clearMenu(e){
      e.preventDefault();
      e.stopPropagation();
      this.contextmenu = []
    }
  },
  render(h) {
    return (
      <div
        style='width:100%;height:100%;position: relative;overflow: hidden;'
        onContextmenu={this.clearMenu}
        onClick={(e) => {
          this.handleClickCanvas(e)
        }}
      >
        {
          this.elements.map(element => {
            return (
              <Shape
                nativeOnContextmenu={e => {
                  this.bindContextMenu(e)
                }}
                onClearMenu={this.clearMenu}
                element={element}
                active={this.editingElement === element}
              >
                {h(element.name)}
              </Shape>
            )
          })
        }
        {
          this.contextmenu.length ?
            <ContextMenu
              style={{
                left: this.contextmenu[0] + 'px',
                top: this.contextmenu[1] + 'px',
              }}
            /> : null
        }
      </div>
    )
  }
}
