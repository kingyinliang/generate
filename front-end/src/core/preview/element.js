import animationMixin from 'core/mixins/animation/index.js'

export default {
  name: 'ElementItem',
  mixins: [animationMixin],
  props: ['element'],
  mounted() {
    this.runAnimations()
  },
  render(){
    return (
      <div>
        {this.$slots.default}
      </div>
    )
  }
}
