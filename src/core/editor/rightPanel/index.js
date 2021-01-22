export default {
  name: 'EditorRightPanel',
  props:{
    width: {
      type: Number,
      default: 320
    }
  },
  render() {
    return (
      <el-aside width={this.width+'px'} style="background: #fff">
        <div></div>
      </el-aside>
    )
  }
}
