import PropTypes from './plugin-props'

const typeOptions = [
  {
    label: '文字',
    value: 'text'
  },
  {
    label: '密码',
    value: 'password'
  },
  {
    label: '日期',
    value: 'date'
  },
  {
    label: '邮箱',
    value: 'email'
  },
  {
    label: '手机号',
    value: 'tel'
  }
]
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
  name: 'k-input',
  props:{
    type: PropTypes.select({defaultValue: 'text', label: '类型', options: typeOptions}),
    name: PropTypes.input({ defaultValue: 'name', label: 'name' }),
    formName: PropTypes.input({ defaultValue: 'formName', label: 'formName' }),
    placeholder: PropTypes.input({ defaultValue: '请输入', label: '提示信息' }),
    disabled: PropTypes.boolean({ label: 'disabled' }),
    color: PropTypes.color({ label: '字体颜色', defaultValue: '#000' }),
    backgroundColor: PropTypes.color({ label: '背景色', defaultValue: '#ffffff' }),
    fontSize: PropTypes.number({ label: '字号(px)' }),
    borderWidth: PropTypes.number({ label: '边框宽度(px)', defaultValue: 1 }),
    borderRadius: PropTypes.number({ label: '圆角(px)', defaultValue: 5 }),
    borderColor: PropTypes.color({ label: '边框颜色', defaultValue: '#ced4da' }),
    textAlign: PropTypes.radio({ defaultValue: 'left', label: '文字对齐', options: textAlignOptions}),
  },
  render(){
    const style = {
      color: this.color,
      textAlign: this.textAlign,
      backgroundColor: this.backgroundColor,
      fontSize: this.fontSize + 'px',
      borderColor: this.borderColor,
      borderRadius: this.borderRadius + 'px',
      borderWidth: this.borderWidth + 'px',
    }
    return(
      <input
        class='k-input'
        style={style}
        type={this.type}
        placeholder={this.placeholder}
        disabled={this.disabled}
        name={this.name}
        form-name={this.formName}
      />
    )
  }
}
