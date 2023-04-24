<template>
  <div class="container">
    <header class="jumbotron">
      <h3>Welcome, you are on the dashboard and are logged in with {{currentUser.email}}</h3>
    </header>
  </div>
</template>


<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Dashboard",
  data() {
    return {
      content: "",
    };
  },
  computed: {
    currentUser() {
      return this.$store.state.auth.user.data;
    }
  },
    mounted() {
    if (!this.currentUser) {
      this.$router.push('/login');
    }
  }
};
</script>
