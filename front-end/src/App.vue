<template>
  <div id="app">
<!--    <el-button>111</el-button>-->
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  components:{
  },
  mounted() {
  }
}
</script>

<style lang="scss">
* {
  &:focus {
    outline: none;
  }
}

#app,body {
  margin: 0;
  padding: 0;
}
</style>
