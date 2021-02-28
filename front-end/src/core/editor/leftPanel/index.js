import PluginList from './pluginList'
import pageManager from './pageManager'
import dialogManager from './dialogManager'

export default {
  name: 'EditorLeftPanel',
  data(){
    return {
      activeName: 'plugin-list'
    }
  },
  render() {
    return (
      <el-aside width="260px" style="background: #fff;padding: 10px;">
        <el-tabs vModel={this.activeName} class="left_tab">
          <el-tab-pane label={this.$t('editor.sidebar.components')} name="plugin-list">
            <PluginList />
          </el-tab-pane>
          <el-tab-pane label={this.$t('editor.sidebar.pages')} name="page-manager">
            <pageManager />
          </el-tab-pane>
          <el-tab-pane label={this.$t('editor.sidebar.dialog')} name="page-dialog">
            <dialogManager />
          </el-tab-pane>
        </el-tabs>
      </el-aside>
    )
  }
}
