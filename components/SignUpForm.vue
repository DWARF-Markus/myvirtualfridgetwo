<template>
  <div>
    <p>Sign up</p>
    <input v-model="userEmail" type="email" placeholder="email" />
    <input v-model="userPassword" type="password" placeholder="password" />
    <button @click="handleSignup">Sign up</button>
  </div>
</template>

<script>
export default {
  name: 'SignUpForm',
  data() {
    return {
      userEmail: '',
      userPassword: '',
    }
  },
  methods: {
    async handleSignup() {
      try {
        await this.$fireAuth.createUserWithEmailAndPassword(
          this.userEmail,
          this.userPassword
        )
      } catch (e) {
        alert(e)
      }
    },
  },
}
</script>

<style lang="scss" scoped></style>
