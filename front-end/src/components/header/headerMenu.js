export default {
  name: 'HeaderMenu',
  render() {
    return(
      <div>
        <el-button type="primary" size="mini" onClick={()=>{this.$emit('preview')}}>
          {this.$t('editor.header.preview')}
        </el-button>
        <el-button size="mini" onClick={()=>{this.$emit('save')}}>
          {this.$t('editor.header.save')}
        </el-button>
        <el-button size="mini">
          {this.$t('editor.header.publish')}
        </el-button>
      </div>
    )
  }
}
