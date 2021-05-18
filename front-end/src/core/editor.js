import Vue from 'vue'
import {mapActions, mapState} from "vuex";
import KComponents from 'k-generate-components'

import Header from '@/components/header/index'
import HeaderMenu from '@/components/header/headerMenu'

import '@/assets/scss/editor.scss'
import '@/assets/scss/plugins.scss'
import 'animate.css'
import 'core/plugins/editor/index.js'
import '@/assets/icon/iconfont.css'

import {getWork, updateWorks} from '@/utils/api.js'
import Element from 'core/models/element'
import Page from 'core/models/page'
import Dialog from 'core/models/dialog'

import EditorLeftPanel from 'core/editor/leftPanel'
import EditorRightPanel from 'core/editor/rightPanel'
import EditorCanvas from 'core/editor/canvas'
import FixedTools from 'core/editor/tools'
import DragLine from 'core/mixins/drag/drag_line.js'
import PreviewDialog from 'core/preview/preview_dialog.js'

window.EditorApp = new Vue() // event bus

Vue.use(KComponents)

const CoreEditor = {
  name: 'CoreEditor',
  components: {
    Header,
  },
  computed:{
    ...mapState('editor', ['work']),
  },
  props: {
    workId: {
      type: [Number, String]
    }
  },
  data() {
    return {
      width: 320,
      previewDialogVisible: false
    }
  },
  created () {
    if (this.workId) {
      getWork(this.workId).then(({data}) =>{
        let work = data.data.work
        work.pages = work.pages.map(page => {
          page.elements = page.elements.map(element => new Element(element))
          return new Page(page)
        })
        work.dialog = work.dialog.map(dialog => {
          dialog.elements = dialog.elements.map(element => new Element(element))
          return new Dialog(dialog)
        })
        this.updateWork(work)
        this.setEditingPage()
      })
    } else {
      this.$message.error('no work id!')
    }
  },
  methods:{
    ...mapActions('editor', [
      'updateWork',
      'setEditingPage'
    ]),
    handlePreview () { this.previewDialogVisible = true },
    save(){
      updateWorks(this.work).then(({data}) => {
        if(data.code === 200) {
          this.$message({
            message: '保存成功',
            type: 'success'
          });
        }
      })
    }
  },
  render() {
    return (
      <el-container style={{height: '100vh'}}>
        <el-header style="background-color: #031529;">
          <Header>
            <HeaderMenu slot="headr_menu" onPreview={this.handlePreview} onSave={this.save}/>
          </Header>
        </el-header>
        <el-container>
          {/*  左侧组件  */}
          <EditorLeftPanel/>
          {/*  中间画布  */}
          <EditorCanvas/>
          {/*  右侧拖拽宽度  */}
          <el-aside width="3px" style='overflow: visible;'>
            <DragLine type='ew' onlineMove={offset => { this.width += offset }}/>
          </el-aside>
          {/*  右侧工具  */}
          <FixedTools/>
          {/*  右侧组件  */}
          <EditorRightPanel width={this.width}/>
        </el-container>
        <PreviewDialog visible={this.previewDialogVisible} work={this.work}  {...{on: {'update:visible': val => {this.previewDialogVisible = val}}}}/>
      </el-container>
    )
  }
}
CoreEditor.install = (Vue) => {
  Vue.component(CoreEditor.name, CoreEditor)
}

// 通过script标签引入Vue的环境
if (typeof window !== 'undefined' && window.Vue) {
  CoreEditor.install(window.Vue)
}
export default CoreEditor
