<template>
  <v-app>
    <div id="app">
      <Landing/>
    </div>
  </v-app>
</template>

<script>
import Landing from './components/Landing/Landing'

export default {
  name: 'App',
  components: {
    Landing
  }
}
</script>

<style lang="scss">
@import './styles/global';

#app {
  font-family: "Roboto", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  background-color: $dark-bg;
  min-height: 100vh;
}

body {
  margin: 0;
  min-height: 100vh;
}
</style>
