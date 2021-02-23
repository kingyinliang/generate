import Vue from "vue";
import {mapState} from "vuex";
import {getVM} from '@/utils'

export default {
  name: 'PropEditor',
  props: {
    realEditingElement: {
      type: Object,
      default: () => null
    }
  },
  computed: {
    ...mapState('editor', {
      stateEditingElement: state => state.editingElement
    }),
    editingElement () {
      return this.realEditingElement || this.stateEditingElement
    }
  },
  render(h) {
    if (!this.editingElement) return (<div>请选择一个元素</div>)
    const vm = getVM(this.editingElement.name)
    const props = vm.$options.props
    return (
      <el-form size="mini" inline={false}>
        {
          Object.entries(props).map(([key, value]) => {
            const editor = value.editor
            const data = {
              props: {
                ...editor.props,
                [editor.type === 'el-switch' ? 'checked' : 'value']: this.editingElement.pluginProps[key]
              },
              on: {
                input: val => {
                  this.editingElement.pluginProps[key] = val.target ? val.target.value : val
                },
                change: (e) => {
                  this.editingElement.pluginProps[key] = e.target ? e.target.value : e
                }
              }
            }
            return (
              <el-form-item
                label={editor.label+':'}
              >
                { h(editor.type, data) }
              </el-form-item>
            )
          })
        }
      </el-form>
    )
  }
}
