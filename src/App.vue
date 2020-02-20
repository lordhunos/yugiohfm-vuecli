<template>
  <div id="app">
    <NavigationBar></NavigationBar>
    <router-view/>
  </div>
</template>

<script>
// @ is an alias to /src
import { mapActions, mapState } from 'vuex'
import NavigationBar from '@/components/NavigationBar.vue'

export default {
  name: 'app',
  components: {
    NavigationBar
  },
  computed: {
    ...mapState(['user'])
  },
  methods: {
    ...mapActions(['login'])
  },
  created: async function() {
    const user = JSON.parse(localStorage.getItem('User'))
    const token = localStorage.getItem('Token')
    if(user && token){
      const data = { user, token }
      this.login(data)
    }
    //const response = await this.axios.get('/api/rivals')
    //console.log(response)
  }
}
</script>

<style>
  :root {
      --input-padding-x: 1rem;
      --input-padding-y: .35rem;
  }

  body {
      background: url("~@/assets/background.jpg") no-repeat center center fixed;
      background-size: cover;
      /* background-image: linear-gradient(to right, #f9d423 0%, #f83600 100%); */
  }
</style>
