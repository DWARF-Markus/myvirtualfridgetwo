<template>
  <nav class="nav">
    <div class="nav--desktop">
      <div class="nav__wrapper">
        <div class="nav__wrapper__logo">
          <img src="../assets/images/carrot.svg" />
          <p>
            My Virtual Fridge
            <span>2</span>
          </p>
        </div>
        <div class="nav__wrapper__items">
          <div class="nav__item">
            <nuxt-link :to="'/'">Home</nuxt-link>
          </div>
          <div class="nav__item" v-if="loggedIn">
            <nuxt-link :to="'/shoppinglist'">Shopping List</nuxt-link>
          </div>
          <div class="nav__item" v-if="loggedIn">
            <nuxt-link :to="'/recipes'">Recipes</nuxt-link>
          </div>
          <div class="nav__item" v-if="loggedIn">
            <button @click="handleSignOut">Sign out</button>
          </div>
          <div class="nav__item" v-if="!loggedIn">
            <nuxt-link :to="'/login'">Login</nuxt-link>
          </div>
          <div class="nav__item" v-if="!loggedIn">
            <nuxt-link :to="'/signup'">Sign Up</nuxt-link>
          </div>
        </div>
      </div>
    </div>
    <div class="nav__item"></div>
  </nav>
</template>

<script>
export default {
  name: 'NavBar',
  fetch({ store }) {
    store.commit('setUserLoggedOut')
  },
  computed: {
    loggedIn() {
      return this.$store.state.isUserLoggedIn
    },
  },
  methods: {
    handleSignOut() {
      this.$fireAuth
        .signOut()
        .then(() => {
          this.$store.commit('setUserLoggedOut')
        })
        .catch(() => (error) => {
          // eslint-disable-next-line no-console
          console.log('error', error)
        })
    },
  },
}
</script>

<style lang="scss" scoped>
@import '@/assets/styles/basics.scss';

.nav {
  width: 100%;
  background: $orange;

  &--desktop {
    display: flex;
  }
}

.nav__wrapper {
  display: grid;
  grid-template-columns: 1fr 1fr;
  width: 100%;
  align-items: center;
  height: 70px;

  &__logo {
    padding: 0 0.8rem;
    display: flex;
    align-items: center;

    img {
      width: 25px;
      margin-right: 7px;
    }

    p {
      color: $white;
      font-size: 11px;
      font-family: 'Roboto', sans-serif;
      font-weight: 100;

      span {
        @include heading-font;
      }
    }
  }

  &__items {
    display: flex;
    align-items: center;
    margin-left: auto;

    .nav__item {
      padding: 0 0.8rem;
      a {
        @include heading-font;
      }

      button {
        @include primary-btn;
      }
    }
  }
}
</style>
