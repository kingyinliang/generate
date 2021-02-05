import PropEditor from './prop'
import AnimationEditor from './animation'

export default {
  name: 'EditorRightPanel',
  props:{
    width: {
      type: Number,
      default: 320
    }
  },
  data:()=>({
    activeName: 'animation'
  }),
  render() {
    return (
      <el-aside width={this.width+'px'} style="background: #fff;padding: 0 12px">
        <el-tabs vModel={this.activeName}>
          <el-tab-pane label={this.$t('editor.editPanel.tab.prop')} name="prop">
            <PropEditor/>
          </el-tab-pane>
          <el-tab-pane label={this.$t('editor.editPanel.tab.animation')} name="animation">
            <AnimationEditor/>
          </el-tab-pane>
        </el-tabs>
      </el-aside>
    )
  }
}
