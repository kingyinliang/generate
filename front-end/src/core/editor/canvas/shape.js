import {mapActions} from 'vuex'
import {getStyle} from '@/utils'
import animationMixin from 'core/mixins/animation/index.js'

const points = ['nw', 'ne', 'sw', 'se', 'w', 'e', 'n', 's']

export default {
  name: 'Shape',
  props: ['active', 'element'],
  mixins: [animationMixin],
  methods: {
    ...mapActions('editor', ['setEditingElement', 'setElementCommonStyle', 'recordRect']),
    getPointStyle(point) {
      const height = this.element.commonStyle.height
      const width = this.element.commonStyle.width

      let hasT = /n/.test(point)
      let hasB = /s/.test(point)
      let hasL = /w/.test(point)
      let hasR = /e/.test(point)

      let newLeft = 0
      let newTop = 0

      if (point.length === 2) {
        newLeft = hasL ? 0 : width
        newTop = hasT ? 0 : height
      } else {
        if (hasT || hasB) {
          newLeft = width / 2
          newTop = hasT ? 0 : height
        }
        if (hasL || hasR) {
          newLeft = hasL ? 0 : width
          newTop = height / 2
        }
      }

      return {
        left: `${newLeft}px`,
        top: `${newTop}px`,
        cursor: point + '-resize'
      }
    },
    pointHandleMouseDown(e, point) {
      e.stopPropagation()
      e.preventDefault()

      const style = {...this.element.commonStyle}
      let startX = e.clientX
      let startY = e.clientY

      let move = moveEvent => {
        let currX = moveEvent.clientX
        let currY = moveEvent.clientY
        let disY = currY - startY
        let disX = currX - startX

        let hasT = /n/.test(point)
        let hasB = /s/.test(point)
        let hasL = /w/.test(point)
        let hasR = /e/.test(point)
        let newHeight = +style.height + (hasT ? -disY : hasB ? disY : 0)
        let newWidth = +style.width + (hasL ? -disX : hasR ? disX : 0)
        style.height = newHeight > 0 ? newHeight : 0
        style.width = newWidth > 0 ? newWidth : 0

        style.left = +style.left + (hasL ? disX : 0)
        style.top = +style.top + (hasT ? disY : 0)
        startX = currX
        startY = currY
        this.setElementCommonStyle(style)
      }

      let up = () => {
        this.recordRect()
        document.removeEventListener('mousemove', move)
        document.removeEventListener('mouseup', up)
      }
      document.addEventListener('mousemove', move)
      document.addEventListener('mouseup', up)
    },
    handleMousedown(e) {
      e.stopPropagation()
      e.preventDefault()
      this.setEditingElement(this.element)

      const pos = {...this.element.commonStyle}
      let startY = e.clientY
      let startX = e.clientX
      let startTop = pos.top
      let startLeft = pos.left

      let move = moveEvent => {
        moveEvent.stopPropagation()
        moveEvent.preventDefault()

        let currX = moveEvent.clientX
        let currY = moveEvent.clientY
        pos.top = currY - startY + startTop
        pos.left = currX - startX + startLeft
        this.setElementCommonStyle(pos)
      }

      let up = () => {
        this.recordRect()
        document.removeEventListener('mousemove', move, true)
        document.removeEventListener('mouseup', up, true)
      }
      document.addEventListener('mousemove', move, true)
      document.addEventListener('mouseup', up, true)
    },
    divClick(e){
      e.stopPropagation();
      e.preventDefault();
      this.$emit('clearMenu', e)
    }
  },
  render() {
    return (
      <div
        onClick={this.divClick}
        onMousedown={this.handleMousedown}
        style={getStyle({position: 'absolute'}, this.element)}
        class={{'shape_active': this.active}}
      >
        {this.active && points.map(item => {
          return (
            <div
              point={item}
              style={this.getPointStyle(item)}
              onMousedown={e => this.pointHandleMouseDown(e, item)}
              class='shape_point'
            />
          )
        })}
        {this.$slots.default}
      </div>
    )
  }
}
