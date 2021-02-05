import {mapState} from "vuex";
import animationView from 'core/mixins/animation/animation_view.js'

export default {
  name: 'AnimationEditor',
  mixins: [animationView],
  computed: {
    ...mapState('editor', ['editingElement']),
    animationQueue () {
      return (this.editingElement && this.editingElement.animations) || []
    }
  },
  data: () => ({
    activeName: 0,
    drawer: false,
  }),
  methods: {
    addAnimation(){
      this.editingElement.animations.push({
        type: '',
        duration: 1,
        delay: 0,
        iterationCount: 1,
        infinite: false
      })
      this.activeName = this.editingElement.animations.length - 1
    },
    runAnimate() {
      window.EditorApp.$emit('RUN_ANIMATIONS')
    }
  },
  render(){
    const ele = this.editingElement
    if (!ele) return (<span>{this.$t('editor.editPanel.common.empty')}</span>)
    return(
      <div>
        <el-button-group>
          <el-button type="primary" size='small' onClick={this.addAnimation}><em class='el-icon-circle-plus-outline'/> {this.$t('editor.editPanel.animation.add')}</el-button>
          <el-button type="primary" size='small' onClick={this.runAnimate}>{this.$t('editor.editPanel.animation.run')}<em class='el-icon-video-play'/></el-button>
        </el-button-group>
        <div>
          {
            !!this.editingElement.animations.length &&
            <el-collapse vModel={this.activeName} accordion>
              {
                this.editingElement.animations.map((animation, index) => (
                  <el-collapse-item name={index}>
                    <template slot="title">
                      {`动画${index + 1} ${this.animationValueName(animation.type)}`}
                    </template>
                    {this.renderAnimationOptions(animation)}
                  </el-collapse-item>
                ))
              }
            </el-collapse>
          }
          <el-drawer visible={this.drawer} direction='ltr' {...{on: {'update:visible': val => {this.drawer = val}}}}>
            <div style='padding: 10px;'>
              {this.renderAnimationstTabs()}
            </div>
          </el-drawer>
        </div>
      </div>
    )
  }
}
