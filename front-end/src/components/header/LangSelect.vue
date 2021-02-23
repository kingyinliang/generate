<template>
  <el-dropdown>
    <span class="lang" role="lang">{{ langFlag }}</span>
    <el-dropdown-menu slot="dropdown">
      <el-dropdown-item @click.native="SwitchLang('zh-CN')">
        <span role="img" aria-label="简体中文">🇨🇳</span> 简体中文
      </el-dropdown-item>
      <el-dropdown-item @click.native="SwitchLang('en-US')">
        <span role="img" aria-label="English">🇺🇸</span> English
      </el-dropdown-item>
    </el-dropdown-menu>
  </el-dropdown>
</template>

<script>
  import LangMixin from 'core/mixins/i18n'

  export default {
    name: "LangSelect",
    mixins: [LangMixin],
    computed: {
      langFlag(){
        switch (this.currentLang) {
          case 'zh-CN':
            return '🇨🇳'
          case 'en-US':
            return '🇺🇸'
          default:
            return '🇨🇳'
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
.lang{
  cursor: pointer;
  margin-right: 10px;
}
</style>
