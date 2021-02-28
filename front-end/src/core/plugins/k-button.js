import PropTypes from './plugin-props'
import {postAxios} from '@/utils'

const textAlignOptions = [
  {
    label: '左对齐',
    value: 'left'
  },
  {
    label: '居中对齐',
    value: 'center'
  },
  {
    label: '右对齐',
    value: 'right'
  }
]

export default {
  name: 'k-button',
  props: {
    interface: PropTypes.input({ defaultValue: '/form/submit', label: '提交接口' }),
    formName: PropTypes.input({ defaultValue: 'formName', label: 'formName' }),
    text: PropTypes.input({defaultValue: '按钮', label: '按钮文字'}),
    disabled: PropTypes.boolean({ label: 'disabled' }),
    color: PropTypes.color({ label: '字体颜色', defaultValue: '#000' }),
    backgroundColor: PropTypes.color({ label: '背景色', defaultValue: '#ffffff' }),
    backgroundImg: PropTypes.upload({label: '背景图'}),
    fontSize: PropTypes.number({ label: '字号(px)' }),
    borderWidth: PropTypes.number({ label: '边框宽度(px)', defaultValue: 1 }),
    borderRadius: PropTypes.number({ label: '圆角(px)', defaultValue: 5 }),
    borderColor: PropTypes.color({ label: '边框颜色', defaultValue: '#ced4da' }),
    textAlign: PropTypes.radio({ defaultValue: 'center', label: '文字对齐', options: textAlignOptions}),
    submitText: PropTypes.input({ defaultValue: '提交成功', label: '提交文字' }),
  },
  methods: {
    handleClick(){
      if (this.disabled) return
      let inputs = document.querySelectorAll(`[form-name^='${this.formName}']`)
      let formData = {}
      inputs.forEach(input => formData[input.name] = input.value)
      postAxios({interfaceName: this.interface, formData}).then(({data}) => {
        if(data.code === 200) {
          this.$message({
            message: this.submitText,
            type: 'success'
          });
        } else {
          this.$message({
            message: data.msg,
            type: 'error'
          });
        }
      })
    }
  },
  render(){
    let style = {
      color: this.color,
      textAlign: this.textAlign,
      fontSize: this.fontSize + 'px',
      borderColor: this.borderColor,
      borderRadius: this.borderRadius + 'px',
      borderWidth: this.borderWidth + 'px',
    }
    if (this.backgroundImg) {
      style = {
        ...style,
        'background-size': 'cover',
        'background-position': '50% 50%',
        'background-origin': 'content-box',
        'background-image': `url(${this.backgroundImg})`
      }
    } else {
      style = {
        ...style,
        backgroundColor: this.backgroundColor
      }
    }
    return (
      <button
        style={style}
        onClick={this.handleClick}
      >{this.text}</button>
    )
  }
}
