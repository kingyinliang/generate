import Vue from 'vue'
import Header from '@/components/header/index'
import HeaderMenu from '@/components/header/headerMenu'

import '@/assets/scss/editor.scss'

import EditorLeftPanel from 'core/editor/leftPanel'
import EditorRightPanel from 'core/editor/rightPanel'
import EditorCanvas from 'core/editor/canvas'
import FixedTools from 'core/editor/tools'
import DragLine from 'core/mixins/drag/drag_line.js'

window.EditorApp = new Vue() // event bus
const CoreEditor = {
  name: 'CoreEditor',
  components: {
    Header,
  },
  data() {
    return {
      width: 320
    }
  },
  render() {
    return (
      <el-container style={{height: '100vh'}}>
        <el-header style="background-color: #031529;">
          <Header>
            <HeaderMenu slot="headr_menu"/>
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
