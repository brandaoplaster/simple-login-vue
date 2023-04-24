<template>
  <div id="app">
    <nav class="navbar navbar-dark bg-primary">
      <a href="/" class="navbar-brand">Simple login</a>
      <ul class="navbar-nav">
        <li class="nav-item">
          <router-link to="/home" class="nav-link">
            Home
          </router-link>
        </li>

        <li v-if="showDashboard" class="nav-item">
          <router-link to="/dashboard" class="nav-link">
            Dashboard
          </router-link>
        </li>
      </ul>

      <div v-if="!currentUser" class="navbar-nav ml-auto">
        <li class="nav-item">
          <router-link to="/login" class="nav-link">
            Login
          </router-link>
        </li>
      </div>

      <div v-if="currentUser" class="navbar-nav ml-auto">
        <li class="nav-item">
          <a class="nav-link" @click.prevent="logOut">
            LogOut
          </a>
        </li>
      </div>
    </nav>

    <div class="container">
      <router-view />
    </div>
  </div>
</template>

<script>
export default {
   data: () => ({}),
  computed: {
    currentUser() {
      if (this.$store.state.auth.user.data.id != null) {
        return true
      } else {
        return false
      }
    },
    showDashboard() {
      return this.currentUser
    }
  },
  methods: {
    logOut() {
      this.$store.dispatch('auth/logout');
      this.$router.push('/login');
    }
  }
};
</script>

<style>

</style>
