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
    this.uuid = ele.uuid + new Date()
    this.pluginProps = this.getPluginProps(ele)
    this.commonStyle = this.getCommonStyle(ele)
  }

  getCommonStyle (ele) {
    if (typeof ele.commonStyle === 'object') {
      return cloneObj(ele.commonStyle)
    }
    return {
      ...defaultStyle,
      zindex: ele.zindex||0,
      ...ele.dragStyle // 拖拽结束落点的top、left
    }
  }

  getPluginProps (ele) {
    if (typeof ele.pluginProps === 'object') {
      return cloneObj({ ...ele.pluginProps, uuid: this.uuid })
    }
    return this.getDefaultPluginProps(ele)
  }

  getDefaultPluginProps (ele) {
    const { props = {} } = ele

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

  clone({ zindex = this.commonStyle.zindex + 1 } = {}){
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
