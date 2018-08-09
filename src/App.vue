<template>
  <div id="app">
    <Landing/>
  </div>
</template>

<script>
  import 'bootstrap/dist/css/bootstrap.css'
  import 'bootstrap-vue/dist/bootstrap-vue.css'
  import Landing from './pages/Landing'

export default {
  name: 'app',
  components: {
    Landing
  }
}
</script>

<style lang="scss">
  @import url('https://fonts.googleapis.com/css?family=Roboto:300,400,500');
  
  body {
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
  }
</style>
