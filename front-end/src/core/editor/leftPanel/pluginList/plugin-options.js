
export default {
  name: 'plugin-options',
  data:()=>({
    visible: false,
    isIndeterminate: false,
    checkAll: true,
    checkedData: [],
    pluginArr: [
      {
        title: '按钮',
        i18nTitle: {
          'en-US': 'Button',
          'zh-CN': '按钮'
        },
        icon: 'Kbutton',
        visible: true,
        name: 'k-button'
      },
      {
        title: '容器',
        i18nTitle: {
          'en-US': 'div',
          'zh-CN': '容器'
        },
        icon: 'Kdiv',
        visible: true,
        name: 'k-div'
      },
    ]
  }),
  mounted(){
    this.checkedData = this.pluginArr
    this.$emit('setPlugin', this.checkedData)
  },
  methods:{
    handleCheckAllChange(val){
      this.checkedData = val ? this.pluginArr : [];
      this.isIndeterminate = false;
    },
    handleCheckedChange(val){
      this.checkAll = val.length === this.pluginArr.length;
      this.isIndeterminate = val.length > 0 && val.length < this.pluginArr.length;
    },
    setPlugin(){
      this.$emit('setPlugin', this.checkedData)
      this.visible = false
    }
  },
  render(){
    return(
      <div>
        <el-button class='plugin-options_button' size='mini' onClick={() => this.visible = true}>配置组件列表</el-button>
        <el-dialog
          title="组件列表"
          visible={this.visible}
          {...{on: {'update:visible': val => {this.visible = val}}}}
        >
          <el-checkbox style="margin-bottom: 20px;" indeterminate={this.isIndeterminate} vModel={this.checkAll} onChange={this.handleCheckAllChange}>全选</el-checkbox>
          <el-checkbox-group vModel={this.checkedData} onChange={this.handleCheckedChange}>
            {
              this.pluginArr.map((item) => (
                <el-checkbox label={item}>{item.title}</el-checkbox>
              ))
            }
          </el-checkbox-group>
          <div style="text-align: right;">
            <el-button size="small" onClick={()=>this.visible = false}>取 消</el-button>
            <el-button type="primary" size="small" onClick={this.setPlugin}>确 定</el-button>
          </div>
        </el-dialog>
      </div>
    )
  }
}
