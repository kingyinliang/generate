import PropTypes from './plugin-props'

const options = [
  {label: '短边缩放', value: 'contain'},
  {label: '长边缩放', value: 'cover'},
  {label: '拉伸', value: 'fill'},
  {label: '原始', value: 'none'},
  {label: '弹性缩放', value: 'scale-down'}
]

export default {
  name: 'k-picture',
  props: {
    imgSrc: PropTypes.upload({label: '图片'}),
    fitType: PropTypes.select({defaultValue: 'contain', label: '填充方式', options})
  },
  data: () => ({}),
  render() {
    return (
      <img src={this.imgSrc} style={{objectFit: this.fitType}}/>
    )
  }
}
