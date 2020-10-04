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

      await this.$fireAuth.onAuthStateChanged(function (user) {
        if (user) {
          console.log('logged in')
        } else {
          console.log('not logged in')
        }
      })
    },
  },
}
</script>

<style lang="scss" scoped></style>
