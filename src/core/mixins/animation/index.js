import {getStyle} from '@/utils'

function getComputedCSSText (style) {
  let cssText = ''
  for (let attr in style) {
    cssText += `${attr.replace(/[A-Z]+/g, m => `-${m.toLowerCase()}`)}:${style[attr]};`
  }
  return cssText
}

export default {
  created(){
    window.EditorApp && window.EditorApp.$on('RUN_ANIMATIONS', () => {
      this.runAnimations()
    })
  },
  methods:{
    runAnimations() {
      const animationQueue = this.element.animations || []
      let len = animationQueue.length
      if (len === 0) return

      let that = this
      let parentNode = this.$el
      let animIdx = 0
      const oldStyle = getStyle({ position: 'absolute' }, that.element)
      runAnimation()

      function runAnimation () {
        if (animIdx < len) {
          const animation = animationQueue[animIdx]
          let animationStyle = {
            animationName: animation.type,
            animationDuration: `${animation.duration}s`,
            animationIterationCount: animation.infinite ? 'infinite' : animation.interationCount,
            animationDelay: `${animation.delay}s`,
            animationFillMode: 'both'
          }
          parentNode.style.cssText = getComputedCSSText(animationStyle) + getComputedCSSText(oldStyle)
          animIdx++
        } else {
          // reset to the initial state after the animation ended
          parentNode.style.cssText = getComputedCSSText(oldStyle)
        }
      }
      parentNode.addEventListener('animationend', runAnimation, false)
    }
  }
}
