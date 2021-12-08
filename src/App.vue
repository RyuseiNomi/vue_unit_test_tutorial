<template>
  <div id="app">
    <NameTextArea />
  </div>
</template>

<script>
import NameTextArea from './components/NameTextArea.vue'

export default {
  name: 'App',
  components: {
    NameTextArea
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
