export default {
  functional: true,
  name: 'PluginButton',
  props: {
    pluginIcon: {
      required: true,
      type: String
    },
    title: {
      required: true,
      type: String
    },
    clickFn: {
      required: false,
      type: Function,
      default: () => {
      }
    },
    mousedownFn: {
      required: false,
      type: Function,
      default: () => {
      }
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  render(h, {props}) {
    return (
      <button
        class='pluginButton'
        onClick={props.clickFn}
        onMousedown={props.mousedownFn}
        disabled={props.disabled}
      >
        <em class={['iconfont', props.pluginIcon]}/>
        <span>{props.title}</span>
      </button>
    )
  }
}
