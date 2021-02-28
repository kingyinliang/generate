export default {
  input:({ valueType = String, label = '输入', defaultValue = '请输入',  visible = true} = {}) => ({
    type: valueType,
    default: defaultValue,
    visible,
    editor: {
      type: 'el-input',
      label
    }
  }),
  number:({ valueType = Number, label = '输入', defaultValue = 12,  visible = true} = {}) => ({
    type: valueType,
    default: defaultValue,
    visible,
    editor: {
      type: 'el-input-number',
      label,
    }
  }),
  radio: ({ valueType = String, label = '选项', defaultValue = '',  visible = true, options = [] } = {}) => ({
    type: valueType,
    default: defaultValue,
    visible,
    editor: {
      type: 'k-radio',
      label,
      props: {
        options,
      }
    }
  }),
  select: ({ valueType = String, label = '选项', defaultValue = '',  visible = true, options = [] } = {}) => ({
    type: valueType,
    default: defaultValue,
    visible,
    editor: {
      type: 'k-select',
      label,
      props: {
        options,
      }
    }
  }),
  upload: ({ valueType = String, defaultValue = '', visible = true, label = '选项' } = {}) => ({
    type: valueType,
    default: defaultValue,
    visible,
    editor: {
      type: 'k-upload',
      label
    }
  }),
  color: ({ valueType = String, defaultValue = '#ffffff', visible = true, label = '颜色面板' } = {}) => ({
    type: valueType,
    default: defaultValue,
    visible,
    editor: {
      type: 'el-color-picker',
      label,
      props: {
        size: 'mini',
        showAlpha: true
      },
    }
  }),
  boolean: ({ defaultValue = false, visible = true, label = '开关' } = {}) => ({
    type: Boolean,
    default: defaultValue,
    visible,
    editor: {
      type: 'el-switch',
      label
    }
  }),
}
