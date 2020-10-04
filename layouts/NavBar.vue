<template>
  <nav>
    <div>
      <nuxt-link :to="'/'">Home</nuxt-link>
    </div>
    <div>
      <nuxt-link :to="'/shoppinglist'">Shopping List</nuxt-link>
    </div>
    <div>
      <nuxt-link :to="'/recipes'">Recipes</nuxt-link>
    </div>
    <div>
      <nuxt-link :to="'/login'">Login</nuxt-link>
    </div>
    <div>
      <nuxt-link :to="'/signup'">Sign Up</nuxt-link>
    </div>
    <div>
      <button @click="handleSignOut">Sign out</button>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'NavBar',
  methods: {
    handleSignOut() {
      this.$fireAuth
        .signOut()
        .then(function () {
          console.log('sign out succes')
        })
        .catch(() => (error) => {
          console.log('error', error)
        })
    },
  },
}
</script>

<style lang="scss" scoped>
nav {
  width: 100%;
  border: 2px solid lightcoral;
  padding: 10px;
  display: flex;

  div {
    margin: 10px;
  }
}
</style>
