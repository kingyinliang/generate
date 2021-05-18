import LoadPluginsMixin from 'core/plugins'
import LangMixin from 'core/mixins/i18n'
import DragMixin from 'core/mixins/drag'

import PluginOptions from './plugin-options'
import PluginButton from './plugin-button'

export default {
  mixins: [LangMixin, DragMixin, LoadPluginsMixin],
  name: 'PluginList',
  data(){
    return {
      pluginOptionArr: []
    }
  },
  methods:{
    setPlugin(plugins) {
      this.pluginOptionArr = plugins
    }
  },
  render() {
    return (
      <div style="position: relative;">
        <el-row gutter={20} style="height: calc(100vh - 175px);overflow: scroll;">
          {[].concat(this.pluginsList, this.pluginOptionArr).filter(item => item.visible).map(plugin => (
            <el-col span={12} style='margin-top: 10px;'>
              <PluginButton
                // mousedownFn={(e) => this.handleDragStartFromMixin(plugin, e)}
                mousedownFn={this.handleDragStartFromMixin.bind(this, plugin)}
                title={plugin.i18nTitle[this.currentLang] || plugin.title}
                pluginIcon={plugin.icon}
                disabled={plugin.disabled}
              />
            </el-col>
          ))}
        </el-row>
        <PluginOptions onSetPlugin={this.setPlugin}/>
      </div>
    )
  }
}
