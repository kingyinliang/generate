export default {
  name: 'k-button',
  props: {
    text: {
      type: String,
      default: '按钮',
      editor: {
        type: 'el-input',
        label: '按钮文字',

      }
    }
  },
  data: () => ({}),
  render(){
    return (
      <el-button>
        {this.text}
      </el-button>
    )
  }
}
