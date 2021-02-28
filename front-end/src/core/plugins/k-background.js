import PropTypes from './plugin-props'

export default {
  name: 'k-background',
  props: {
    imgSrc: PropTypes.upload({label: '图片'}),
    backgroundColor: PropTypes.color({label: '背景色'}),
  },
  render(){
    let style = {
      width: '100%',
      height: '100%'
    }
    if (this.imgSrc) {
      style = {
        ...style,
        'background-size': 'cover',
        'background-position': '50% 50%',
        'background-origin': 'content-box',
        'background-image': `url(${this.imgSrc})`
      }
    } else {
      style = {
        ...style,
        backgroundColor: this.backgroundColor
      }
    }
    return (
      <div style="width: 100%;height: 100%; overflow: hidden; position: absolute; z-index: 0;">
        <div style={style}></div>
      </div>
    )
  }
}
