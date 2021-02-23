<template>
  <div class="header">
    <div class="logo">
      <router-link to="/">
        {{ $t('app.title') }}
      </router-link>
    </div>
    <div class="right">
      <div style="float: right;margin-left: 45px">
        <Lang-select/>
      </div>
      <div style="float: right">
        <slot name="headr_menu" />
      </div>
    </div>
  </div>
</template>

<script>
  import LangSelect from './LangSelect'

  export default {
    name: "index",
    components: {
      LangSelect
    }
  }
</script>

<style scoped lang="scss">
  .header{
    height: 60px;
    display: flex;
    align-items: center;
  }
  .logo {
    min-width: 120px;
    float: left;
    text-align: center;
    color: #409EFF;
    font-size: 16px;
  }
  .right{
    flex: 1;
    line-height: 60px;
  }

</style>
