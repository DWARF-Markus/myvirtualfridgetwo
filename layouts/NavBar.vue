<template>
  <nav>
    <p>Nav bar</p>
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
  </nav>
</template>

<script>
export default {
  name: 'NavBar',
}
</script>

<style lang="scss" scoped>
nav {
  width: 100%;
}
</style>
