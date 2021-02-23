import { mapState, mapActions } from 'vuex'
import EditCanvas from './edit'
import PreviewCanvas from 'core/preview'
import DragLine from 'core/mixins/drag/drag_line.js'

export default {
  name: 'EditorCanvas',
  data() {
    return {
      isPreviewMode: true
    }
  },
  computed: {
    ...mapState('editor', ['work','editingPage']),
    ...mapState('editor', {
      elements: state => state.editingPage.elements,
    })
  },
  methods: {
    ...mapActions('editor', [
      'updateWork',
      'updateEditingPage',
      'setEditingElement'
    ]),
    radioChange(e){
      if(!e){
        this.setEditingElement()
      }
    }
  },
  render() {
    return (
      <el-container style="background: #f1f3f5">
        <el-main id='canvas_main' style='min-width: 400px;'>
          <div class='canvas_group'>
            <el-radio-group vModel={this.isPreviewMode} size="mini" onChange={this.radioChange}>
              <el-radio-button label={true}>{this.$t('editor.centerPanel.mode.edit')}</el-radio-button>
              <el-radio-button label={false}>{this.$t('editor.centerPanel.mode.preview')}</el-radio-button>
            </el-radio-group>
          </div>
          <div class='canvas_wrapper'>
            <div class='canvas_wrapper_view' style={{ height: `${this.editingPage.height}px` }}>
              { this.isPreviewMode ? <EditCanvas/> : <PreviewCanvas elements={this.elements} height={this.editingPage.height}/> }
            </div>
            <div class='canvas_wrapper_height' style={{top: `${this.editingPage.height*1 + 50}px`}}>
              <div class="canvas_wrapper_height_drag">
                <DragLine type='ns' onlineMove={offset => { this.updateEditingPage({ height: this.editingPage.height + offset}) }}/>
              </div>
              <div class="canvas_wrapper_height_input">
                <span>375 x</span>
                <el-input
                  type='number'
                  vModel={this.editingPage.height}
                  size="mini"
                  style='width:80px;margin:0 4px;'
                  onChange={height => { this.updateEditingPage({ height }) }}
                />
                <span>px</span>
              </div>
            </div>
          </div>
        </el-main>
      </el-container>
    )
  }
}
