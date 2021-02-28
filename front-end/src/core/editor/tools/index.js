import { mapState, mapActions } from 'vuex'
import hotkeys from 'hotkeys-js'
import { undoRedoHistory } from '@/utils'

const toolsOption = [
  {
    icon: 'Kchexiao',
    i18nTooltip: 'editor.fixedTool.undo',
    hotkeyTooltip: '(ctrl+z)',
    hotkey: 'ctrl&z,⌘&z',
    disabled: 'canUndo',
    onClick: function () {
      undoRedoHistory.undo()
    }
  },
  {
    icon: 'Kzhongzuo',
    i18nTooltip: 'editor.fixedTool.redo',
    hotkeyTooltip: '(ctrl+y)',
    hotkey: 'ctrl&y,⌘&y',
    disabled: 'canRedo',
    onClick: function () {
      undoRedoHistory.redo()
    }
  },
  {
    icon: 'Kfangda',
    i18nTooltip: 'editor.fixedTool.zoomOut',
    hotkeyTooltip: '(ctrl +)',
    hotkey: 'ctrl&=,⌘&=',
    onClick: function () {this.updateScaleRate(0.25)}
  },
  {
    icon: 'Ksuoxiao',
    i18nTooltip: 'editor.fixedTool.zoomIn',
    hotkeyTooltip: '(ctrl -)',
    hotkey: 'ctrl&-,⌘&-',
    onClick: function () {this.updateScaleRate(-0.25)}
  }
]

export default {
  name:'FixedTools',
  computed:{
    ...mapState('editor', {
      scaleRate: state => state.scaleRate
    })
  },
  methods: {
    ...mapActions('editor', ['updateScaleRate'])
  },
  data:()=>({
    undoRedoHistory: undoRedoHistory
  }),
  mounted() {
    toolsOption.map(tool => {
      tool.hotkey && hotkeys(tool.hotkey, { splitKey: '&' }, (event) => {
        event.preventDefault()
        event.stopPropagation()
        tool.onClick && tool.onClick.call(this)
      })
    })
  },
  render(){
    return(
      <el-aside width="40px" style="background: #fff; border: 1px solid #eee">
        <el-button-group class='tools_button_group'>
          {
            toolsOption.map(tool => (
              <el-tooltip effect="dark" placement="top" content={this.$t(tool.i18nTooltip, { hotkey: tool.hotkeyTooltip })}>
                <el-button type="text" disabled={tool.disabled?!this.undoRedoHistory[tool.disabled]:false} onClick={() => tool.onClick.call(this)}>
                  <em class={['iconfont', tool.icon]} />
                </el-button>
              </el-tooltip>
            ))
          }
        </el-button-group>
        <div style="font-size: 14px;text-align: center;">{this.scaleRate * 100}%</div>
      </el-aside>
    )
  }
}
