export default {
  name: 'k-radio',
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
  data: () => ({
    model: '',
  }),
  mounted(){
    this.model = this.value
  },
  render(){
    return (
      <el-radio-group vModel={this.model} size="mini" onChange={(e) => this.$emit('change', e)}>
        {
          this.options.map(item => {
            return (
              <el-radio-button label={item.value}>{item.label}</el-radio-button>
            )
          })
        }
      </el-radio-group>
    )
  }
}
