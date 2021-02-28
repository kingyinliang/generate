import pageView from "./pageView";

export default {
  name: 'pageList',
  props: ['name', 'pages', 'addPage', 'setEditingPage'],
  methods:{
    setEditingPageFn(e, index){
      e.preventDefault();
      e.stopPropagation();
      this.hoverIndex = index
      this.setEditingPage(index)
    },
    updatePage(){}
  },
  data: () => ({
    activeName: 0,
    hoverIndex: 0,
  }),
  render(){
    return(
      <div class="page_manager">
        <el-collapse vModel={this.activeName}>
          {
            this.pages.map((page, index) => (
              <el-collapse-item name={index}>
                <template slot="title">
                  <div class={['page_card_title', this.hoverIndex === index && 'activeTitle']}
                       onClick={(e) => this.setEditingPageFn(e, index)}>
                    <div class="page_card_title_text">{`${this.name}${index + 1}`}</div>
                    <el-button type="text" icon="el-icon-edit" onClick={(e) => this.updatePage(e, index)}/>
                  </div>
                </template>
                <div>
                  <pageView page={page}/>
                </div>
              </el-collapse-item>
            ))
          }
        </el-collapse>
        <el-button class="addPage" type="primary" icon="el-icon-plus" size='mini'
                   onClick={() => this.addPage()}>添加{this.name}
        </el-button>
      </div>
    )
  }
}
