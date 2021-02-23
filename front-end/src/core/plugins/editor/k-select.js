export default {
  name: 'k-select',
  props: {
    options: {
      type: Array,
      default: () => {
        return [];
      }
    },
    value: {
      type: String,
      default: ''
    }
  },
  render(){
    return (
      <el-select value={this.value} on-change={(e) => this.$emit('change', e)}>
        {
          this.options.map(item => {
            return (
              <el-option label={item.label} value={item.value} />
            )
          })
        }
      </el-select>
    )
  }
}
