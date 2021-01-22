import PluginList from './pluginList'

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
        <el-tabs vModel={this.activeName}>
          <el-tab-pane label={this.$t('editor.sidebar.components')} name="plugin-list">
            <PluginList />
          </el-tab-pane>
          <el-tab-pane label={this.$t('editor.sidebar.pages')} name="page-manager">
            <div></div>
          </el-tab-pane>
          <el-tab-pane label={this.$t('editor.sidebar.tree')} name="page-tree">
            <div></div>
          </el-tab-pane>
        </el-tabs>
      </el-aside>
    )
  }
}
