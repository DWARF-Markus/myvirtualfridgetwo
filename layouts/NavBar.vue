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
          <div v-if="loggedIn" class="nav__item">
            <nuxt-link :to="'/shoppinglist'">Shopping List</nuxt-link>
          </div>
          <div v-if="loggedIn" class="nav__item">
            <nuxt-link :to="'/recipes'">Recipes</nuxt-link>
          </div>
          <div v-if="loggedIn" class="nav__item">
            <button @click="handleSignOut">Sign out</button>
          </div>
          <div v-if="!loggedIn" class="nav__item">
            <nuxt-link :to="'/signup'">Sign Up</nuxt-link>
          </div>
          <div v-if="!loggedIn" class="nav__item">
            <nuxt-link :to="'/login'">
              <button @click="handleSignOut">Login</button>
            </nuxt-link>
          </div>
        </div>
      </div>
    </div>
    <div class="nav__mobile">
      <div class="nav__mobile__wrapper">
        <div class="nav__wrapper__logo">
          <img src="../assets/images/carrot.svg" />
        </div>
        <div
          :class="{ 'nav__mobile__bars--open' : menuOpen }"
          class="nav__mobile__bars"
          @click="toggleMobileMenu"
        >
          <div class="bar1"></div>
          <div class="bar2"></div>
          <div class="bar3"></div>
        </div>
      </div>
      <div class="nav__mobile__items" :class="{ 'nav__mobile__items--open' : menuOpen }">
        <div class="nav__item">
          <nuxt-link :to="'/'">Home</nuxt-link>
        </div>
        <div v-if="loggedIn" class="nav__item">
          <nuxt-link :to="'/shoppinglist'">Shopping List</nuxt-link>
        </div>
        <div v-if="loggedIn" class="nav__item">
          <nuxt-link :to="'/recipes'">Recipes</nuxt-link>
        </div>
        <div v-if="loggedIn" class="nav__item">
          <button @click="handleSignOut">Sign out</button>
        </div>
        <div v-if="!loggedIn" class="nav__item">
          <nuxt-link :to="'/signup'">Sign Up</nuxt-link>
        </div>
        <div v-if="!loggedIn" class="nav__item">
          <nuxt-link :to="'/login'">
            <button @click="handleSignOut">Login</button>
          </nuxt-link>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'NavBar',
  fetch({ store }) {
    store.commit('setUserLoggedOut')
  },
  data() {
    return {
      menuOpen: false
    }
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
    toggleMobileMenu() {
      this.menuOpen = !this.menuOpen;
    }
  },
}
</script>

<style lang="scss" scoped>
@import '@/assets/styles/basics.scss';

.nav {
  width: 100%;
  background: $orange;
  max-height: 50px;

  &--desktop {
    display: none;
  }

  &--mobile {
    display: block;
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
        margin-top: -5px;
        margin-left: 4px;
        font-family: monospace, sans-serif;
        font-size: 18px;
        font-weight: 800;
        position: absolute;
      }
    }
  }

  &__items {
    display: flex;
    align-items: center;
    margin-left: auto;
    padding: 0 0.8rem;
  }
}

.nav__item {
  padding: 0 0.8rem;
  a {
    @include heading-font;
  }

  button {
    @include primary-btn;
  }
}

.nav__mobile {
  &__items {
    height: 0px;
    display: block;
    background-color: $orange;
    position: absolute;
    width: 100%;
    overflow: hidden;
    transition: 0.3s ease;

    div {
      padding: 0.8rem;
    }

    &--open {
      height: auto;
    }
  }
}

.nav__mobile__wrapper {
  height: 50px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;

  .nav__mobile__bars {
    margin-left: 0;
    display: grid;
    justify-content: right;
    padding: 0 0.8rem;
    .bar1,
    .bar2,
    .bar3 {
      width: 25px;
      height: 3px;
      background-color: white;
      margin: 2px 0;
      transition: 0.3s ease;
    }

    &--open {
      .bar1 {
        transform: rotate(45deg);
        margin-top: 12px;
      }
      .bar2 {
        transform: translate(3rem, 0);
      }
      .bar3 {
        transform: rotate(-45deg);
        margin-top: -12px;
      }
    }
  }
}

@media (min-width: 840px) {
  .nav {
    max-height: 70px;

    &--desktop {
      display: flex;
    }

    &--mobile {
      display: none;
    }
  }
}
</style>
