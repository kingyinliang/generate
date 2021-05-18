<script type="text/jsx">
  import Header from '@/components/header/index'

  export default {
    name: 'work',
    components: {
      Header,
    },
    data() {
      return {
        MenuArr: [
          {
            label: '我的作品',
            i18nLabel: 'sidebar.myWorks',
            value: 'workManager',
            antIcon: 'el-icon-s-operation',
            key: '1',
            routerName: 'work-list'
          },
          // {
          //   label: '数据中心',
          //   i18nLabel: 'sidebar.dataCenter',
          //   value: 'dataCenter',
          //   antIcon: 'el-icon-s-data',
          //   key: '2',
          //   children: [
          //     {
          //       label: '基础数据',
          //       i18nLabel: 'sidebar.basicData',
          //       value: 'basicData',
          //       antIcon: 'el-icon-s-grid',
          //       key: '2-1',
          //       routerName: 'form-stat'
          //     }
          //   ]
          // },
          // {
          //   label: '模板中心',
          //   i18nLabel: 'sidebar.templateCenter',
          //   value: 'templateCenter',
          //   antIcon: 'el-icon-document',
          //   key: '3',
          //   children: [
          //     {
          //       label: '模板列表',
          //       i18nLabel: 'sidebar.freeTemplates',
          //       value: 'freeTemplates',
          //       antIcon: 'el-icon-s-grid',
          //       key: '3-1',
          //       routerName: 'work-manager-templates'
          //     }
          //   ]
          // },
          // {
          //   label: '商家中心',
          //   i18nLabel: 'sidebar.accountCenter',
          //   value: 'freeTemplate',
          //   antIcon: 'el-icon-s-custom',
          //   key: '4'
          // }
        ]
      }
    },
    methods: {
      renderSidebar(menus) {
        const renderLabel = menu =>
          menu.routerName ? (
            <router-link
              class="default-router-link"
              to={{name: menu.routerName}}
            >
              {this.$t(menu.i18nLabel)}
            </router-link>
          ) : (
            this.$t(menu.i18nLabel)
          )

        return menus.map(menu =>
          menu.children ? (
            <el-submenu index={menu.key}>
              <template slot="title">
                <em class={menu.antIcon}/>
                <span>{this.$t(menu.i18nLabel)}</span>
              </template>
              {this.renderSidebar(menu.children)}
            </el-submenu>
          ) : (
            <el-menu-item index={menu.key}>
              <em class={menu.antIcon}></em>
              <span>{renderLabel(menu)}</span>
            </el-menu-item>
          )
        )
      }
    },
    render() {
      return (
        <el-container style={{height: '100vh'}}>
          <el-header style="background-color: #031529;">
            <Header/>
          </el-header>
          <el-container>
            <el-aside width="160px" style="background: #fff">
              <el-menu
                default-active='1'
                style="height: 100%"
              >
                {this.renderSidebar(this.MenuArr)}
              </el-menu>
            </el-aside>
            <el-main style="padding: 24px">
              <router-view/>
            </el-main>
          </el-container>
        </el-container>
      )
    }
  }
</script>
<style>
  .default-router-link{
     color: rgba(0, 0, 0, 0.65);
  }
  .el-menu-item.is-active .default-router-link{
     color: #409EFF;
  }
</style>
