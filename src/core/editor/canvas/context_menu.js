import {mapActions} from "vuex";

export default {
  name: 'ContextMenu',
  methods:{
    ...mapActions('editor', ['copyElement', 'deleteElement']),
  },
  render(){
    return(
      <el-card class='context_menu'>
        <el-menu>
          <el-menu-item onClick={this.copyElement}>
            {this.$t('editor.centerPanel.contextMenu.copy')}
          </el-menu-item>
          <el-menu-item onClick={this.deleteElement}>
            {this.$t('editor.centerPanel.contextMenu.delete')}
          </el-menu-item>
        </el-menu>
      </el-card>
    )
  }
}
