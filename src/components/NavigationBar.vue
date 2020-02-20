<template>
  <b-navbar sticky toggleable="md" type="light" variant="warning">
    <b-navbar-brand class="mx-auto" :to="{ name: 'Home' }">
      <b-img class="px-0 py-0" src="@/assets/logo.png" width="120" height="40"></b-img>
    </b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
        <b-nav-item :to="{ name: 'Cards' }">Cards</b-nav-item>
        <b-nav-item :to="{ name: 'Rivals' }">Rivals</b-nav-item>
        <b-nav-item :to="{ name: 'Fusions' }">Fusions</b-nav-item>
        <b-nav-item :to="{ name: 'Rituals' }">Rituals</b-nav-item>
        <b-nav-item :to="{ name: 'Equips' }">Equips</b-nav-item>
      </b-navbar-nav>       

      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">
          
        <template v-if="user">
          <b-nav-item-dropdown right>
            <template v-slot:button-content>
              <em>{{ user.username }}</em>
            </template>
            <b-dropdown-item :to="{ name: 'Profile' }">Profile</b-dropdown-item>
            <b-dropdown-item @click="logout({ name: 'Home'})">Logout</b-dropdown-item>
          </b-nav-item-dropdown>
        </template>

        <template v-else>
          <b-nav-item-dropdown right>
            <template v-slot:button-content>
              <em>User</em>
            </template>
            <b-dropdown-item :to="{ name: 'Login' }">Login</b-dropdown-item>
            <b-dropdown-item :to="{ name: 'Register' }">Register</b-dropdown-item>
          </b-nav-item-dropdown>
        </template>
          
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>

<script>
import { mapState, mapMutations, mapActions } from 'vuex'

export default {
  methods: {
    ...mapMutations(['setUser']),
    ...mapActions(['logout'])
  },
  
  computed: {
    ...mapState(['user']),
  },

  watch: {
    user: function(nUser){
        const redirect = (nUser) ? 'Profile' : 'Home'
        this.$router.push({ name: redirect })
    }
  }
}
</script>

<style scoped>
  #nav a {
    font-weight: bold;
    color: #2c3e50;
  }

  #nav a.router-link-exact-active {
    color: #42b983;
  }

  .navbar-toggler{
    position: absolute;
    right: 1rem;
    top: 12px;
  }
</style>