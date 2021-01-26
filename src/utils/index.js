import Vue from 'vue'
import Element from 'core/models/element.js'

const DESIGN_DRAFT_WIDTH = 375

export function getVM (pluginName) {
  const Ctor = Vue.component(pluginName)
  return new Ctor()
}

export function px2Rem (px) {
  const number = Math.pow(10, 6)
  const val = (px / (DESIGN_DRAFT_WIDTH / 10)) * number
  const rem = Math.round(val) / number + 'rem'
  return rem
}

export function parsePx (px, isRem = false) {
  if (isRem) return px2Rem(px)
  return `${px}px`
}

export function getStyle({position = 'static', isRem = false} = {}, element) {
  if (element.name === 'lbp-background') {
    return {
      width: '100%',
      height: '100%'
    }
  }
  const pluginProps = element.pluginProps
  const commonStyle = element.commonStyle
  return {
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
}
export function elementClone(element, zindex) {
  return new Element({
    name: element.name,
    pluginProps: element.pluginProps,
    commonStyle: {
      ...element.commonStyle,
      zindex,
      top: element.commonStyle.top + 20,
      left: element.commonStyle.left + 20
    }
  })
}

