import Vue from 'vue'
import { cloneDeep } from 'lodash'
import Element from 'core/models/element.js'
import Http from './axios'

const DESIGN_DRAFT_WIDTH = 375
const disabledPluginsForEditMode = ['k-input', 'k-button']

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
  const userAgent = navigator.userAgent;
  if (!!userAgent.match(/AppleWebKit.*Mobile.*/)||userAgent.indexOf('iPad') > -1) {
    isRem = true
  }
  if (element.name === 'k-background') {
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

export function getProps ({ mode = 'edit' } = {}, element) {
  if (mode === 'edit') {
    return {
      ...element.pluginProps,
      disabled: disabledPluginsForEditMode.includes(element.name) && mode === 'edit'
    }
  } else {
    return {
      ...element.pluginProps,
    }
  }
}

export function getAttrs (element) {
  const attrs = {
    'data-uuid': element.uuid
  }

  if (element.animations && element.animations.length > 0) {
    const animation = element.animations[0]
    attrs['data-swiper-animation'] = animation.type // "fadeIn"
    attrs['data-duration'] = `${animation.duration}s` // ".5s"
    attrs['data-delay'] = `${animation.delay}s` // "1s"
  }
  return attrs
}

export function getPreviewData({ position = 'static', isRem = false, mode = 'preview' } = {}, element) {
  const style = getStyle({position, isRem}, element)
  const data = {
    style,
    props: getProps({ mode }, element),
    attrs: getAttrs(element)
  }
  return data
}

export function postAxios({interfaceName='', formData} = {}) {
  return Http.post(interfaceName, formData)
}

export class UndoRedoHistory {
  store;
  history = [];
  currentIndex = -1;

  get canUndo () {
    return this.currentIndex > 0
  }

  get canRedo () {
    return this.history.length > this.currentIndex + 1
  }

  init(store){
    this.store = store
  }

  addState(state) {
    if (this.currentIndex + 1 < this.history.length) {
      this.history.splice(this.currentIndex + 1)
    }
    this.history.push(state)
    this.currentIndex++
  }

  undo() {
    if (!this.canUndo) return
    const prevState = this.history[this.currentIndex - 1]
    this.store.replaceState(cloneDeep(prevState))
    this.currentIndex--
  }

  redo() {
    if (!this.canRedo) return
    const nextState = this.history[this.currentIndex + 1]
    this.store.replaceState(cloneDeep(nextState))
    this.currentIndex++
  }

}

export const undoRedoHistory = new UndoRedoHistory()
