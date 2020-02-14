<template>
  <div id="app">
    <NavigationBar id="nav"></NavigationBar>
    <router-view/>
  </div>
</template>

<script>
// @ is an alias to /src
import NavigationBar from '@/components/NavigationBar.vue'

export default {
  name: 'app',
  components: {
    NavigationBar
  }
}
</script>

<style>
#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
