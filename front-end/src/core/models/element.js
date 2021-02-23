import {parsePx} from '@/utils'

const cloneObj = (value) => JSON.parse(JSON.stringify(value))

const defaultStyle = {
  top: 100,
  left: 100,
  width: 100,
  height: 40,
  zindex: 1,
  textAlign: 'center',
  color: '#000000',
  backgroundColor: 'rgba(255, 255, 255, 0)',
  fontSize: 14
}

class Element {
  constructor(ele) {
    this.name = ele.name
    this.uuid = ele.uuid || + new Date()
    this.pluginProps = this.getPluginProps(ele)
    this.commonStyle = this.getCommonStyle(ele)
    this.animations = ele.animations || []
  }

  getStyle({position = 'static', isRem = false} = {}) {
    if (this.name === 'lbp-background') {
      return {
        width: '100%',
        height: '100%'
      }
    }
    const pluginProps = this.pluginProps
    const commonStyle = this.commonStyle
    let style = {
      top: parsePx(pluginProps.top || commonStyle.top, isRem),
      left: parsePx(pluginProps.left || commonStyle.left, isRem),
      width: parsePx(pluginProps.width || commonStyle.width, isRem),
      height: parsePx(pluginProps.height || commonStyle.height, isRem),
      fontSize: parsePx(pluginProps.fontSize || commonStyle.fontSize, isRem),
      color: pluginProps.color || commonStyle.color,
      // backgroundColor: pluginProps.backgroundColor || commonStyle.backgroundColor,
      textAlign: pluginProps.textAlign || commonStyle.textAlign,
      'z-index': commonStyle.zindex,
      position
    }
    return style
  }

  getCommonStyle(ele) {
    if (typeof ele.commonStyle === 'object') {
      return cloneObj(ele.commonStyle)
    }
    return {
      ...defaultStyle,
      zindex: ele.zindex || 0,
      ...ele.dragStyle // 拖拽结束落点的top、left
    }
  }

  getPluginProps(ele) {
    if (typeof ele.pluginProps === 'object') {
      return cloneObj({...ele.pluginProps, uuid: this.uuid})
    }
    return this.getDefaultPluginProps(ele)
  }

  getDefaultPluginProps(ele) {
    const {props = {}} = ele

    let pluginProps = {
      uuid: this.uuid
    }
    Object.keys(props).forEach(key => {
      const defaultValue = props[key].default
      pluginProps[key] = typeof defaultValue === 'function' ? defaultValue() : defaultValue
    })

    pluginProps = {
      ...pluginProps,
    }

    return pluginProps
  }

  clone({zindex = this.commonStyle.zindex + 1} = {}) {
    return new Element({
      zindex,
      name: this.name,
      pluginProps: this.pluginProps,
      commonStyle: {
        ...this.commonStyle,
        top: this.commonStyle.top + 20,
        left: this.commonStyle.left + 20
      }
    })
  }
}

export default Element
