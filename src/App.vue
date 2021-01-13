<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
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
