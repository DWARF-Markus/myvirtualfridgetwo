<template>
  <div>
    <p>Login form</p>
    <input v-model="userEmail" type="email" placeholder="email" />
    <input v-model="userPassword" type="password" placeholder="password" />
    <button @click="handleLogin">Login</button>
  </div>
</template>

<script>
export default {
  name: 'LoginForm',
  fetch({ store }) {
    store.commit('setUserLoggedIn')
  },
  data() {
    return {
      userEmail: '',
      userPassword: '',
    }
  },
  methods: {
    async handleLogin() {
      try {
        await this.$fireAuth.signInWithEmailAndPassword(
          this.userEmail,
          this.userPassword
        )
      } catch (e) {
        alert(e)
      }

      await this.$fireAuth.onAuthStateChanged((user) => {
        if (user) {
          this.$store.commit('setUserLoggedIn')
        }
      })
    },
  },
}
</script>

<style lang="scss" scoped></style>
