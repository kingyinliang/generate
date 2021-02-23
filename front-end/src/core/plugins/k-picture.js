export default {
  name: 'k-picture',
  props: {
    imgSrc: {
      type: String,
      default: '',
      editor: {
        type: 'k-upload',
        label: '图片',
      },
    },
    fitType: {
      type: String,
      default: 'contain',
      editor: {
        type: 'k-select',
        label: '填充方式',
        props: {
          options: [
            { label: '短边缩放', value: 'contain' },
            { label: '长边缩放', value: 'cover' },
            { label: '拉伸', value: 'fill' },
            { label: '原始', value: 'none' },
            { label: '弹性缩放', value: 'scale-down' }
          ]
        }
      }
    }
  },
  data: () => ({}),
  render(){
    return (
      <img src={this.imgSrc} style={{objectFit: this.fitType}}/>
    )
  }
}
